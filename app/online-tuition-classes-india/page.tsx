import type { Metadata } from "next";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./onlineTutionIndiaSchema";
import ONLINETUITIONINDIA from "./onlinetutionIndia";

export const metadata: Metadata = {
  title:
    "Online Tuition Classes in India | Class 6–12 CBSE, ICSE, IB Tutors | EduQuest",
  description:
    "Best online tuition classes in India for Class 6, 7, 8, 9, 10, 11 & 12 — CBSE, ICSE & IB boards. Live 1-on-1 sessions with expert tutors, personalised study plans, exam-focused coaching. Join 10,000+ students. Book a free demo with EduQuest today.",
  keywords: [
    "online tuition classes in India",
    "online tuition India",
    "best online tuition classes in India",
    "online tuition for class 6 India",
    "online tuition for class 7 India",
    "online tuition for class 8 India",
    "online tuition for class 9 India",
    "online tuition for class 10 India",
    "online tuition for class 11 India",
    "online tuition for class 12 India",
    "CBSE online tuition India",
    "ICSE online tuition India",
    "IB online tuition India",
    "online home tutor India",
    "best online tutor in India",
    "1 on 1 online tuition India",
    "online tuition for board exams India",
    "online maths tuition India",
    "online science tuition India",
    "online English tuition India",
    "affordable online tuition India",
    "EduQuest online tuition India",
    "online coaching classes India",
    "live online tuition India",
    "online tuition classes near me",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/online-tuition-classes-india/",
    languages: {
      "x-default": "https://eduquest.org.in/online-tuition-classes-india/",
      en: "https://eduquest.org.in/online-tuition-classes-india/",
      "en-IN": "https://eduquest.org.in/online-tuition-classes-india/",
    },
  },
  openGraph: {
    title: "Online Tuition Classes in India | Class 6–12 | CBSE, ICSE, IB | EduQuest",
    description:
      "India's most trusted online tuition platform. Personalised 1-on-1 live classes for CBSE, ICSE & IB students in Class 6 to 12. 30+ years of excellence, 10,000+ students guided. Book your free demo today!",
    url: "https://eduquest.org.in/online-tuition-classes-india/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest Online Tuition Classes in India for Class 6 to 12",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Tuition Classes in India | Class 6–12 | CBSE, ICSE, IB — EduQuest",
    description:
      "Best online tuition in India for Class 6 to 12 across CBSE, ICSE & IB boards. Live 1-on-1 sessions with expert tutors. Join 10,000+ students today.",
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

export default function OnlineHomeTuitionINDIAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <ONLINETUITIONINDIA />
    </>
  );
}