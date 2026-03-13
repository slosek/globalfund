"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    num: "01",
    title: "Acquisitions",
    desc: "Utilize our network and resources for successful property acquisitions worldwide, ensuring optimal returns and growth.",
    emoji: "🏢",
  },
  {
    num: "02",
    title: "Leasing",
    desc: "Maximize your property's potential with our tailored leasing solutions that attract ideal tenants and drive value.",
    emoji: "🔑",
  },
  {
    num: "03",
    title: "Management",
    desc: "Cultivate successful properties through expert asset management, enhancing value and promoting sustainable growth.",
    emoji: "📊",
  },
];

const locations = [
  { city: "Phoenix", state: "AZ", label: "Southwest Hub" },
  { city: "Fort Lauderdale", state: "FL", label: "Southeast Hub" },
  { city: "Chicago MSA", state: "IL", label: "Midwest Hub" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-blue-50 via-slate-50 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-warm/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32">
          <div className="max-w-4xl">
            <div className="stagger-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent text-sm font-display font-medium rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Phoenix &bull; Fort Lauderdale &bull; Chicago
              </span>
            </div>

            <h1 className="mt-8 stagger-2">
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-ink leading-[1.05] tracking-tight">
                Global Fund
              </span>
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight accent-text">
                Real Estate
              </span>
              <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-light text-stone mt-2 tracking-wide">
                Group
              </span>
            </h1>

            <p className="mt-8 text-stone text-lg sm:text-xl leading-relaxed max-w-xl stagger-3">
              Acquisitions &mdash; Asset Management &mdash; Sales &amp; Leasing.
              <br className="hidden sm:block" />
              Premier commercial real estate solutions across three major markets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 stagger-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-display font-semibold text-base rounded-xl hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                Start a Conversation
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cloud text-ink font-display font-semibold text-base rounded-xl hover:border-accent hover:text-accent transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <span className="text-accent font-display font-semibold text-sm tracking-wide uppercase">
                What We Do
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight tracking-tight">
                Comprehensive <br className="hidden sm:block" />
                <span className="accent-text">Solutions</span>
              </h2>
              <p className="mt-4 text-stone text-lg leading-relaxed">
                Explore our diverse portfolio of services tailored to meet your commercial real estate needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.12}>
                <div className="group bg-white rounded-2xl p-8 lg:p-10 border border-cloud hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{s.emoji}</span>
                    <span className="font-display text-sm font-bold text-silver">{s.num}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">
                    {s.title}
                  </h3>
                  <p className="text-stone leading-relaxed text-[15px]">
                    {s.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-display font-semibold">Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { val: "3", label: "Office Locations" },
                { val: "5+", label: "Property Sectors" },
                { val: "100%", label: "Client Focused" },
                { val: "24/7", label: "Dedicated Support" },
              ].map((s, i) => (
                <div key={i}>
                  <span className="block font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                    {s.val}
                  </span>
                  <span className="block mt-1 text-white/70 text-sm font-display tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="text-accent font-display font-semibold text-sm tracking-wide uppercase">
              Our Presence
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight tracking-tight mb-12">
              Coast to <span className="accent-text">Coast</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 0.12}>
                <div className="group relative bg-snow rounded-2xl p-8 lg:p-10 border border-cloud hover:border-accent/20 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="text-accent/60 text-xs font-display font-semibold tracking-widest uppercase">
                    {loc.label}
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">
                    {loc.city}
                  </h3>
                  <span className="text-stone text-lg">{loc.state}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight tracking-tight">
              Ready to <span className="accent-text">Elevate</span>
              <br />Your Portfolio?
            </h2>
            <p className="mt-6 text-stone text-lg max-w-xl mx-auto leading-relaxed">
              Start your journey with Global Fund Real Estate Group and
              experience the difference in commercial real estate excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-accent text-white font-display font-semibold text-base rounded-xl hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Contact Us Today
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
