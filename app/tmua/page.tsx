// app/tmua-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  actSectionListSchema,
} from "./tmuaSchema";
import TMUACOACHING from "./tmua";

export const metadata: Metadata = {
  title: "TMUA Coaching for Indian Students | Score 8+ | EduQuest",
  description:
    "Ace the TMUA (Test of Mathematics for University Admission) with EduQuest — India's leading TMUA coaching institute. Expert maths tutors, full-length timed practice tests & personalised score plans for Cambridge, Oxford, Warwick, Durham, LSE and top UK university maths & CS admissions.",
  keywords: [
    // ── Core TMUA exam terms ────────────────────────────────────────
    "TMUA exam",
    "TMUA exam 2025",
    "TMUA exam India",
    "TMUA exam dates 2025",
    "TMUA exam registration 2025",
    "TMUA exam registration India",
    "TMUA exam syllabus",
    "TMUA exam pattern",
    "TMUA exam fee India",
    "TMUA exam score",
    "TMUA score 8",
    "TMUA score 9",
    "TMUA score calculator",
    "TMUA scoring scale",
    "what is TMUA exam",
    "Test of Mathematics for University Admission",
    "TMUA vs MAT",
    "TMUA vs STEP",
    "TMUA test format",
    "TMUA test sections",
    "TMUA test duration",
    "TMUA test day tips",

    // ── Paper-specific — Paper 1 ──────────────────────────────────
    "TMUA Paper 1",
    "TMUA mathematical thinking",
    "TMUA Paper 1 tips",
    "TMUA Paper 1 practice",
    "TMUA algebra",
    "TMUA geometry",
    "TMUA trigonometry",
    "TMUA sequences and series",
    "TMUA coordinate geometry",

    // ── Paper-specific — Paper 2 ──────────────────────────────────
    "TMUA Paper 2",
    "TMUA mathematical reasoning",
    "TMUA Paper 2 tips",
    "TMUA Paper 2 practice",
    "TMUA logical reasoning maths",
    "TMUA proof",
    "TMUA deduction",

    // ── Coaching & preparation ────────────────────────────────────
    "TMUA coaching India",
    "TMUA coaching Delhi",
    "TMUA coaching Gurgaon",
    "TMUA coaching Mumbai",
    "TMUA coaching Bangalore",
    "TMUA coaching online India",
    "TMUA online classes India",
    "TMUA exam preparation India",
    "TMUA exam preparation tips",
    "TMUA exam preparation strategy",
    "TMUA preparation timeline",
    "TMUA 3 month preparation plan",
    "TMUA practice test",
    "TMUA mock test",
    "TMUA past papers",
    "TMUA free practice test",
    "TMUA study material India",
    "TMUA study guide",
    "TMUA tutor India",
    "TMUA tutor online",
    "best TMUA coaching India",
    "EduQuest TMUA coaching",
    "TMUA coaching for Indian students",
    "how to prepare for TMUA exam",
    "TMUA self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to score 8 on TMUA",
    "how to score 9 on TMUA",
    "how to improve TMUA score",
    "TMUA score improvement tips",
    "TMUA score for Cambridge",
    "TMUA score for Oxford",
    "TMUA score for Warwick",
    "TMUA score for Durham",
    "TMUA score for LSE",
    "TMUA score for Imperial",

    // ── UK university admissions ──────────────────────────────────
    "TMUA for Cambridge maths",
    "TMUA for Cambridge computer science",
    "TMUA for Oxford",
    "TMUA for Warwick maths",
    "TMUA for Durham",
    "TMUA for LSE",
    "TMUA for Imperial College",
    "TMUA for UK university admission",
    "TMUA for international students",
    "study maths in UK from India",
    "UK university maths admission India",
    "UK computer science admission India",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "TMUA eligibility India",
    "TMUA registration process India",
    "TMUA test centres India",
    "TMUA score validity",
    "is TMUA exam hard",
    "TMUA exam difficulty",
    "TMUA exam worth it India",
    "TMUA exam benefits",
    "TMUA vs MAT which is harder",
    "TMUA last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/tmua-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/tmua-coaching/",
      en: "https://eduquest.org.in/tmua-coaching/",
      "en-IN": "https://eduquest.org.in/tmua-coaching/",
    },
  },

  openGraph: {
    title: "TMUA Coaching for Indian Students | Score 8+ | EduQuest",
    description:
      "India's top TMUA coaching — Paper 1 (Mathematical Thinking) and Paper 2 (Mathematical Reasoning). Expert maths tutors, full mocks & personalised plans for Cambridge, Oxford, Warwick and top UK university admissions.",
    url: "https://eduquest.org.in/tmua-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest TMUA Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TMUA Coaching | EduQuest India",
    description:
      "Ace the TMUA with India's top coaching — expert maths tutors, full mocks & score strategies for Cambridge, Oxford & top UK university maths and CS admissions.",
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

export default function TMUACoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(actSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <TMUACOACHING />
    </>
  );
}