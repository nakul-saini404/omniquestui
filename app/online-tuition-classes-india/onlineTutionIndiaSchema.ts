/* ──────────────────────────────────────────────────────────────────────────────
   onlineTutionIndiaSchema.ts
   Structured-data schemas for /online-tuition-classes-india
   Classes 6–12  |  CBSE · ICSE · IB  |  India-focused
────────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = "https://eduquest.org.in/online-tuition-classes-india/";
const SITE_URL = "https://eduquest.org.in";

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best online tuition classes in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest is one of the top-rated online tuition providers in India, offering 1-on-1 live classes for Class 6 to 12 across CBSE, ICSE, and IB boards. With 30+ years of experience, 10,000+ students guided, and expert tutors, EduQuest delivers personalised learning that helps students excel in board exams and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "Which classes and boards does EduQuest cover for online tuition in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest provides online tuition for Class 6, 7, 8, 9, 10, 11 and 12 across three major boards — CBSE, ICSE (ISC), and IB (MYP & Diploma Programme). All core and elective subjects are covered with board-specific curriculum expertise.",
      },
    },
    {
      "@type": "Question",
      name: "How are online tuition classes conducted at EduQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All classes are conducted live in a 1-on-1 format via video conferencing with screen sharing, digital whiteboard, and real-time doubt solving. Students can access recorded sessions for revision. Classes can be scheduled flexibly based on the student's availability across any time zone in India.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are available for online tuition for Class 9 and 10 in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Class 9 and 10, we cover all core subjects — Mathematics, Science (Physics, Chemistry, Biology), English, Social Science, Hindi, and Computer Science — tailored for CBSE, ICSE, and IB board patterns. Exam-focused preparation with previous year papers and mock tests is included.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online tuition for IB students in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest offers specialised online tuition for IB MYP (Class 6–10) and IB Diploma Programme (Class 11–12) students across India. Subjects include IB Mathematics, Physics, Chemistry, Biology, Economics, Business Management, English, and comprehensive IA/EE guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free demo class available for online tuition in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! EduQuest offers a free 3-day trial so students and parents can experience our teaching methodology, interact with the tutor, and evaluate the learning experience before making a commitment. Book your free trial on our website or call +91-9958041888.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for online tuition classes in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees vary based on the class, board, number of subjects, and session frequency. EduQuest offers competitive and affordable pricing with flexible monthly and quarterly plans. Contact our team at contact@eduquest.org.in or +91-9958041888 for a personalised quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can students from any city in India join EduQuest online tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! EduQuest's online tuition is accessible from anywhere in India — whether you're in Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Jaipur, or any tier-2/tier-3 city. All you need is a stable internet connection and a laptop or tablet.",
      },
    },
  ],
};

// ── Breadcrumb Schema ───────────────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Online Tuition Classes India", item: PAGE_URL },
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
    "EduQuest is India's leading online tuition platform for Class 6 to 12 across CBSE, ICSE, and IB boards. With 30+ years of academic excellence, we provide 1-on-1 live tuition, personalised study plans, and expert tutors to students across India and abroad.",
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
  name: "Online Tuition Classes in India | Class 6–12 | CBSE, ICSE, IB | EduQuest",
  url: PAGE_URL,
  description:
    "India's best online tuition classes for Class 6 to 12 across CBSE, ICSE and IB boards. Live 1-on-1 sessions with expert tutors, personalised study plans, and exam-focused coaching. Join 10,000+ students across India.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Online Tuition Classes in India",
    description: "Live 1-on-1 online tuition classes in India for Class 6 to 12, covering CBSE, ICSE, and IB curriculum with expert Indian tutors.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Students in Class 6–12 across India (CBSE, ICSE, IB boards)",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sectionLabel"],
  },
};

// ── Course Schema (per board — India-specific) ──────────────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Online Tuition Classes in India — Class 6 to 12",
  description: "EduQuest offers India's best 1-on-1 online tuition across CBSE, ICSE, and IB boards for Class 6 through 12.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "CBSE Online Tuition Classes in India — Class 6 to 12",
        description:
          "Personalised online tuition for CBSE board students from Class 6 to 12 across India. Expert tutors for Maths, Science, English, Social Science, Hindi, Computer Science, Accountancy, Business Studies, Economics, and all other subjects. Board exam preparation with previous year papers.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12",
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
              name: "EduQuest Expert Tutors",
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
        name: "ICSE / ISC Online Tuition Classes in India — Class 6 to 12",
        description:
          "Expert online tuition for ICSE and ISC board students from Class 6 to 12 across India. Comprehensive coverage of Mathematics, Physics, Chemistry, Biology, English Literature, History & Civics, Geography, Computer Applications, Commerce, Accounts, and more.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12",
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
              name: "EduQuest Expert Tutors",
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
      position: 3,
      item: {
        "@type": "Course",
        name: "IB Online Tuition Classes in India — MYP & DP (Class 6 to 12)",
        description:
          "Specialised online tuition for IB students across India — MYP (Class 6–10) and IB Diploma Programme (Class 11–12). Expert tutors for IB Maths, Physics, Chemistry, Biology, Economics, Business Management, English, and comprehensive IA/EE guidance.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: SITE_URL,
        },
        educationalLevel: "IB MYP (Class 6–10), IB DP (Class 11–12)",
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
              name: "EduQuest Expert Tutors",
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
  ],
};
