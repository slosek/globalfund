import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-4">
            <div className="mb-5">
              <Image src="/logo.png" alt="Global Fund Real Estate" width={180} height={44} className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premier commercial real estate brokerage delivering bold results
              across America&apos;s most dynamic markets.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white/30 text-xs font-medium uppercase tracking-wider mb-4">Navigate</h4>
            <div className="space-y-2.5">
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href} className="block text-white/60 text-sm hover:text-electric transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white/30 text-xs font-medium uppercase tracking-wider mb-4">Services</h4>
            <div className="space-y-2.5 text-white/60 text-sm">
              <p>Acquisitions</p>
              <p>Sales &amp; Leasing</p>
              <p>Asset Management</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white/30 text-xs font-medium uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <span className="text-white/30 text-xs">Phoenix</span>
                <a href="tel:+14804627900" className="block text-white/60 hover:text-electric transition-colors">(480) 462-7900</a>
              </div>
              <div>
                <span className="text-white/30 text-xs">Fort Lauderdale</span>
                <a href="tel:+19547278066" className="block text-white/60 hover:text-electric transition-colors">(954) 727-8066</a>
              </div>
              <a href="mailto:info@globalfundreg.com" className="block text-white/60 hover:text-electric transition-colors mt-1">
                info@globalfundreg.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} Global Fund Real Estate Group</p>
          <div className="flex items-center gap-4 text-white/25 text-xs">
            <span>Phoenix, AZ</span>
            <span className="w-1 h-1 rounded-full bg-electric/40" />
            <span>Fort Lauderdale, FL</span>
            <span className="w-1 h-1 rounded-full bg-electric/40" />
            <span>Chicago MSA, IL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
