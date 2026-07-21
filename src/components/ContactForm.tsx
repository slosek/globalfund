"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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

    window.location.href = `mailto:info@globalfundreg.com?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink-muted">
          Name
          <input name="name" required autoComplete="name" className="mt-2 w-full border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors focus:border-violet" />
        </label>
        <label className="block text-sm font-semibold text-ink-muted">
          Email
          <input name="email" type="email" required autoComplete="email" className="mt-2 w-full border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors focus:border-violet" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-ink-muted">
        Company <span className="font-normal text-ink-faint">(optional)</span>
        <input name="company" autoComplete="organization" className="mt-2 w-full border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors focus:border-violet" />
      </label>
      <label className="block text-sm font-semibold text-ink-muted">
        How can we help?
        <textarea name="message" required rows={5} className="mt-2 w-full resize-y border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink outline-none transition-colors focus:border-violet" />
      </label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="inline-flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink-soft">
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
