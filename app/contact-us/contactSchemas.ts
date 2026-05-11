// app/contact-us/contactSchemas.ts

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact EduQuest | Book a Free Counselling Session",
  url: "/contact-us",
  description:
    "Reach EduQuest's expert counsellors for SAT, UCAT, GRE and study-abroad guidance. Book a free session, ask a question or visit our Delhi and Gurgaon centres.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0], // auto-updates on each build
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: "/contact-us" },
    ],
  },
  about: [
    { "@type": "Thing", name: "UCAT Coaching" },
    { "@type": "Thing", name: "SAT Coaching" },
    { "@type": "Thing", name: "GRE Coaching" },
    { "@type": "Thing", name: "Study Abroad Counselling" },
    { "@type": "Thing", name: "MBBS Abroad for Indian Students" },
  ],
};

/* ── 2. BreadcrumbList Schema ────────────────────────────────────────────────
   Standalone breadcrumb for Google's breadcrumb trail in SERPs.
─────────────────────────────────────────────────────────────────────────────── */
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
      name: "Contact Us",
      item: "/contact-us",
    },
  ],
};

/* ── 3. Organization Schema ──────────────────────────────────────────────────
   Reinforces EduQuest's brand entity and surfaces contact details
   directly in Google's Knowledge Panel.
─────────────────────────────────────────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for international standardised tests — SAT, UCAT, GRE and more — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "GB", "AU", "NZ", "AE", "SG"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Admissions",
      url: "/contact-us",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "/contact-us",
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
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 4. LocalBusiness Schema (Gurgaon — primary) ────────────────────────────
   Enables Google Maps / local pack eligibility for the Gurgaon centre.
   ⚠️  Fill in the real streetAddress, telephone & geo coordinates.
─────────────────────────────────────────────────────────────────────────────── */
export const localBusinessGurgaonSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "EduQuest — Gurgaon Centre",
  url: "/contact-us",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  description:
    "EduQuest's Gurgaon coaching centre offering SAT, UCAT and GRE preparation along with study-abroad and MBBS counselling for students in Delhi NCR.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "REPLACE_WITH_ACTUAL_STREET_ADDRESS",  // ← update
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "REPLACE_WITH_PINCODE",                   // ← update
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,   // ← update to exact lat
    longitude: 77.0266,  // ← update to exact lng
  },
  telephone: "REPLACE_WITH_PHONE_NUMBER",                 // ← update
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: ["Gurugram", "Delhi", "Faridabad", "Noida"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};

/* ── 5. LocalBusiness Schema (Delhi) ─────────────────────────────────────────
   Enables local pack eligibility for the Delhi centre.
   ⚠️  Fill in the real streetAddress, telephone & geo coordinates.
─────────────────────────────────────────────────────────────────────────────── */
export const localBusinessDelhiSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "EduQuest — Delhi Centre",
  url: "/contact-us",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  description:
    "EduQuest's Delhi coaching centre offering SAT, UCAT and GRE preparation along with study-abroad and MBBS counselling for students across Delhi NCR.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "REPLACE_WITH_ACTUAL_STREET_ADDRESS",  // ← update
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "REPLACE_WITH_PINCODE",                   // ← update
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,   // ← update to exact lat
    longitude: 77.2090,  // ← update to exact lng
  },
  telephone: "REPLACE_WITH_PHONE_NUMBER",                 // ← update
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: ["New Delhi", "Gurugram", "Noida", "Faridabad"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};