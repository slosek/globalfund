"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/components/Analytics";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const mountedAt = useRef(Date.now());

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("website") || "");

    // Real visitors need time to read and complete the form. Silently absorb
    // submissions that fill the hidden field or fire immediately after mount.
    if (honeypot || Date.now() - mountedAt.current < 750) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          website: honeypot,
          startedAt: mountedAt.current,
        }),
      });

      if (!response.ok) throw new Error("Contact form submission failed.");

      trackEvent("generate_lead", {
        method: "website_contact_form",
        form_name: "website_inquiry",
      });
      form.reset();
      mountedAt.current = Date.now();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-muted">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className="field mt-2" />
        </label>
        <label className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-muted">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="field mt-2" />
        </label>
      </div>
      <label className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-muted">
        Company <span className="font-normal normal-case tracking-normal text-ink-faint">(optional)</span>
        <input name="company" maxLength={160} autoComplete="organization" className="field mt-2" />
      </label>
      <label className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-muted">
        How can we help?
        <textarea name="message" required maxLength={3000} rows={5} className="field mt-2 resize-y" />
      </label>
      <div className="flex flex-col gap-5 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <button disabled={status === "submitting"} type="submit" className="group inline-flex w-fit items-center gap-4 rounded-full bg-ink px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white transition-colors hover:bg-ink-soft disabled:cursor-wait disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send inquiry"} <span aria-hidden="true">→</span>
        </button>
        <p className="max-w-xs text-xs leading-5 text-ink-faint">
          Sent securely to our team and protected against automated submissions.
        </p>
      </div>
      {status === "success" && (
        <p role="status" className="rounded-xl bg-moss/10 px-4 py-3 text-sm text-moss">
          Thank you. Your inquiry has been sent, and our team will follow up directly.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-coral/10 px-4 py-3 text-sm text-coral">
          We could not send your inquiry. Please email <a className="underline" href="mailto:info@globalfundreg.com">info@globalfundreg.com</a> directly.
        </p>
      )}
    </form>
  );
}
