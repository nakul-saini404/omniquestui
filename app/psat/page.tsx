// app/psat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  PSATSectionListSchema,
} from "./psatSchema";
import PSATCOACHING from "./psat";

export const metadata: Metadata = {
  title: "PSAT/NMSQT Coaching for Indian Students | Score 1400+ | EduQuest",
  description:
    "Ace the PSAT/NMSQT with EduQuest — India's leading PSAT coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for PSAT Reading & Writing and Math. Qualify for National Merit Scholarship. Trusted by 10,000+ students.",
  keywords: [
    // ── Core PSAT exam terms ────────────────────────────────────────
    "PSAT exam",
    "PSAT NMSQT",
    "PSAT exam 2025",
    "PSAT exam India",
    "PSAT exam dates 2025",
    "PSAT exam dates India 2025",
    "PSAT exam registration 2025",
    "PSAT exam registration India",
    "PSAT exam schedule 2025",
    "PSAT exam syllabus",
    "PSAT exam pattern",
    "PSAT exam fee India",
    "PSAT exam centres India",
    "PSAT exam score",
    "PSAT score 1400",
    "PSAT score 1450",
    "PSAT score 1520",
    "PSAT score calculator",
    "PSAT scoring scale",
    "PSAT percentile",
    "PSAT Selection Index",
    "what is PSAT exam",
    "Preliminary SAT",
    "National Merit Scholarship Qualifying Test",
    "PSAT vs SAT",
    "PSAT vs SAT for Indian students",
    "PSAT test format",
    "PSAT test sections",
    "PSAT test duration",
    "PSAT test day tips",

    // ── Section-specific — Reading & Writing ────────────────────────
    "PSAT Reading",
    "PSAT Reading tips",
    "PSAT Writing",
    "PSAT grammar",
    "PSAT Reading & Writing practice",
    "PSAT Reading comprehension",

    // ── Section-specific — Math ────────────────────────────────────
    "PSAT Math",
    "PSAT Math algebra",
    "PSAT Math geometry",
    "PSAT Math tips",
    "PSAT Math practice",
    "PSAT Math calculator",

    // ── Coaching & preparation ────────────────────────────────────
    "PSAT coaching India",
    "PSAT coaching Delhi",
    "PSAT coaching Gurgaon",
    "PSAT coaching Mumbai",
    "PSAT coaching Bangalore",
    "PSAT coaching online India",
    "PSAT online classes India",
    "PSAT exam preparation India",
    "PSAT exam preparation tips",
    "PSAT exam preparation strategy",
    "PSAT preparation timeline",
    "PSAT practice test",
    "PSAT mock test",
    "PSAT free practice test",
    "PSAT full length practice test",
    "PSAT study material India",
    "PSAT study guide",
    "PSAT tutor India",
    "PSAT tutor online",
    "best PSAT coaching India",
    "EduQuest PSAT coaching",
    "PSAT coaching for Indian students",
    "how to prepare for PSAT exam",
    "PSAT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to score 1400 on PSAT",
    "how to score 1450 on PSAT",
    "how to improve PSAT score",
    "PSAT score improvement tips",
    "PSAT National Merit cutoff",
    "PSAT Semifinalist cutoff India",
    "PSAT Commended Scholar",
    "PSAT score for National Merit",

    // ── National Merit & scholarships ──────────────────────────────
    "National Merit Scholarship",
    "National Merit Semifinalist",
    "National Merit Finalist",
    "PSAT for scholarship",
    "PSAT for US university admission",
    "PSAT for SAT preparation",
    "PSAT as SAT practice",

    // ── Broader ──────────────────────────────────────────────────
    "PSAT for Grade 10",
    "PSAT for Grade 11",
    "PSAT eligibility India",
    "PSAT registration process India",
    "PSAT score validity",
    "is PSAT exam hard",
    "PSAT exam difficulty",
    "PSAT exam worth it India",
    "PSAT exam benefits",
    "PSAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/psat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/psat-coaching/",
      en: "https://eduquest.org.in/psat-coaching/",
      "en-IN": "https://eduquest.org.in/psat-coaching/",
    },
  },

  openGraph: {
    title: "PSAT/NMSQT Coaching for Indian Students | Score 1400+ | EduQuest",
    description:
      "India's top PSAT coaching — Reading & Writing and Math sections. Expert tutors, full-length mocks & personalised score plans. Qualify for National Merit Scholarship.",
    url: "https://eduquest.org.in/psat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest PSAT/NMSQT Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PSAT/NMSQT Coaching | EduQuest India",
    description:
      "Ace the PSAT with India's top coaching — expert tutors, full mocks & score strategies for National Merit Scholarship qualification.",
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

export default function PSATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PSATSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <PSATCOACHING />
    </>
  );
}