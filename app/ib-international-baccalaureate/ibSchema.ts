/* ──────────────────────────────────────────────────────────────────────────────
   ibSchema.ts
   Structured-data schemas for /ib-international-baccalaureate
   International Baccalaureate | MYP & DP
────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/ib-international-baccalaureate/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does EduQuest offer online tuition for IB students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest offers specialised online tuition for IB MYP (Middle Years Programme) and IB DP (Diploma Programme) students. We have expert tutors trained in the IB curriculum to help students excel.",
      },
    },
    {
      "@type": "Question",
      name: "Which subjects are covered in EduQuest's IB online tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover a wide range of IB subjects including Mathematics (AA & AI), Physics, Chemistry, Biology, Economics, Business Management, English, and more. We also provide comprehensive guidance for IA (Internal Assessment), EE (Extended Essay), and TOK (Theory of Knowledge).",
      },
    },
    {
      "@type": "Question",
      name: "How are the IB tuition classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our IB classes are conducted live in a 1-on-1 format via video conferencing. This ensures personalised attention, allowing the tutor to focus specifically on the student's weaknesses and align with the rigorous demands of the IB program.",
      },
    },
    {
      "@type": "Question",
      name: "Are EduQuest's IB tutors experienced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our tutors are highly experienced and well-versed in the IB curriculum. They understand the specific requirements, grading criteria, and methodologies expected by the International Baccalaureate organization.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free demo available for IB classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a free trial class so students and parents can interact with our IB expert tutors and evaluate the teaching methodology before committing.",
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
    { "@type": "ListItem", position: 2, name: "IB International Baccalaureate", item: PAGE_URL },
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
    "EduQuest is a leading online tuition platform offering expert guidance for the International Baccalaureate (IB) curriculum, including MYP and DP, along with other major boards.",
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
    reviewCount: "640",
    bestRating: "5",
    worstRating: "1",
  },
};

// ── WebPage Schema ──────────────────────────────────────────────────────────
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IB Online Tuition | Expert International Baccalaureate Tutors | EduQuest",
  url: PAGE_URL,
  description:
    "EduQuest offers premium IB online tuition with expert tutors. Comprehensive guidance for IB MYP and DP including all subjects, EE, and TOK. Book a free demo!",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "IB Online Tuition",
    description: "Expert online tuition classes for the International Baccalaureate (IB) curriculum, covering MYP and DP.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Students enrolled in IB MYP or IB DP",
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
  name: "IB Online Tuition Classes — MYP & DP",
  description: "EduQuest offers expert 1-on-1 online tuition for the International Baccalaureate (IB) curriculum.",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "IB Diploma Programme (DP) Online Tuition",
        description:
          "Expert online tuition for IB DP students (Class 11-12). Specialized tutors for Higher Level (HL) and Standard Level (SL) subjects including Maths AA/AI, Physics, Chemistry, Biology, Economics, and Business Management. Comprehensive support for EE, TOK, and IAs.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "IB DP (Class 11–12)",
        inLanguage: "en",
        courseMode: "Online",
        availableLanguage: ["English", "Hindi"],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT1H",
            instructor: {
              "@type": "Person",
              name: "EduQuest IB Expert Tutors",
            },
            courseSchedule: {
              "@type": "Schedule",
              repeatFrequency: "P1W",
              repeatCount: 48,
            },
          },
        ],
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
        name: "IB Middle Years Programme (MYP) Online Tuition",
        description:
          "Dedicated online tuition for IB MYP students (Class 6-10). Building a strong foundation across core subjects and preparing students for the rigorous IB Diploma Programme.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "IB MYP (Class 6–10)",
        inLanguage: "en",
        courseMode: "Online",
        availableLanguage: ["English", "Hindi"],
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT1H",
            instructor: {
              "@type": "Person",
              name: "EduQuest IB Expert Tutors",
            },
            courseSchedule: {
              "@type": "Schedule",
              repeatFrequency: "P1W",
              repeatCount: 48,
            },
          },
        ],
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
