/* ──────────────────────────────────────────────────────────────────────────────
   flexibleLearningHoursSchema.ts
   Structured-data schemas for /flexible-learning-hours
   Flexible Learning Hours by EduQuest
   ────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/flexible-learning-hours/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How flexible are the learning hours at EduQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest offers 24/7 flexibility. Students can schedule their sessions early in the morning, late at night, or on weekends to fit their school and extracurricular commitments.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my class timings frequently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our personalized learning model allows for scheduling adjustments. We understand that student schedules can be dynamic, and our mentors are flexible enough to accommodate changes.",
      },
    },
    {
      "@type": "Question",
      name: "Are there different time slots available for international students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We cater to students across different time zones, including the USA, UK, UAE, and Singapore, ensuring that every student gets a convenient slot regardless of their location.",
      },
    },
    {
      "@type": "Question",
      name: "Does flexible scheduling affect the quality of learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. In fact, learning when you are most alert and comfortable improves retention and performance. Our high standards of teaching remain consistent across all time slots.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a flexible session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students can book their preferred time slots through our dedicated learning management portal or by coordinating with their assigned student counselor.",
      },
    }
  ],
};

// ── Breadcrumb Schema ───────────────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Flexible Learning Hours", item: PAGE_URL },
  ],
};

// ── Organization Schema ─────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: SITE_URL,
  logo: SITE_URL + "/wp-content/uploads/eduquest-logo.png",
  image: SITE_URL + "/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is a leading global admissions strategy firm and education intelligence ecosystem, offering highly flexible learning schedules for test prep and academic excellence.",
  foundingDate: "1995",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9958041888",
      contactType: "Admissions",
      email: "contact@eduquest.org.in",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
    },
  ],
  sameAs: [
    "https://www.facebook.com/EduQuestIndia",
    "https://www.instagram.com/eduquest_india",
    "https://www.linkedin.com/company/eduquest-india",
    "https://www.youtube.com/@EduQuestIndia",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── WebPage Schema ──────────────────────────────────────────────────────────
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Flexible Learning Hours | Custom Study Schedules - EduQuest",
  url: PAGE_URL,
  description:
    "Maximize your learning potential with EduQuest's flexible learning hours. Tailored study schedules for SAT, ACT, AP, and school curricula designed to fit your busy lifestyle.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Flexible Education",
    description: "Customizable academic schedules and personalized learning timelines.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "High school students and aspirants seeking flexible test prep and academic coaching.",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sectionLabel"],
  },
};

// ── Service Schema ──────────────────────────────────────────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EduQuest Flexible Learning Services",
  description: "Personalized and adaptable learning options for global students.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "24/7 On-Demand Scheduling",
        description:
          "Book sessions at any time that suits your schedule, ensuring learning never stops.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Personalized Study Timelines",
        description:
          "Custom-built learning paths that adapt to your pace and academic goals.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Cross-Timezone Academic Support",
        description:
          "Dedicated support for students globally, accommodating all time zones for seamless education.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    }
  ],
};
