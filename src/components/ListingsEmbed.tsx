"use client";

import { useEffect, useRef } from "react";

const EMBED_ORIGIN = "https://www.crebuilder.com";
const EMBED_URL = `${EMBED_ORIGIN}/listings/a391f398-0d28-485c-8ab5-422c6cb062e5/embed?mode=grid`;

export default function ListingsEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const propertyParam = new URLSearchParams(window.location.search).get("property");
    const parsedPropertyId = propertyParam ? Number.parseInt(propertyParam, 10) : null;
    const propertyId = Number.isFinite(parsedPropertyId) ? parsedPropertyId : null;

    const postInit = () => {
      iframe.contentWindow?.postMessage(
        { type: "cre-init", propertyId },
        EMBED_ORIGIN
      );
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== EMBED_ORIGIN || event.source !== iframe.contentWindow) return;
      if (!event.data || typeof event.data.type !== "string") return;

      if (event.data.type === "cre-listings-resize" && Number.isFinite(event.data.height)) {
        iframe.style.height = `${event.data.height}px`;
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

    iframe.addEventListener("load", postInit);
    window.addEventListener("message", handleMessage);
    return () => {
      iframe.removeEventListener("load", postInit);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={EMBED_URL}
      title="Property Listings"
      width="100%"
      height={900}
      frameBorder={0}
      loading="eager"
      className="w-full bg-white"
      style={{ border: "none", borderRadius: "8px" }}
    />
  );
}
