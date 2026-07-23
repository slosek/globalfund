import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    number: "01",
    title: "Acquisitions",
    kicker: "Find the signal",
    description: "Market intelligence, disciplined underwriting, and a broad relationship network focused on opportunities with durable value.",
    image: "/images/service-acquisitions-v3.webp",
    alt: "Aerial view of a Phoenix-area commercial retail center",
  },
  {
    number: "02",
    title: "Sales & Leasing",
    kicker: "Create the match",
    description: "Positioning, outreach, and transaction strategy designed to connect each asset with the right buyer or tenant.",
    image: "/images/service-sales-leasing-v3.webp",
    alt: "Modern commercial office and light-industrial property entrance",
  },
  {
    number: "03",
    title: "Asset Management",
    kicker: "Protect the upside",
    description: "Hands-on oversight aligning operations, occupancy, and capital decisions with the long-term objectives of ownership.",
    image: "/images/service-asset-management-v3.webp",
    alt: "Well-maintained mixed-use commercial property at golden hour",
  },
];

const markets = [
  { city: "Phoenix", region: "Arizona", note: "Southwest growth market", image: "/images/market-phoenix-v3.webp", alt: "Downtown Phoenix commercial district" },
  { city: "Fort Lauderdale", region: "South Florida", note: "Atlantic commercial corridor", image: "/images/market-fort-lauderdale-v3.webp", alt: "Fort Lauderdale waterfront and skyline" },
  { city: "Chicago MSA", region: "Illinois", note: "Midwest business hub", image: "/images/market-chicago-v3.webp", alt: "Modern Chicago commercial office district" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[880px] overflow-hidden bg-stone-50 pt-[85px] lg:min-h-[930px]">
        <Image src="/images/hero-phoenix-v3.webp" alt="Mixed-use commercial real estate district in greater Phoenix at golden hour" fill priority quality={90} sizes="100vw" className="object-cover object-[66%_center]" />
        <div className="paper-fade absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/55 to-transparent lg:h-56" />

        <div className="relative z-10 mx-auto flex min-h-[795px] max-w-[1500px] flex-col justify-between px-5 pb-8 pt-16 sm:px-8 lg:min-h-[845px] lg:px-12 lg:pb-10 lg:pt-20">
          <div className="max-w-[920px]">
            <p className="eyebrow reveal-1">Commercial real estate · Three core markets</p>
            <h1 className="mt-10 max-w-[900px] font-display text-hero text-ink reveal-2">
              Commercial<br />real estate,<br />made <span className="spectrum-text italic">valuable.</span>
            </h1>
            <p className="mt-9 max-w-lg text-[15px] leading-7 text-ink-muted sm:text-base sm:leading-8 reveal-3">
              Acquisitions, sales, leasing, and asset management shaped by clear strategy and carried through with committed execution.
            </p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:gap-4 reveal-4">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-4 rounded-full bg-ink px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white transition-colors hover:bg-ink-soft">
                Start a conversation <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/listings" className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-stone-50/75 px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink backdrop-blur-sm transition-colors hover:bg-white">
                View available properties
              </Link>
            </div>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/20 bg-ink/75 text-white shadow-soft backdrop-blur-md sm:mt-10 sm:grid-cols-3 lg:ml-auto lg:mt-0 lg:w-[720px]">
            {markets.map((market, index) => (
              <div key={market.city} className="flex items-center gap-4 border-b border-white/15 px-5 py-4 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <span className="text-[10px] font-extrabold text-white/35">0{index + 1}</span>
                <div>
                  <p className="font-display text-xl leading-none">{market.city}</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">{market.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-stone-50 py-20 sm:py-24 lg:py-28">
        <AnimatedSection className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1240px]">
            <p className="eyebrow">Our perspective</p>
            <p className="mt-8 text-balance font-display text-statement text-ink sm:mt-10">
              Value is rarely hidden.<br />It is <span className="spectrum-text italic">recognized, shaped,</span><br />and carefully realized.
            </p>
          </div>
          <div className="mt-12 grid max-w-4xl gap-7 border-t border-ink/15 pt-8 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:pt-9">
            <p className="max-w-md text-sm leading-7 text-ink-muted">
              Every assignment starts with the asset, the market, and the client&apos;s objective. We turn that context into a focused path forward.
            </p>
            <p className="max-w-md text-sm leading-7 text-ink-muted">
              From the first conversation through the final detail, senior attention stays close to the work.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="flex flex-col gap-8 border-b border-ink/15 pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-7 max-w-4xl font-display text-section text-ink">One point of view.<br /><span className="italic text-ink-faint">The full property cycle.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink-muted">Integrated services keep strategy connected to execution—and execution connected to long-term value.</p>
          </AnimatedSection>

          <div className="mt-20 space-y-20 lg:space-y-28">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.05} className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${index % 2 ? "" : ""}`}>
                <div className={`image-zoom relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-stone-100 lg:col-span-7 ${index % 2 ? "lg:col-start-6" : ""}`}>
                  <Image src={service.image} alt={service.alt} fill quality={90} sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute bottom-6 left-6 rounded-full border border-white/25 bg-ink/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">{service.kicker}</span>
                </div>
                <div className={`lg:col-span-4 ${index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-ink-faint">{service.number}</span>
                    <span className="spectrum-line h-0.5 w-16" />
                  </div>
                  <h3 className="mt-7 font-display text-[clamp(3.4rem,5vw,5.5rem)] leading-[0.87] tracking-[-0.04em] text-ink">{service.title}</h3>
                  <p className="mt-7 max-w-md text-sm leading-7 text-ink-muted">{service.description}</p>
                  <Link href="/contact" className="mt-8 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink hover:text-violet">Discuss your objective <span aria-hidden="true">→</span></Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="grain overflow-hidden bg-ink py-24 text-white lg:py-36">
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow !text-white/45">Where we work</p>
              <h2 className="mt-7 font-display text-section text-white">Local context.<br /><span className="spectrum-text italic">Broader perspective.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50 lg:col-span-4 lg:col-start-9">Regional presence brings sharper market fluency, responsive execution, and relationships that move opportunities forward.</p>
          </AnimatedSection>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {markets.map((market, index) => (
              <AnimatedSection key={market.city} delay={index * 0.08}>
                <article className="image-zoom group relative min-h-[540px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft">
                  <Image src={market.image} alt={market.alt} fill quality={90} sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <div className="flex items-center justify-between border-b border-white/20 pb-5">
                      <span className="text-[10px] font-extrabold text-white/40">0{index + 1}</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">{market.region}</span>
                    </div>
                    <h3 className="mt-7 font-display text-5xl leading-[0.9] text-white sm:text-6xl">{market.city}</h3>
                    <p className="mt-4 text-xs uppercase tracking-[0.13em] text-white/45">{market.note}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-24 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
                <Image src="/images/testimonial-presstech-v2.webp" alt="South Florida corporate office and manufacturing facility" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="spectrum-line absolute -bottom-4 left-8 h-2 w-1/2 rounded-full" />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="eyebrow">Client perspective</p>
              <blockquote className="mt-8 font-display text-[clamp(3rem,5vw,5.1rem)] leading-[0.93] tracking-[-0.035em] text-ink">
                “Global Fund helped us secure a prime location for our new corporate office and manufacturing facility.”
              </blockquote>
              <div className="mt-9 border-t border-ink/15 pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-ink">Doron Zacharin</p>
                <p className="mt-1 text-xs text-ink-faint">PressTech · Miami, Florida</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-stone-50 py-24 lg:py-36">
        <AnimatedSection className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="eyebrow">What comes next</p>
          <h2 className="mt-8 text-balance font-display text-statement text-ink">See the opportunity.<br /><span className="spectrum-text italic">Shape the value.</span></h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-ink-muted">Tell us about the asset, requirement, or market question you are evaluating.</p>
          <Link href="/contact" className="group mt-10 inline-flex items-center gap-4 rounded-full bg-ink px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white hover:bg-ink-soft">Talk with our team <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link>
        </AnimatedSection>
      </section>
    </>
  );
}
