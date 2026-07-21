import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globalfundreg.com"),
  title: {
    default: "Global Fund Real Estate Group",
    template: "%s | Global Fund Real Estate Group",
  },
  description:
    "Commercial real estate acquisitions, sales, leasing, and asset management across Phoenix, South Florida, and the Chicago MSA.",
  openGraph: {
    title: "Global Fund Real Estate Group",
    description:
      "Commercial real estate expertise across three high-opportunity markets.",
    url: "https://globalfundreg.com",
    siteName: "Global Fund Real Estate Group",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Global Fund Real Estate Group — Commercial real estate, made valuable.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Fund Real Estate Group",
    description:
      "Commercial real estate expertise across three high-opportunity markets.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-stone-50 text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
