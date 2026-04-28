import type { Metadata } from "next";
import SAT from "./sat";

export const metadata: Metadata = {
  title: "SAT Coaching 2026 | Score 1500+ | EduQuest India's #1 SAT Prep",
  description:
    "EduQuest — India's top SAT coaching. Digital SAT syllabus 2026, adaptive testing strategy, section-wise prep, 1500+ score plans. Online + offline in Delhi, Gurgaon, Bangalore.",
  keywords:
    "SAT coaching India, SAT exam 2026, SAT syllabus 2026, digital SAT, SAT coaching Delhi, how to score 1500, SAT question types, SAT adaptive testing, SAT preparation",
  openGraph: {
    title: "SAT Coaching 2026 | Score 1500+ | EduQuest India's #1 SAT Prep",
    description:
      "EduQuest — India's top SAT coaching. Digital SAT syllabus 2026, adaptive testing strategy, section-wise prep, 1500+ score plans.",
    url: "https://eduquest.org.in/sat/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://eduquest.org.in/sat/",
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
      name: "What is the SAT exam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SAT (Scholastic Assessment Test) is a standardised college admission test by College Board used by US, UK, Canadian and Australian universities. It tests Reading & Writing and Math on a 400–1600 scale.",
      },
    },
    {
      "@type": "Question",
      name: "Is the SAT hard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital SAT is adaptive — difficulty adjusts per section based on your performance. With structured coaching and consistent practice, most students gain 150–300+ points.",
      },
    },
    {
      "@type": "Question",
      name: "How to score 1500+ on the SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score 1500+ by: taking a diagnostic test, identifying weak areas, mastering grammar and algebra fundamentals, practising daily with Bluebook, and taking 6+ full-length adaptive mock tests.",
      },
    },
    {
      "@type": "Question",
      name: "How many attempts are allowed for SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no official limit on SAT attempts. Most students sit 2–3 times. Colleges consider your best or superscore. EduQuest recommends starting by Grade 10–11.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SAT exam pattern 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital SAT 2026: 2 sections — Reading & Writing (54 Q, 64 min) and Math (44 Q, 70 min). Total 2 hrs 14 min. Fully adaptive (2 modules per section). Calculator allowed throughout Math.",
      },
    },
    {
      "@type": "Question",
      name: "How many questions are in the SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital SAT has 98 questions total: 54 in Reading & Writing and 44 in Math, across 4 adaptive modules (2 per section).",
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
  ],
};

export default function SATPage() {
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
      <SAT />
    </>
  );
}
