"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-cloud"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <span className="relative font-display font-bold text-white text-sm">GF</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-ink text-base tracking-tight">
                Global Fund
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-stone uppercase">
                Real Estate Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "text-stone hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 bg-accent text-white font-display text-sm rounded-lg hover:bg-accent-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-5 h-0.5 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <div className="bg-white border-t border-cloud px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-display text-base ${
                pathname === link.href ? "text-accent font-semibold" : "text-stone"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 px-5 py-2.5 bg-accent text-white font-display text-sm rounded-lg text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
