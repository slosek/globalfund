import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the commercial real estate perspective and principles behind Global Fund Real Estate Group.",
};

const values = [
  {
    number: "01",
    title: "Integrity",
    text: "Honest counsel, transparent communication, and ethical conduct at every stage of an engagement.",
  },
  {
    number: "02",
    title: "Expertise",
    text: "Market knowledge translated into clear strategy, informed decisions, and practical execution.",
  },
  {
    number: "03",
    title: "Partnership",
    text: "Long-term relationships grounded in responsiveness, collaboration, and aligned interests.",
  },
];

const sectors = [
  { name: "Retail", image: "/images/gallery-1.jpg" },
  { name: "Office", image: "/images/gallery-6.jpg" },
  { name: "Industrial", image: "/images/industrial-1.jpg" },
  { name: "Multifamily", image: "/images/mf-1.jpg" },
  { name: "Hospitality", image: "/images/hospitality-1.jpg" },
  { name: "Restaurant", image: "/images/gallery-8.jpg" },
];

export default function About() {
  return (
    <>
      <section className="overflow-hidden bg-ink pt-28 text-white lg:pt-32">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
          <div className="flex min-h-[600px] flex-col justify-center px-5 py-20 sm:px-8 lg:col-span-7 lg:px-12">
            <p className="eyebrow !text-white/50 reveal-1">About Global Fund</p>
            <h1 className="mt-9 max-w-4xl font-display text-hero text-white reveal-2">
              Experience with
              <span className="block italic text-white/55">a point of view.</span>
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-white/60 sm:text-lg reveal-3">
              A commercial real estate group built to bring focused strategy, market fluency, and hands-on execution to every assignment.
            </p>
          </div>
          <div className="relative min-h-[520px] lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/gallery-3.jpg"
              alt="South Florida real estate market"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-7 font-display text-section text-ink">Built around the assignment.</h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-ink-muted lg:col-span-6 lg:col-start-7">
              <p>
                Global Fund Real Estate Group began with a clear idea: clients deserve thoughtful strategy and committed execution whether the assignment is an acquisition, a lease, a sale, or the ongoing management of an asset.
              </p>
              <p>
                Our work spans shopping centers, office buildings, industrial properties, multifamily developments, restaurant spaces, hospitality assets, and medical real estate.
              </p>
              <p>
                With offices serving Phoenix, Fort Lauderdale, and the Chicago metropolitan area, we combine regional context with a broad relationship network to move opportunities forward.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-stone-100 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <p className="eyebrow">Our principles</p>
            <h2 className="mt-7 max-w-3xl font-display text-section text-ink">The way we work matters.</h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/10 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08} className="bg-white p-8 sm:p-10 lg:min-h-[350px] lg:p-12">
                <div className="flex h-full flex-col">
                  <span className="text-xs font-bold tracking-[0.16em] text-ink-faint">{value.number}</span>
                  <div className="mt-auto pt-20">
                    <h3 className="font-display text-4xl text-ink">{value.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-ink-muted">{value.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="flex flex-col gap-7 border-b border-ink/15 pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Property sectors</p>
              <h2 className="mt-7 max-w-3xl font-display text-section text-ink">Fluent across asset classes.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-muted">
              Different property types demand different operating, tenant, and capital perspectives. Our experience spans the commercial landscape.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
            {sectors.map((sector, index) => (
              <AnimatedSection key={sector.name} delay={(index % 3) * 0.06}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={sector.image}
                    alt={`${sector.name} commercial real estate`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04] group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <p className="absolute bottom-0 left-0 p-5 font-display text-2xl text-white sm:p-7 sm:text-3xl">{sector.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-24 lg:py-28">
        <AnimatedSection className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="eyebrow">Work with us</p>
          <h2 className="mt-8 text-balance font-display text-section text-ink">Bring us the opportunity. We’ll bring the focus.</h2>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-ink-soft">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
