/* ──────────────────────────────────────────────────────────────────────────────
   onlineTutionSchema.ts
   Structured-data schemas for /online-home-tuition
   Classes 6–12  |  CBSE · ICSE · IB
────────────────────────────────────────────────────────────────────────────── */

// ── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What classes do you offer online home tuition for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest offers online home tuition for students from Class 6 to Class 12, covering all major subjects including Mathematics, Science, English, Social Studies, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Which boards does EduQuest online tuition support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide online tuition for CBSE, ICSE, and IB (International Baccalaureate) board students. Our tutors are experienced in the specific curriculum and examination patterns of each board.",
      },
    },
    {
      "@type": "Question",
      name: "How are the online tuition classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classes are conducted live in a 1-on-1 format via video conferencing. Each session is interactive, with screen sharing, digital whiteboard, and real-time doubt solving. Students can also access recorded sessions for revision.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are covered in online home tuition for Class 9 and 10?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Class 9 and 10, we cover all core subjects — Mathematics, Science (Physics, Chemistry, Biology), English, Social Science, Hindi, and Computer Science — for CBSE, ICSE, and IB boards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online tuition for IB students in Class 11 and 12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer specialised online tuition for IB Diploma Programme (DP) students in Class 11 and 12, covering subjects like IB Mathematics, IB Physics, IB Chemistry, IB Biology, IB Economics, and more. Our IB tutors are well-versed in IA/EE guidance as well.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free demo class available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer a free demo class so students and parents can experience our teaching methodology and interact with the tutor before committing. You can book a demo on our website or by contacting us directly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee structure for online home tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees vary based on the class, board, number of subjects, and session frequency. We offer flexible plans to suit different needs. Contact our team for a personalised quote.",
      },
    },
  ],
};

// ── Breadcrumb Schema ───────────────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
    { "@type": "ListItem", position: 2, name: "Online Home Tuition", item: "https://eduquest.org.in/online-home-tuition/" },
  ],
};

// ── Organization Schema ─────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest provides expert online home tuition for Class 6 to 12 across CBSE, ICSE, and IB boards. We also offer test prep coaching for SAT, ACT, AP, IELTS, UCAT, and international admissions counselling.",
  foundingDate: "2004",
  areaServed: ["IN", "US", "GB", "AU", "CA", "AE", "SG"],
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
  name: "Online Home Tuition for Class 6–12 | CBSE, ICSE, IB | EduQuest",
  url: "https://eduquest.org.in/online-home-tuition/",
  description:
    "Personalised online home tuition for Class 6 to 12 across CBSE, ICSE and IB boards. 1-on-1 live sessions with experienced tutors. Book your free demo class today.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: {
    "@type": "Thing",
    name: "Online Home Tuition",
    description: "Live 1-on-1 online tuition for Class 6 to 12, covering CBSE, ICSE, and IB curriculum.",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "Student",
    audienceType: "Students in Class 6–12 (CBSE, ICSE, IB)",
  },
};

// ── Course Schema (per board) ───────────────────────────────────────────────
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Online Home Tuition Courses — Class 6 to 12",
  description: "EduQuest offers 1-on-1 online tuition across CBSE, ICSE, and IB boards for Class 6 through 12.",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "CBSE Online Tuition — Class 6 to 12",
        description:
          "Personalised online home tuition for CBSE board students from Class 6 to 12. Covers Maths, Science, English, Social Science, Hindi, Computer Science, Accountancy, Economics, and more.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: "https://eduquest.org.in",
        },
        educationalLevel: "Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12",
        inLanguage: "en",
        courseMode: "Online",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT1H",
            instructor: {
              "@type": "Person",
              name: "EduQuest Expert Tutors",
            },
          },
        ],
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "ICSE Online Tuition — Class 6 to 12",
        description:
          "Expert online tuition for ICSE / ISC board students from Class 6 to 12. Subjects include Mathematics, Physics, Chemistry, Biology, English Literature, History & Civics, Geography, Computer Applications, and more.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: "https://eduquest.org.in",
        },
        educationalLevel: "Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12",
        inLanguage: "en",
        courseMode: "Online",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT1H",
            instructor: {
              "@type": "Person",
              name: "EduQuest Expert Tutors",
            },
          },
        ],
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "IB Online Tuition — MYP & DP (Class 6 to 12)",
        description:
          "Specialised online tuition for IB MYP (Class 6–10) and IB Diploma Programme (Class 11–12). Covers IB Maths, Physics, Chemistry, Biology, Economics, Business, English, and IA/EE guidance.",
        provider: {
          "@type": "Organization",
          name: "EduQuest",
          url: "https://eduquest.org.in",
        },
        educationalLevel: "IB MYP (Class 6–10), IB DP (Class 11–12)",
        inLanguage: "en",
        courseMode: "Online",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT1H",
            instructor: {
              "@type": "Person",
              name: "EduQuest Expert Tutors",
            },
          },
        ],
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};
