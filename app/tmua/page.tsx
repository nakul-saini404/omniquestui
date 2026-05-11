// app/act-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  actSectionListSchema,
} from "./tmuaSchema";
import ACTCOACHING from "./tmua";
import TMUACOACHING from "./tmua";

export const metadata: Metadata = {
  title: "ACT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
  description:
    "Ace the ACT with EduQuest — India's leading ACT coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for ACT English, Math, Reading, Science and Writing. Trusted by 10,000+ students applying to US, UK, Canada & Australia universities.",
  keywords: [
    // ── Core ACT exam terms ────────────────────────────────────────
    "ACT exam",
    "ACT exam 2025",
    "ACT exam India",
    "ACT exam dates 2025",
    "ACT exam dates India 2025",
    "ACT exam registration 2025",
    "ACT exam registration India",
    "ACT exam schedule 2025",
    "ACT exam syllabus",
    "ACT exam pattern",
    "ACT exam fee India",
    "ACT exam centres India",
    "ACT exam score",
    "ACT composite score",
    "ACT score 36",
    "ACT score 34",
    "ACT score 32",
    "ACT score calculator",
    "ACT scoring scale",
    "ACT percentile",
    "ACT passing score",
    "what is ACT exam",
    "American College Testing",
    "ACT vs SAT",
    "ACT or SAT for Indian students",
    "ACT test format",
    "ACT test sections",
    "ACT test duration",
    "ACT test day tips",

    // ── Section-specific — English ─────────────────────────────────
    "ACT English",
    "ACT English grammar",
    "ACT English rhetoric",
    "ACT English style",
    "ACT English punctuation",
    "ACT English tips",
    "ACT English practice",

    // ── Section-specific — Math ────────────────────────────────────
    "ACT Math",
    "ACT Math algebra",
    "ACT Math geometry",
    "ACT Math trigonometry",
    "ACT Math statistics",
    "ACT Math tips",
    "ACT Math practice",
    "ACT Math without calculator",

    // ── Section-specific — Reading ─────────────────────────────────
    "ACT Reading",
    "ACT Reading comprehension",
    "ACT Reading passage types",
    "ACT Reading tips",
    "ACT Reading strategy",
    "ACT Reading practice",

    // ── Section-specific — Science ─────────────────────────────────
    "ACT Science",
    "ACT Science reasoning",
    "ACT Science data representation",
    "ACT Science research summary",
    "ACT Science conflicting viewpoints",
    "ACT Science tips",
    "ACT Science practice",

    // ── Section-specific — Writing ─────────────────────────────────
    "ACT Writing",
    "ACT Writing essay",
    "ACT Writing score",
    "ACT Writing tips",
    "ACT Writing practice",
    "ACT optional essay",

    // ── Coaching & preparation ────────────────────────────────────
    "ACT coaching India",
    "ACT coaching Delhi",
    "ACT coaching Gurgaon",
    "ACT coaching Mumbai",
    "ACT coaching Bangalore",
    "ACT coaching Chennai",
    "ACT coaching Hyderabad",
    "ACT coaching online India",
    "ACT online classes India",
    "ACT exam preparation India",
    "ACT exam preparation tips",
    "ACT exam preparation strategy",
    "ACT preparation timeline",
    "ACT 3 month preparation plan",
    "ACT 6 month preparation plan",
    "ACT practice test",
    "ACT mock test",
    "ACT free practice test",
    "ACT full length practice test",
    "ACT study material India",
    "ACT study guide",
    "ACT tutor India",
    "ACT tutor online",
    "best ACT coaching India",
    "EduQuest ACT coaching",
    "EduQuest ACT exam",
    "ACT coaching for Indian students",
    "ACT exam help India",
    "how to prepare for ACT exam",
    "ACT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to get 36 on ACT",
    "how to get 34 on ACT",
    "how to improve ACT score",
    "ACT score improvement tips",
    "ACT score for Ivy League",
    "ACT score for MIT",
    "ACT score for Stanford",
    "ACT score for Harvard",
    "ACT score for top US colleges",
    "ACT score for scholarships",
    "ACT superscoring",
    "ACT score choice",

    // ── US university admissions ──────────────────────────────────
    "ACT for US university admission",
    "ACT for Ivy League",
    "ACT for MIT",
    "ACT for Stanford",
    "ACT for Harvard",
    "ACT for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many ACT attempts allowed",
    "ACT for pre-med students",
    "ACT for engineering students",
    "ACT for business students",

    // ── Canada, UK & Australia ─────────────────────────────────────
    "ACT for Canada universities",
    "ACT for University of Toronto",
    "ACT for UBC",
    "study in Canada from India",
    "ACT for UK universities",
    "ACT for Oxford",
    "ACT for Cambridge",
    "ACT for Australian universities",
    "ACT for University of Melbourne",
    "ACT for UNSW",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "CBSE student ACT exam",
    "IB student ACT exam",
    "international school India ACT",
    "ACT for Grade 11",
    "ACT for Grade 12",
    "ACT eligibility India",
    "ACT registration process India",
    "ACT test centres list India",
    "ACT score validity",
    "ACT score report universities",
    "ACT fee waiver India",
    "ACT retake policy",
    "is ACT exam hard",
    "ACT exam difficulty",
    "ACT exam worth it India",
    "ACT exam benefits",
    "ACT vs SAT which is easier",
    "ACT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/act-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/act-coaching/",
      en: "https://eduquest.org.in/act-coaching/",
      "en-IN": "https://eduquest.org.in/act-coaching/",
    },
  },

  openGraph: {
    title: "ACT Exam Coaching for Indian Students | Score 34–36 | EduQuest",
    description:
      "India's top ACT exam coaching — all sections (English, Math, Reading, Science, Writing), expert tutors, full-length timed mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/act-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest ACT Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ACT Exam Coaching | EduQuest India",
    description:
      "Ace the ACT with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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