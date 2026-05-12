export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is EduQuest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest is India's leading coaching institute for profile building, study abroad counselling, and test preparation including SAT, ACT, AP, IELTS, TOEFL, GMAT, and GRE. We help students get into top universities worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "Where is EduQuest located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest is headquartered in Gurugram, India, at Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV. We also offer comprehensive online classes for students across India and globally.",
      },
    },
    {
      "@type": "Question",
      name: "What services does EduQuest offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer end-to-end university admissions counselling, profile building for Classes 8-12, standardised test prep (SAT, ACT, AP, IELTS, etc.), and essay writing guidance for Common App and UCAS.",
      },
    }
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://eduquest.org.in/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://eduquest.org.in/about-us/" },
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description: "EduQuest is India's leading coaching institute for profile building, IELTS, SAT, ACT, AP, GMAT, GRE, UCAT and international admissions.",
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

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About EduQuest | Study Abroad & Test Prep Experts",
  url: "https://eduquest.org.in/about-us/",
  description: "Learn about EduQuest, our mission, vision, and how we help students achieve their study abroad dreams.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
};
