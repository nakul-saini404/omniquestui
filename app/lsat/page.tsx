// app/lsat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  LSATSectionListSchema,
} from "./lsatSchema";
import LSATCOACHING from "./lsat";

export const metadata: Metadata = {
  title: "LSAT Coaching for Indian Students | Score 170+ | EduQuest",
  description:
    "Ace the LSAT with EduQuest — India's leading LSAT coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for LSAT Logical Reasoning, Analytical Reasoning and Reading Comprehension. Trusted by students applying to top US, UK & Canada law schools.",
  keywords: [
    // ── Core LSAT exam terms ────────────────────────────────────────
    "LSAT exam",
    "LSAT India",
    "LSAT exam 2025",
    "LSAT exam India",
    "LSAT exam dates 2025",
    "LSAT exam dates India 2025",
    "LSAT exam registration 2025",
    "LSAT exam registration India",
    "LSAT exam schedule 2025",
    "LSAT exam syllabus",
    "LSAT exam pattern",
    "LSAT exam fee India",
    "LSAT exam centres India",
    "LSAT exam score",
    "LSAT score 170",
    "LSAT score 175",
    "LSAT score 180",
    "LSAT score calculator",
    "LSAT scoring scale",
    "LSAT percentile",
    "what is LSAT exam",
    "Law School Admission Test",
    "LSAT vs CLAT",
    "LSAT test format",
    "LSAT test sections",
    "LSAT test duration",
    "LSAT test day tips",

    // ── Section-specific — Logical Reasoning ─────────────────────────
    "LSAT Logical Reasoning",
    "LSAT Logical Reasoning tips",
    "LSAT Logical Reasoning practice",
    "LSAT argument analysis",
    "LSAT assumption questions",
    "LSAT strengthen weaken questions",
    "LSAT flaw questions",

    // ── Section-specific — Analytical Reasoning ──────────────────────
    "LSAT Analytical Reasoning",
    "LSAT Logic Games",
    "LSAT Logic Games tips",
    "LSAT Logic Games practice",
    "LSAT sequencing games",
    "LSAT grouping games",

    // ── Section-specific — Reading Comprehension ─────────────────────
    "LSAT Reading Comprehension",
    "LSAT Reading Comprehension tips",
    "LSAT Reading Comprehension practice",
    "LSAT RC passage types",
    "LSAT comparative reading",

    // ── Section-specific — Writing ─────────────────────────────────
    "LSAT Writing",
    "LSAT Writing sample",
    "LSAT Writing tips",

    // ── Coaching & preparation ────────────────────────────────────
    "LSAT coaching India",
    "LSAT coaching Delhi",
    "LSAT coaching Gurgaon",
    "LSAT coaching Mumbai",
    "LSAT coaching Bangalore",
    "LSAT coaching Chennai",
    "LSAT coaching Hyderabad",
    "LSAT coaching online India",
    "LSAT online classes India",
    "LSAT exam preparation India",
    "LSAT exam preparation tips",
    "LSAT exam preparation strategy",
    "LSAT preparation timeline",
    "LSAT 3 month preparation plan",
    "LSAT 6 month preparation plan",
    "LSAT practice test",
    "LSAT mock test",
    "LSAT free practice test",
    "LSAT full length practice test",
    "LSAT study material India",
    "LSAT study guide",
    "LSAT tutor India",
    "LSAT tutor online",
    "best LSAT coaching India",
    "EduQuest LSAT coaching",
    "LSAT coaching for Indian students",
    "how to prepare for LSAT exam",
    "LSAT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to score 170 on LSAT",
    "how to score 175 on LSAT",
    "how to improve LSAT score",
    "LSAT score improvement tips",
    "LSAT score for Harvard Law",
    "LSAT score for Yale Law",
    "LSAT score for Columbia Law",
    "LSAT score for top US law schools",
    "LSAT score for scholarships",

    // ── Law school admissions ──────────────────────────────────────
    "LSAT for US law school admission",
    "LSAT for Harvard Law",
    "LSAT for Yale Law",
    "LSAT for Stanford Law",
    "LSAT for international students",
    "law school in USA from India",
    "US law school admission for Indian students",
    "LSAT for Canada law schools",
    "LSAT for UK law schools",

    // ── Broader study abroad ──────────────────────────────────────
    "study law abroad from India",
    "LSAT eligibility India",
    "LSAT registration process India",
    "LSAT test centres list India",
    "LSAT score validity",
    "LSAT score report",
    "LSAT retake policy",
    "is LSAT exam hard",
    "LSAT exam difficulty",
    "LSAT exam worth it India",
    "LSAT exam benefits",
    "LSAT vs CLAT which is harder",
    "LSAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/lsat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/lsat-coaching/",
      en: "https://eduquest.org.in/lsat-coaching/",
      "en-IN": "https://eduquest.org.in/lsat-coaching/",
    },
  },

  openGraph: {
    title: "LSAT Coaching for Indian Students | Score 170+ | EduQuest",
    description:
      "India's top LSAT coaching — Logical Reasoning, Analytical Reasoning (Logic Games) and Reading Comprehension. Expert tutors, full-length timed mocks & personalised score plans for US, UK & Canada law school admissions.",
    url: "https://eduquest.org.in/lsat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest LSAT Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LSAT Coaching | EduQuest India",
    description:
      "Ace the LSAT with India's top coaching — expert tutors, full mocks & score strategies for top US, UK & Canada law schools.",
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

export default function LSATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LSATSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <LSATCOACHING />
    </>
  );
}