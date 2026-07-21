import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description: "The commercial real estate perspective and principles behind Global Fund Real Estate Group.",
};

const values = [
  { number: "01", title: "Integrity", text: "Honest counsel, transparent communication, and ethical conduct at every stage of an engagement." },
  { number: "02", title: "Expertise", text: "Market knowledge translated into clear strategy, informed decisions, and practical execution." },
  { number: "03", title: "Partnership", text: "Long-term relationships grounded in responsiveness, collaboration, and aligned interests." },
];

const sectors = [
  { name: "Retail", image: "/images/retail-1.jpg", position: "lg:col-span-2 lg:row-span-2", alt: "Retail commercial real estate" },
  { name: "Office", image: "/images/gallery-6.jpg", position: "", alt: "Office commercial real estate" },
  { name: "Industrial", image: "/images/industrial-1.jpg", position: "", alt: "Industrial commercial real estate" },
  { name: "Multifamily", image: "/images/mf-1.jpg", position: "", alt: "Multifamily real estate" },
  { name: "Hospitality & Restaurant", image: "/images/hospitality-1.jpg", position: "", alt: "Hospitality commercial real estate" },
];

export default function About() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-ink pt-[85px] text-white lg:min-h-[850px]">
        <Image src="/images/gallery-3.jpg" alt="South Florida waterfront and commercial skyline" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="ink-fade absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[675px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[765px] lg:px-12">
          <p className="eyebrow !text-white/50 reveal-1">About Global Fund</p>
          <h1 className="mt-10 max-w-5xl font-display text-hero text-white reveal-2">Experience<br />with a <span className="spectrum-text italic">point of view.</span></h1>
          <p className="mt-10 max-w-lg text-base leading-8 text-white/62 reveal-3">A commercial real estate group built to bring focused strategy, market fluency, and hands-on execution to every assignment.</p>
        </div>
        <div className="spectrum-line absolute inset-x-0 bottom-0 h-1" />
      </section>

      <section className="bg-stone-50 py-24 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-8 font-display text-section text-ink">Built around<br /><span className="italic text-ink-faint">the assignment.</span></h2>
            </div>
            <div className="space-y-8 text-lg leading-9 text-ink-muted lg:col-span-6 lg:col-start-7">
              <p className="font-display text-3xl leading-tight text-ink sm:text-4xl">Clients deserve thoughtful strategy and committed execution—regardless of the size or shape of the opportunity.</p>
              <p>Our work spans shopping centers, office buildings, industrial properties, multifamily developments, restaurant spaces, hospitality assets, and medical real estate.</p>
              <p>With offices serving Phoenix, Fort Lauderdale, and the Chicago metropolitan area, we combine regional context with a broad relationship network to move opportunities forward.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">Our principles</p>
              <h2 className="mt-8 font-display text-section text-ink">How we work<br /><span className="spectrum-text italic">is part of the value.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink-muted lg:col-span-3 lg:col-start-10">The quality of the process matters as much as the outcome. These principles guide every relationship.</p>
          </AnimatedSection>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <article className="card-lift flex min-h-[410px] flex-col rounded-[1.75rem] border border-ink/10 bg-stone-50 p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-ink-faint">{value.number}</span>
                    <span className="spectrum-line h-0.5 w-16" />
                  </div>
                  <div className="mt-auto pt-20">
                    <h3 className="font-display text-5xl text-ink">{value.title}</h3>
                    <p className="mt-6 max-w-sm text-sm leading-7 text-ink-muted">{value.text}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="grain bg-ink py-24 text-white lg:py-36">
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="flex flex-col gap-8 border-b border-white/15 pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow !text-white/45">Property sectors</p>
              <h2 className="mt-8 max-w-4xl font-display text-section text-white">Fluent across<br /><span className="spectrum-text italic">asset classes.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50">Different property types demand different operating, tenant, and capital perspectives. Our experience spans the commercial landscape.</p>
          </AnimatedSection>

          <div className="mt-12 grid auto-rows-[270px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[310px]">
            {sectors.map((sector, index) => (
              <AnimatedSection key={sector.name} delay={(index % 4) * 0.06} className={sector.position}>
                <article className="image-zoom group relative h-full min-h-[270px] overflow-hidden rounded-[1.5rem] bg-ink-soft">
                  <Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <p className="font-display text-3xl text-white sm:text-4xl">{sector.name}</p>
                    <span className="text-[10px] font-bold text-white/40">0{index + 1}</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24 lg:py-32">
        <AnimatedSection className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="eyebrow">Work with us</p>
          <h2 className="mt-8 text-balance font-display text-statement text-ink">Bring the opportunity.<br /><span className="spectrum-text italic">We&apos;ll bring the focus.</span></h2>
          <Link href="/contact" className="group mt-10 inline-flex items-center gap-4 rounded-full bg-ink px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white hover:bg-ink-soft">Start a conversation <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link>
        </AnimatedSection>
      </section>
    </>
  );
}
