import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";

const GTM_ID = "GTM-5JMVSNM";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
  verification: {
    google: "xASA6F5NUCWGpx7NyyMEbvM-enXCl6JU39yls1s6GOY",
  },
  openGraph: {
    title: "Global Fund Real Estate Group",
    description:
      "Commercial real estate, made valuable across Phoenix, South Florida, and the Chicago MSA.",
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
      "Commercial real estate, made valuable across Phoenix, South Florida, and the Chicago MSA.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w.gtag=w.gtag||function(){w[l].push(arguments);};w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="bg-stone-50 text-ink antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            className="hidden invisible"
            title="Google Tag Manager"
          />
        </noscript>
        <Analytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
