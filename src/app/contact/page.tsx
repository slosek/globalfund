import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Global Fund Real Estate Group in Phoenix, Fort Lauderdale, or the Chicago MSA.",
  alternates: {
    canonical: "/contact",
  },
};

const offices = [
  { city: "Phoenix", region: "Arizona", phone: "(480) 462-7900", href: "tel:+14804627900", image: "/images/retail-1.jpg", alt: "Phoenix commercial retail corridor" },
  { city: "Fort Lauderdale", region: "South Florida", phone: "(954) 727-8066", href: "tel:+19547278066", image: "/images/gallery-3.jpg", alt: "Fort Lauderdale waterfront and skyline" },
  { city: "Chicago MSA", region: "Illinois", phone: null, href: null, image: "/images/gallery-6.jpg", alt: "Chicago-area commercial office property" },
];

export default function Contact() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-ink pt-[85px] text-white">
        <Image src="/images/hero-v2.jpg" alt="Commercial real estate district at golden hour" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="ink-fade absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[595px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
          <p className="eyebrow !text-white/50 reveal-1">Start a conversation</p>
          <h1 className="mt-10 max-w-5xl font-display text-hero text-white reveal-2">Let&apos;s talk<br /><span className="spectrum-text italic">real estate.</span></h1>
          <p className="mt-9 max-w-lg text-base leading-8 text-white/62 reveal-3">Tell us about the property, requirement, or market question you are working through.</p>
        </div>
        <div className="spectrum-line absolute inset-x-0 bottom-0 h-1" />
      </section>

      <section className="bg-stone-50 py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <AnimatedSection className="lg:col-span-7">
            <p className="eyebrow">Send an inquiry</p>
            <h2 className="mt-8 max-w-3xl break-words font-display text-section text-ink">Give us the context.<br /><span className="italic text-ink-faint">We&apos;ll follow up directly.</span></h2>
            <div className="mt-12 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-float sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4 lg:col-start-9 lg:pt-20" delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-10">
              <p className="eyebrow !text-white/40">Direct contact</p>
              <a href="mailto:info@globalfundreg.com" className="mt-8 block break-all font-display text-[1.75rem] leading-none text-white transition-colors hover:text-gold sm:break-words sm:text-4xl">info@globalfundreg.com</a>
              <div className="spectrum-line mt-9 h-1 w-24 rounded-full" />
              <div className="mt-9 space-y-6 border-t border-white/15 pt-8">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Phoenix</p>
                  <a href="tel:+14804627900" className="mt-2 block text-sm text-white/70 hover:text-white">(480) 462-7900</a>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Fort Lauderdale</p>
                  <a href="tel:+19547278066" className="mt-2 block text-sm text-white/70 hover:text-white">(954) 727-8066</a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <AnimatedSection className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">Our markets</p>
              <h2 className="mt-8 font-display text-section text-ink">Three regions.<br /><span className="spectrum-text italic">One responsive team.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink-muted lg:col-span-3 lg:col-start-10">Reach the office closest to your opportunity, or email our team directly.</p>
          </AnimatedSection>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {offices.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 0.08}>
                <article className="card-lift image-zoom overflow-hidden rounded-[1.75rem] border border-ink/10 bg-stone-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={office.image} alt={office.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink-faint">{office.region}</p>
                      <span className="text-[10px] font-bold text-ink-faint">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 font-display text-5xl leading-none text-ink">{office.city}</h3>
                    {office.href ? <a href={office.href} className="mt-6 inline-block text-sm font-semibold text-ink-muted hover:text-violet">{office.phone} →</a> : <a href="mailto:info@globalfundreg.com" className="mt-6 inline-block text-sm font-semibold text-ink-muted hover:text-violet">Contact by email →</a>}
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
