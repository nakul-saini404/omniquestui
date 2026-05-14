/* ─────────────────────────────────────────────────────────────────────────────
   internationalCurriculaSchema.ts  —  Structured Data for EduQuest International Curricula Page
   IGCSE, GCSE, O-Level | Six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ──────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does EduQuest provide coaching for International boards like IGCSE and GCSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest provides expert online coaching for International Curricula, including IGCSE, GCSE, and O-Levels. We offer comprehensive subject-wise tuition for Biology, Chemistry, Physics, Mathematics, and English. Our faculty members are highly experienced in Cambridge (CIE), Edexcel, and AQA board patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online tuition for IGCSE students in India and abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest offers highly interactive online tuition for IGCSE and GCSE students globally. Whether you are in India, UAE, Singapore, or the UK, our live online classes provide personalized attention, regular past paper practice, and digital study materials aligned with the latest international syllabi.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects are covered under the IGCSE/GCSE program at EduQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in the core subjects: IGCSE Biology, IGCSE Chemistry, IGCSE Physics, IGCSE Mathematics (Core & Extended), and IGCSE English (Language & Literature). We also provide targeted coaching for GCSE English and Sciences under Edexcel and AQA boards.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest help students achieve A* in IGCSE exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our approach focuses on deep conceptual clarity and rigorous exam technique. We provide systematic past paper drilling from the last 10+ years, mark scheme analysis, and regular mock tests. Our mentors provide targeted feedback on how to structure answers to maximize marks according to board-specific guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a demo for a specific subject like IGCSE Physics or Maths?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can choose to enroll or book a demo for specific subjects. We offer flexible enrollment options tailored to strengthen the student's specific academic requirements in any of the international curricula subjects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enroll or book a demo class for IGCSE/GCSE tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can easily book a free demo class by contacting us at +91-9958041888 or emailing contact@eduquest.org.in. Our academic counselors will assess your requirements, schedule a demo with a subject expert, and guide you through the enrollment process.",
      },
    },
  ],
};

/* ── 2. Breadcrumb Schema ──────────────────────────────────────────────────── */
export const breadcrumbSchema = {
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
      name: "International Curricula (IGCSE & GCSE)",
      item: "https://eduquest.org.in/international-curricula/",
    },
  ],
};

/* ── 3. Course Schema ──────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IGCSE & GCSE Online Tuition for All Subjects — EduQuest",
  description:
    "Premium online coaching for International Curricula including IGCSE, GCSE, and O-Level. Comprehensive subject-wise tuition, past paper practice, and expert faculty for board exam preparation.",
  url: "https://eduquest.org.in/international-curricula/",
  inLanguage: "en-GB",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  offers: {
    "@type": "Offer",
    category: "Online Coaching",
    availability: "https://schema.org/InStock",
    url: "https://eduquest.org.in/international-curricula/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Blended"],
      courseWorkload: "PT120H",
      inLanguage: "en-GB",
      location: {
        "@type": "Place",
        name: "EduQuest International Online",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "420",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "HighSchool",
  teaches: [
    "IGCSE Biology (Cambridge & Edexcel)",
    "IGCSE Chemistry (Cambridge & Edexcel)",
    "IGCSE Physics (Cambridge & Edexcel)",
    "IGCSE Mathematics Core & Extended",
    "IGCSE English Language & Literature",
    "GCSE Edexcel & AQA Board Exam Techniques",
    "Past Paper Mastery and Mark Scheme Analysis",
  ],
};

/* ── 4. Organization Schema ────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is a leading coaching institute for international curricula (IB, IGCSE, GCSE) and test prep (SAT, ACT, AP). Expert faculty and personalized mentoring for students globally.",
  foundingDate: "2004",
  areaServed: ["IN", "AE", "SG", "GB", "US", "AU", "CA"],
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
};

/* ── 5. WebPage Schema ─────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IGCSE & GCSE Online Tuition | Expert International Curricula Tutors | EduQuest",
  url: "https://eduquest.org.in/international-curricula/",
  description:
    "Premium online tuition for IGCSE, GCSE, and O-Level boards. Expert faculty, personalised coaching, past paper practice, and comprehensive study material for international students.",
  inLanguage: "en-GB",
  datePublished: "2024-09-10",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "IGCSE Online Tuition" },
    { "@type": "Thing", name: "GCSE Online Tuition" },
    { "@type": "Thing", name: "International Curricula" },
    { "@type": "Thing", name: "Cambridge IGCSE" },
    { "@type": "Thing", name: "Edexcel GCSE" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "International Curricula", item: "https://eduquest.org.in/international-curricula/" },
    ],
  },
};

/* ── 6. ItemList Schema — International Curricula Highlights ─────────────────── */
export const internationalCurriculaListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "International Curricula (IGCSE/GCSE) Coaching Features by EduQuest",
  description:
    "Key features and offerings of EduQuest's IGCSE, GCSE, and O-Level coaching programs.",
  url: "https://eduquest.org.in/international-curricula/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "IGCSE Biology Online Tuition (Cambridge & Edexcel)",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "IGCSE Chemistry Online Tuition (Cambridge & Edexcel)",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IGCSE Physics Online Tuition (Cambridge & Edexcel)",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "IGCSE Mathematics (Core & Extended) Coaching",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "IGCSE English Language & Literature Tutoring",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "GCSE Edexcel and AQA Board Specific Prep",
      url: "https://eduquest.org.in/international-curricula/",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Systematic Past Paper Practice & Mark Scheme Analysis",
      url: "https://eduquest.org.in/international-curricula/",
    },
  ],
};