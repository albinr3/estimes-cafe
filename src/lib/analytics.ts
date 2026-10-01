"use client";

export type AnalyticsEventName =
  | "order_platform_click"
  | "click_call"
  | "contact_email_intent"
  | "contact_form_submit";

type AnalyticsParameters = Record<string, string>;

declare global {
  interface Window {
    gtag?: (command: "event", name: AnalyticsEventName, parameters: AnalyticsParameters) => void;
  }
}

export function trackAnalyticsEvent(
  name: AnalyticsEventName,
  parameters: AnalyticsParameters = {},
) {
  window.gtag?.("event", name, {
    ...parameters,
    page_path: window.location.pathname,
  });
}
