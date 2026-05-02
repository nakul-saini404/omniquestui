import type { Metadata } from "next";
import UCAT from "./ucat";

export const metadata: Metadata = {
  title: "UCAT 2026 Complete Guide for Indian Students | Score 2400+ | EduQuest",
  description:
    "Master UCAT 2026 with EduQuest — exam pattern, 2026 changes (Abstract Reasoning removed), score targets, prep timeline & expert coaching for UK, Australia & New Zealand medical schools.",
  keywords: [
    "UCAT 2026",
    "UCAT coaching India",
    "UCAT exam pattern 2026",
    "UCAT preparation",
    "UCAT for Indian students",
    "UCAT UK",
    "UCAT ANZ",
    "UK medical school admissions",
    "Australia medical school admissions",
    "MBBS abroad",
    "EduQuest UCAT",
    "UCAT score 2400",
    "UCAT coaching Gurgaon",
    "online UCAT coaching",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/ucat/",
    languages: {
      "x-default": "https://eduquest.org.in/ucat/",
      "en": "https://eduquest.org.in/ucat/",
      "en-IN": "https://eduquest.org.in/ucat/",
    },
  },
  openGraph: {
    title: "UCAT 2026 Complete Guide | Score 2400+ | EduQuest",
    description:
      "All-in-one UCAT 2026 guide — 2026 changes, score targets, prep strategy & expert coaching for UK, Australia & NZ medical schools.",
    url: "https://eduquest.org.in/ucat/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest UCAT 2026 Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UCAT 2026 Complete Guide | EduQuest",
    description:
      "Master UCAT 2026 — exam pattern, 2026 changes, score strategy & coaching for UK/Australia/NZ medical schools.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// ── Structured Data ───────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the UCAT exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The University Clinical Aptitude Test (UCAT) is a standardised aptitude test used by medical and dental schools across the UK, Australia and New Zealand. It tests critical thinking, logical reasoning, decision-making and situational judgement.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major changes in UCAT 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abstract Reasoning has been completely removed from UCAT 2026. The scoring scale has been reduced from 3600 to 2700. The remaining sections are Verbal Reasoning, Decision Making, Quantitative Reasoning, and Situational Judgement.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good UCAT score for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On the new 2700 scale: 2400+ is elite (Oxford, Cambridge, UCL); 2100–2400 is competitive for most top UK and Australian schools; 1800–2100 is still competitive for many universities. Always aim for Band 1 or 2 in Situational Judgement.",
      },
    },
    {
      "@type": "Question",
      name: "UCAT UK vs UCAT ANZ — which should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If targeting only UK medical schools, take UCAT UK. For flexibility across Australia, New Zealand, and the UK, UCAT ANZ is the smarter choice — it has earlier deadlines and broader acceptance.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I prepare for UCAT 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends 3–6 months of structured preparation. Begin with a diagnostic test, work section-by-section, then do full mock tests in the final 6–8 weeks.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://eduquest.org.in/" },
    { "@type": "ListItem", position: 2, name: "UCAT Coaching", item: "https://eduquest.org.in/ucat/" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "UCAT 2026 Coaching — EduQuest",
  description:
    "Expert UCAT 2026 coaching for Indian students targeting UK, Australia & New Zealand medical schools.",
  url: "https://eduquest.org.in/ucat/",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};


export default function UCATPage() {
  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <UCAT />
    </>
  );
}
