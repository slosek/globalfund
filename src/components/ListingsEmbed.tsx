"use client";

import { useEffect, useRef } from "react";

const EMBED_ORIGIN = "https://app.creretailmaps.com";
const EMBED_URL = `${EMBED_ORIGIN}/listings/slosek/embed?mode=grid`;

export default function ListingsEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const propertyParam = new URLSearchParams(window.location.search).get("property");
    const parsedPropertyId = propertyParam ? Number.parseInt(propertyParam, 10) : null;
    const propertyId = Number.isFinite(parsedPropertyId) ? parsedPropertyId : null;

    const handleLoad = () => {
      iframe.contentWindow?.postMessage(
        { type: "cre-init", propertyId },
        EMBED_ORIGIN
      );
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== EMBED_ORIGIN || event.source !== iframe.contentWindow) return;
      if (!event.data || typeof event.data.type !== "string") return;

      if (event.data.type === "cre-listings-resize" && Number.isFinite(event.data.height)) {
        iframe.style.height = `${Math.min(Math.max(event.data.height, 700), 5000)}px`;
      }

      if (event.data.type === "cre-nav-property") {
        const url = new URL(window.location.href);
        if (event.data.propertyId) url.searchParams.set("property", String(event.data.propertyId));
        else url.searchParams.delete("property");
        window.history.replaceState(null, "", url.toString());
      }

      if (event.data.type === "cre-copy-link" && typeof event.data.url === "string") {
        navigator.clipboard.writeText(event.data.url).catch(() => undefined);
      }

      if (
        event.data.type === "cre-share-email" &&
        typeof event.data.subject === "string" &&
        typeof event.data.body === "string"
      ) {
        window.location.href = `mailto:?subject=${encodeURIComponent(event.data.subject)}&body=${encodeURIComponent(event.data.body)}`;
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);
    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={EMBED_URL}
      title="Global Fund commercial property listings"
      width="100%"
      height={1100}
      loading="eager"
      className="min-h-[700px] w-full rounded-2xl border border-ink/10 bg-white shadow-soft"
    />
  );
}
