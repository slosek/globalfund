import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    number: "01",
    title: "Acquisitions",
    description:
      "Market intelligence, disciplined underwriting, and a broad relationship network focused on opportunities with durable value.",
    image: "/images/acquisitions-retail.webp",
    alt: "Aerial view of a retail property",
  },
  {
    number: "02",
    title: "Sales & Leasing",
    description:
      "Positioning, outreach, and transaction strategy designed to connect each asset with the right buyer or tenant.",
    image: "/images/leasing-office.webp",
    alt: "Contemporary commercial office interior",
  },
  {
    number: "03",
    title: "Asset Management",
    description:
      "Hands-on oversight that aligns operations, occupancy, and capital decisions with the long-term objectives of ownership.",
    image: "/images/asset-management.webp",
    alt: "Commercial shopping center exterior",
  },
];

const markets = [
  { city: "Phoenix", region: "Arizona", detail: "Southwest growth market" },
  { city: "Fort Lauderdale", region: "South Florida", detail: "Atlantic commercial corridor" },
  { city: "Chicago MSA", region: "Illinois", detail: "Midwest business hub" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-stone-50 pt-28 lg:pt-32">
        <div className="mx-auto grid min-h-[760px] max-w-[1440px] lg:grid-cols-12">
          <div className="flex flex-col justify-between px-5 py-14 sm:px-8 lg:col-span-7 lg:px-12 lg:py-20 xl:py-24">
            <div>
              <p className="eyebrow reveal-1">Global Fund Real Estate Group</p>
              <h1 className="mt-9 max-w-5xl font-display text-hero text-ink reveal-2">
                Real estate,
                <span className="block italic text-ink-muted">made valuable.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-ink-muted sm:text-lg reveal-3">
                Commercial real estate acquisitions, sales, leasing, and asset management across Phoenix, South Florida, and the Chicago MSA.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row reveal-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink-soft">
                  Start a conversation <span aria-hidden="true">→</span>
                </Link>
                <Link href="/listings" className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-white">
                  Explore listings
                </Link>
              </div>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-ink/15 pt-7 lg:mt-20">
              {markets.map((market) => (
                <div key={market.city}>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink">{market.city}</p>
                  <p className="mt-1 text-[11px] leading-4 text-ink-faint">{market.region}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-ink lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/phoenix-downtown.webp"
              alt="Downtown Phoenix commercial and multifamily district"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Three markets · One standard</p>
              <p className="mt-3 max-w-sm font-display text-3xl leading-tight sm:text-4xl">Local execution with a broader point of view.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-10 border-b border-ink/15 pb-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">How we work</p>
              <h2 className="mt-7 font-display text-section text-ink">Clear thinking for consequential decisions.</h2>
            </div>
            <div className="flex items-end lg:col-span-5 lg:col-start-8">
              <p className="max-w-xl text-lg leading-8 text-ink-muted">
                Every assignment begins with the asset, the market, and the client’s objective. From there, we build a focused strategy and stay close to the details through execution.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <article className="card-lift group h-full overflow-hidden rounded-[1.75rem] border border-ink/10 bg-stone-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.16em] text-ink-faint">{service.number}</span>
                      <span className="spectrum-line h-1 w-14 rounded-full" />
                    </div>
                    <h3 className="mt-8 font-display text-4xl text-ink">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink-muted">{service.description}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="grain overflow-hidden bg-ink py-24 text-white lg:py-32">
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow !text-white/50">Where we work</p>
              <h2 className="mt-7 font-display text-section text-white">Opportunity is local.</h2>
              <p className="mt-7 max-w-md text-base leading-8 text-white/55">
                Our regional presence brings market context and responsive execution to each engagement.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {markets.map((market, index) => (
                <div key={market.city} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/20 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                  <span className="text-xs font-bold text-white/35">0{index + 1}</span>
                  <div>
                    <p className="font-display text-3xl sm:text-4xl">{market.city}</p>
                    <p className="mt-1 text-sm text-white/45">{market.region}</p>
                  </div>
                  <p className="col-start-2 text-xs uppercase tracking-[0.12em] text-white/45 sm:col-start-auto">{market.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-stone-100 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-6">
              <Image
                src="/images/gallery-6.jpg"
                alt="Modern office property"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="eyebrow">Client perspective</p>
              <blockquote className="mt-8 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                “Global Fund helped us secure a prime location for our new corporate office and manufacturing facility.”
              </blockquote>
              <p className="mt-7 text-sm font-bold text-ink">Doron Zacharin</p>
              <p className="mt-1 text-sm text-ink-faint">PressTech · Miami, Florida</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <AnimatedSection className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="eyebrow">What comes next</p>
          <h2 className="mt-8 text-balance font-display text-section text-ink">Let’s find the value in your next move.</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-ink-muted">
            Tell us about the asset, requirement, or opportunity you are evaluating.
          </p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-ink-soft">
            Talk with our team <span aria-hidden="true">→</span>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
