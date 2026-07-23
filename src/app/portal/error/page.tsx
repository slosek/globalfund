import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portal Sign-in Error",
  robots: { index: false, follow: false, nocache: true },
};

export default function PortalErrorPage() {
  return (
    <section className="flex min-h-screen items-center bg-stone-50 px-5 pb-20 pt-[105px] sm:px-8">
      <div className="mx-auto w-full max-w-2xl rounded-[2rem] border border-ink/10 bg-white p-8 text-center shadow-float sm:p-12">
        <div className="spectrum-line mx-auto h-1 w-20 rounded-full" />
        <p className="eyebrow mt-9">Secure client portal</p>
        <h1 className="mt-7 font-display text-5xl leading-[0.9] text-ink sm:text-6xl">We couldn&apos;t complete sign-in.</h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ink-muted">
          Use the same email address that received your Global Fund invitation. If the problem continues, our team can verify your access.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/portal" className="rounded-full bg-ink px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white hover:bg-ink-soft">Try again</Link>
          <a href="mailto:info@globalfundreg.com?subject=Client%20portal%20sign-in" className="rounded-full border border-ink/15 px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink hover:border-ink/30">Contact support</a>
        </div>
      </div>
    </section>
  );
}
