"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/listings", label: "Listings" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-stone-50/95 shadow-float backdrop-blur-xl" : "bg-stone-50/80 backdrop-blur-md"}`}>
      <div className="spectrum-line h-[3px] w-full" />
      <nav className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="relative z-10 block" aria-label="Global Fund Real Estate Group home">
          <Image src="/logo.png" alt="Global Fund Real Estate Group" width={800} height={319} className="h-auto w-[158px] sm:w-[184px]" priority />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`relative py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors ${pathname === link.href ? "text-ink" : "text-ink-muted hover:text-ink"}`}
              >
                {link.label}
                {pathname === link.href && <span className="spectrum-line absolute inset-x-0 -bottom-1 h-0.5 rounded-full" />}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-ink-soft">
            Discuss an opportunity <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0.5 h-px w-5 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0.5 left-0 h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-menu" className={`overflow-hidden bg-stone-50 transition-[max-height] duration-500 md:hidden ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="border-t border-ink/10 px-5 pb-8 pt-4 sm:px-8">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} className="grid grid-cols-[2rem_1fr] items-center border-b border-ink/10 py-4">
              <span className="text-[10px] font-bold text-ink-faint">0{index + 1}</span>
              <span className={`font-display text-3xl ${pathname === link.href ? "spectrum-text italic" : "text-ink"}`}>{link.label}</span>
            </Link>
          ))}
          <a href="tel:+14804627900" className="mt-7 inline-flex rounded-full bg-ink px-5 py-3 text-xs font-bold text-white">Call Phoenix · (480) 462-7900</a>
        </div>
      </div>
    </header>
  );
}
