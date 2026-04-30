// app/sat/[city]/page.tsx
// Dynamic route — handles ALL city/country pages e.g. /sat/jaipur, /sat/us, /sat/uk

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SAT_CITIES, type CitySlug } from "@/constants/satCities";
import SATCityPage from "@/components/sat/sat_city/SATCityPage";
import "../global.css";


// ─── Schema helpers ───────────────────────────────────────────────────────────

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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "SAT Coaching", item: "https://eduquest.org.in/sat/" },
      {
        "@type": "ListItem",
        position: 3,
        name: `SAT Coaching ${data.city}`,
        item: `https://eduquest.org.in/sat-coaching-classes-${slug}/`,
      },
    ],
  };
}

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EduQuest",
    url: "https://eduquest.org.in",
    description: "India's premier SAT, ACT, AP, UCAT and global admissions strategy firm.",
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
    sameAs: [
      "https://www.facebook.com/eduquestind/",
      "https://twitter.com/eduquest1",
      "https://www.instagram.com/eduquest_education_",
      "https://www.linkedin.com/company/eduquest-learning-centre/",
    ],
  };
}

function buildCourseSchema(slug: CitySlug) {
  const data = SAT_CITIES[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `SAT Coaching in ${data.city}`,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      name: "EduQuest",
      sameAs: "https://eduquest.org.in",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        name: `Online Live SAT Coaching for ${data.city} Students`,
        offers: {
          "@type": "Offer",
          price: "50000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "CourseInstance",
        courseMode: "blended",
        name: "Hybrid SAT Coaching — Online + Gurgaon Centre",
        offers: {
          "@type": "Offer",
          price: "70000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://eduquest.org.in/sat-coaching-classes-${slug}/`,
      siteName: "EduQuest",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
          width: 1200,
          height: 630,
          alt: `SAT Coaching in ${data.city} — EduQuest`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
    },
    alternates: {
      canonical: `https://eduquest.org.in/sat-coaching-classes-${slug}/`,
    },
    robots: { index: true, follow: true },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function SATCityRoute({ params }: { params: { city: string } }) {
  const slug = params.city as CitySlug;
  const data = SAT_CITIES[slug];

  if (!data) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(slug)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(slug)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCourseSchema(slug)) }}
      />
      <SATCityPage data={data} />
    </>
  );
}