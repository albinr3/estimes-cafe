"""Property-scoped Google Analytics Admin MCP for Estime's Café.

The Google Analytics MCP maintained by Google only reads data. This companion
server exposes the few Admin API mutations needed by this project. It never
accepts a property ID from a caller and never returns credential material.
"""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path

from google.analytics.admin import AnalyticsAdminServiceClient
from google.oauth2 import service_account
from google.protobuf.field_mask_pb2 import FieldMask
from google.protobuf.json_format import MessageToDict
from mcp.server.fastmcp import FastMCP


PROPERTY = "properties/556917509"
STREAM = f"{PROPERTY}/dataStreams/15896458793"
MEASUREMENT_ID = "G-WZTNVR2FKQ"
ACCOUNT_EMAIL = "ga-mcp-reader@dukesteak.iam.gserviceaccount.com"
DEFAULT_CREDENTIALS = (
    Path.home() / ".config" / "codex-seo" / "service_account.json"
)
AUDIT_PATH = Path(__file__).with_name("ga4-admin-changes.jsonl")

mcp = FastMCP("Estime GA4 Admin")


def _client() -> AnalyticsAdminServiceClient:
    path = Path(os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", DEFAULT_CREDENTIALS))
    credentials = service_account.Credentials.from_service_account_file(
        str(path), scopes=["https://www.googleapis.com/auth/analytics.edit"]
    )
    if credentials.service_account_email != ACCOUNT_EMAIL:
        raise ValueError("Unexpected service account; GA4 administration stopped")
    return AnalyticsAdminServiceClient(credentials=credentials)


def _retention(settings: object) -> dict:
    return {
        "event_data_retention": settings.event_data_retention.name,
        "user_data_retention": settings.user_data_retention.name,
        "reset_user_data_on_new_activity": settings.reset_user_data_on_new_activity,
    }


def _attribution(settings: object) -> dict:
    return {
        "reporting_attribution_model": settings.reporting_attribution_model.name,
        "acquisition_lookback": settings.acquisition_conversion_event_lookback_window.name,
        "other_lookback": settings.other_conversion_event_lookback_window.name,
        "ads_export_scope": settings.ads_web_conversion_data_export_scope.name,
    }


def _audit(action: str, before: dict, after: dict) -> None:
    AUDIT_PATH.parent.mkdir(parents=True, exist_ok=True)
    record = {
        "at": datetime.now(timezone.utc).isoformat(),
        "property": PROPERTY,
        "action": action,
        "before": before,
        "after": after,
    }
    with AUDIT_PATH.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(record, ensure_ascii=False) + "\n")


@mcp.tool()
def read_configuration() -> dict:
    """Read Estime's GA4 settings without exposing secrets or other properties."""
    client = _client()
    prop = client.get_property(name=PROPERTY)
    stream = client.get_data_stream(name=STREAM)
    retention = client.get_data_retention_settings(
        name=f"{PROPERTY}/dataRetentionSettings"
    )
    attribution = client.get_attribution_settings(
        name=f"{PROPERTY}/attributionSettings"
    )
    enhanced = client.get_enhanced_measurement_settings(
        name=f"{STREAM}/enhancedMeasurementSettings"
    )
    return {
        "property": prop.name,
        "display_name": prop.display_name,
        "time_zone": prop.time_zone,
        "stream": stream.name,
        "measurement_id": stream.web_stream_data.measurement_id,
        "retention": _retention(retention),
        "attribution": _attribution(attribution),
        "enhanced_measurement": {
            "enabled": enhanced.stream_enabled,
            "outbound_clicks": enhanced.outbound_clicks_enabled,
            "form_interactions": enhanced.form_interactions_enabled,
            "page_changes": enhanced.page_changes_enabled,
        },
        "key_events": [
            {"name": x.event_name, "deletable": x.deletable}
            for x in client.list_key_events(parent=PROPERTY)
        ],
        "custom_dimensions": [
            {"parameter": x.parameter_name, "display_name": x.display_name}
            for x in client.list_custom_dimensions(parent=PROPERTY)
        ],
        "audiences": [
            {
                "name": x.name,
                "display_name": x.display_name,
                "membership_days": x.membership_duration_days,
                "filter_clauses": MessageToDict(
                    x._pb, preserving_proto_field_name=True
                ).get("filter_clauses", []),
            }
            for x in client.list_audiences(parent=PROPERTY)
        ],
    }


@mcp.tool()
def set_retention_14_months() -> dict:
    """Set Estime's event and user retention to 14 months; verify by reading back."""
    client = _client()
    name = f"{PROPERTY}/dataRetentionSettings"
    current = client.get_data_retention_settings(name=name)
    before = _retention(current)
    if before["event_data_retention"] != "FOURTEEN_MONTHS" or before[
        "user_data_retention"
    ] != "FOURTEEN_MONTHS":
        current.event_data_retention = "FOURTEEN_MONTHS"
        current.user_data_retention = "FOURTEEN_MONTHS"
        client.update_data_retention_settings(
            data_retention_settings=current,
            update_mask=FieldMask(paths=["event_data_retention", "user_data_retention"]),
        )
    after = _retention(client.get_data_retention_settings(name=name))
    if after["event_data_retention"] != "FOURTEEN_MONTHS" or after[
        "user_data_retention"
    ] != "FOURTEEN_MONTHS":
        raise RuntimeError("GA4 did not confirm 14-month retention")
    if before != after:
        _audit("set_retention_14_months", before, after)
    return {"before": before, "after": after}


@mcp.tool()
def ensure_event_dimension(parameter: str, display_name: str) -> dict:
    """Register an approved event parameter for Estime's reports."""
    if parameter not in {"platform", "contact_type"}:
        raise ValueError("Only platform and contact_type are approved")
    if not display_name or len(display_name) > 82:
        raise ValueError("Invalid display name")
    client = _client()
    existing = next(
        (x for x in client.list_custom_dimensions(parent=PROPERTY) if x.parameter_name == parameter),
        None,
    )
    if existing:
        return {"status": "already_exists", "name": existing.name}
    created = client.create_custom_dimension(
        parent=PROPERTY,
        custom_dimension={
            "parameter_name": parameter,
            "display_name": display_name,
            "description": "Estime website interaction detail",
            "scope": "EVENT",
        },
    )
    verified = client.get_custom_dimension(name=created.name)
    after = {"name": verified.name, "parameter": verified.parameter_name, "display_name": verified.display_name}
    _audit("ensure_event_dimension", {}, after)
    return {"status": "created", **after}


@mcp.tool()
def ensure_intent_key_event(event_name: str) -> dict:
    """Mark a validated intent event as a key event, once per session."""
    if event_name not in {"order_platform_click", "click_call"}:
        raise ValueError("Event is not approved as an intent key event")
    client = _client()
    existing = next(
        (x for x in client.list_key_events(parent=PROPERTY) if x.event_name == event_name),
        None,
    )
    if existing:
        return {"status": "already_exists", "name": existing.name}
    created = client.create_key_event(
        parent=PROPERTY,
        key_event={"event_name": event_name, "counting_method": "ONCE_PER_SESSION"},
    )
    verified = client.get_key_event(name=created.name)
    after = {"name": verified.name, "event_name": verified.event_name, "counting_method": verified.counting_method.name}
    _audit("ensure_intent_key_event", {}, after)
    return {"status": "created", **after}


@mcp.tool()
def ensure_event_audience(display_name: str, event_name: str, membership_days: int = 90) -> dict:
    """Create an audience of people who triggered an approved Estime event."""
    if event_name not in {"order_platform_click", "click_call"}:
        raise ValueError("Audience event is not approved")
    if not 1 <= membership_days <= 540:
        raise ValueError("membership_days must be between 1 and 540")
    client = _client()
    existing = next(
        (x for x in client.list_audiences(parent=PROPERTY) if x.display_name == display_name),
        None,
    )
    if existing:
        return {"status": "already_exists", "name": existing.name}
    audience = {
        "display_name": display_name,
        "description": f"Estime visitors who triggered {event_name}",
        "membership_duration_days": membership_days,
        "filter_clauses": [{
            "clause_type": "INCLUDE",
            "simple_filter": {
                "scope": "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS",
                "filter_expression": {
                    "and_group": {"filter_expressions": [{
                        "or_group": {"filter_expressions": [{
                            "event_filter": {"event_name": event_name}
                        }]}
                    }]}
                },
            },
        }],
    }
    created = client.create_audience(parent=PROPERTY, audience=audience)
    verified = client.get_audience(name=created.name)
    after = {"name": verified.name, "display_name": verified.display_name, "membership_days": verified.membership_duration_days}
    _audit("ensure_event_audience", {}, after)
    return {"status": "created", **after}


def _event_expression(event_name: str, page_path: str | None = None) -> dict:
    event_filter: dict = {"event_name": event_name}
    if page_path is not None:
        event_filter["event_parameter_filter_expression"] = {
            "and_group": {"filter_expressions": [{
                "or_group": {"filter_expressions": [{
                    "dimension_or_metric_filter": {
                        "field_name": "pagePath",
                        "string_filter": {"match_type": "EXACT", "value": page_path},
                        "at_any_point_in_time": True,
                    }
                }]}
            }]}
        }
    return {"event_filter": event_filter}


def _ensure_named_audience(
    display_name: str, description: str, membership_days: int, events: list[dict]
) -> dict:
    """Create a fixed Estime segment and verify its immutable criteria."""
    client = _client()
    audience = {
        "display_name": display_name,
        "description": description,
        "membership_duration_days": membership_days,
        "filter_clauses": [{
            "clause_type": "INCLUDE",
            "simple_filter": {
                "scope": "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS",
                "filter_expression": {
                    "and_group": {"filter_expressions": [{
                        "or_group": {"filter_expressions": events}
                    }]}
                },
            },
        }],
    }
    existing = next(
        (x for x in client.list_audiences(parent=PROPERTY) if x.display_name == display_name),
        None,
    )
    if existing:
        actual = MessageToDict(existing._pb, preserving_proto_field_name=True)
        if (
            existing.membership_duration_days != membership_days
            or actual.get("filter_clauses") != audience["filter_clauses"]
        ):
            raise ValueError(f"Existing audience {display_name} has different criteria")
        return {"status": "already_exists", "name": existing.name}
    created = client.create_audience(parent=PROPERTY, audience=audience)
    verified = client.get_audience(name=created.name)
    actual = MessageToDict(verified._pb, preserving_proto_field_name=True)
    if (
        verified.display_name != display_name
        or verified.membership_duration_days != membership_days
        or actual.get("filter_clauses") != audience["filter_clauses"]
    ):
        raise RuntimeError(f"GA4 did not confirm the criteria for {display_name}")
    after = {
        "name": verified.name,
        "display_name": verified.display_name,
        "membership_days": verified.membership_duration_days,
        "filter_clauses": actual["filter_clauses"],
    }
    _audit("ensure_named_audience", {}, after)
    return {"status": "created", **after}


@mcp.tool()
def ensure_website_visitors_audience(membership_days: int) -> dict:
    """Create Estime website-visitor audiences for 30, 90, or 180 days."""
    if membership_days not in {30, 90, 180}:
        raise ValueError("Website visitors audience must be 30, 90, or 180 days")
    return _ensure_named_audience(
        f"Website visitors - {membership_days} days",
        f"Visitors who viewed a page on Estime's website in the last {membership_days} days",
        membership_days,
        [_event_expression("page_view")],
    )


@mcp.tool()
def ensure_page_interest_audience(page_key: str, membership_days: int = 0) -> dict:
    """Create a fixed page-interest segment for an Estime offering."""
    pages = {
        "menu": ("Menu visitors", "/menu/", 30),
        "order": ("Order page visitors", "/order-online/", 30),
        "catering": ("Catering visitors", "/catering/", 90),
        "private_events": ("Private events visitors", "/private-events/", 90),
    }
    if page_key not in pages:
        raise ValueError("Use menu, order, catering, or private_events")
    label, page_path, default_days = pages[page_key]
    if membership_days == 0:
        membership_days = default_days
    if membership_days not in {default_days, 180}:
        raise ValueError(f"{page_key} audience must be {default_days} or 180 days")
    display_name = f"{label} - {membership_days} days"
    return _ensure_named_audience(
        display_name,
        f"Visitors who viewed Estime's {page_path} page",
        membership_days,
        [_event_expression("page_view", page_path)],
    )


@mcp.tool()
def ensure_order_intent_audience(membership_days: int = 90) -> dict:
    """Create an Estime order-platform-click audience for 90 or 180 days."""
    if membership_days not in {90, 180}:
        raise ValueError("Order intent audience must be 90 or 180 days")
    return _ensure_named_audience(
        f"Order intent - {membership_days} days",
        "Visitors who clicked an Estime order-platform link; purchase unverified",
        membership_days,
        [_event_expression("order_platform_click")],
    )


@mcp.tool()
def ensure_contact_intent_audience(membership_days: int = 90) -> dict:
    """Create a segment for visitors who clicked call or started an email."""
    if membership_days not in {90, 180}:
        raise ValueError("Contact intent audience must be 90 or 180 days")
    return _ensure_named_audience(
        f"Contact intent - {membership_days} days",
        "Visitors who clicked a telephone link or opened an email to Estime; delivery unverified",
        membership_days,
        [_event_expression("click_call"), _event_expression("contact_email_intent")],
    )


def _dimension_is(field_name: str, value: str, match_type: str = "EXACT") -> dict:
    return {
        "dimension_or_metric_filter": {
            "field_name": field_name,
            "string_filter": {"match_type": match_type, "value": value},
            "at_any_point_in_time": True,
        }
    }


def _and(*expressions: dict) -> dict:
    return {"and_group": {"filter_expressions": list(expressions)}}


def _or(*expressions: dict) -> dict:
    return {"or_group": {"filter_expressions": list(expressions)}}


PLANNED_AUDIENCES = {
    "organic_search": (
        "Organic Search Visitors - 90 days",
        "Users with an Organic Search session on Estime's website",
        "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
        _and(_or(_dimension_is("sessionDefaultChannelGroup", "Organic Search"))),
    ),
    "google_organic_gbp": (
        "Google Organic + GBP Visitors - 90 days",
        "Google organic sessions, including legacy GBP post links",
        "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
        _and(
            _or(_dimension_is("sessionMedium", "organic")),
            _or(_dimension_is("sessionSource", "google"), _dimension_is("sessionSource", "google_business_profile")),
            _or(_dimension_is("sessionSource", "google"), _dimension_is("sessionCampaignName", "gbp_post")),
        ),
    ),
    "gbp": (
        "GBP Website Visitors - 90 days",
        "GBP profile and post sessions, including legacy post links",
        "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION",
        _and(
            _or(_dimension_is("sessionMedium", "organic")),
            _or(_dimension_is("sessionSource", "google"), _dimension_is("sessionSource", "google_business_profile")),
            _or(_dimension_is("sessionCampaignName", "gbp", "BEGINS_WITH")),
            _or(_dimension_is("sessionSource", "google"), _dimension_is("sessionCampaignName", "gbp_post")),
        ),
    ),
    "high_intent": (
        "High Intent Visitors - 90 days",
        "Viewed menu, ordering, catering, private events, or contact; intent only",
        "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS",
        _and(_or(*[
            _event_expression("page_view", path)
            for path in ("/menu/", "/order-online/", "/catering/", "/private-events/", "/contact/")
        ])),
    ),
    "order_or_contact_intent": (
        "Order or Contact Intent - 90 days",
        "Clicked order, phone, or email; completion unverified",
        "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS",
        _and(_or(*[
            _event_expression(event)
            for event in ("order_platform_click", "click_call", "contact_email_intent")
        ])),
    ),
}

SUPERSEDED_AUDIENCE_NAMES = {
    "Website visitors - 30 days",
    "Website visitors - 90 days",
    "Menu visitors - 30 days",
    "Order page visitors - 30 days",
    "Catering visitors - 90 days",
    "Private events visitors - 90 days",
    "Order intent - 90 days",
    "Contact intent - 90 days",
}

REQUIRED_180_AUDIENCE_NAMES = {
    "Website visitors - 180 days",
    "Menu visitors - 180 days",
    "Order page visitors - 180 days",
    "Catering visitors - 180 days",
    "Private events visitors - 180 days",
    "Order intent - 180 days",
    "Contact intent - 180 days",
}


def _planned_audience_payload(key: str) -> dict:
    if key not in PLANNED_AUDIENCES:
        raise ValueError(f"Unknown planned audience: {key}")
    name, description, scope, expression = PLANNED_AUDIENCES[key]
    return {
        "display_name": name,
        "description": description,
        "membership_duration_days": 90,
        "filter_clauses": [{
            "clause_type": "INCLUDE",
            "simple_filter": {"scope": scope, "filter_expression": expression},
        }],
    }


def _verify_planned_audience(audience: object, payload: dict) -> None:
    actual = MessageToDict(audience._pb, preserving_proto_field_name=True)
    if (
        audience.display_name != payload["display_name"]
        or audience.membership_duration_days != 90
        or actual.get("filter_clauses") != payload["filter_clauses"]
    ):
        raise RuntimeError(f"GA4 audience criteria differ: {payload['display_name']}")


@mcp.tool()
def ensure_planned_audience(key: str) -> dict:
    """Create one of five approved 90-day Estime audiences and verify its filters."""
    payload = _planned_audience_payload(key)
    client = _client()
    existing = next(
        (x for x in client.list_audiences(parent=PROPERTY) if x.display_name == payload["display_name"]),
        None,
    )
    if existing:
        _verify_planned_audience(existing, payload)
        return {"status": "already_exists", "name": existing.name, "display_name": existing.display_name}
    created = client.create_audience(parent=PROPERTY, audience=payload)
    verified = client.get_audience(name=created.name)
    _verify_planned_audience(verified, payload)
    after = MessageToDict(verified._pb, preserving_proto_field_name=True)
    _audit("ensure_planned_audience", {}, after)
    return {"status": "created", "name": verified.name, "display_name": verified.display_name}


@mcp.tool()
def archive_superseded_audience(display_name: str) -> dict:
    """Archive one approved redundant audience after all replacements are verified."""
    if display_name not in SUPERSEDED_AUDIENCE_NAMES:
        raise ValueError("Audience is not approved for archiving")
    client = _client()
    audiences = list(client.list_audiences(parent=PROPERTY))
    by_name = {x.display_name: x for x in audiences}
    if not REQUIRED_180_AUDIENCE_NAMES <= set(by_name):
        raise RuntimeError("One or more required 180-day audiences are missing")
    if any(by_name[name].membership_duration_days != 180 for name in REQUIRED_180_AUDIENCE_NAMES):
        raise RuntimeError("A required 180-day audience has a different duration")
    for key in PLANNED_AUDIENCES:
        payload = _planned_audience_payload(key)
        replacement = by_name.get(payload["display_name"])
        if replacement is None:
            raise RuntimeError(f"Replacement audience missing: {payload['display_name']}")
        _verify_planned_audience(replacement, payload)
    target = by_name.get(display_name)
    if target is None:
        return {"status": "already_archived", "display_name": display_name}
    before = MessageToDict(client.get_audience(name=target.name)._pb, preserving_proto_field_name=True)
    client.archive_audience(request={"name": target.name})
    if any(x.name == target.name for x in client.list_audiences(parent=PROPERTY)):
        raise RuntimeError(f"GA4 still lists archived audience {display_name}")
    _audit("archive_superseded_audience", before, {})
    return {"status": "archived", "name": target.name, "display_name": display_name}


@mcp.tool()
def set_attribution_model(model: str) -> dict:
    """Set Estime's reporting model without changing its lookback windows."""
    models = {
        "data_driven": "PAID_AND_ORGANIC_CHANNELS_DATA_DRIVEN",
        "last_click": "PAID_AND_ORGANIC_CHANNELS_LAST_CLICK",
    }
    if model not in models:
        raise ValueError("Use data_driven or last_click")
    client = _client()
    name = f"{PROPERTY}/attributionSettings"
    current = client.get_attribution_settings(name=name)
    before = _attribution(current)
    if before["reporting_attribution_model"] != models[model]:
        current.reporting_attribution_model = models[model]
        client.update_attribution_settings(
            attribution_settings=current,
            update_mask=FieldMask(paths=["reporting_attribution_model"]),
        )
    after = _attribution(client.get_attribution_settings(name=name))
    if after["reporting_attribution_model"] != models[model]:
        raise RuntimeError("GA4 did not confirm the attribution model")
    if before != after:
        _audit("set_attribution_model", before, after)
    return {"before": before, "after": after}


if __name__ == "__main__":
    mcp.run(transport="stdio")
