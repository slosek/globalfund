"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Integrity",
    desc: "The highest standards of honesty, transparency, and ethical conduct in every transaction.",
    color: "bg-amber",
  },
  {
    title: "Expertise",
    desc: "Deep market knowledge and industry acumen driving strategic, informed decisions.",
    color: "bg-electric",
  },
  {
    title: "Partnership",
    desc: "Enduring relationships grounded in trust, collaboration, and shared success.",
    color: "bg-emerald",
  },
];

const sectors = ["Retail", "Restaurant", "Industrial", "Office", "Medical", "Shopping Centers", "Multi-Family"];

export default function About() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-coral/[0.04] rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium stagger-1">
              About Us
            </span>

            <h1 className="mt-8 font-display text-hero font-extrabold text-ink stagger-2">
              Built on<br />
              <span className="text-electric">conviction.</span>
            </h1>

            <p className="mt-6 text-ink-muted text-lg sm:text-xl leading-relaxed max-w-lg stagger-3">
              A premier brokerage with a singular vision: extraordinary results
              in commercial real estate through expertise, integrity, and
              relentless client focus.
            </p>
          </div>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-electric text-sm font-semibold">Our Story</span>
              <h2 className="mt-2 font-display text-section font-extrabold text-ink">
                Vision into<br /><span className="text-electric">value.</span>
              </h2>
              <div className="mt-6 space-y-5 text-ink-muted text-lg leading-relaxed">
                <p>
                  Global Fund Real Estate Group was founded to bring
                  institutional-caliber expertise to every client, across every
                  market we serve.
                </p>
                <p>
                  We&apos;ve served a diverse clientele spanning retail,
                  restaurant, industrial, office, and medical spaces &mdash;
                  building a track record of excellence.
                </p>
                <p>
                  Our team leverages deep expertise in shopping centers, office
                  buildings, and multi-family developments to maximize capital
                  returns and consistently exceed expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative bg-white rounded-3xl p-12 lg:p-16 border border-gray-200 text-center shadow-sm">
                <Image src="/logo.png" alt="Global Fund Real Estate" width={320} height={80} className="mx-auto w-64 lg:w-80 h-auto" />
                <div className="w-12 h-1 bg-gradient-to-r from-amber via-electric to-electric-dark rounded-full mx-auto mt-6 mb-4" />
                <p className="text-electric text-sm font-medium italic">
                  &ldquo;Where Vision Meets Value&rdquo;
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  {["Phoenix", "Fort Lauderdale", "Chicago"].map((c) => (
                    <span key={c} className="px-3 py-1 bg-gray-50 rounded-full text-xs text-ink-faint font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══ SECTORS ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="text-electric text-sm font-semibold">Expertise</span>
            <h2 className="mt-2 font-display text-section font-extrabold text-ink mb-10">
              Diverse sectors.
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {sectors.map((s) => (
                <span key={s} className="px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-ink-muted text-sm font-medium hover:border-electric/30 hover:text-electric hover:bg-electric/5 transition-all duration-200 cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="text-electric text-sm font-semibold">What Drives Us</span>
            <h2 className="mt-2 font-display text-section font-extrabold text-ink mb-14">
              Core values.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${v.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  <div className={`w-3 h-3 rounded-full ${v.color} mb-6`} />
                  <h3 className="font-display text-xl font-bold text-ink mb-3">{v.title}</h3>
                  <p className="text-ink-muted text-[15px] leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-section font-extrabold text-ink">
              Let&apos;s build<br /><span className="text-electric">together.</span>
            </h2>
            <p className="mt-5 text-ink-muted text-lg max-w-md mx-auto">
              Whether you&apos;re acquiring, leasing, or optimizing &mdash;
              we&apos;re ready.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-electric text-white text-sm font-semibold rounded-full hover:bg-electric-dark hover:shadow-lg hover:shadow-electric/25 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
