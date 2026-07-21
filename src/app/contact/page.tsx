import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Global Fund Real Estate Group in Phoenix, Fort Lauderdale, or the Chicago MSA.",
};

const offices = [
  {
    city: "Phoenix",
    region: "Arizona",
    phone: "(480) 462-7900",
    href: "tel:+14804627900",
    image: "/images/retail-1.jpg",
  },
  {
    city: "Fort Lauderdale",
    region: "South Florida",
    phone: "(954) 727-8066",
    href: "tel:+19547278066",
    image: "/images/gallery-8.jpg",
  },
  {
    city: "Chicago MSA",
    region: "Illinois",
    phone: null,
    href: null,
    image: "/images/gallery-6.jpg",
  },
];

export default function Contact() {
  return (
    <>
      <section className="border-b border-ink/10 bg-stone-50 px-5 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow reveal-1">Contact</p>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <h1 className="font-display text-hero text-ink reveal-2 lg:col-span-8">
              Let’s talk
              <span className="block italic text-ink-muted">real estate.</span>
            </h1>
            <p className="max-w-md pb-2 text-base leading-8 text-ink-muted reveal-3 lg:col-span-3 lg:col-start-10">
              Tell us about the property, requirement, or market question you are working through.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <AnimatedSection className="lg:col-span-7">
            <p className="eyebrow">Send an inquiry</p>
            <h2 className="mt-7 max-w-xl font-display text-5xl leading-[0.95] text-ink sm:text-6xl">Give us the context. We’ll follow up directly.</h2>
            <div className="mt-12 rounded-[1.75rem] bg-stone-100 p-6 sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="eyebrow">Direct contact</p>
            <a href="mailto:info@globalfundreg.com" className="mt-7 block break-words font-display text-3xl text-ink transition-colors hover:text-violet sm:text-4xl">
              info@globalfundreg.com
            </a>
            <div className="mt-12 border-t border-ink/15 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">Office lines</p>
              <a href="tel:+14804627900" className="mt-5 block text-sm font-semibold text-ink hover:text-violet">Phoenix · (480) 462-7900</a>
              <a href="tel:+19547278066" className="mt-3 block text-sm font-semibold text-ink hover:text-violet">Fort Lauderdale · (954) 727-8066</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-stone-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <p className="eyebrow">Our markets</p>
            <h2 className="mt-7 max-w-3xl font-display text-section text-ink">Three regions. One responsive team.</h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {offices.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 0.08}>
                <article className="card-lift overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white">
                  <div className="relative aspect-[3/2]">
                    <Image src={office.image} alt={`${office.city} real estate market`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-faint">{office.region}</p>
                    <h3 className="mt-3 font-display text-3xl text-ink">{office.city}</h3>
                    {office.href ? (
                      <a href={office.href} className="mt-5 inline-block text-sm font-semibold text-ink-muted hover:text-violet">{office.phone}</a>
                    ) : (
                      <a href="mailto:info@globalfundreg.com" className="mt-5 inline-block text-sm font-semibold text-ink-muted hover:text-violet">Contact by email</a>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
