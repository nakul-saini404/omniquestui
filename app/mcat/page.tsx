// app/mcat-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  mcatSectionListSchema,
} from "./mcatSchema";
import MCATCOACHING from "./mcat";

export const metadata: Metadata = {
  title: "MCAT Coaching for Indian Students | Score 510+ | EduQuest",
  description:
    "Ace the MCAT with EduQuest — India's leading MCAT coaching institute. Expert tutors, full-length timed practice tests & personalised score plans for MCAT CARS, Biological Sciences, Chemical & Physical Foundations, and Psychological & Social Foundations. Trusted by students applying to US, UK, Canada & Australia medical schools.",
  keywords: [
    // ── Core MCAT exam terms ────────────────────────────────────────
    "MCAT exam",
    "MCAT exam 2025",
    "MCAT exam India",
    "MCAT exam dates 2025",
    "MCAT exam dates India 2025",
    "MCAT exam registration 2025",
    "MCAT exam registration India",
    "MCAT exam schedule 2025",
    "MCAT exam syllabus",
    "MCAT exam pattern",
    "MCAT exam fee India",
    "MCAT exam centres India",
    "MCAT exam score",
    "MCAT score 510",
    "MCAT score 515",
    "MCAT score 520",
    "MCAT score 528",
    "MCAT score calculator",
    "MCAT scoring scale",
    "MCAT percentile",
    "MCAT passing score",
    "what is MCAT exam",
    "Medical College Admission Test",
    "MCAT vs NEET",
    "MCAT vs UCAT",
    "MCAT test format",
    "MCAT test sections",
    "MCAT test duration",
    "MCAT test day tips",

    // ── Section-specific — CARS ─────────────────────────────────────
    "MCAT CARS",
    "MCAT Critical Analysis and Reasoning Skills",
    "MCAT CARS tips",
    "MCAT CARS practice",
    "MCAT CARS strategy",

    // ── Section-specific — Biological Sciences ──────────────────────
    "MCAT Biology",
    "MCAT Biological and Biochemical Foundations",
    "MCAT biochemistry",
    "MCAT biology tips",
    "MCAT biology practice",

    // ── Section-specific — Chemical & Physical ──────────────────────
    "MCAT Chemistry",
    "MCAT Physics",
    "MCAT Chemical and Physical Foundations",
    "MCAT organic chemistry",
    "MCAT general chemistry",
    "MCAT physics tips",

    // ── Section-specific — Psychological & Social ───────────────────
    "MCAT Psychology",
    "MCAT Sociology",
    "MCAT Psychological Social and Biological Foundations",
    "MCAT psychology tips",
    "MCAT sociology practice",

    // ── Coaching & preparation ────────────────────────────────────
    "MCAT coaching India",
    "MCAT coaching Delhi",
    "MCAT coaching Gurgaon",
    "MCAT coaching Mumbai",
    "MCAT coaching Bangalore",
    "MCAT coaching Chennai",
    "MCAT coaching Hyderabad",
    "MCAT coaching online India",
    "MCAT online classes India",
    "MCAT exam preparation India",
    "MCAT exam preparation tips",
    "MCAT exam preparation strategy",
    "MCAT preparation timeline",
    "MCAT 3 month preparation plan",
    "MCAT 6 month preparation plan",
    "MCAT practice test",
    "MCAT mock test",
    "MCAT free practice test",
    "MCAT full length practice test",
    "MCAT study material India",
    "MCAT study guide",
    "MCAT tutor India",
    "MCAT tutor online",
    "best MCAT coaching India",
    "EduQuest MCAT coaching",
    "MCAT coaching for Indian students",
    "how to prepare for MCAT exam",
    "MCAT self study India",

    // ── Scores & goals ────────────────────────────────────────────
    "how to score 510 on MCAT",
    "how to score 520 on MCAT",
    "how to improve MCAT score",
    "MCAT score improvement tips",
    "MCAT score for Harvard Medical",
    "MCAT score for Johns Hopkins",
    "MCAT score for top US medical schools",
    "MCAT score for scholarships",

    // ── Medical school admissions ──────────────────────────────────
    "MCAT for US medical school admission",
    "MCAT for international students",
    "medical school in USA from India",
    "US medical school admission for Indian students",
    "MCAT for Canada medical schools",
    "MCAT for Australian medical schools",
    "MBBS abroad for Indian students",

    // ── Broader study abroad ──────────────────────────────────────
    "study medicine abroad from India",
    "MCAT eligibility India",
    "MCAT registration process India",
    "MCAT test centres list India",
    "MCAT score validity",
    "MCAT score report",
    "MCAT retake policy",
    "is MCAT exam hard",
    "MCAT exam difficulty",
    "MCAT exam worth it India",
    "MCAT exam benefits",
    "MCAT vs NEET which is harder",
    "MCAT last minute tips",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/mcat-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/mcat-coaching/",
      en: "https://eduquest.org.in/mcat-coaching/",
      "en-IN": "https://eduquest.org.in/mcat-coaching/",
    },
  },

  openGraph: {
    title: "MCAT Coaching for Indian Students | Score 510+ | EduQuest",
    description:
      "India's top MCAT coaching — all four sections (CARS, Bio/Biochem, Chem/Phys, Psych/Soc), expert tutors, full-length timed mocks & personalised score plans for US, Canada & Australia medical school admissions.",
    url: "https://eduquest.org.in/mcat-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest MCAT Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MCAT Coaching | EduQuest India",
    description:
      "Ace the MCAT with India's top coaching — expert tutors, full mocks & score strategies for US, Canada & Australia medical schools.",
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

export default function MCATCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mcatSectionListSchema) }}
      />

      {/* ── Page Component ── */}
      <MCATCOACHING />
    </>
  );
}