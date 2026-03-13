"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in every transaction and relationship.",
    num: "I",
  },
  {
    title: "Expertise",
    desc: "Deep market knowledge and industry acumen that drives strategic, informed decision-making for our clients.",
    num: "II",
  },
  {
    title: "Partnership",
    desc: "We build enduring relationships grounded in trust, collaboration, and a shared commitment to mutual success.",
    num: "III",
  },
];

const sectors = [
  "Retail", "Restaurant", "Industrial", "Office",
  "Medical", "Shopping Centers", "Multi-Family",
];

export default function About() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-parchment to-linen" />
        <div className="absolute top-20 right-10 w-[350px] h-[350px] border border-brass/[0.07] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-navy/[0.02] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 stagger-1">
              <div className="editorial-line" />
              <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                About Us
              </span>
            </div>

            <h1 className="mt-8 stagger-2">
              <span className="block font-serif text-display font-bold text-navy">
                Built on
              </span>
              <span className="block font-serif text-display italic font-medium text-brass">
                Conviction.
              </span>
            </h1>

            <p className="mt-8 text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg font-sans stagger-3">
              A premier brokerage with a singular vision: to deliver
              extraordinary results in commercial real estate through
              expertise, integrity, and relentless client focus.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ STORY ══════════ */}
      <section className="py-28 lg:py-36 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fog to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Text */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="editorial-line" />
                  <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                    Our Story
                  </span>
                </div>
                <h2 className="font-serif text-display-sm font-bold text-navy mb-10">
                  Vision Into <span className="italic text-brass">Value</span>
                </h2>
                <div className="space-y-6 text-ink-muted text-lg leading-[1.8] font-sans">
                  <p>
                    Global Fund Real Estate Group was founded with a clear
                    purpose: to bring institutional-caliber expertise to every
                    client, across every market we serve.
                  </p>
                  <p>
                    We&apos;ve proudly served a diverse clientele spanning
                    retail, restaurant, industrial, office, and medical spaces
                    &mdash; building a track record that speaks to our
                    commitment to excellence.
                  </p>
                  <p>
                    Our team leverages deep expertise in shopping centers, office
                    buildings, and multi-family developments to maximize capital
                    returns &mdash; delivering results that consistently exceed
                    expectations.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 lg:mt-20">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  {/* Outer frame */}
                  <div className="border border-fog p-8 lg:p-10 bg-parchment">
                    <div className="border border-brass/20 p-10 lg:p-12 text-center bg-white">
                      <span className="block font-serif text-7xl lg:text-8xl font-bold text-gradient-brass">
                        GF
                      </span>
                      <div className="w-10 h-px bg-brass/30 mx-auto mt-5 mb-5" />
                      <p className="font-sans text-[10px] tracking-mega uppercase text-ink-faint">
                        Global Fund Real Estate Group
                      </p>
                      <p className="mt-4 font-serif text-sm italic text-brass/70">
                        &ldquo;Where Vision Meets Value&rdquo;
                      </p>
                    </div>
                  </div>
                  {/* Shadow accent */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-brass/10 -z-10" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SECTORS ══════════ */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="editorial-line" />
              <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                Expertise
              </span>
            </div>
            <h2 className="font-serif text-display-sm font-bold text-navy mb-12">
              Diverse <span className="italic text-brass">Sectors</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-6 py-3 bg-white border border-fog text-ink-muted text-sm font-sans tracking-editorial hover:border-brass/40 hover:text-brass hover:bg-brass/[0.03] transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════ VALUES ══════════ */}
      <section className="py-28 lg:py-36 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fog to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="editorial-line" />
              <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                What Drives Us
              </span>
            </div>
            <h2 className="font-serif text-display-sm font-bold text-navy mb-16">
              Core <span className="italic text-brass">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-fog/80">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div className={`group p-10 lg:p-12 bg-parchment hover:bg-white transition-colors duration-500 h-full ${
                  i < 2 ? "md:border-r border-fog/80" : ""
                }`}>
                  <span className="font-serif text-4xl italic text-brass/30 group-hover:text-brass/50 transition-colors duration-500">
                    {v.num}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-4 text-ink-muted text-[15px] leading-relaxed font-sans">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-28 lg:py-36 bg-linen overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brass/[0.06] rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <div className="editorial-line" />
            </div>
            <h2 className="font-serif text-display-sm font-bold text-navy leading-tight">
              Let&apos;s Build<br />
              <span className="italic text-brass">Together.</span>
            </h2>
            <p className="mt-6 text-ink-muted text-lg max-w-md mx-auto leading-relaxed font-sans">
              Whether you&apos;re looking to acquire, lease, or optimize your
              commercial real estate assets &mdash; we&apos;re ready.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 mt-10 px-10 py-4 bg-navy text-white font-sans text-[13px] tracking-mega uppercase hover:bg-navy-light transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
