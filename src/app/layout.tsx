import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Fund Real Estate Group | Acquisitions, Asset Management, Sales & Leasing",
  description:
    "Premier commercial real estate brokerage specializing in acquisitions, asset management, sales and leasing. Offices in Phoenix AZ, Fort Lauderdale FL, and Chicago MSA IL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
