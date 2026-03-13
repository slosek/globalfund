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
      {/* ══ HERO ══ */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-electric/[0.05] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-medium stagger-1">
            Contact
          </span>

          <h1 className="mt-8 font-display text-hero font-extrabold text-ink stagger-2">
            Let&apos;s<br /><span className="text-electric">connect.</span>
          </h1>

          <p className="mt-6 text-ink-muted text-lg sm:text-xl max-w-md stagger-3">
            Reach out to start a conversation about your real estate goals.
          </p>
        </div>
      </section>

      {/* ══ FORM + OFFICES ══ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm">
                  <h2 className="font-display text-2xl font-bold text-ink mb-1">Send a message</h2>
                  <p className="text-ink-faint text-sm mb-8">We&apos;ll respond within 24 hours.</p>

                  {sent ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 mx-auto mb-4 bg-emerald/10 rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink mb-2">Message sent!</h3>
                      <p className="text-ink-muted">We&apos;ll be in touch shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-ink-muted text-sm font-medium mb-1.5">Full Name</label>
                        <input
                          type="text" id="name" required value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-ink placeholder:text-gray-400 focus:border-electric focus:ring-2 focus:ring-electric/10 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-ink-muted text-sm font-medium mb-1.5">Email Address</label>
                        <input
                          type="email" id="email" required value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-ink placeholder:text-gray-400 focus:border-electric focus:ring-2 focus:ring-electric/10 outline-none transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-ink-muted text-sm font-medium mb-1.5">Message</label>
                        <textarea
                          id="message" required rows={5} value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-ink placeholder:text-gray-400 focus:border-electric focus:ring-2 focus:ring-electric/10 outline-none transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 px-8 py-3.5 bg-electric text-white text-sm font-semibold rounded-full hover:bg-electric-dark hover:shadow-lg hover:shadow-electric/25 transition-all duration-300"
                      >
                        Send Message
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Offices */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <span className="text-electric text-sm font-semibold">Our Offices</span>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink mb-6">Find us</h2>

                <div className="space-y-3">
                  {offices.map((o) => (
                    <div key={o.city} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-electric/20 hover:shadow-md transition-all duration-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-electric/10 text-electric text-[11px] font-semibold mb-2">{o.tag}</span>
                      <h3 className="font-display text-lg font-bold text-ink">
                        {o.city}<span className="text-ink-faint font-normal">, {o.state}</span>
                      </h3>
                      {o.phone && (
                        <a href={o.href!} className="mt-1.5 inline-block text-ink-muted text-sm hover:text-electric transition-colors">{o.phone}</a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-electric/5 rounded-2xl p-6 border border-electric/10">
                  <span className="text-electric text-xs font-semibold uppercase tracking-wide">Email Us</span>
                  <a href="mailto:info@globalfundreg.com" className="block mt-1 font-display text-lg font-semibold text-ink hover:text-electric transition-colors">
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
