import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";

// ── Add every page you want to audit here ────────────────────────────────────
const PAGES = [
  "https://eduquest.org.in/",
  "https://eduquest.org.in/sat/",
  "https://eduquest.org.in/about-us/",
  "https://eduquest.org.in/contact-us/",
];

async function scrapePage(url) {
  const res  = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SEO-audit/1.0)" }
  });
  const html = await res.text();
  const $    = cheerio.load(html);

  const title       = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content") ?? "";
  const canonical   = $('link[rel="canonical"]').attr("href") ?? "";
  const robots      = $('meta[name="robots"]').attr("content") ?? "";

  const og = {};
  $('meta[property^="og:"]').each((_, el) => {
    const key = $(el).attr("property");
    const val = $(el).attr("content");
    if (key && val) og[key] = val;
  });

  const twitter = {};
  $('meta[name^="twitter:"]').each((_, el) => {
    const key = $(el).attr("name");
    const val = $(el).attr("content");
    if (key && val) twitter[key] = val;
  });

  const schemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      schemas.push(JSON.parse($(el).html() ?? "{}"));
    } catch {
      schemas.push({ raw: $(el).html() });
    }
  });

  return { url, title, description, canonical, robots, og, twitter, schemas };
}

function generateMetadataCode(data) {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(data.title)},
  description: ${JSON.stringify(data.description)},
  alternates: {
    canonical: ${JSON.stringify(data.canonical)},
  },
  openGraph: {
    title: ${JSON.stringify(data.og["og:title"] ?? data.title)},
    description: ${JSON.stringify(data.og["og:description"] ?? data.description)},
    url: ${JSON.stringify(data.og["og:url"] ?? data.url)},
    siteName: ${JSON.stringify(data.og["og:site_name"] ?? "EduQuest")},
    images: [
      {
        url: ${JSON.stringify(data.og["og:image"] ?? "")},
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(data.twitter["twitter:title"] ?? data.title)},
    description: ${JSON.stringify(data.twitter["twitter:description"] ?? data.description)},
    images: [${JSON.stringify(data.og["og:image"] ?? "")}],
  },
  robots: ${JSON.stringify(data.robots || "index, follow")},
};
`;
}

async function main() {
  console.log(`\nAuditing ${PAGES.length} page(s)...\n`);

  const results = [];

  for (const url of PAGES) {
    process.stdout.write(`  Fetching ${url} ... `);
    try {
      const data = await scrapePage(url);
      results.push(data);
      console.log("done");
    } catch (err) {
      console.log("FAILED —", err.message);
    }
  }

  // ── Save full audit JSON ──────────────────────────────────────────────────
  fs.writeFileSync("seo-audit.json", JSON.stringify(results, null, 2));
  console.log("\n  Saved → seo-audit.json");

  // ── Save one metadata .ts file per page ───────────────────────────────────
  for (const data of results) {
    const slug =
      new URL(data.url).pathname
        .replace(/\//g, "-")
        .replace(/^-|-$/g, "") || "home";

    const filename = `seo-metadata-${slug}.ts`;
    fs.writeFileSync(filename, generateMetadataCode(data));
    console.log(`  Saved → ${filename}`);
  }

  // ── Print readable summary ────────────────────────────────────────────────
  console.log("\n══════════════════════════════════════════════════\n");
  for (const r of results) {
    console.log(`URL         : ${r.url}`);
    console.log(`Title       : ${r.title}`);
    console.log(`Description : ${r.description?.slice(0, 80)}...`);
    console.log(`Canonical   : ${r.canonical}`);
    console.log(`OG Image    : ${r.og["og:image"] ?? "none"}`);
    console.log(`Robots      : ${r.robots}`);
    console.log(`Schemas     : ${r.schemas.length} block(s)`);
    console.log("──────────────────────────────────────────────────\n");
  }

  console.log("Done. Check seo-audit.json for full data.");
  console.log("Check seo-metadata-*.ts files to paste into your Next.js pages.\n");
}

main();