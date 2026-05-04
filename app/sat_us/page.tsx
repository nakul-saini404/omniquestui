import type { Metadata } from "next";
import SATUs from "./sat_us";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
} from "./UsSchema";

export const metadata: Metadata = {
  title:
    "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest Online SAT Prep",
  description:
    "EduQuest — expert online SAT coaching for US-based students. Digital SAT 2026 aligned, EST/CST/PST sessions, Bluebook-native mocks, 19-cluster diagnostics. Average score 1560. PSAT & National Merit prep included.",
  keywords:
    "SAT coaching US students, SAT prep USA 2026, digital SAT coaching online, SAT tutoring for US students, best SAT coaching online, SAT 1570 preparation, PSAT NMSQT coaching, National Merit scholarship prep, SAT coaching EST CST PST, EduQuest SAT USA, online SAT tutor United States, SAT score 1500 US universities",
  openGraph: {
    title:
      "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest Online SAT Prep",
    description:
      "Online SAT coaching for US students — EST/CST/PST slots, Bluebook-native mocks, 19-cluster diagnostics, PSAT/National Merit prep. 2025 US batch averaged 1560.",
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
      "Online SAT coaching built for US students — Bluebook mocks, EST/CST/PST slots, PSAT/National Merit prep. Avg score 1560.",
    images: [
      "https://eduquest.org.in/images/sat-coaching-us-students-og.jpg",
    ],
  },
  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-us-students/",
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
      <SATUs />
    </>
  );
}