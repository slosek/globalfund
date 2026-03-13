"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-[0_1px_0_rgba(176,141,87,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-navy tracking-tight">
              Global<span className="text-brass">Fund</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-[13px] tracking-mega uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-brass"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-brass" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-7 py-3 bg-navy text-white font-sans text-[13px] tracking-mega uppercase hover:bg-navy-light transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-parchment border-t border-fog px-6 py-8 space-y-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-sans text-sm tracking-mega uppercase ${
                pathname === link.href ? "text-brass" : "text-ink-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 px-6 py-3 bg-navy text-white font-sans text-[13px] tracking-mega uppercase text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
