"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

const ORDER_PLATFORMS = new Set(["doordash", "ubereats", "grubhub"]);

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const platform = link.dataset.orderPlatform;
      if (platform && ORDER_PLATFORMS.has(platform)) {
        trackAnalyticsEvent("order_platform_click", { platform });
      } else if (link.protocol === "tel:") {
        trackAnalyticsEvent("click_call");
      } else if (link.protocol === "mailto:") {
        trackAnalyticsEvent("contact_email_intent", { contact_type: "email_link" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
