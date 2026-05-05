// app/sat-coaching-us-students/page.tsx

import type { Metadata } from "next";
import SATUs from "./sat_us";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  courseSchema,
  webPageSchema,
  satProgrammeListSchema,
} from "./UsSchema";

export const metadata: Metadata = {
  title:
    "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest Online SAT Prep",
  description:
    "EduQuest — expert online SAT coaching for US-based students. Digital SAT 2026 aligned, EST/CST/PST sessions, Bluebook-native adaptive mocks, 19-cluster diagnostics. Average score 1560. PSAT & National Merit prep included. NRI & Indian-origin families welcome.",
  keywords: [
    // ── Core SAT terms (US-focused) ───────────────────────────────
    "SAT coaching US students",
    "SAT prep USA 2026",
    "SAT tutoring United States",
    "SAT coaching for American students",
    "online SAT tutor US",
    "digital SAT coaching online",
    "digital SAT prep 2026",
    "digital SAT 2026",
    "SAT 2026 exam",
    "SAT exam dates 2026",
    "SAT registration 2026",
    "College Board SAT 2026",
    "Bluebook SAT practice",
    "Bluebook adaptive mock test",
    "SAT adaptive test strategy",
    "SAT score 1600",
    "SAT score 1570",
    "SAT score 1500",
    "SAT 1400 prep",
    "SAT score improvement",
    "SAT Superscoring strategy",
    "how to get 1600 on SAT",
    "how to improve SAT score",
    "SAT Math prep",
    "SAT Reading and Writing prep",
    "SAT Reading Writing tips",
    "SAT Math tips",

    // ── Time-zone & online delivery ───────────────────────────────
    "SAT coaching EST time zone",
    "SAT coaching CST time zone",
    "SAT coaching PST time zone",
    "SAT coaching MST time zone",
    "online SAT coaching weekend classes",
    "online SAT tutoring live sessions",
    "1-on-1 SAT tutoring online",
    "private SAT tutor online USA",
    "best online SAT prep for US students",
    "SAT online coaching from India",

    // ── EduQuest brand ────────────────────────────────────────────
    "EduQuest SAT coaching",
    "EduQuest SAT USA",
    "EduQuest online SAT prep",
    "EduQuest 1570 programme",
    "EduQuest PSAT coaching",
    "EduQuest NRI SAT coaching",
    "EduQuest SAT diagnostic",
    "EduQuest 19 cluster diagnostic",

    // ── PSAT & National Merit ─────────────────────────────────────
    "PSAT coaching online",
    "PSAT NMSQT preparation",
    "PSAT NMSQT 2026",
    "National Merit Scholarship prep",
    "National Merit Semifinalist strategy",
    "PSAT score 1520",
    "how to qualify for National Merit",
    "PSAT coaching for US students",

    // ── US university admissions ──────────────────────────────────
    "SAT score for Ivy League",
    "SAT score for Harvard",
    "SAT score for MIT",
    "SAT score for Stanford",
    "SAT score for Yale",
    "SAT score for Princeton",
    "SAT score for Columbia",
    "SAT score for Cornell",
    "SAT score for UCLA",
    "SAT score for UC Berkeley",
    "SAT score for UT Austin",
    "SAT score for Georgia Tech",
    "SAT for top 10 US universities",
    "SAT for Ivy League admission",
    "test optional vs SAT submission",
    "should I submit SAT score test optional",
    "SAT merit scholarship",
    "SAT for college scholarship USA",
    "Early Decision SAT deadline",
    "Early Action SAT strategy",

    // ── NRI & Indian-origin students ──────────────────────────────
    "SAT coaching for NRI students",
    "SAT coaching Indian students USA",
    "Indian origin students SAT prep",
    "NRI college admissions US",
    "Indian family US college prep",
    "SAT prep for desi students USA",
    "SAT coaching Fremont",
    "SAT coaching San Jose",
    "SAT coaching Silicon Valley",
    "SAT coaching New Jersey",
    "SAT coaching New York",
    "SAT coaching Houston",
    "SAT coaching Chicago",
    "SAT coaching Dallas",
    "SAT coaching Atlanta",

    // ── SAT vs ACT & comparisons ──────────────────────────────────
    "SAT vs ACT which is better",
    "SAT vs ACT for Indian students",
    "should I take SAT or ACT",
    "SAT ACT dual prep",
    "SAT ACT comparison 2026",
    "is SAT harder than ACT",
    "SAT ACT score converter",

    // ── Grade-level targeting ─────────────────────────────────────
    "SAT prep for Grade 10",
    "SAT prep for Grade 11",
    "SAT prep for Grade 12",
    "SAT prep for 10th grader",
    "SAT prep for 11th grader",
    "SAT prep for 12th grader",
    "when to start SAT prep",
    "SAT prep timeline Grade 11",
    "SAT prep 3 month plan",
    "SAT prep 6 month plan",

    // ── Long-tail & informational ─────────────────────────────────
    "what is digital SAT",
    "how is digital SAT different",
    "digital SAT Bluebook app",
    "SAT adaptive modules explained",
    "SAT Module 1 Module 2 strategy",
    "how SAT is scored",
    "SAT percentile 2026",
    "SAT score report US universities",
    "how many times should I take SAT",
    "SAT retake strategy",
    "is SAT required 2026",
    "test optional SAT 2026",
    "MIT SAT requirement 2026",
    "Yale SAT requirement 2026",
    "Dartmouth SAT requirement 2026",
    "SAT exam centres USA",
    "how to register for SAT in USA",
    "SAT fee waiver USA",
    "College Board fee waiver",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-us-students/",
    languages: {
      "x-default": "https://eduquest.org.in/sat-coaching-us-students/",
      en: "https://eduquest.org.in/sat-coaching-us-students/",
      "en-US": "https://eduquest.org.in/sat-coaching-us-students/",
    },
  },

  openGraph: {
    title:
      "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest Online SAT Prep",
    description:
      "Online SAT coaching for US students — EST/CST/PST slots, Bluebook-native adaptive mocks, 19-cluster diagnostics, PSAT/National Merit prep. 2025 US batch averaged 1560. NRI & Indian-origin families welcome.",
    url: "https://eduquest.org.in/sat-coaching-us-students/",
    siteName: "EduQuest",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/images/sat-coaching-us-students-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest SAT Coaching for US Students — Score 1570+",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest",
    description:
      "Online SAT coaching built for US students — Bluebook mocks, EST/CST/PST slots, PSAT/National Merit prep. Avg score 1560. NRI families welcome.",
    images: [
      "https://eduquest.org.in/images/sat-coaching-us-students-og.jpg",
    ],
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

export default function SATUsPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(satProgrammeListSchema) }}
      />

      {/* ── Page Component ── */}
      <SATUs />
    </>
  );
}