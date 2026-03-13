"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our dealings.",
    emoji: "🛡️",
  },
  {
    title: "Expertise",
    desc: "Our team's in-depth knowledge and industry acumen ensure strategic and informed decision-making for our clients.",
    emoji: "🎯",
  },
  {
    title: "Partnership",
    desc: "We build long-lasting relationships based on trust, collaboration, and mutual success with every client we serve.",
    emoji: "🤝",
  },
];

const sectors = [
  "Retail", "Restaurant", "Industrial", "Office", "Medical", "Shopping Centers", "Multi-Family",
];

export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-blue-50 to-transparent" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent text-sm font-display font-medium rounded-full stagger-1">
              About Us
            </span>

            <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight stagger-2">
              <span className="text-ink">A Premier</span>
              <br />
              <span className="accent-text">Real Estate</span>
              <br />
              <span className="text-stone font-light">Brokerage</span>
            </h1>

            <p className="mt-8 text-stone text-lg sm:text-xl leading-relaxed max-w-xl stagger-3">
              We began with a vision to excel in acquisitions, leasing, and asset
              management within the global real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-accent font-display font-semibold text-sm tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight tracking-tight">
                Built on <span className="accent-text">Vision</span>
              </h2>
              <div className="mt-6 space-y-5 text-stone text-lg leading-relaxed">
                <p>
                  Global Fund Real Estate Group has proudly served a diverse
                  clientele spanning retail, restaurant, industrial, office, and
                  medical spaces across multiple markets.
                </p>
                <p>
                  Our team leverages deep expertise in shopping centers, office
                  buildings, and multi-family developments to maximize capital
                  returns for our clients &mdash; delivering results that exceed
                  expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative bg-white rounded-3xl p-12 border border-cloud shadow-sm">
                <div className="text-center">
                  <span className="font-display text-8xl lg:text-9xl font-extrabold accent-text">GF</span>
                  <div className="w-16 h-1 bg-accent/20 rounded-full mx-auto mt-4 mb-4" />
                  <p className="text-stone text-sm font-display tracking-widest uppercase">
                    Real Estate Group
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    {["Phoenix", "Fort Lauderdale", "Chicago"].map((c) => (
                      <span key={c} className="px-3 py-1 bg-snow rounded-full text-xs text-stone font-display">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="text-accent font-display font-semibold text-sm tracking-wide uppercase">
              Specializations
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-10">
              Diverse <span className="accent-text">Sectors</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-5 py-2.5 bg-snow border border-cloud rounded-xl text-ink-muted text-sm font-display font-medium hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 lg:py-32 bg-snow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <span className="text-accent font-display font-semibold text-sm tracking-wide uppercase">
              What Drives Us
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-12">
              Core <span className="accent-text">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-cloud hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-4xl">{v.emoji}</span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-stone leading-relaxed text-[15px]">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight tracking-tight">
              Let&apos;s Build <span className="accent-text">Together</span>
            </h2>
            <p className="mt-6 text-stone text-lg max-w-xl mx-auto">
              Whether you&apos;re looking to acquire, lease, or optimize your
              commercial real estate assets, we&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-accent text-white font-display font-semibold text-base rounded-xl hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
