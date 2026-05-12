import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // API routes — not pages
          "/edupath",     // Dashboard/tool — noindex
          "/_next/",      // Next.js internal assets
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],  // Block AI crawlers if desired
      },
    ],
    sitemap: "https://app.eduquest.org.in/sitemap.xml",
  };
}