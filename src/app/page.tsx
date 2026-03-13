"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Acquisitions",
    desc: "We leverage deep networks and market intelligence to identify and close high-value property deals that maximize returns.",
    color: "bg-amber",
    iconColor: "text-amber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
  },
  {
    title: "Sales & Leasing",
    desc: "Tailored strategies that attract premium tenants and buyers, driving exceptional value for every property in our portfolio.",
    color: "bg-coral",
    iconColor: "text-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: "Asset Management",
    desc: "Strategic oversight that enhances property value, optimizes operations, and delivers sustainable long-term growth.",
    color: "bg-emerald",
    iconColor: "text-emerald",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const markets = [
  { city: "Phoenix", state: "AZ", tag: "Southwest", desc: "One of America's fastest-growing metropolitan markets." },
  { city: "Fort Lauderdale", state: "FL", tag: "Southeast", desc: "South Florida's thriving commercial corridor." },
  { city: "Chicago MSA", state: "IL", tag: "Midwest", desc: "The nation's most robust Midwestern hub." },
];

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Bold background blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-electric/[0.07] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-coral/[0.05] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-violet/[0.04] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32 lg:py-0">
          <div className="max-w-4xl">
            <div className="stagger-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                3 Markets &middot; 5+ Sectors &middot; Limitless Potential
              </span>
            </div>

            <h1 className="mt-8 font-display text-hero font-extrabold text-ink stagger-2">
              Where Vision<br />
              <span className="text-electric">Meets Value.</span>
            </h1>

            <p className="mt-6 text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg font-body stagger-3">
              Global Fund Real Estate Group delivers premier acquisitions,
              management, and leasing across America&apos;s most
              dynamic markets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 stagger-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-electric text-white text-sm font-semibold rounded-full hover:bg-electric-dark hover:shadow-lg hover:shadow-electric/25 transition-all duration-300"
              >
                Start a Conversation
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-100 text-ink text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-200"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-5 stagger-5">
              {["Phoenix, AZ", "Fort Lauderdale, FL", "Chicago, IL"].map((loc, i) => (
                <span key={loc} className="flex items-center gap-3">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
                  <span className="text-ink-faint text-xs font-medium tracking-wide">{loc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="max-w-xl mb-14">
              <span className="text-electric text-sm font-semibold">What We Do</span>
              <h2 className="mt-2 font-display text-section font-extrabold text-ink">
                Full-spectrum<br />real estate solutions.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-400 h-full overflow-hidden">
                  {/* Color accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${s.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  <div className={`w-12 h-12 rounded-xl ${s.color}/10 flex items-center justify-center mb-6 ${s.iconColor}`}>
                    {s.icon}
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-muted text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-20 bg-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { val: "3", label: "Major Markets", color: "text-amber-light" },
                { val: "5+", label: "Property Sectors", color: "text-electric-glow" },
                { val: "100%", label: "Client Focused", color: "text-emerald-light" },
                { val: "24/7", label: "Dedicated Support", color: "text-violet-light" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <span className={`block font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold ${s.color}`}>
                    {s.val}
                  </span>
                  <span className="block mt-2 text-white/40 text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ MARKETS ══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="max-w-xl mb-14">
              <span className="text-electric text-sm font-semibold">Our Markets</span>
              <h2 className="mt-2 font-display text-section font-extrabold text-ink">
                Three cities.<br />Infinite opportunity.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {markets.map((m, i) => (
              <AnimatedSection key={m.city} delay={i * 0.1}>
                <div className="group bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100 hover:bg-white hover:border-electric/20 hover:shadow-xl hover:shadow-electric/[0.04] transition-all duration-400 h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-semibold mb-4">
                    {m.tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">{m.city}</h3>
                  <span className="text-ink-faint text-sm">{m.state}</span>
                  <p className="mt-3 text-ink-muted text-sm leading-relaxed">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/[0.04] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium mb-6">
              Ready to grow?
            </span>
            <h2 className="font-display text-section font-extrabold text-ink">
              Elevate your<br />
              <span className="text-electric">portfolio today.</span>
            </h2>
            <p className="mt-5 text-ink-muted text-lg max-w-md mx-auto leading-relaxed">
              Let&apos;s discuss how Global Fund can unlock the full potential
              of your commercial real estate investments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-electric text-white text-sm font-semibold rounded-full hover:bg-electric-dark hover:shadow-lg hover:shadow-electric/25 transition-all duration-300"
              >
                Let&apos;s Talk
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a
                href="tel:+14804627900"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-ink text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-200"
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
