// app/english-test-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  ieltsCoursSchema,
  toeflCourseSchema,
  pteCourseSchema,
  duolingoCourseSchema,
  organizationSchema,
  webPageSchema,
  testSectionListSchema,
} from "./dasaSchema";
import DasaCOACHING from "./dasa";

export const metadata: Metadata = {
  title: "DASA & CIWG Quota Admission Guidance 2026 | NIT, IIIT, GFTI | EduQuest",
  description:
    "Expert guidance for DASA (Direct Admission of Students Abroad) and CIWG (Children of Indian Workers in Gulf) quota admissions to NITs, IIITs and GFTIs. SAT-based admission counselling, seat matrix analysis, choice filling strategy and complete application support for NRI/OCI/PIO students. EduQuest — trusted by 10,000+ students.",
  keywords: [
    // ── Core DASA terms ────────────────────────────────────────────
    "DASA admission 2026",
    "DASA scheme",
    "DASA full form",
    "Direct Admission of Students Abroad",
    "DASA NIT admission",
    "DASA IIIT admission",
    "DASA GFTI admission",
    "DASA admission process",
    "DASA eligibility criteria",
    "DASA seat matrix 2026",
    "DASA cutoff 2026",
    "DASA counselling 2026",
    "DASA choice filling",
    "DASA application 2026",
    "DASA registration 2026",
    "DASA fee structure",
    "DASA important dates 2026",

    // ── CIWG terms ────────────────────────────────────────────────
    "CIWG quota admission 2026",
    "CIWG full form",
    "Children of Indian Workers in Gulf",
    "CIWG NIT admission",
    "CIWG eligibility",
    "CIWG counselling 2026",
    "CIWG seat matrix",
    "CIWG cutoff 2026",
    "CIWG vs DASA",
    "CIWG fee structure",

    // ── SAT-based admission ───────────────────────────────────────
    "DASA SAT score requirement",
    "SAT for DASA admission",
    "SAT score for NIT through DASA",
    "SAT coaching for DASA",
    "minimum SAT score for DASA",
    "DASA SAT cutoff",
    "SAT score for IIIT through DASA",

    // ── NRI/OCI/PIO context ──────────────────────────────────────
    "NRI admission India NIT",
    "OCI admission NIT India",
    "PIO admission NIT India",
    "NRI student admission India 2026",
    "NRI quota engineering India",
    "foreign student NIT admission",
    "Gulf NRI admission India",

    // ── Coaching & guidance ──────────────────────────────────────
    "DASA counselling guidance India",
    "DASA admission consultant India",
    "DASA admission consultant Gurgaon",
    "DASA admission consultant Delhi",
    "best DASA consultant India",
    "EduQuest DASA guidance",
    "EduQuest DASA CIWG",
    "DASA choice filling strategy",
    "DASA seat allotment prediction",

    // ── Informational / long-tail ────────────────────────────────
    "what is DASA scheme",
    "what is CIWG quota",
    "DASA vs JEE admission",
    "DASA vs CIWG difference",
    "how to apply for DASA 2026",
    "DASA application step by step",
    "DASA documents required",
    "DASA admission for Gulf NRI",
    "DASA top NIT colleges list",
    "best NIT through DASA",
    "DASA computer science cutoff",
    "DASA electrical engineering cutoff",
    "DASA mechanical engineering cutoff",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/dasa-and-ciwg-quota/",
    languages: {
      "x-default": "https://eduquest.org.in/dasa-and-ciwg-quota/",
      en:           "https://eduquest.org.in/dasa-and-ciwg-quota/",
      "en-IN":      "https://eduquest.org.in/dasa-and-ciwg-quota/",
    },
  },

  openGraph: {
    title: "DASA & CIWG Quota Admission Guidance 2026 | NIT, IIIT | EduQuest",
    description:
      "Expert DASA & CIWG admission guidance — SAT-based NIT/IIIT/GFTI admission counselling, seat matrix analysis, choice filling strategy for NRI/OCI/PIO students.",
    url: "https://eduquest.org.in/dasa-and-ciwg-quota/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest DASA CIWG Admission Guidance India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DASA & CIWG Quota Admission 2026 | EduQuest India",
    description:
      "Expert DASA & CIWG admission guidance for NRI/OCI students — SAT-based NIT/IIIT counselling, choice filling strategy and complete application support.",
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

export default function DasaCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ieltsCoursSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toeflCourseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pteCourseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(duolingoCourseSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <DasaCOACHING />
    </>
  );
}