import type { Metadata } from "next";
import Image from "next/image";
import ListingsEmbed from "@/components/ListingsEmbed";

export const metadata: Metadata = {
  title: "Property Listings",
  description: "Explore commercial properties represented by Global Fund Real Estate Group.",
  alternates: {
    canonical: "/listings",
  },
};

export default function Listings() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-ink pt-[85px] text-white">
        <Image src="/images/retail-1.jpg" alt="Commercial retail corridor" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="ink-fade absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[565px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
          <p className="eyebrow !text-white/50 reveal-1">Available properties</p>
          <h1 className="mt-10 max-w-5xl font-display text-hero text-white reveal-2">Find the right<br /><span className="spectrum-text italic">opportunity.</span></h1>
          <p className="mt-9 max-w-lg text-base leading-8 text-white/62 reveal-3">Browse current commercial properties and open an individual listing for details and sharing.</p>
        </div>
        <div className="spectrum-line absolute inset-x-0 bottom-0 h-1" />
      </section>

      <section className="bg-stone-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-3 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Current availability</p>
              <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Explore the portfolio</h2>
            </div>
            <p className="max-w-sm text-xs leading-6 text-ink-faint">Select a property for full details, location information, and sharing options.</p>
          </div>
          <ListingsEmbed />
        </div>
      </section>
    </>
  );
}
