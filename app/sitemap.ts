// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SAT_CITIES, type CitySlug } from "@/constants/satCities";

const BASE_URL = "https://eduquest.org.in";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PAGES
// Use real ISO dates — not new Date() — so Google sees genuine freshness
// signals instead of "this entire site was updated today" on every build.
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/sat/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/act/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/ap/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/ucat/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/admissions/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about/`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/contact/`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/blog/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "daily",
    priority: 0.75,
  },

  // ── Legacy pages — hyphen URLs (not underscores) ────────────────────────
  // These keep existing backlink equity while /sat/[slug] builds authority.
  // Remove each one only after its /sat/[slug] canonical is fully indexed.
  {
    url: `${BASE_URL}/sat-coaching-classes-delhi/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${BASE_URL}/sat-coaching-classes-mumbai/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/sat-coaching-classes-gurgaon/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    url: `${BASE_URL}/sat-coaching-classes-jaipur/`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly",
    priority: 0.82,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PER-CITY PRIORITY TABLE
// /sat/[slug] routes are canonical going forward — they get the full priority.
// Legacy /sat-coaching-classes-[slug] routes get canonical priority − 0.03
// to signal to Google which URL to prefer.
// ─────────────────────────────────────────────────────────────────────────────
const CITY_PRIORITY: Record<CitySlug, number> = {
  delhi: 0.92,
  gurgaon: 0.92,
  mumbai: 0.90,
  bangalore: 0.88,
  noida: 0.85,
  hyderabad: 0.85,
  chennai: 0.84,
  pune: 0.83,
  jaipur: 0.83,
  chandigarh: 0.80,
  lucknow: 0.79,
  kolkata: 0.82,
  indore: 0.78,
  ahmedabad: 0.80,
  dehradun: 0.79,
  us: 0.88,
  uk: 0.85,
  uae: 0.87,
  singapore: 0.84,
  "saudi-arabia": 0.82,
  nigeria: 0.76,
  mauritius: 0.74,
  nepal: 0.78,
  sharjah: 0.80,
};

// ─────────────────────────────────────────────────────────────────────────────
// /sat/[slug]/ — CANONICAL routes going forward
// Higher priority than legacy equivalents.
// ─────────────────────────────────────────────────────────────────────────────
function generateSATDynamicRoutes(): MetadataRoute.Sitemap {
  return (Object.keys(SAT_CITIES) as CitySlug[]).map((slug) => ({
    url: `${BASE_URL}/sat/${slug}/`,
    lastModified: new Date(SAT_CITIES[slug].lastUpdated),
    changeFrequency: "monthly" as const,
    priority: CITY_PRIORITY[slug] ?? 0.75,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// /sat-coaching-classes-[slug]/ — LEGACY routes
// Lower priority than canonical /sat/[slug] equivalents.
// Each of these should also have a <link rel="canonical"> pointing to
// /sat/[slug]/ so Google consolidates signals on the right URL.
// ─────────────────────────────────────────────────────────────────────────────
function generateSATLegacyCityPages(): MetadataRoute.Sitemap {
  return (Object.keys(SAT_CITIES) as CitySlug[]).map((slug) => ({
    url: `${BASE_URL}/sat-coaching-classes-${slug}/`,
    lastModified: new Date(SAT_CITIES[slug].lastUpdated),
    changeFrequency: "monthly" as const,
    // Deliberately 0.03 below the canonical route
    priority: Math.max((CITY_PRIORITY[slug] ?? 0.75) - 0.03, 0.1),
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PAGES,
    ...generateSATDynamicRoutes(),    // canonical /sat/[slug]/ — higher priority
    ...generateSATLegacyCityPages(),  // legacy /sat-coaching-classes-[slug]/ — lower priority
  ];
}