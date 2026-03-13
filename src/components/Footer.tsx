import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-snow border-t border-cloud">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">GF</span>
              </div>
              <span className="font-display font-bold text-ink text-sm">Global Fund</span>
            </div>
            <p className="text-stone text-sm leading-relaxed">
              Premier commercial real estate brokerage specializing in acquisitions,
              asset management, sales &amp; leasing.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-stone text-sm hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm mb-4">Services</h4>
            <div className="space-y-2 text-stone text-sm">
              <p>Acquisitions</p>
              <p>Sales &amp; Leasing</p>
              <p>Asset Management</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-stone text-sm">
              <p>
                <span className="text-ink-muted">Phoenix</span>{" "}
                <a href="tel:+14804627900" className="hover:text-accent transition-colors">(480) 462-7900</a>
              </p>
              <p>
                <span className="text-ink-muted">Fort Lauderdale</span>{" "}
                <a href="tel:+19547278066" className="hover:text-accent transition-colors">(954) 727-8066</a>
              </p>
              <p>
                <a href="mailto:info@globalfundreg.com" className="hover:text-accent transition-colors">
                  info@globalfundreg.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cloud flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xs">
            &copy; {new Date().getFullYear()} Global Fund Real Estate Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-stone text-xs">
            <span>Phoenix, AZ</span>
            <span className="w-1 h-1 rounded-full bg-silver" />
            <span>Fort Lauderdale, FL</span>
            <span className="w-1 h-1 rounded-full bg-silver" />
            <span>Chicago MSA, IL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
