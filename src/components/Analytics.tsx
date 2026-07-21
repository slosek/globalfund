"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type TrackingParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "event", eventName: string, parameters?: TrackingParameters) => void;
  }
}

export function trackEvent(eventName: string, parameters: TrackingParameters = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(command, name, values) {
      window.dataLayer?.push([command, name, values]);
    };
  window.gtag("event", eventName, parameters);
}

export default function Analytics() {
  const pathname = usePathname();
  const initialPageView = useRef(true);

  useEffect(() => {
    if (initialPageView.current) {
      initialPageView.current = false;
      return;
    }

    trackEvent("page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    const handleContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      if (link.href.startsWith("tel:")) {
        trackEvent("click_to_call", {
          link_url: link.href,
          link_text: link.textContent?.trim(),
        });
      } else if (link.href.startsWith("mailto:")) {
        trackEvent("email_click", {
          link_url: link.href.split("?")[0],
          link_text: link.textContent?.trim(),
        });
      }
    };

    document.addEventListener("click", handleContactClick, true);
    return () => document.removeEventListener("click", handleContactClick, true);
  }, []);

  return null;
}
