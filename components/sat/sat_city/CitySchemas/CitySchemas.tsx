// components/sat_city/CitySchemas/CitySchemas.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Injects all JSON-LD structured data for every /sat/[city] page.
// All array accesses are guarded with ?? [] so stub / incomplete city
// entries never cause a runtime "Cannot read properties of undefined" error.
// ─────────────────────────────────────────────────────────────────────────────

import type { SATCityData } from "@/constants/satCities";
import { buildAggregateRatingSchema, buildEventSchema } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

export default function CitySchemas({ data }: Props) {
  // Early-exit guard — if data is somehow empty, render nothing
  if (!data?.city) return null;

  // ── Pricing helpers ───────────────────────────────────────────────────────
  const isIndia = data.countryCode === "IN";
  const isUAE   = data.countryCode === "AE";
  const isUS    = data.countryCode === "US";
  const isUK    = data.countryCode === "GB";
  const isSG    = data.countryCode === "SG";

  const currency     = isIndia ? "INR" : isUAE ? "AED" : isUS ? "USD" : isUK ? "GBP" : isSG ? "SGD" : "USD";
  const basePrice    = isIndia ? "45000" : isUAE ? "2200" : isUS ? "600" : isUK ? "450" : isSG ? "700" : "550";
  const premiumPrice = isIndia ? "50000" : isUAE ? "2500" : isUS ? "600" : isUK ? "500" : isSG ? "800" : "600";

  // ── 1. FAQPage Schema ─────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (data.faqs ?? []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // ── 2. Course Schema ──────────────────────────────────────────────────────
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `SAT Coaching in ${data.city}`,
    description: data.metaDescription ?? "",
    url: data.canonicalUrl ?? "",
    dateModified: data.lastUpdated ?? "",
    provider: {
      "@type": "Organization",
      name: "EduQuest",
      sameAs: "https://eduquest.org.in",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        name: `Online Live SAT Coaching ${data.city}`,
        offers: {
          "@type": "Offer",
          price: basePrice,
          priceCurrency: currency,
          availability: "https://schema.org/InStock",
          url: data.canonicalUrl ?? "",
        },
      },
      {
        "@type": "CourseInstance",
        courseMode: "online",
        name: `Online 1-on-1 SAT Coaching ${data.city}`,
        offers: {
          "@type": "Offer",
          price: premiumPrice,
          priceCurrency: currency,
          availability: "https://schema.org/InStock",
          url: data.canonicalUrl ?? "",
        },
      },
      ...(["gurgaon", "delhi", "bangalore", "noida"].includes(data.slug)
        ? [
            {
              "@type": "CourseInstance",
              courseMode: "onsite",
              name: `In-Person SAT Coaching ${data.city}`,
              location: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: data.city,
                  addressRegion: data.country === "India" ? data.city : undefined,
                  addressCountry: data.countryCode,
                },
              },
              offers: {
                "@type": "Offer",
                price: isIndia ? "55000" : premiumPrice,
                priceCurrency: currency,
                availability: "https://schema.org/InStock",
                url: data.canonicalUrl ?? "",
              },
            },
          ]
        : []),
    ],
  };

  // ── 3. AggregateRating + Review Schema ────────────────────────────────────
  const aggregateRatingSchema = buildAggregateRatingSchema(data);

  // ── 4. BreadcrumbList Schema ──────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "SAT Coaching", item: "https://eduquest.org.in/sat/" },
      { "@type": "ListItem", position: 3, name: `SAT Coaching in ${data.city}`, item: data.canonicalUrl ?? "" },
    ],
  };

  // ── 5. Event Schema (Free Diagnostic) ─────────────────────────────────────
  const eventSchema = buildEventSchema(data);

  // ── 6. LocalBusiness / EducationalOrganization Schema ─────────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `EduQuest SAT Coaching ${data.city}`,
    url: data.canonicalUrl ?? "",
    sameAs: "https://eduquest.org.in",
    description: data.metaDescription ?? "",
    dateModified: data.lastUpdated ?? "",
    image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
    telephone: "+91-9999-EDUQUEST",
    areaServed: buildAreaServed(data),
    // Guard aggregateRating — stub entries won't have it
    ...(data.aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: data.aggregateRating.ratingValue.toString(),
            reviewCount: data.aggregateRating.reviewCount.toString(),
            bestRating:  data.aggregateRating.bestRating.toString(),
            worstRating: data.aggregateRating.worstRating.toString(),
          },
        }
      : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `SAT Coaching Programs ${data.city}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Course", name: `Digital SAT Coaching ${data.city}` },
          price: basePrice,
          priceCurrency: currency,
        },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function buildAreaServed(data: SATCityData): string | string[] {
  const areaMap: Partial<Record<string, string[]>> = {
    delhi:          ["Delhi", "Delhi NCR", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
    gurgaon:        ["Gurgaon", "Gurugram", "South Delhi", "Faridabad"],
    noida:          ["Noida", "Greater Noida", "Gurgaon"],
    jaipur:         ["Jaipur", "Rajasthan"],
    mumbai:         ["Mumbai", "Navi Mumbai", "Thane"],
    bangalore:      ["Bangalore", "Bengaluru", "Karnataka"],
    chennai:        ["Chennai", "Tamil Nadu"],
    hyderabad:      ["Hyderabad", "Telangana"],
    pune:           ["Pune", "Maharashtra"],
    chandigarh:     ["Chandigarh", "Mohali", "Panchkula"],
    lucknow:        ["Lucknow", "Uttar Pradesh"],
    kolkata:        ["Kolkata", "West Bengal"],
    indore:         ["Indore", "Madhya Pradesh"],
    ahmedabad:      ["Ahmedabad", "Gujarat", "Gandhinagar"],
    dehradun:       ["Dehradun", "Uttarakhand"],
    uae:            ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"],
    sharjah:        ["Sharjah", "Dubai", "UAE"],
    uk:             ["London", "Birmingham", "Manchester", "United Kingdom"],
    us:             ["New York", "New Jersey", "California", "Texas", "United States"],
    singapore:      ["Singapore"],
    nepal:          ["Kathmandu", "Nepal"],
    "saudi-arabia": ["Riyadh", "Jeddah", "Dammam", "Saudi Arabia"],
    nigeria:        ["Lagos", "Abuja", "Nigeria"],
    mauritius:      ["Mauritius"],
  };
  return areaMap[data.slug] ?? [data.city ?? "", data.country ?? ""];
}