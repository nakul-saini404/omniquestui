// app/sat/[city]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SAT_CITIES,
  type CitySlug,
  buildAggregateRatingSchema,
  buildEventSchema,
} from "@/constants/satCities";
import SATCityPage from "@/components/sat/sat_city/SATCityPage";
import "../global.css";

const BASE_URL = "https://eduquest.org.in";

// ─── Shared keyword base appended to every city's own keywords ────────────────
const GLOBAL_SAT_KEYWORDS = [
  "Digital SAT 2026",
  "SAT exam 2026",
  "SAT coaching India",
  "SAT preparation",
  "SAT score 1570",
  "SAT score 1600",
  "best SAT coaching",
  "SAT online coaching",
  "SAT adaptive test",
  "Bluebook SAT",
  "SAT Reading Writing",
  "SAT Math",
  "SAT mock test",
  "SAT practice test",
  "SAT diagnostic test",
  "SAT study material",
  "SAT exam pattern 2026",
  "SAT test date 2026",
  "SAT registration 2026",
  "College Board SAT",
  "EduQuest SAT",
  "EduQuest coaching",
  "US university admissions",
  "study abroad coaching India",
  "international university admissions",
  "SAT score improvement",
  "SAT 1-on-1 coaching",
  "SAT group coaching",
  "SAT hybrid coaching",
  "SAT crash course",
];

// ─── Schema builders ──────────────────────────────────────────────────────────

function buildFaqSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function buildBreadcrumbSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "SAT Coaching", item: `${BASE_URL}/sat/` },
      {
        "@type": "ListItem",
        position: 3,
        name: `SAT Coaching in ${data.city}`,
        item: data.canonicalUrl,
      },
    ],
  };
}

function buildLocalBusinessSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  const isIndiaCity = data.countryCode === "IN";
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EduQuest",
    alternateName: `EduQuest SAT Coaching ${data.city}`,
    url: BASE_URL,
    logo: `${BASE_URL}/wp-content/uploads/eduquest-logo.png`,
    image: `${BASE_URL}/wp-content/uploads/eduquest-og.jpg`,
    description: `India's premier SAT, ACT, AP, UCAT, and global admissions strategy firm. Coaching students in ${data.city} for Digital SAT 2026.`,
    telephone: "+91-9958041888",
    email: "contact@eduquest.org.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-45, First Floor, South City II, Sector 50",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122018",
      addressCountry: "IN",
    },
    areaServed: isIndiaCity
      ? { "@type": "City", name: data.city }
      : { "@type": "Country", name: data.country },
    sameAs: [
      "https://www.facebook.com/eduquestind/",
      "https://twitter.com/eduquest1",
      "https://www.instagram.com/eduquest_education_",
      "https://www.linkedin.com/company/eduquest-learning-centre/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue.toString(),
      reviewCount: data.aggregateRating.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

function buildCourseSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  const isIndian = data.countryCode === "IN";
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `SAT Coaching in ${data.city} — Digital SAT 2026`,
    description: data.metaDescription,
    url: data.canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "EduQuest",
      sameAs: BASE_URL,
    },
    educationalLevel: "HighSchool",
    teaches: "Digital SAT — Reading & Writing, Math",
    courseMode: ["online", "blended"],
    inLanguage: "en",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        name: `Online Live SAT Coaching for ${data.city} Students`,
        instructor: { "@type": "Organization", name: "EduQuest Faculty" },
        offers: {
          "@type": "Offer",
          price: isIndian ? "50000" : "600",
          priceCurrency: isIndian ? "INR" : "USD",
          availability: "https://schema.org/InStock",
          url: data.canonicalUrl,
          validFrom: "2026-01-01",
        },
      },
      {
        "@type": "CourseInstance",
        courseMode: "blended",
        name: "Hybrid SAT Coaching — Online + Gurgaon Centre",
        instructor: { "@type": "Organization", name: "EduQuest Faculty" },
        offers: {
          "@type": "Offer",
          price: "70000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: data.canonicalUrl,
          validFrom: "2026-01-01",
        },
      },
    ],
  };
}

// NEW: WebPage schema — adds dateModified & about entities
function buildWebPageSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    url: data.canonicalUrl,
    description: data.metaDescription,
    inLanguage: "en",
    datePublished: "2024-01-01",
    dateModified: data.lastUpdated,
    isPartOf: {
      "@type": "WebSite",
      name: "EduQuest",
      url: BASE_URL,
    },
    about: [
      { "@type": "Thing", name: "Digital SAT 2026" },
      { "@type": "Thing", name: `SAT Coaching in ${data.city}` },
      { "@type": "Thing", name: "US University Admissions" },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",         item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "SAT Coaching", item: `${BASE_URL}/sat/` },
        { "@type": "ListItem", position: 3, name: `SAT Coaching in ${data.city}`, item: data.canonicalUrl },
      ],
    },
  };
}

// NEW: Product+Review schema — surfaces rich star snippets in SERPs
function buildReviewSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `EduQuest SAT Coaching — ${data.city}`,
    description: data.metaDescription,
    url: data.canonicalUrl,
    brand: { "@type": "Brand", name: "EduQuest" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue.toString(),
      reviewCount: data.aggregateRating.reviewCount.toString(),
      bestRating: data.aggregateRating.bestRating.toString(),
      worstRating: data.aggregateRating.worstRating.toString(),
    },
    review: data.testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      datePublished: `${t.year}-06-01`,
      itemReviewed: {
        "@type": "EducationalOrganization",
        name: "EduQuest",
        url: BASE_URL,
      },
    })),
  };
}

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(SAT_CITIES).map((slug) => ({ city: slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const slug = params.city as CitySlug;
  const data = SAT_CITIES[slug];
  if (!data) return { title: "SAT Coaching | EduQuest" };

  // Merge city-specific keywords + global base, deduplicated
  const mergedKeywords = Array.from(
    new Set([...data.keywords, ...GLOBAL_SAT_KEYWORDS])
  );

  const hreflangAlternates: Record<string, string> = {
    "x-default": data.canonicalUrl,
    en: data.canonicalUrl,
  };
  if (data.countryCode === "IN") hreflangAlternates["en-IN"] = data.canonicalUrl;
  if (data.countryCode === "US") hreflangAlternates["en-US"] = data.canonicalUrl;
  if (data.countryCode === "GB") hreflangAlternates["en-GB"] = data.canonicalUrl;
  if (data.countryCode === "AE") hreflangAlternates["en-AE"] = data.canonicalUrl;
  if (data.countryCode === "SG") hreflangAlternates["en-SG"] = data.canonicalUrl;
  if (data.countryCode === "SA") hreflangAlternates["en-SA"] = data.canonicalUrl;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: mergedKeywords,
    authors: [{ name: "EduQuest", url: BASE_URL }],
    creator: "EduQuest",
    publisher: "EduQuest",
    category: "Education",
    openGraph: {
      title: data.metaTitle,
      description: data.ogDescription,
      url: data.canonicalUrl,
      siteName: "EduQuest",
      locale: data.countryCode === "IN" ? "en_IN" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/wp-content/uploads/eduquest-og.jpg`,
          width: 1200,
          height: 630,
          alt: `SAT Coaching in ${data.city} — EduQuest | Score 1570+`,
          type: "image/jpeg",
        },
        {
          url: `${BASE_URL}/wp-content/uploads/eduquest-og-square.jpg`,
          width: 600,
          height: 600,
          alt: `EduQuest SAT Coaching ${data.city}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.ogDescription,
      site: "@eduquest1",
      creator: "@eduquest1",
      images: [`${BASE_URL}/wp-content/uploads/eduquest-og.jpg`],
    },
    alternates: {
      canonical: data.canonicalUrl,
      languages: hreflangAlternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    },
    other: {
      "article:modified_time": data.lastUpdated,
      "article:published_time": "2024-01-01",
    },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function SATCityRoute({ params }: { params: { city: string } }) {
  const slug = params.city as CitySlug;
  const data = SAT_CITIES[slug];

  if (!data) notFound();

  const schemas = [
    buildFaqSchema(slug),
    buildBreadcrumbSchema(slug),
    buildLocalBusinessSchema(slug),
    buildCourseSchema(slug),
    buildAggregateRatingSchema(data),
    buildEventSchema(data),
    buildWebPageSchema(slug),  // NEW
    buildReviewSchema(slug),   // NEW
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SATCityPage data={data} />
    </>
  );
}