"use client";

import { useEffect, useRef } from "react";

export default function Listings() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const params = new URLSearchParams(window.location.search);
    const pid = params.get("property");

    const onLoad = () => {
      iframe.contentWindow?.postMessage(
        { type: "cre-init", propertyId: pid ? parseInt(pid) : null },
        "*"
      );
    };

    const onMessage = (e: MessageEvent) => {
      if (!e.data || typeof e.data.type !== "string") return;
      if (e.data.type === "cre-listings-resize") {
        iframe.style.height = e.data.height + "px";
      }
      if (e.data.type === "cre-nav-property") {
        const url = new URL(window.location.href);
        if (e.data.propertyId) {
          url.searchParams.set("property", e.data.propertyId);
        } else {
          url.searchParams.delete("property");
        }
        history.replaceState(null, "", url.toString());
      }
      if (e.data.type === "cre-copy-link") {
        navigator.clipboard.writeText(e.data.url).catch(() => {});
      }
      if (e.data.type === "cre-share-email") {
        window.location.href =
          "mailto:?subject=" +
          encodeURIComponent(e.data.subject) +
          "&body=" +
          encodeURIComponent(e.data.body);
      }
    };

    iframe.addEventListener("load", onLoad);
    window.addEventListener("message", onMessage);
    return () => {
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-coral/[0.04] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium stagger-1">
              Property Listings
            </span>

            <h1 className="mt-8 font-display text-hero font-extrabold text-ink stagger-2">
              Available<br /><span className="text-electric">properties.</span>
            </h1>

            <p className="mt-6 text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg stagger-3">
              Explore our portfolio of premier commercial properties across
              Phoenix, Fort Lauderdale, and Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* ══ LISTINGS EMBED ══ */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <iframe
            ref={iframeRef}
            id="cre-listings"
            src="http://localhost:5173/listings/slosek/embed?mode=grid"
            width="100%"
            height={900}
            style={{ border: "none", borderRadius: "8px" }}
            title="Property Listings"
          />
        </div>
      </section>
    </>
  );
}
