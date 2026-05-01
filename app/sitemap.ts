// app/sitemap.ts
import { MetadataRoute } from "next";
import { SAT_CITIES, type CitySlug } from "@/constants/satCities";

const BASE_URL = "https://eduquest.org.in";

const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/sat/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.95,
  },
  {
    url: `${BASE_URL}/act/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/ap/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/ucat/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/admissions/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/contact/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/blog/`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.75,
  },
  {
    url: `${BASE_URL}/sat_delhi/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/sat_mumbai/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/sat_gurgaon/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${BASE_URL}/sat_jaipur/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.82,
  },
];

const CITY_PRIORITY: Record<CitySlug, number> = {
  delhi: 0.92,
  gurgaon: 0.92,
  mumbai: 0.9,
  bangalore: 0.88,
  noida: 0.85,
  hyderabad: 0.85,
  chennai: 0.84,
  pune: 0.83,
  jaipur: 0.83,
  chandigarh: 0.8,
  lucknow: 0.79,
  kolkata: 0.82,
  indore: 0.78,
  ahmedabad: 0.8,
  dehradun: 0.79,
  us: 0.88,
  uk: 0.85,
  uae: 0.87,
  singapore: 0.84,
  "saudi-arabia": 0.82,
  nigeria: 0.76,
  mauritius: 0.74,
  nepal: 0.78,
  sharjah: 0.8,
};

function generateSATCityPages(): MetadataRoute.Sitemap {
  return (Object.keys(SAT_CITIES) as CitySlug[]).map((slug) => ({
    url: `${BASE_URL}/sat-coaching-classes-${slug}/`,
    lastModified: new Date(SAT_CITIES[slug].lastUpdated),
    changeFrequency: "monthly" as const,
    priority: CITY_PRIORITY[slug] ?? 0.75,
  }));
}

function generateSATDynamicRoutes(): MetadataRoute.Sitemap {
  return (Object.keys(SAT_CITIES) as CitySlug[]).map((slug) => ({
    url: `${BASE_URL}/sat/${slug}/`,
    lastModified: new Date(SAT_CITIES[slug].lastUpdated),
    changeFrequency: "monthly" as const,
    priority: (CITY_PRIORITY[slug] ?? 0.75) - 0.02,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PAGES,
    ...generateSATCityPages(),
    ...generateSATDynamicRoutes(),
  ];
}