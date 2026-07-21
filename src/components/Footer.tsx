import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="spectrum-line h-1 w-full" />
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-14 border-b border-white/15 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logo.png"
              alt="Global Fund Real Estate Group"
              width={800}
              height={319}
              className="h-auto w-[190px] brightness-0 invert"
            />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              Commercial real estate acquisitions, sales, leasing, and asset management across three high-opportunity U.S. markets.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">Navigate</p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/listings" className="block hover:text-white">Listings</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">Start a conversation</p>
            <a href="mailto:info@globalfundreg.com" className="mt-5 block font-display text-2xl text-white hover:text-gold sm:text-3xl">
              info@globalfundreg.com
            </a>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
              <a href="tel:+14804627900" className="hover:text-white">Phoenix · (480) 462-7900</a>
              <a href="tel:+19547278066" className="hover:text-white">Fort Lauderdale · (954) 727-8066</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Global Fund Real Estate Group</p>
          <p>Phoenix · Fort Lauderdale · Chicago MSA</p>
        </div>
      </div>
    </footer>
  );
}
