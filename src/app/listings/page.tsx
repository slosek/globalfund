import type { Metadata } from "next";
import ListingsEmbed from "@/components/ListingsEmbed";

export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Explore commercial properties represented by Global Fund Real Estate Group.",
};

export default function Listings() {
  return (
    <>
      <section className="bg-ink px-5 pb-20 pt-40 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-48">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow !text-white/50 reveal-1">Property listings</p>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <h1 className="font-display text-hero text-white reveal-2 lg:col-span-8">
              Find the right
              <span className="block italic text-white/55">opportunity.</span>
            </h1>
            <p className="max-w-md pb-2 text-base leading-8 text-white/55 reveal-3 lg:col-span-3 lg:col-start-10">
              Browse available commercial properties and open an individual listing for details and sharing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-10">
          <ListingsEmbed />
        </div>
      </section>
    </>
  );
}
