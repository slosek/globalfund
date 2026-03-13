"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    num: "01",
    title: "Acquisitions",
    desc: "We leverage our deep network and market intelligence to identify and execute high-value property acquisitions that maximize returns.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <path d="M4 12h24M12 12v16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sales & Leasing",
    desc: "Tailored leasing strategies and sales execution that attract premium tenants and drive exceptional property value.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 3L29 14v15H3V14L16 3z" />
        <rect x="12" y="18" width="8" height="11" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Asset Management",
    desc: "Strategic oversight that cultivates successful properties, enhancing value and promoting sustainable long-term growth.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="13" />
        <path d="M16 8v8l6 4" />
      </svg>
    ),
  },
];

const markets = [
  {
    city: "Phoenix",
    state: "Arizona",
    tag: "Southwest",
    desc: "Capitalizing on one of America's fastest-growing metropolitan markets.",
  },
  {
    city: "Fort Lauderdale",
    state: "Florida",
    tag: "Southeast",
    desc: "Strategic positioning in South Florida's thriving commercial corridor.",
  },
  {
    city: "Chicago MSA",
    state: "Illinois",
    tag: "Midwest",
    desc: "Deep roots in the nation's most robust Midwestern commercial hub.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-parchment via-parchment to-linen" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brass/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-brass/[0.03] to-transparent" />

        {/* Decorative geometry */}
        <div className="absolute top-32 right-12 lg:right-24 w-[280px] lg:w-[400px] h-[280px] lg:h-[400px] border border-brass/10 rounded-full" />
        <div className="absolute top-44 right-24 lg:right-40 w-[180px] lg:w-[260px] h-[180px] lg:h-[260px] border border-brass/[0.07] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-navy/[0.02] rounded-full blur-3xl" />

        {/* Vertical accent line */}
        <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-brass/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32 lg:py-0">
          <div className="max-w-3xl">
            {/* Overline */}
            <div className="stagger-1 flex items-center gap-4">
              <div className="editorial-line" />
              <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                Commercial Real Estate
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 stagger-2">
              <span className="block font-serif text-display font-bold text-navy">
                Where Vision
              </span>
              <span className="block font-serif text-display italic font-medium text-brass">
                Meets Value.
              </span>
            </h1>

            {/* Body */}
            <p className="mt-8 text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg font-sans stagger-3">
              Global Fund Real Estate Group delivers premier acquisitions,
              management, and leasing solutions across America&apos;s most
              dynamic markets.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 stagger-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-sans text-[13px] tracking-mega uppercase hover:bg-navy-light transition-all duration-300"
              >
                Start a Conversation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ink/15 text-ink font-sans text-[13px] tracking-mega uppercase hover:border-brass hover:text-brass transition-all duration-300"
              >
                Our Story
              </Link>
            </div>

            {/* Locations strip */}
            <div className="mt-16 flex items-center gap-6 stagger-5">
              {["Phoenix, AZ", "Fort Lauderdale, FL", "Chicago, IL"].map((loc, i) => (
                <span key={loc} className="flex items-center gap-3">
                  {i > 0 && <span className="w-[3px] h-[3px] rounded-full bg-brass/50" />}
                  <span className="text-ink-faint text-xs font-sans tracking-wide">{loc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-28 lg:py-36 bg-white relative">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fog to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="editorial-line" />
                  <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                    What We Do
                  </span>
                </div>
                <h2 className="font-serif text-display-sm font-bold text-navy">
                  Full-Spectrum<br />
                  <span className="italic text-brass">Real Estate</span> Solutions
                </h2>
              </div>
              <p className="text-ink-muted text-lg leading-relaxed max-w-sm font-sans">
                Three core disciplines. One integrated approach to maximizing
                your commercial real estate potential.
              </p>
            </div>
          </AnimatedSection>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-fog/80">
            {services.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.12}>
                <div className={`group relative p-10 lg:p-12 h-full bg-parchment hover:bg-white transition-colors duration-500 ${
                  i < 2 ? "md:border-r border-fog/80" : ""
                }`}>
                  {/* Top accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brass to-brass-light scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                  <div className="flex items-start justify-between mb-10">
                    <div className="text-brass/40 group-hover:text-brass transition-colors duration-500">
                      {s.icon}
                    </div>
                    <span className="font-serif text-5xl font-bold text-fog group-hover:text-brass/15 transition-colors duration-500">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                    {s.title}
                  </h3>
                  <p className="text-ink-muted text-[15px] leading-relaxed font-sans">
                    {s.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-brass opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[12px] font-sans tracking-mega uppercase">Explore</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE STAT BAND ══════════ */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/50 via-transparent to-navy-deep/50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
              {[
                { val: "3", sub: "Major Markets", detail: "Coast to coast coverage" },
                { val: "5+", sub: "Property Sectors", detail: "Diversified portfolio" },
                { val: "100%", sub: "Client Focused", detail: "Your goals, our mission" },
                { val: "24/7", sub: "Dedicated Support", detail: "Always accessible" },
              ].map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                    {s.val}
                  </span>
                  <span className="block mt-2 font-sans text-[11px] tracking-mega uppercase text-brass-muted">
                    {s.sub}
                  </span>
                  <span className="block mt-1 text-white/30 text-xs font-sans">
                    {s.detail}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════ MARKETS ══════════ */}
      <section className="py-28 lg:py-36 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="editorial-line" />
                <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                  Our Markets
                </span>
              </div>
              <h2 className="font-serif text-display-sm font-bold text-navy">
                Three Cities.<br />
                <span className="italic text-brass">Infinite</span> Opportunity.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <AnimatedSection key={m.city} delay={i * 0.12}>
                <div className="group hover-lift bg-white border border-fog/60 p-8 lg:p-10 relative overflow-hidden h-full">
                  {/* Background number */}
                  <span className="absolute -top-4 -right-2 font-serif text-[120px] font-bold text-fog/30 leading-none select-none pointer-events-none group-hover:text-brass/[0.06] transition-colors duration-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="font-sans text-[10px] tracking-mega uppercase text-brass">
                      {m.tag}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl lg:text-4xl font-bold text-navy">
                      {m.city}
                    </h3>
                    <span className="block text-ink-faint text-sm font-sans mt-1">{m.state}</span>
                    <p className="mt-4 text-ink-muted text-sm leading-relaxed font-sans">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-28 lg:py-36 bg-linen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brass/[0.06] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brass/[0.04] rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <div className="editorial-line" />
            </div>
            <h2 className="font-serif text-display-sm font-bold text-navy leading-tight">
              Ready to Elevate<br />
              <span className="italic text-brass">Your Portfolio?</span>
            </h2>
            <p className="mt-6 text-ink-muted text-lg max-w-md mx-auto leading-relaxed font-sans">
              Let&apos;s discuss how Global Fund can unlock the full potential
              of your commercial real estate investments.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-navy text-white font-sans text-[13px] tracking-mega uppercase hover:bg-navy-light transition-all duration-300"
              >
                Let&apos;s Talk
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:+14804627900"
                className="inline-flex items-center gap-3 px-10 py-4 border border-ink/15 text-ink font-sans text-[13px] tracking-mega uppercase hover:border-brass hover:text-brass transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
