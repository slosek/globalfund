"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const offices = [
  { city: "Phoenix", state: "AZ", phone: "(480) 462-7900", href: "tel:+14804627900", region: "Southwest" },
  { city: "Fort Lauderdale", state: "FL", phone: "(954) 727-8066", href: "tel:+19547278066", region: "Southeast" },
  { city: "Chicago MSA", state: "IL", phone: null, href: null, region: "Midwest" },
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
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-br from-blue-50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent text-sm font-display font-medium rounded-full stagger-1">
            Contact
          </span>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight stagger-2">
            <span className="text-ink">Get in</span>
            <br />
            <span className="accent-text">Touch</span>
          </h1>

          <p className="mt-6 text-stone text-lg sm:text-xl max-w-lg stagger-3">
            Contact us for expert real estate services. Start your journey with
            Global Fund Real Estate Group.
          </p>
        </div>
      </section>

      {/* ── FORM + OFFICES ── */}
      <section className="py-20 lg:py-28 bg-snow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-8 lg:p-12 border border-cloud shadow-sm">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
                    Send a <span className="accent-text">Message</span>
                  </h2>

                  {sent ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink mb-2">Message Sent!</h3>
                      <p className="text-stone">We&apos;ll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-ink-muted text-sm font-display font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-snow border border-cloud rounded-xl text-ink placeholder:text-silver focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-ink-muted text-sm font-display font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-snow border border-cloud rounded-xl text-ink placeholder:text-silver focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-ink-muted text-sm font-display font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3.5 bg-snow border border-cloud rounded-xl text-ink placeholder:text-silver focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-10 py-3.5 bg-accent text-white font-display font-semibold rounded-xl hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
                  Our <span className="accent-text">Offices</span>
                </h2>

                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.city} className="bg-white rounded-2xl p-6 border border-cloud hover:shadow-md transition-all duration-300">
                      <span className="text-accent/50 text-xs font-display font-semibold tracking-widest uppercase">
                        {o.region}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">
                        {o.city}<span className="text-stone font-normal">, {o.state}</span>
                      </h3>
                      {o.phone && (
                        <a href={o.href!} className="block mt-2 text-stone hover:text-accent transition-colors text-sm">
                          {o.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-accent/5 rounded-2xl p-6 border border-accent/10">
                  <span className="text-accent/50 text-xs font-display font-semibold tracking-widest uppercase">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@globalfundreg.com"
                    className="block mt-1 font-display text-lg font-semibold text-accent hover:text-accent-dark transition-colors"
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
