import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./onlineTutionSchema";
import ONLINETUITION from "./onlinetution";

export const metadata: Metadata = {
  title:
    "Online Home Tuition for Class 6–12 | CBSE, ICSE, IB Tutors | EduQuest",
  description:
    "Expert online home tuition for Class 6, 7, 8, 9, 10, 11 & 12 — CBSE, ICSE & IB boards. 1-on-1 live classes, personalised learning, experienced teachers. Book a free demo with EduQuest today.",
  keywords: [
    "online home tuition",
    "online tuition class 6",
    "online tuition class 7",
    "online tuition class 8",
    "online tuition class 9",
    "online tuition class 10",
    "online tuition class 11",
    "online tuition class 12",
    "CBSE online tuition",
    "ICSE online tuition",
    "IB online tuition",
    "online home tutor",
    "online tuition India",
    "best online tuition",
    "1 on 1 online tuition",
    "online tuition for board exams",
    "home tuition online classes",
    "CBSE class 10 online tuition",
    "ICSE class 12 online tuition",
    "IB tutors online",
    "online maths tuition",
    "online science tuition",
    "EduQuest online tuition",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/online-home-tuition/",
    languages: {
      "x-default": "https://eduquest.org.in/online-home-tuition/",
      en: "https://eduquest.org.in/online-home-tuition/",
      "en-IN": "https://eduquest.org.in/online-home-tuition/",
    },
  },
  openGraph: {
    title: "Online Home Tuition for Class 6–12 | CBSE, ICSE, IB | EduQuest",
    description:
      "Personalised 1-on-1 online tuition for CBSE, ICSE & IB students in Class 6 to 12. Expert tutors, flexible timings, proven results. Book your free demo today!",
    url: "https://eduquest.org.in/online-home-tuition/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest Online Home Tuition for Class 6 to 12",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Home Tuition | Class 6–12 | CBSE, ICSE, IB — EduQuest",
    description:
      "Expert 1-on-1 online tuition for Class 6 to 12 across CBSE, ICSE & IB boards. Personalised learning with top tutors.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OnlineHomeTuitionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <ONLINETUITION />
    </>
  );
}