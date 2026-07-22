"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/components/Analytics";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  const mountedAt = useRef(Date.now());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const honeypot = String(data.get("website") || "");

    // Real visitors need time to read and complete the form. Silently absorb
    // submissions that fill the hidden field or fire immediately after mount.
    if (honeypot || Date.now() - mountedAt.current < 750) {
      setOpened(true);
      return;
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, company ? `Company: ${company}` : "", "", message]
        .filter(Boolean)
        .join("\n")
    );

    trackEvent("generate_lead", {
      method: "contact_form_email_draft",
      form_name: "website_inquiry",
    });
    window.location.href = `mailto:info@globalfundreg.com?subject=${subject}&body=${body}`;
    setOpened(true);
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
        <button type="submit" className="group inline-flex w-fit items-center gap-4 rounded-full bg-ink px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white transition-colors hover:bg-ink-soft">
          Open email draft <span aria-hidden="true">↗</span>
        </button>
        <p className="max-w-xs text-xs leading-5 text-ink-faint">
          This opens your email app. No information is stored on this website.
        </p>
      </div>
      {opened && (
        <p role="status" className="rounded-xl bg-moss/10 px-4 py-3 text-sm text-moss">
          Your email draft should now be open. If it did not launch, email info@globalfundreg.com directly.
        </p>
      )}
    </form>
  );
}
