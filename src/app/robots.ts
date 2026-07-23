import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portal", "/api/auth"],
    },
    sitemap: "https://globalfundreg.com/sitemap.xml",
  };
}
