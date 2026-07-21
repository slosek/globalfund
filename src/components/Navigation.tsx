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
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-ink/10 bg-stone-50/95 backdrop-blur-xl"
          : "border-transparent bg-stone-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="spectrum-line h-1 w-full" />
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="relative z-10" aria-label="Global Fund Real Estate Group home">
          <Image
            src="/logo.png"
            alt="Global Fund Real Estate Group"
            width={800}
            height={319}
            className="h-auto w-[150px] sm:w-[178px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-[13px] font-semibold tracking-wide transition-colors ${
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-3 text-xs font-bold tracking-wide text-white transition-colors hover:bg-ink-soft"
          >
            Discuss a property
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

      <div id="mobile-menu" className={`overflow-hidden bg-stone-50 transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="border-t border-ink/10 px-5 py-6 sm:px-8">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block border-b border-ink/10 py-3 font-display text-2xl ${pathname === link.href ? "text-violet" : "text-ink"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a href="tel:+14804627900" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white">
            Call Phoenix office
          </a>
        </div>
      </div>
    </header>
  );
}
