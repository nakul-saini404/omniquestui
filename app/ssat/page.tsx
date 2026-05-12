// app/ssat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  ssatSectionListSchema,
} from "./ssatSchema";
import SSATCOACHING from "./ssat";

export const metadata: Metadata = {
  title: "SSAT Coaching for Indian Students | Top Percentile | EduQuest",
  description:
    "Ace the SSAT with EduQuest — India's leading SSAT coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for SSAT Verbal, Quantitative, Reading Comprehension and Writing. Trusted by students applying to top US & UK boarding schools.",
  keywords: [
    // ── Core SSAT exam terms ────────────────────────────────────────
    "SSAT exam",
    "SSAT exam 2025",
    "SSAT exam India",
    "SSAT exam dates 2025",
    "SSAT exam dates India 2025",
    "SSAT exam registration 2025",
    "SSAT exam registration India",
    "SSAT exam schedule 2025",
    "SSAT exam syllabus",
    "SSAT exam pattern",
    "SSAT exam fee India",
    "SSAT exam centres India",
    "SSAT exam score",
    "SSAT Upper Level score",
    "SSAT Middle Level score",
    "SSAT percentile 90",
    "SSAT percentile 95",
    "SSAT score calculator",
    "SSAT scoring scale",
    "SSAT percentile",
    "what is SSAT exam",
    "Secondary School Admission Test",
    "SSAT vs ISEE",
    "SSAT test format",
    "SSAT test sections",
    "SSAT test duration",
    "SSAT test day tips",

    // ── Section-specific — Verbal ─────────────────────────────────
    "SSAT Verbal",
    "SSAT Verbal synonyms",
    "SSAT Verbal analogies",
    "SSAT Verbal tips",
    "SSAT Verbal practice",
    "SSAT vocabulary list",

    // ── Section-specific — Quantitative ──────────────────────────────
    "SSAT Quantitative",
    "SSAT Math",
    "SSAT Math algebra",
    "SSAT Math geometry",
    "SSAT Math arithmetic",
    "SSAT Math tips",
    "SSAT Math practice",

    // ── Section-specific — Reading ─────────────────────────────────
    "SSAT Reading",
    "SSAT Reading Comprehension",
    "SSAT Reading passage types",
    "SSAT Reading tips",
    "SSAT Reading strategy",
    "SSAT Reading practice",

    // ── Section-specific — Writing ─────────────────────────────────
    "SSAT Writing",
    "SSAT Writing sample",
    "SSAT essay tips",
    "SSAT creative writing prompt",

    // ── Coaching & preparation ────────────────────────────────────
    "SSAT coaching India",
    "SSAT coaching Delhi",
    "SSAT coaching Gurgaon",
    "SSAT coaching Mumbai",
    "SSAT coaching Bangalore",
    "SSAT coaching online India",
    "SSAT online classes India",
    "SSAT exam preparation India",
    "SSAT exam preparation tips",
    "SSAT exam preparation strategy",
    "SSAT preparation timeline",
    "SSAT practice test",
    "SSAT mock test",
    "SSAT free practice test",
    "SSAT full length practice test",
    "SSAT study material India",
    "SSAT study guide",
    "SSAT tutor India",
    "SSAT tutor online",
    "best SSAT coaching India",
    "EduQuest SSAT coaching",
    "SSAT coaching for Indian students",
    "how to prepare for SSAT exam",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 90th percentile SSAT",
    "how to get 95th percentile SSAT",
    "how to improve SSAT score",
    "SSAT score improvement tips",
    "SSAT score for Phillips Academy",
    "SSAT score for Choate",
    "SSAT score for Deerfield",
    "SSAT score for top boarding schools",

    // ── Boarding school admissions ──────────────────────────────────
    "SSAT for US boarding school admission",
    "SSAT for UK boarding school admission",
    "boarding school in USA from India",
    "boarding school admission for Indian students",
    "top US boarding schools for Indian students",

    // ── Broader ──────────────────────────────────────────────────
    "SSAT eligibility India",
    "SSAT registration process India",
    "SSAT test centres list India",
    "SSAT score validity",
    "is SSAT exam hard",
    "SSAT exam difficulty",
    "SSAT exam benefits",
    "SSAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ssat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/ssat-coaching/",
      en: "https://eduquest.org.in/ssat-coaching/",
      "en-IN": "https://eduquest.org.in/ssat-coaching/",
    },
  },

  openGraph: {
    title: "SSAT Coaching for Indian Students | Top Percentile | EduQuest",
    description:
      "India's top SSAT coaching — Verbal, Quantitative, Reading Comprehension and Writing sections. Expert tutors, full-length mocks & personalised score plans for US & UK boarding school admissions.",
    url: "https://eduquest.org.in/ssat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest SSAT Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SSAT Coaching | EduQuest India",
    description:
      "Ace the SSAT with India's top coaching — expert tutors, full mocks & score strategies for top US & UK boarding schools.",
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

export default function SSATCoachingPage() {
  return (
    <>
      {/* ── Structured Data ── */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ssatSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <SSATCOACHING />
    </>
  );
}