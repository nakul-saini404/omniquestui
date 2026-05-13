/* ─────────────────────────────────────────────────────────────────────────────
   indianCurriculaSchema.ts  —  Structured Data for EduQuest Indian Curricula Page
   Grades 8–12 | Six schemas: FAQ · Breadcrumb · Course · Organization · WebPage · ItemList
───────────────────────────────────────────────────────────────────────────── */

/* ── 1. FAQ Schema ──────────────────────────────────────────────────────────── */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does EduQuest provide coaching for Indian boards like CBSE and ICSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest provides expert online and offline coaching for Indian Curricula, including CBSE, ICSE, and ISC. We offer comprehensive subject-wise tuition, covering Mathematics, Science (Physics, Chemistry, Biology), English, Accountancy, and Economics for students from Classes 8 to 12. Our faculty members are highly experienced in board exam patterns and marking schemes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online tuition for CBSE and ICSE students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, EduQuest offers highly interactive online tuition for CBSE and ICSE students across India and globally (for NRIs). Our online classes are conducted live, featuring small batch sizes to ensure personalized attention, regular doubt-clearing sessions, and digital study materials aligned with the latest board syllabus.",
      },
    },
    {
      "@type": "Question",
      name: "What makes EduQuest's board exam preparation different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest's approach goes beyond rote learning. We focus on deep conceptual clarity, application-based learning, and regular assessments. We provide AI-driven mock tests that simulate the actual board exams, allowing students to identify their weak areas. Additionally, our mentors provide targeted feedback on answer writing to maximize scores according to CBSE and ICSE evaluation guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide study material and sample papers for Class 10 and 12 boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Enrolled students receive comprehensive, expertly crafted study materials, chapter-wise notes, and a large repository of previous year question papers (PYQs) and sample papers. We conduct regular mock exams, especially for Class 10 and Class 12, to build exam temperament and time management skills.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take coaching for specific subjects only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, students can choose to enroll for specific subjects such as Mathematics, Physics, Chemistry, Biology, or Accountancy based on their individual needs. We offer flexible enrollment options tailored to strengthen the student's specific academic requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enroll or book a demo class for CBSE/ICSE tuition?",
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
      name: "Indian Curricula (CBSE & ICSE)",
      item: "https://eduquest.org.in/indian-curricula/",
    },
  ],
};

/* ── 3. Course Schema ──────────────────────────────────────────────────────── */
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "CBSE & ICSE Online Tuition for Classes 8–12 — EduQuest",
  description:
    "Premium online and offline coaching for Indian Curricula including CBSE, ICSE, and ISC. Comprehensive subject-wise tuition, mock tests, and expert faculty for board exam preparation for classes 8 to 12.",
  url: "https://eduquest.org.in/indian-curricula/",
  inLanguage: "en-IN",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  provider: {
    "@type": "Organization",
    name: "EduQuest",
    sameAs: "https://eduquest.org.in",
  },
  offers: {
    "@type": "Offer",
    category: "Online & Offline Coaching",
    availability: "https://schema.org/InStock",
    url: "https://eduquest.org.in/indian-curricula/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT100H",
      inLanguage: "en-IN",
      location: {
        "@type": "Place",
        name: "EduQuest Gurgaon — DLF Phase IV",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          postalCode: "122009",
          addressCountry: "IN",
        },
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "580",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "MiddleSchool,HighSchool",
  teaches: [
    "CBSE Mathematics Classes 8-12",
    "CBSE Science (Physics, Chemistry, Biology) Classes 8-12",
    "ICSE Mathematics and Science Classes 8-10",
    "ISC Physics, Chemistry, and Mathematics Classes 11-12",
    "Board Exam Answer Writing Techniques",
    "Time Management for CBSE & ICSE Board Exams",
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
    "EduQuest is India's leading coaching institute for Indian Curricula (CBSE, ICSE), international curricula (IB, IGCSE), and test prep (SAT, ACT, AP). Expert faculty and personalized mentoring.",
  foundingDate: "2004",
  areaServed: ["IN", "AE", "SG", "US", "GB", "AU", "CA"],
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
    reviewCount: "580",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 5. WebPage Schema ─────────────────────────────────────────────────────── */
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CBSE & ICSE Online Tuition | Expert Indian Curricula Tutors | EduQuest",
  url: "https://eduquest.org.in/indian-curricula/",
  description:
    "Premium online and offline tuition for CBSE, ICSE, and ISC boards. Expert faculty, personalised coaching, AI-driven mock tests, and comprehensive study material for classes 8 to 12.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "CBSE Online Tuition" },
    { "@type": "Thing", name: "ICSE Online Tuition" },
    { "@type": "Thing", name: "Board Exam Preparation" },
    { "@type": "Thing", name: "High School Tutoring India" },
    { "@type": "Thing", name: "CBSE Class 10 and 12 Coaching" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "Indian Curricula", item: "https://eduquest.org.in/indian-curricula/" },
    ],
  },
};

/* ── 6. ItemList Schema — Indian Curricula Highlights ─────────────────────────── */
export const indianCurriculaListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Indian Curricula (CBSE/ICSE) Coaching Features by EduQuest",
  description:
    "Key features and offerings of EduQuest's CBSE, ICSE, and ISC coaching programs for Classes 8 to 12.",
  url: "https://eduquest.org.in/indian-curricula/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "CBSE Classes 8 to 12 Online & Offline Tuition",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ICSE Classes 8 to 10 Online & Offline Tuition",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ISC Classes 11 & 12 Specialized Coaching",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Subject Expert Faculty for Mathematics & Sciences",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Comprehensive Study Material & Chapter-wise Notes",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Board Exam Answer Writing Techniques",
      url: "https://eduquest.org.in/indian-curricula/",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "AI-Driven Mock Tests & Previous Year Questions (PYQ)",
      url: "https://eduquest.org.in/indian-curricula/",
    },
  ],
};