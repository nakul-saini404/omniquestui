// app/PSAT-coaching/page.tsx

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
  title: "PSAT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the PSAT with EduQuest — India's leading PSAT coaching institute. Expert tutors, full-length timed prPSATice tests & personalised score plans for PSAT English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core PSAT exam terms ────────────────────────────────────────
    "PSAT exam",
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
    "PSAT composite score",
    "PSAT score 36",
    "PSAT score 34",
    "PSAT score 32",
    "PSAT score calculator",
    "PSAT scoring scale",
    "PSAT percentile",
    "PSAT passing score",
    "what is PSAT exam",
    "American College Testing",
    "PSAT vs SAT",
    "PSAT or SAT for Indian students",
    "PSAT test format",
    "PSAT test sections",
    "PSAT test duration",
    "PSAT test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "PSAT English",
    "PSAT English grammar",
    "PSAT English rhetoric",
    "PSAT English style",
    "PSAT English punctuation",
    "PSAT English tips",
    "PSAT English prPSATice",

    // ── Section-specific — Math ────────────────────────────────────
    "PSAT Math",
    "PSAT Math algebra",
    "PSAT Math geometry",
    "PSAT Math trigonometry",
    "PSAT Math statistics",
    "PSAT Math tips",
    "PSAT Math prPSATice",
    "PSAT Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "PSAT Reading",
    "PSAT Reading comprehension",
    "PSAT Reading passage types",
    "PSAT Reading tips",
    "PSAT Reading strategy",
    "PSAT Reading prPSATice",

    // ── Section-specific — Science ─────────────────────────────────
    "PSAT Science",
    "PSAT Science reasoning",
    "PSAT Science data representation",
    "PSAT Science research summary",
    "PSAT Science conflicting viewpoints",
    "PSAT Science tips",
    "PSAT Science prPSATice",

    // ── Section-specific — Writing ─────────────────────────────────
    "PSAT Writing",
    "PSAT Writing essay",
    "PSAT Writing score",
    "PSAT Writing tips",
    "PSAT Writing prPSATice",
    "PSAT optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "PSAT coaching India",
    "PSAT coaching Delhi",
    "PSAT coaching Gurgaon",
    "PSAT coaching Mumbai",
    "PSAT coaching Bangalore",
    "PSAT coaching Chennai",
    "PSAT coaching Hyderabad",
    "PSAT coaching online India",
    "PSAT online classes India",
    "PSAT exam preparation India",
    "PSAT exam preparation tips",
    "PSAT exam preparation strategy",
    "PSAT preparation timeline",
    "PSAT 3 month preparation plan",
    "PSAT 6 month preparation plan",
    "PSAT prPSATice test",
    "PSAT mock test",
    "PSAT free prPSATice test",
    "PSAT full length prPSATice test",
    "PSAT study material India",
    "PSAT study guide",
    "PSAT tutor India",
    "PSAT tutor online",
    "best PSAT coaching India",
    "EduQuest PSAT coaching",
    "EduQuest PSAT exam",
    "PSAT coaching for Indian students",
    "PSAT exam help India",
    "how to prepare for PSAT exam",
    "PSAT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on PSAT",
    "how to get 34 on PSAT",
    "how to improve PSAT score",
    "PSAT score improvement tips",
    "PSAT score for Ivy League",
    "PSAT score for MIT",
    "PSAT score for Stanford",
    "PSAT score for Harvard",
    "PSAT score for top US colleges",
    "PSAT score for scholarships",
    "PSAT superscoring",
    "PSAT score choice",

    // ── US university admissions ──────────────────────────────────
    "PSAT for US university admission",
    "PSAT for Ivy League",
    "PSAT for MIT",
    "PSAT for Stanford",
    "PSAT for Harvard",
    "PSAT for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many PSAT attempts allowed",
    "PSAT for pre-med students",
    "PSAT for engineering students",
    "PSAT for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "PSAT for Canada universities",
    "PSAT for University of Toronto",
    "PSAT for UBC",
    "study in Canada from India",
    "PSAT for UK universities",
    "PSAT for Oxford",
    "PSAT for Cambridge",
    "PSAT for Australian universities",
    "PSAT for University of Melbourne",
    "PSAT for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student PSAT exam",
    "IB student PSAT exam",
    "international school India PSAT",
    "PSAT for Grade 11",
    "PSAT for Grade 12",
    "PSAT eligibility India",
    "PSAT registration process India",
    "PSAT test centres list India",
    "PSAT score validity",
    "PSAT score report universities",
    "PSAT fee waiver India",
    "PSAT retake policy",
    "is PSAT exam hard",
    "PSAT exam difficulty",
    "PSAT exam worth it India",
    "PSAT exam benefits",
    "PSAT vs SAT which is easier",
    "PSAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/PSAT-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/PSAT-coaching/",
      en: "https://eduquest.org.in/PSAT-coaching/",
      "en-IN": "https://eduquest.org.in/PSAT-coaching/",
    },
  },

  openGraph: {
    title: "PSAT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top PSAT exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/PSAT-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest PSAT Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PSAT Exam Coaching | EduQuest India",
    description:
      "Ace the PSAT with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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