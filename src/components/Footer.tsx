import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brass to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              Global<span className="text-brass-light">Fund</span>
            </span>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Premier commercial real estate brokerage. Where vision meets value
              across America&apos;s most dynamic markets.
            </p>
            <div className="editorial-line mt-6 opacity-50" />
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-[11px] tracking-mega uppercase text-brass-muted mb-5">
              Navigate
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-white/50 text-sm hover:text-brass-light transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[11px] tracking-mega uppercase text-brass-muted mb-5">
              Services
            </h4>
            <div className="space-y-3 text-white/50 text-sm">
              <p>Acquisitions</p>
              <p>Sales &amp; Leasing</p>
              <p>Asset Management</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[11px] tracking-mega uppercase text-brass-muted mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-white/30 text-xs uppercase tracking-wide">Phoenix</span>
                <a href="tel:+14804627900" className="block text-white/50 hover:text-brass-light transition-colors">
                  (480) 462-7900
                </a>
              </div>
              <div>
                <span className="text-white/30 text-xs uppercase tracking-wide">Fort Lauderdale</span>
                <a href="tel:+19547278066" className="block text-white/50 hover:text-brass-light transition-colors">
                  (954) 727-8066
                </a>
              </div>
              <div className="pt-1">
                <a href="mailto:info@globalfundreg.com" className="text-brass-muted hover:text-brass-light transition-colors">
                  info@globalfundreg.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Global Fund Real Estate Group
          </p>
          <div className="flex items-center gap-6 text-white/30 text-xs tracking-wide">
            <span>Phoenix, AZ</span>
            <span className="w-[3px] h-[3px] rounded-full bg-brass/40" />
            <span>Fort Lauderdale, FL</span>
            <span className="w-[3px] h-[3px] rounded-full bg-brass/40" />
            <span>Chicago MSA, IL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
