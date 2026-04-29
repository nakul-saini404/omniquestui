import type { Metadata } from "next";
import SATJaipur from "./sat_jaipur";

export const metadata: Metadata = {
  title: "SAT Coaching in Jaipur 2026 | Score 1500+ | EduQuest",
  description:
    "India's #1 SAT coaching in Jaipur. Digital SAT 2026, adaptive testing, diagnostics, 1500+ score plans. Online & offline classes for Jaipur students. Free diagnostic test.",
  // ❌ Remove keywords — no SEO value in 2026
  openGraph: {
    title: "SAT Coaching in Jaipur 2026 | Score 1500+ | EduQuest",
    description:
      "India's #1 SAT coaching in Jaipur. Digital SAT 2026, 1500+ score plans. Online & offline classes.",
    url: "https://eduquest.org.in/sat-coaching-classes-jaipur/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "SAT Coaching in Jaipur — EduQuest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Coaching in Jaipur 2026 | Score 1500+ | EduQuest",
    description:
      "India's #1 SAT coaching in Jaipur. Digital SAT 2026, 1500+ score plans.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
  alternates: {
    canonical: "https://eduquest.org.in/sat-coaching-classes-jaipur/",
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
      name: "What is SAT coaching in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        // ✅ Jaipur-specific — mentions local schools and context
        text: "SAT coaching in Jaipur at EduQuest serves students from leading schools like Maharaja Sawai Man Singh Vidyalaya, St. Xavier's, and other IB and CBSE schools across Jaipur. Programs include a Diagnostic Test Framework, adaptive 1-on-1 coaching, and full Bluebook interface training for the Digital SAT.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SAT coaching cost in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        // ✅ More detail than other city pages
        text: "SAT coaching at EduQuest for Jaipur students starts at Rs. 50,000/- for online one-on-one sessions. Hybrid (online + offline) programs start at Rs. 70,000/-. Jaipur students attend online live classes or visit our Gurgaon centre for in-person sessions. All programs include diagnostics, mocks, and score planning.",
      },
    },
    {
      "@type": "Question",
      name: "How to score 1500+ on the SAT from Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        // ✅ Jaipur student journey specific
        text: "Jaipur students scoring 1500+ at EduQuest typically start prep in Grade 10 via online live classes. The roadmap: baseline diagnostic → personalised skill-cluster targeting → Bluebook interface mastery → 6+ full-length adaptive mock tests → US university admissions strategy alignment.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online SAT coaching for Jaipur students?",
      acceptedAnswer: {
        "@type": "Answer",
        // ✅ Acknowledges Jaipur is primarily online
        text: "Yes. Since EduQuest's physical centre is in Gurgaon, Jaipur students primarily attend Online Live Group classes or fully Online One-on-One sessions. Hybrid options are also available for students willing to travel to the Gurgaon centre periodically.",
      },
    },
    {
      "@type": "Question",
      name: "Which Jaipur schools does EduQuest work with?",
      acceptedAnswer: {
        "@type": "Answer",
        // ✅ Unique question — targets "SAT coaching near [school]" searches
        text: "EduQuest works with students from top Jaipur schools including St. Xavier's Senior Secondary School, Maharaja Sawai Man Singh Vidyalaya, Seedling Modern High School, and other CBSE and IB schools across Jaipur.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Digital SAT exam pattern 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital SAT 2026 has 2 sections: Reading & Writing (54 questions, 64 min) and Math (44 questions, 70 min). Total duration is 2 hrs 14 min. The test is fully adaptive with 2 modules per section. Calculator allowed throughout Math. Scored 400–1600.",
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
      name: "SAT Coaching Jaipur",
      item: "https://eduquest.org.in/sat-coaching-classes-jaipur/",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  description: "India's premier SAT, ACT, AP, UCAT and global admissions strategy firm.",
  telephone: "+91-9958041888",
  email: "contact@eduquest.org.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-45, First Floor, South City II, Sector 50",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
  },
  areaServed: ["Jaipur", "Rajasthan", "Delhi NCR", "Gurgaon"],
  sameAs: [
    "https://www.facebook.com/eduquestind/",
    "https://twitter.com/eduquest1",
    "https://www.instagram.com/eduquest_education_",
    "https://www.linkedin.com/company/eduquest-learning-centre/",
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "SAT Coaching in Jaipur",
  description:
    "Digital SAT preparation for Jaipur students with adaptive coaching, diagnostic testing, and 1500+ score planning via online and hybrid formats.",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "online",
      name: "Online Live SAT Coaching for Jaipur Students",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "CourseInstance",
      courseMode: "blended",
      name: "Hybrid SAT Coaching — Online + Gurgaon Centre",
      offers: {
        "@type": "Offer",
        price: "70000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function SATJaipurPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <SATJaipur />
    </>
  );
}