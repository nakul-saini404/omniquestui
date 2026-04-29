import type { Metadata } from "next";
import SATMumbai from "./sat_mumbai";

export const metadata: Metadata = {
  title: "SAT Coaching in Mumbai 2026 | Score 1500+ | EduQuest India's #1 SAT Prep",
  description:
    "EduQuest — India's top SAT coaching in Mumbai. Digital SAT syllabus 2026, adaptive testing strategy, section-wise prep, 1500+ score plans. Online + offline in Mumbai, Pune, Bangalore.",
  keywords:
    "SAT coaching Mumbai, SAT classes Mumbai, SAT exam 2026 Mumbai, digital SAT Mumbai, SAT coaching in Mumbai, best SAT institute Mumbai, SAT preparation Mumbai, how to score 1500 SAT Mumbai",
  openGraph: {
    title: "SAT Coaching in Mumbai 2026 | Score 1500+ | EduQuest",
    description:
      "EduQuest — India's top SAT coaching in Mumbai. Digital SAT syllabus 2026, adaptive testing strategy, section-wise prep, 1500+ score plans.",
    url: "https://eduquest.org.in/sat-coaching-classes-mumbai/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-classes-mumbai/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SAT coaching in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Mumbai refers to structured preparation programs offered by institutes like EduQuest that prepare students for the Digital SAT exam. EduQuest offers both online and offline SAT coaching in Mumbai using a Diagnostic Test Framework and adaptive coaching model.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SAT coaching cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Mumbai at EduQuest starts at Rs. 50,000/- for classroom and online one-on-one sessions. Hybrid one-on-one programs start at Rs. 70,000/-. Prices vary by course format and duration.",
      },
    },
    {
      "@type": "Question",
      name: "How to score 1500+ on the SAT in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score 1500+ by: taking a diagnostic test to identify your baseline, targeting weak skill clusters, mastering Bluebook's interface, taking 6+ full-length adaptive mocks, and aligning your score with a broader admissions strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online SAT coaching in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers Online Live Group classes, Hybrid (online + offline) courses, One-on-One sessions, and a fully integrated year-round programme for students in Mumbai and across India.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start SAT coaching in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11. Early preparation also allows for better university positioning.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Digital SAT exam pattern 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital SAT 2026: 2 sections — Reading & Writing (54 Q, 64 min) and Math (44 Q, 70 min). Total 2 hrs 14 min. Fully adaptive (2 modules per section). Calculator allowed throughout Math. Scored 400–1600.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://eduquest.org.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SAT Coaching",
      item: "https://eduquest.org.in/sat/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SAT Coaching Mumbai",
      item: "https://eduquest.org.in/sat-coaching-classes-mumbai/",
    },
  ],
};

export default function SATMumbaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SATMumbai />
    </>
  );
}