import type { Metadata } from "next";
import { faqSchema, breadcrumbSchema, courseSchema, organizationSchema, webPageSchema } from "./apCoachingSchemas";
import APCOACHING from "./apCoaching";

export const metadata: Metadata = {
  title: "UCAT 2026 Complete Guide for Indian Students | Score 2400+ | EduQuest",
  description:
    "Master UCAT 2026 with EduQuest — exam pattern, 2026 changes (Abstract Reasoning removed), score targets, prep timeline & expert coaching for UK, Australia & New Zealand medical schools.",
  keywords: [
    // ── Core exam terms ──────────────────────────────────────────
    "UCAT 2026",
    "UCAT exam 2026",
    "UCAT test 2026",
    "UCAT syllabus 2026",
    "UCAT pattern 2026",
    "UCAT exam date 2026",
    "UCAT registration 2026",
    "UCAT score 2026",
    "UCAT score calculator",
    "UCAT cutoff 2026",
    "UCAT result 2026",
    "UCAT band 1 score",
    "UCAT 2700 scale",
    "UCAT abstract reasoning removed",
    "UCAT new format 2026",

    // ── Section-specific ─────────────────────────────────────────
    "UCAT verbal reasoning",
    "UCAT decision making",
    "UCAT quantitative reasoning",
    "UCAT situational judgement",
    "UCAT SJT band 1",
    "UCAT decision making tips",
    "UCAT quantitative reasoning practice",

    // ── Coaching & preparation ───────────────────────────────────
    "UCAT coaching India",
    "UCAT coaching Gurgaon",
    "UCAT coaching Delhi",
    "UCAT coaching online",
    "UCAT online classes India",
    "UCAT preparation India",
    "UCAT preparation tips",
    "UCAT preparation strategy",
    "UCAT mock test",
    "UCAT practice test",
    "UCAT free mock test",
    "UCAT study material",
    "UCAT preparation for Indian students",
    "best UCAT coaching India",
    "UCAT tutor India",
    "EduQuest UCAT coaching",
    "EduQuest UCAT 2026",

    // ── Geography — UK ───────────────────────────────────────────
    "UCAT UK",
    "UCAT UK 2026",
    "UCAT for UK medical schools",
    "UK medical school admission India",
    "UK MBBS for Indian students",
    "study medicine UK from India",
    "UCAT Oxford",
    "UCAT Cambridge",
    "UCAT UCL",
    "UCAT Imperial College",
    "UCAT King's College London",
    "UCAT Edinburgh",
    "UCAT Manchester",

    // ── Geography — Australia ────────────────────────────────────
    "UCAT ANZ",
    "UCAT ANZ 2026",
    "UCAT Australia",
    "UCAT for Australian medical schools",
    "Australia MBBS for Indian students",
    "study medicine Australia India",
    "UCAT University of Melbourne",
    "UCAT Monash University",
    "UCAT University of Sydney",
    "UCAT Queensland",

    // ── Geography — New Zealand ──────────────────────────────────
    "UCAT New Zealand",
    "UCAT NZ 2026",
    "New Zealand medical school admission",
    "UCAT University of Auckland",
    "UCAT Otago",

    // ── Competitor / alternatives ────────────────────────────────
    "UCAT vs NEET",
    "UCAT vs MCAT",
    "UCAT vs BMAT",
    "is UCAT hard",
    "UCAT difficulty level",
    "UCAT exam centres India",
    "UCAT exam fee India",
    "UCAT bursary India",

    // ── Broader MBBS abroad ──────────────────────────────────────
    "MBBS abroad for Indian students",
    "MBBS UK admission 2026",
    "MBBS Australia admission 2026",
    "medical school abroad India",
    "how to get into UK medical school",
    "how to get into Australian medical school",
    "international medical school admission",
    "medicine abroad counselling India",

    // ── Long-tail / informational ────────────────────────────────
    "what is UCAT exam",
    "UCAT 2026 changes",
    "how to prepare for UCAT 2026",
    "UCAT good score for Indian students",
    "UCAT score for Oxford",
    "UCAT score for Monash",
    "UCAT 2026 registration process India",
    "UCAT exam centres India 2026",
    "UCAT eligibility criteria",
    "UCAT age limit",
    "UCAT free guide",
    "UCAT guide for beginners",
    "UCAT 100 day plan",
    "UCAT 3 month preparation",
    "UCAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ucat/",
    languages: {
      "x-default": "https://eduquest.org.in/ucat/",
      en: "https://eduquest.org.in/ucat/",
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

export default function ApCoachingpage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <APCOACHING />
    </>
  );
}