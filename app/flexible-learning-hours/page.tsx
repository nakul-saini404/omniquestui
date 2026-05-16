import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd/JsonLd";
import {
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
  courseSchema,
} from "./flexibleLearningHoursSchema";
import FlexibleLearningHours from "./flexible-learning-hours";

export const metadata: Metadata = {
  title: "Flexible Learning Hours | Personalized Study Schedules - EduQuest",
  description:
    "EduQuest offers 24/7 flexible learning hours for SAT, ACT, AP, and school curricula. Customize your study schedule to fit your lifestyle and achieve academic excellence with our expert mentors.",
  keywords: [
    "Flexible Learning Hours",
    "Personalized Study Schedule",
    "24/7 Online Tutoring",
    "Custom Learning Paths",
    "Flexible SAT Coaching",
    "Online ACT Prep Flexibility",
    "Customizable AP Classes",
    "EduQuest Flexible Hours",
    "Self-Paced Learning",
    "Adaptive Study Timelines",
    "Remote Learning Flexibility",
    "Weekend Tutoring Sessions",
    "Late Night Study Support",
    "Early Morning Coaching",
    "Global Timezone Tutoring",
    "Tailored Education Plans",
    "Flexible Academic Mentorship",
    "Student-Centric Scheduling",
    "Convenient Online Classes",
    "On-Demand Learning",
    "Flexible IB Tutoring",
    "Customized IGCSE Prep",
    "Flexible PSAT Coaching",
    "Personalized Test Prep",
    "Study at Your Own Pace",
    "Flexible Admissions Counseling",
    "Remote Academic Support",
    "Custom Study Hours India",
    "International Student Schedules",
    "USA Study Abroad Prep Flexibility",
    "UK University Prep Schedules",
    "Canada Admission Guidance Timing",
    "Australia Study Prep Flexibility",
    "Flexible Coding Classes",
    "Personalized Math Tutoring",
    "Science Coaching Flexible Hours",
    "English Proficiency Prep Timing",
    "IELTS Flexible Sessions",
    "TOEFL Custom Schedules",
    "PTE Online Flexibility",
    "Flexible GRE Prep",
    "GMAT Customized Timing",
    "SAT Prep for Busy Students",
    "ACT Strategy Flexible Slots",
    "AP Subject Coaching Time",
    "Digital SAT Prep Flexibility",
    "One-on-One Flexible Tutoring",
    "Group Class Flexibility",
    "Hybrid Learning Schedules",
    "Educational Planning Flexibility",
    "Career Counseling Flexible Hours",
    "Profile Building Time Flexibility",
    "College Essay Mentorship Timing",
    "Interview Prep Flexible Slots",
    "Visa Guidance Availability",
    "Financial Prep Support Timing",
    "Extracurricular Planning Flexibility",
    "Summer Program Prep Timing",
    "Winter Break Study Slots",
    "EduQuest Personalized Learning",
  ],
  alternates: {
    canonical: "https://eduquest.org.in/flexible-learning-hours/",
    languages: {
      "x-default": "https://eduquest.org.in/flexible-learning-hours/",
      en: "https://eduquest.org.in/flexible-learning-hours/",
      "en-IN": "https://eduquest.org.in/flexible-learning-hours/",
    },
  },
  openGraph: {
    title: "Flexible Learning Hours | Personalized Study Schedules - EduQuest",
    description:
      "Maximize your academic potential with EduQuest's flexible learning hours. Tailored study schedules for global success.",
    url: "https://eduquest.org.in/flexible-learning-hours/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/flexible-learning-og.jpg",
        width: 1200,
        height: 630,
        alt: "Flexible Learning Hours by EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexible Learning Hours | Personalized Study Schedules - EduQuest",
    description:
      "EduQuest offers 24/7 flexible learning hours for SAT, ACT, AP, and school curricula. Customize your study schedule today.",
    images: ["https://eduquest.org.in/wp-content/uploads/flexible-learning-og.jpg"],
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

export default function FlexibleLearningHoursPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={courseSchema} />

      <FlexibleLearningHours />
    </>
  );
}