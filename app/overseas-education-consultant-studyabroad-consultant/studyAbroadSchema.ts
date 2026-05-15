/* ──────────────────────────────────────────────────────────────────────────────
   studyAbroadSchema.ts
   Structured-data schemas for /overseas-education-consultant-studyabroad-consultant
   Study Abroad by EduQuest
   ────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/overseas-education-consultant-studyabroad-consultant/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which countries does EduQuest specialize in for study abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest specializes in top study destinations including the USA, UK, Canada, Australia, Singapore, and European countries. Our consultants provide region-specific expertise to help you choose the right destination.",
      },
    },
    {
      "@type": "Question",
      name: "What services does EduQuest provide for overseas education?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide comprehensive services including university selection, application assistance, SOP and LOR guidance, visa processing, test preparation (SAT/ACT/IELTS/TOEFL), and financial documentation support.",
      },
    },
    {
      "@type": "Question",
      name: "How can a study abroad consultant help in the application process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A consultant helps streamline your profile, selects universities that match your goals, ensures all deadlines are met, and provides critical feedback on your application essays to maximize your chances of admission.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest assist with student visas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we have a dedicated team for visa guidance that helps students prepare for visa interviews and ensures all required documentation is accurately compiled for a successful visa application.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start the study abroad application process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is ideal to start 10-12 months before your intended intake. This allows enough time for test preparation, university research, and the multi-step application and visa process.",
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
    { "@type": "ListItem", position: 2, name: "Study Abroad", item: PAGE_URL },
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
    "EduQuest is a leading global admissions strategy firm and education intelligence ecosystem, providing expert overseas education consultancy for students aiming for top global universities.",
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
    {
      "@type": "ContactPoint",
      telephone: "+91-9717738553",
      contactType: "Student Support",
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
  name: "Best Overseas Education Consultant | Study Abroad Consultant - EduQuest",
  url: PAGE_URL,
  description:
    "EduQuest is your trusted overseas education consultant. We provide expert study abroad counseling, university admissions assistance, and visa guidance for USA, UK, Canada, Australia, and more.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Overseas Education",
    description: "Global education consultancy and admissions strategy for international students.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Aspirants looking to pursue higher education in foreign universities",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sectionLabel"],
  },
};

// ── Service Schema (instead of Course for Study Abroad) ───────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EduQuest Study Abroad Services",
  description: "End-to-end support for international university admissions and overseas education.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "University Selection & Admissions Strategy",
        description:
          "Expert guidance in selecting the right universities and crafting a winning admissions strategy tailored to your profile.",
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
        name: "Visa Assistance & Financial Documentation",
        description:
          "Comprehensive support for student visa applications, mock interviews, and financial proof documentation.",
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
        name: "SOP & LOR Mentorship",
        description:
          "Personalized mentorship to help you write impactful Statements of Purpose and secure strong Letters of Recommendation.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
      },
    }
  ],
};
