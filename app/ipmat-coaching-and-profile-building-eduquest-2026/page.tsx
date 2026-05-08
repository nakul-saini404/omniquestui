// app/ipmat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  ipmatSectionListSchema,
} from "./ipmatSchema";
import IPMATCoaching from "./ipmat";

export const metadata: Metadata = {
  title: "Best IPMAT Coaching in Gurgaon | IIM Indore & Rohtak | EduQuest",
  description:
    "Crack IPMAT with EduQuest — India's leading IPMAT coaching institute in Gurgaon. Expert faculty, 10+ full-length mocks, personalised study plans and PI preparation for IIM Indore, IIM Rohtak and IIM Ranchi's 5-year IPM programme. Trusted by 10,000+ students.",

  keywords: [
    // ── Core IPMAT terms ────────────────────────────────────────────
    "IPMAT exam",
    "IPMAT 2025",
    "IPMAT exam 2025",
    "IPMAT exam date 2025",
    "IPMAT exam pattern",
    "IPMAT exam syllabus",
    "IPMAT exam eligibility",
    "IPMAT exam fee",
    "IPMAT exam registration",
    "IPMAT exam registration 2025",
    "IPMAT exam schedule 2025",
    "IPMAT exam centres India",
    "IPMAT exam score",
    "IPMAT cutoff 2025",
    "IPMAT cutoff IIM Indore",
    "IPMAT cutoff IIM Rohtak",
    "IPMAT result 2025",
    "IPMAT answer key 2025",
    "IPMAT admit card 2025",
    "what is IPMAT exam",
    "IPMAT full form",
    "Integrated Programme in Management Aptitude Test",
    "IPMAT vs CAT",
    "IPMAT after Class 12",
    "management entrance exam after 12th India",
    "BBA MBA integrated programme India",
    "IIM after 12th",
    "IIM Indore IPM",
    "IIM Rohtak IPM",
    "IIM Ranchi IPM",
    "IPM programme IIM Indore",
    "IPM programme IIM Rohtak",
    "5 year integrated management programme India",

    // ── Section-specific — Quantitative Ability ─────────────────────
    "IPMAT quantitative ability",
    "IPMAT QA preparation",
    "IPMAT quant tips",
    "IPMAT quant syllabus",
    "IPMAT arithmetic",
    "IPMAT algebra",
    "IPMAT geometry",
    "IPMAT number theory",
    "IPMAT modern math",
    "IPMAT short answer questions",
    "IPMAT quant MCQ",
    "IPMAT quant practice",

    // ── Section-specific — Verbal Ability ───────────────────────────
    "IPMAT verbal ability",
    "IPMAT VA preparation",
    "IPMAT verbal tips",
    "IPMAT reading comprehension",
    "IPMAT grammar",
    "IPMAT vocabulary",
    "IPMAT para jumbles",
    "IPMAT critical reasoning",
    "IPMAT verbal syllabus",
    "IPMAT verbal practice",

    // ── Section-specific — Logical Reasoning ────────────────────────
    "IPMAT logical reasoning",
    "IPMAT LR preparation",
    "IPMAT puzzles",
    "IPMAT series",
    "IPMAT coding decoding",
    "IPMAT syllogisms",
    "IPMAT data interpretation",
    "IPMAT DI preparation",
    "IPMAT bar chart questions",
    "IPMAT pie chart questions",

    // ── Coaching & preparation ───────────────────────────────────────
    "IPMAT coaching",
    "IPMAT coaching India",
    "IPMAT coaching Gurgaon",
    "IPMAT coaching Gurugram",
    "IPMAT coaching Delhi",
    "IPMAT coaching Delhi NCR",
    "IPMAT coaching Mumbai",
    "IPMAT coaching Bangalore",
    "IPMAT coaching online India",
    "IPMAT online classes India",
    "IPMAT online coaching",
    "IPMAT exam preparation",
    "IPMAT exam preparation tips",
    "IPMAT exam preparation strategy",
    "IPMAT preparation timeline",
    "IPMAT 6 month preparation plan",
    "IPMAT 12 month preparation plan",
    "IPMAT practice test",
    "IPMAT mock test",
    "IPMAT mock test series",
    "IPMAT full length mock test",
    "IPMAT free mock test",
    "IPMAT study material India",
    "IPMAT study guide",
    "IPMAT tutor India",
    "IPMAT tutor online",
    "best IPMAT coaching India",
    "best IPMAT coaching Gurgaon",
    "EduQuest IPMAT coaching",
    "EduQuest IPMAT",
    "IPMAT coaching for Class 11",
    "IPMAT coaching for Class 12",
    "IPMAT coaching CBSE students",
    "IPMAT coaching ICSE students",
    "how to prepare for IPMAT",
    "IPMAT self study plan",
    "IPMAT crash course",
    "IPMAT short term coaching",

    // ── Scores & goals ───────────────────────────────────────────────
    "how to score 130 in IPMAT",
    "how to crack IPMAT",
    "IPMAT score improvement",
    "IPMAT topper strategy",
    "IPMAT score 140",
    "IPMAT 100 percentile",
    "IPMAT merit list",
    "IPMAT sectional cutoff",

    // ── PI & WAT Preparation ─────────────────────────────────────────
    "IPMAT personal interview preparation",
    "IPMAT PI preparation",
    "IPMAT WAT preparation",
    "IPMAT written ability test",
    "IPMAT interview questions",
    "IPMAT PI tips",
    "IIM Indore interview preparation",
    "IIM Rohtak interview preparation",

    // ── Profile Building ─────────────────────────────────────────────
    "profile building for IPMAT",
    "extracurricular activities for IIM IPM",
    "student profile for IIM Indore IPM",
    "IPMAT profile building Gurgaon",
    "IIM application profile building India",
    "profile building for management entrance India",
    "extracurricular strategy for IPMAT",
    "leadership profile for IIM IPM",
    "community service for IIM IPM application",
    "IPMAT profile building coaching",

    // ── Career & placements ──────────────────────────────────────────
    "IIM Indore IPM placements",
    "IIM Indore IPM average package",
    "IPM programme career prospects",
    "management career after 12th India",
    "IIM degree after Class 12",
    "IPMAT worth it India",
    "IPMAT vs BBA India",
    "IPMAT benefits",
    "IPM alumni placements",
    "McKinsey BCG after IIM IPM",

    // ── Local / geo-specific ─────────────────────────────────────────
    "IPMAT coaching DLF Phase IV",
    "IPMAT coaching Golf Course Road Gurgaon",
    "IPMAT coaching Sohna Road",
    "IPMAT coaching South City Gurgaon",
    "IPMAT coaching Sector 50 Gurgaon",
    "IPMAT coaching MG Road Gurgaon",
    "IPMAT coaching Cyber City",
    "IPMAT coaching Faridabad",
    "IPMAT coaching Noida",
    "IPMAT coaching near me",

    // ── Informational / long-tail ────────────────────────────────────
    "what is IPMAT coaching",
    "when to start IPMAT preparation",
    "IPMAT coaching fees India",
    "IPMAT coaching fees Gurgaon",
    "IPMAT batch size India",
    "small batch IPMAT coaching Gurgaon",
    "IPMAT diagnostic test India",
    "IPMAT personalised study plan",
    "IPMAT coaching with PI support",
    "IPMAT coaching with profile building",
    "is IPMAT hard to crack",
    "IPMAT difficulty level",
    "IPMAT last minute tips",
    "IPMAT exam day strategy",
    "IPMAT negative marking strategy",
    "IPMAT time management tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ipmat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/ipmat-coaching/",
      en: "https://eduquest.org.in/ipmat-coaching/",
      "en-IN": "https://eduquest.org.in/ipmat-coaching/",
    },
  },

  openGraph: {
    title: "Best IPMAT Coaching in Gurgaon | IIM Indore & Rohtak | EduQuest",
    description:
      "India's top IPMAT coaching — all sections (QA, VA, LR, DI), expert faculty, 10+ full-length mocks, PI preparation and profile building for IIM Indore, IIM Rohtak and IIM Ranchi's 5-year IPM programme.",
    url: "https://eduquest.org.in/ipmat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest IPMAT Coaching Gurgaon India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IPMAT Coaching Gurgaon | EduQuest India",
    description:
      "Crack IPMAT with India's top coaching — expert faculty, full mocks, PI prep and profile building for IIM Indore, IIM Rohtak and IIM Ranchi.",
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

export default function IPMATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ipmatSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <IPMATCoaching />
    </>
  );
}