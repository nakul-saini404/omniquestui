// app/ap-coaching/page.tsx

import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  courseSchema,
  organizationSchema,
  webPageSchema,
  apSubjectListSchema,
} from "./apCoachingSchemas";
import APCOACHING from "./apCoaching";

export const metadata: Metadata = {
  title: "AP Exam Coaching for Indian Students | Score 4–5 | EduQuest",
  description:
    "Ace AP exams with EduQuest — India's leading AP coaching institute. Expert tutors, full-length practice tests & personalised score plans for AP Calculus, Physics, Chemistry, Biology, CS, English and more.",
  keywords: [
    // ── Core AP exam terms ────────────────────────────────────────
    "AP exam",
    "AP exams 2025",
    "Advanced Placement exam",
    "AP exam 2025 India",
    "AP exam dates 2025",
    "AP exam registration 2025",
    "AP exam schedule 2025",
    "AP exam syllabus",
    "AP exam pattern",
    "AP exam fee India",
    "AP exam centres India",
    "AP exam score",
    "AP score 5",
    "AP score 4",
    "AP score calculator",
    "AP exam passing score",
    "College Board AP",
    "College Board India",

    // ── Subject-specific — STEM ───────────────────────────────────
    "AP Calculus AB",
    "AP Calculus BC",
    "AP Calculus AB vs BC",
    "AP Physics 1",
    "AP Physics 2",
    "AP Physics C Mechanics",
    "AP Physics C Electricity and Magnetism",
    "AP Chemistry",
    "AP Biology",
    "AP Environmental Science",
    "AP Statistics",
    "AP Computer Science A",
    "AP Computer Science Principles",

    // ── Subject-specific — Humanities & Social Sciences ───────────
    "AP English Language and Composition",
    "AP English Literature and Composition",
    "AP World History Modern",
    "AP US History",
    "AP European History",
    "AP Human Geography",
    "AP Psychology",
    "AP Microeconomics",
    "AP Macroeconomics",
    "AP Government and Politics",
    "AP Art History",

    // ── Coaching & preparation ────────────────────────────────────
    "AP coaching India",
    "AP coaching Delhi",
    "AP coaching Gurgaon",
    "AP coaching Mumbai",
    "AP coaching Bangalore",
    "AP coaching online India",
    "AP online classes India",
    "AP exam preparation India",
    "AP exam preparation tips",
    "AP exam preparation strategy",
    "AP practice test",
    "AP mock test",
    "AP free practice test",
    "AP study material India",
    "AP study guide",
    "AP tutor India",
    "AP tutor online",
    "best AP coaching India",
    "EduQuest AP coaching",
    "EduQuest AP exam",
    "AP coaching for Indian students",
    "AP exam help India",

    // ── US university admissions ──────────────────────────────────
    "AP for US university admission",
    "AP exams for Ivy League",
    "AP exams for MIT",
    "AP exams for Stanford",
    "AP exams for Harvard",
    "AP credit US universities",
    "AP for international students",
    "study in USA from India",
    "USA undergraduate admission India",
    "US college admission for Indian students",
    "US university application India",
    "how many AP exams for top US colleges",
    "AP exams for pre-med",
    "AP exams for engineering",

    // ── Canada & other geographies ────────────────────────────────
    "AP exams Canada",
    "AP for University of Toronto",
    "AP for UBC",
    "study in Canada from India",
    "AP UK universities",
    "AP for Oxford",
    "AP for Cambridge",
    "AP for Australian universities",

    // ── Competitor / comparison terms ────────────────────────────
    "AP vs IB",
    "AP vs A Level",
    "AP vs SAT Subject Tests",
    "is AP exam hard",
    "AP exam difficulty",
    "AP exam tips and tricks",
    "how to get 5 in AP exam",
    "AP exam last minute tips",

    // ── Broader study abroad ──────────────────────────────────────
    "study abroad from India",
    "study in USA for Indian students",
    "international school India AP curriculum",
    "AP curriculum school India",
    "AP school India",
    "CBSE student AP exam",
    "IB vs AP for Indian students",

    // ── Long-tail / informational ─────────────────────────────────
    "what is AP exam",
    "what is Advanced Placement",
    "AP exam for Grade 11",
    "AP exam for Grade 12",
    "how to prepare for AP exam",
    "AP exam preparation timeline",
    "AP exam 3 month plan",
    "AP exam 6 month plan",
    "how to register for AP exam in India",
    "AP exam eligibility India",
    "AP college credit India",
    "how AP scores are calculated",
    "AP score report",
    "AP exam retake policy",
    "AP exam worth it India",
    "AP exam benefits",
  ],

  alternates: {
    canonical: "https://eduquest.org.in/ap-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/ap-coaching/",
      en: "https://eduquest.org.in/ap-coaching/",
      "en-IN": "https://eduquest.org.in/ap-coaching/",
    },
  },

  openGraph: {
    title: "AP Exam Coaching for Indian Students | Score 4–5 | EduQuest",
    description:
      "India's top AP exam coaching — all subjects, expert tutors, full-length mocks & personalised score plans for US, UK, Canada & Australia university admissions.",
    url: "https://eduquest.org.in/ap-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest AP Exam Coaching India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AP Exam Coaching | EduQuest India",
    description:
      "Ace AP exams with India's top coaching — expert tutors, full mocks & score strategies for US, UK, Canada & Australia universities.",
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

export default function ApCoachingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apSubjectListSchema) }}
      />

      {/* ── Page Component ── */}
      <APCOACHING />
    </>
  );
}