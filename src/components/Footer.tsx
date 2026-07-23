import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grain overflow-hidden bg-ink text-white">
      <div className="spectrum-line h-1 w-full" />
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow !text-white/45">Begin the conversation</p>
            <p className="mt-7 max-w-4xl font-display text-[clamp(3.7rem,7.2vw,7.5rem)] leading-[0.86] tracking-[-0.045em] text-white">
              Let&apos;s make the next move <span className="spectrum-text italic">valuable.</span>
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pb-2">
            <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-stone-100">
              Talk with our team <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo.png" alt="Global Fund Real Estate Group" width={800} height={319} className="h-auto w-[190px] brightness-0 invert" />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/48">Commercial real estate acquisitions, sales, leasing, and asset management across three high-opportunity U.S. markets.</p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">Navigate</p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/listings" className="block hover:text-white">Listings</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
              <Link href="/portal" className="block hover:text-white">Client Portal</Link>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">Direct contact</p>
            <a href="mailto:info@globalfundreg.com" className="mt-5 block break-words font-display text-3xl text-white hover:text-gold">info@globalfundreg.com</a>
            <div className="mt-5 space-y-2 text-sm text-white/55">
              <a href="tel:+14804627900" className="block hover:text-white">Phoenix · (480) 462-7900</a>
              <a href="tel:+19547278066" className="block hover:text-white">Fort Lauderdale · (954) 727-8066</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Fund Real Estate Group</p>
          <p>Phoenix · South Florida · Chicago MSA</p>
        </div>
      </div>
    </footer>
  );
}
