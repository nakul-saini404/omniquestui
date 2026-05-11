import type { Metadata } from "next";
import SATGurgaon from "./sat_gurgaon";

export const metadata: Metadata = {
  // ✅ Title is good but slightly long — trim to ~60 chars
  title: "SAT Coaching in Gurgaon 2026 | Score 1500+ | EduQuest",

  // ✅ Trim description to ~155 chars
  description:
    "India's #1 SAT coaching in Gurgaon. Digital SAT 2026, adaptive testing, 1500+ score plans. Online & offline classes in Gurgaon & Delhi NCR. Free diagnostic test.",

  // ❌ keywords tag has no SEO value in 2026 — you can remove it
  // keywords: "...", 

  openGraph: {
    title: "SAT Coaching in Gurgaon 2026 | Score 1500+ | EduQuest",
    description:
      "India's #1 SAT coaching in Gurgaon. Digital SAT 2026, 1500+ score plans. Online & offline in Delhi NCR.",
    url: "https://eduquest.org.in/sat-coaching-classes-gurugram/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    // ❌ MISSING — add this or WhatsApp/LinkedIn previews will be blank
    images: [
      {
        url: "https://eduquest.org.in/images/og-sat-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "SAT Coaching in Gurgaon — EduQuest",
      },
    ],
  },

  // ✅ Add Twitter card
  twitter: {
    card: "summary_large_image",
    title: "SAT Coaching in Gurgaon 2026 | Score 1500+ | EduQuest",
    description:
      "India's #1 SAT coaching in Gurgaon. Digital SAT 2026, 1500+ score plans.",
    images: ["https://eduquest.org.in/images/og-sat-gurgaon.jpg"],
  },

  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-classes-gurugram/",
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
      name: "What is SAT coaching in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Gurgaon refers to structured preparation programs offered by institutes like EduQuest that prepare students for the Digital SAT exam. EduQuest offers both online and offline SAT coaching in Gurgaon using a Diagnostic Test Framework and adaptive coaching model.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SAT coaching cost in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAT coaching in Gurgaon at EduQuest starts at Rs. 50,000/- for classroom and online one-on-one sessions. Hybrid one-on-one programs start at Rs. 70,000/-. Prices vary by course format and duration.",
      },
    },
    {
      "@type": "Question",
      name: "How to score 1500+ on the SAT in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score 1500+ by: taking a diagnostic test to identify your baseline, targeting weak skill clusters, mastering Bluebook's interface, taking 6+ full-length adaptive mocks, and aligning your score with a broader admissions strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online SAT coaching in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers Online Live Group classes, Hybrid (online + offline) courses, One-on-One sessions, and a fully integrated year-round programme for students in Gurgaon and across India.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start SAT coaching in Gurgaon?",
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
      name: "SAT Coaching Gurgaon",
      item: "https://eduquest.org.in/sat-coaching-classes-gurugram/",
    },
  ],
};


// ADD 1: EducationalOrganization (LocalBusiness for coaching institutes)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/logo.png",
  description: "India's top SAT coaching institute in Gurgaon offering Digital SAT prep.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  telephone: "+91-XXXXXXXXXX",
  areaServed: ["Gurgaon", "Delhi", "Noida", "Delhi NCR"],
  sameAs: [
    "https://www.instagram.com/eduquest.in",
    "https://www.youtube.com/@eduquest",
    // add your actual social links
  ],
};

// ADD 2: Course schema — Google can show this as a rich result
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SAT Coaching in Gurgaon",
  description:
    "Comprehensive Digital SAT preparation with adaptive coaching, diagnostic testing, and 1500+ score planning.",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      name: "Online Live SAT Coaching",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "Classroom SAT Coaching Gurgaon",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
      },
      offers: {
        "@type": "Offer",
        price: "70000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function SATGurgaonPage() {
  return (
    <>
       <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <SATGurgaon />
    </>
  );
}