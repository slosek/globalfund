"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Global Fund Real Estate" width={200} height={48} className="h-10 lg:h-11 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href ? "text-electric" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-full hover:bg-ink-light transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-[3.25px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-72" : "max-h-0"}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`block text-sm font-medium ${pathname === link.href ? "text-electric" : "text-ink-muted"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="block mt-3 px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-full text-center">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
