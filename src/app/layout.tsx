import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Fund Real Estate Group | Where Vision Meets Value",
  description:
    "Premier commercial real estate brokerage specializing in acquisitions, asset management, sales and leasing across Phoenix, Fort Lauderdale, and Chicago.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-parchment text-ink antialiased">
        <div className="grain-overlay" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
