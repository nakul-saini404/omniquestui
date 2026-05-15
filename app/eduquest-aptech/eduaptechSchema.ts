/* ──────────────────────────────────────────────────────────────────────────────
   eduaptechSchema.ts
   Structured-data schemas for /eduquest-aptech
   Aptech Learning by EduQuest
   ────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/eduquest-aptech/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Aptech pathway within OmniQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aptech is the career and skill development pathway within OmniQuest, designed for individuals building real-world capability and execution depth. It develops applied skill systems that translate learning into measurable, industry-relevant competence.",
      },
    },
    {
      "@type": "Question",
      name: "What does Aptech focus on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aptech focuses on applied skill development systems, industry-aligned capability building, real-world execution training, and career readiness infrastructure. The goal is to build demonstrable competence that strengthens both career outcomes and academic profiles.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the Aptech pathway designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Aptech pathway is designed for execution-focused learners and professionals who want to build practical, industry-relevant skills that go beyond theoretical knowledge — creating real proof of capability.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Aptech offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aptech offers industry-recognised certifications in Data Science for Business, AI for Managers, and other emerging technology domains, designed to strengthen both professional and academic profiles.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Aptech certification valuable for university interviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Aptech certifications demonstrate technical curiosity and initiative. Many students use these credentials as an anchor for their admissions narratives at top global universities and business schools.",
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
    { "@type": "ListItem", position: 2, name: "Aptech Learning", item: PAGE_URL },
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
    "EduQuest is a leading global admissions strategy firm and education intelligence ecosystem, powering pathways for academic success and career readiness through Aptech Learning.",
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
  name: "Aptech Learning by EduQuest | Career Readiness & Skill Programs",
  url: PAGE_URL,
  description:
    "Master real-world skills with Aptech Learning by EduQuest. Industry-recognized certifications in AI, Data Science, and Coding. Placement-backed programs built for the jobs of tomorrow.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Aptech Learning",
    description: "Career and skill development pathway focused on applied capability and industry readiness.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Individuals building real-world skills and career capability",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sectionLabel"],
  },
};

// ── Course Schema ───────────────────────────────────────────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aptech Learning Skill Programs",
  description: "Industry-aligned skill development programs in AI, Data Science, and Career Readiness.",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Data Science for Business",
        description:
          "Industry-recognised certification program focusing on practical data application, analytics, and business intelligence. Build a tangible edge for careers and university admissions.",
        provider: {
          "@type": "Organization",
          name: "Aptech Learning by EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "Professional Certification",
        inLanguage: "en",
        courseMode: "Hybrid/Online",
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "AI for Managers",
        description:
          "Master Artificial Intelligence concepts and management strategies. A certification designed for future leaders to understand and implement AI in real-world scenarios.",
        provider: {
          "@type": "Organization",
          name: "Aptech Learning by EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "Professional Certification",
        inLanguage: "en",
        courseMode: "Hybrid/Online",
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
      },
    }
  ],
};
