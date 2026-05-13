/* ──────────────────────────────────────────────────────────────────────────────
   olympiadSchema.ts
   Structured-data schemas for /olympiad
   Olympiad Exams Preparation
────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/olympiad/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does EduQuest offer online tuition for Olympiad preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest offers specialised online tuition for various Olympiad exams like IMO, NSO, IEO, and more. We have expert tutors trained to help students excel in these competitive exams.",
      },
    },
    {
      "@type": "Question",
      name: "Which subjects are covered in EduQuest's Olympiad online tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover subjects relevant to major Olympiads, including Mathematics (IMO), Science (NSO), English (IEO), and Cyber (NCO).",
      },
    },
    {
      "@type": "Question",
      name: "How are the Olympiad tuition classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our Olympiad classes are conducted live in a 1-on-1 format via video conferencing. This ensures personalised attention, allowing the tutor to focus specifically on the student's problem-solving skills and conceptual clarity.",
      },
    },
    {
      "@type": "Question",
      name: "Are EduQuest's Olympiad tutors experienced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our tutors are highly experienced and well-versed in the specific patterns and syllabi of various national and international Olympiads.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free demo available for Olympiad classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a free trial class so students and parents can interact with our Olympiad expert tutors and evaluate the teaching methodology before committing.",
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
    { "@type": "ListItem", position: 2, name: "Olympiad Preparation", item: PAGE_URL },
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
    "EduQuest is a leading online tuition platform offering expert guidance for Olympiads and other major competitive exams and boards.",
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
  name: "Olympiad Online Tuition | Expert Olympiad Tutors | EduQuest",
  url: PAGE_URL,
  description:
    "EduQuest offers premium Olympiad online tuition with expert tutors. Comprehensive guidance for all major Olympiads including IMO, NSO, IEO, and more. Book a free demo!",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Olympiad Online Tuition",
    description: "Expert online tuition classes for Olympiad exam preparation.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Students preparing for Olympiad exams",
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
  name: "Olympiad Online Tuition Classes",
  description: "EduQuest offers expert 1-on-1 online tuition for various Olympiad exams.",
  numberOfItems: 1,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Olympiad Exam Preparation Online Tuition",
        description:
          "Expert online tuition for Olympiad students. Specialized tutors for Math (IMO), Science (NSO), English (IEO), and other competitive exams. Comprehensive support to build strong foundational knowledge and problem-solving skills.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "Olympiad Preparation (Class 1-12)",
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
              name: "EduQuest Olympiad Expert Tutors",
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
