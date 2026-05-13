// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SAT_CITIES, type CitySlug } from "@/constants/satCities";

const BASE_URL = "https://app.eduquest.org.in";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PAGES — Every real page in the app/ directory
// Use real ISO dates so Google sees genuine freshness signals
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_PAGES: MetadataRoute.Sitemap = [
  // ── Homepage & brand pages ────────────────────────────────────────────────
  { url: `${BASE_URL}/`,                                                   lastModified: new Date("2026-05-12"), changeFrequency: "weekly",   priority: 1.0  },
  { url: `${BASE_URL}/omniquest`,                                          lastModified: new Date("2026-05-12"), changeFrequency: "weekly",   priority: 0.95 },
  { url: `${BASE_URL}/eduQuest`,                                           lastModified: new Date("2026-05-12"), changeFrequency: "weekly",   priority: 0.95 },
  { url: `${BASE_URL}/about-us`,                                           lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.90 },

  // ── Core test coaching pages ──────────────────────────────────────────────
  { url: `${BASE_URL}/sat`,                                                lastModified: new Date("2026-05-12"), changeFrequency: "weekly",   priority: 0.95 },
  { url: `${BASE_URL}/act`,                                                lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.90 },
  { url: `${BASE_URL}/ap-coaching`,                                        lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.88 },
  { url: `${BASE_URL}/pre-ap-gurgaon`,                                     lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },
  { url: `${BASE_URL}/psat`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },
  { url: `${BASE_URL}/ssat`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },

  // ── English proficiency tests ─────────────────────────────────────────────
  { url: `${BASE_URL}/ielts`,                                              lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.90 },
  { url: `${BASE_URL}/toefl`,                                              lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.88 },
  { url: `${BASE_URL}/pte`,                                                lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.88 },

  // ── Medical & law entrance exams ──────────────────────────────────────────
  { url: `${BASE_URL}/ucat`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },
  { url: `${BASE_URL}/mcat`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },
  { url: `${BASE_URL}/lsat`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },
  { url: `${BASE_URL}/tmua`,                                               lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.80 },

  // ── Admissions & profile building ─────────────────────────────────────────
  { url: `${BASE_URL}/dasa-and-ciwg-quota`,                                lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },
  { url: `${BASE_URL}/ipmat-coaching-and-profile-building-eduquest-2026`,   lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },
  { url: `${BASE_URL}/eduquest-guide`,                                     lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },

  // ── SAT city-specific standalone pages ────────────────────────────────────
  { url: `${BASE_URL}/sat_delhi`,                                          lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.88 },
  { url: `${BASE_URL}/sat_gurgaon`,                                        lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.88 },
  { url: `${BASE_URL}/sat_mumbai`,                                         lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },
  { url: `${BASE_URL}/sat_jaipur`,                                         lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.82 },
  { url: `${BASE_URL}/sat_us`,                                             lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.85 },

  // ── Tools & interactive pages ─────────────────────────────────────────────
  { url: `${BASE_URL}/personality-test`,                                   lastModified: new Date("2026-05-12"), changeFrequency: "monthly",  priority: 0.78 },

  // ── Online Home Tuition ─────────────────────────────────────────────────────
  { url: `${BASE_URL}/online-home-tuition`,                                lastModified: new Date("2026-05-13"), changeFrequency: "monthly",  priority: 0.88 },

  // ── Contact ───────────────────────────────────────────────────────────────
  { url: `${BASE_URL}/contact-us`,                                         lastModified: new Date("2026-05-12"), changeFrequency: "yearly",   priority: 0.65 },
];

// ─────────────────────────────────────────────────────────────────────────────
// PER-CITY PRIORITY TABLE — /sat/[city] dynamic routes
// ─────────────────────────────────────────────────────────────────────────────
const CITY_PRIORITY: Record<CitySlug, number> = {
  delhi:          0.92,
  gurgaon:        0.92,
  mumbai:         0.90,
  bangalore:      0.88,
  noida:          0.85,
  hyderabad:      0.85,
  chennai:        0.84,
  pune:           0.83,
  jaipur:         0.83,
  chandigarh:     0.80,
  lucknow:        0.79,
  kolkata:        0.82,
  indore:         0.78,
  ahmedabad:      0.80,
  dehradun:       0.79,
  us:             0.88,
  uk:             0.85,
  uae:            0.87,
  singapore:      0.84,
  "saudi-arabia": 0.82,
  nigeria:        0.76,
  mauritius:      0.74,
  nepal:          0.78,
  sharjah:        0.80,
};

// ─────────────────────────────────────────────────────────────────────────────
// /sat/[city]/ — Dynamic SAT city routes from constants/satCities
// ─────────────────────────────────────────────────────────────────────────────
function generateSATDynamicRoutes(): MetadataRoute.Sitemap {
  return (Object.keys(SAT_CITIES) as CitySlug[]).map((slug) => ({
    url: `${BASE_URL}/sat/${slug}`,
    lastModified: new Date(SAT_CITIES[slug].lastUpdated),
    changeFrequency: "monthly" as const,
    priority: CITY_PRIORITY[slug] ?? 0.75,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PAGES,
    ...generateSATDynamicRoutes(),
  ];
}