"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const offices = [
  { city: "Phoenix", state: "AZ", phone: "(480) 462-7900", href: "tel:+14804627900", tag: "Southwest" },
  { city: "Fort Lauderdale", state: "FL", phone: "(954) 727-8066", href: "tel:+19547278066", tag: "Southeast" },
  { city: "Chicago MSA", state: "IL", phone: null, href: null, tag: "Midwest" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-parchment to-linen" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] border border-brass/[0.06] rounded-full" />
        <div className="absolute -bottom-20 right-20 w-[200px] h-[200px] bg-brass/[0.03] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 stagger-1">
              <div className="editorial-line" />
              <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                Contact
              </span>
            </div>

            <h1 className="mt-8 stagger-2">
              <span className="block font-serif text-display font-bold text-navy">
                Let&apos;s
              </span>
              <span className="block font-serif text-display italic font-medium text-brass">
                Connect.
              </span>
            </h1>

            <p className="mt-8 text-ink-muted text-lg sm:text-xl max-w-md font-sans stagger-3">
              We&apos;d love to hear from you. Reach out to start a conversation
              about your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT GRID ══════════ */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fog to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="border border-fog p-8 lg:p-12 bg-parchment">
                  <h2 className="font-serif text-3xl font-bold text-navy mb-2">
                    Send a Message
                  </h2>
                  <p className="text-ink-muted text-sm font-sans mb-10">
                    Fill out the form below and we&apos;ll respond within 24 hours.
                  </p>

                  {sent ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 mx-auto mb-5 border-2 border-brass rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                        Message Sent
                      </h3>
                      <p className="text-ink-muted font-sans">
                        Thank you for reaching out. We&apos;ll be in touch shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-ink-muted text-[11px] font-sans tracking-mega uppercase mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-fog text-ink text-base font-sans placeholder:text-ink-faint focus:border-brass focus:ring-0 outline-none transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-ink-muted text-[11px] font-sans tracking-mega uppercase mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-fog text-ink text-base font-sans placeholder:text-ink-faint focus:border-brass focus:ring-0 outline-none transition-colors duration-300"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-ink-muted text-[11px] font-sans tracking-mega uppercase mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-0 py-3 bg-transparent border-0 border-b border-fog text-ink text-base font-sans placeholder:text-ink-faint focus:border-brass focus:ring-0 outline-none transition-colors duration-300 resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group inline-flex items-center gap-3 px-10 py-4 bg-navy text-white font-sans text-[13px] tracking-mega uppercase hover:bg-navy-light transition-all duration-300"
                        >
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Offices sidebar */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="editorial-line" />
                  <span className="font-sans text-[11px] tracking-mega uppercase text-brass">
                    Our Offices
                  </span>
                </div>

                <div className="space-y-6">
                  {offices.map((o) => (
                    <div
                      key={o.city}
                      className="group p-6 lg:p-8 border border-fog bg-parchment hover:border-brass/30 hover:bg-white transition-all duration-400"
                    >
                      <span className="font-sans text-[10px] tracking-mega uppercase text-brass/60">
                        {o.tag}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-bold text-navy">
                        {o.city}
                        <span className="text-ink-faint font-normal">, {o.state}</span>
                      </h3>
                      {o.phone && (
                        <a
                          href={o.href!}
                          className="mt-2 inline-flex items-center gap-2 text-ink-muted text-sm font-sans hover:text-brass transition-colors duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          {o.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div className="mt-8 p-6 lg:p-8 border border-brass/20 bg-brass/[0.03]">
                  <span className="font-sans text-[10px] tracking-mega uppercase text-brass/60">
                    Email Us Directly
                  </span>
                  <a
                    href="mailto:info@globalfundreg.com"
                    className="mt-2 block font-serif text-lg font-semibold text-navy hover:text-brass transition-colors duration-300"
                  >
                    info@globalfundreg.com
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
