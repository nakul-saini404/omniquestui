export const preApFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Pre-AP coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-AP coaching is a structured academic programme for students in Grades 8–11 that builds the conceptual foundation, study habits, and critical-thinking skills required to excel in Advanced Placement (AP) exams. EduQuest's Pre-AP programme in Gurgaon bridges the gap between school-level learning and college-level AP rigour, setting students up to score 4–5 on their AP exams.",
      },
    },
    {
      "@type": "Question",
      name: "Which grade should a student start Pre-AP coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest recommends starting Pre-AP coaching in Grade 8 or 9 for the best outcomes. Students joining in Grade 10 or 11 can enrol in an accelerated AP Readiness programme. Our diagnostic assessment determines the right entry point for every student regardless of their current grade.",
      },
    },
    {
      "@type": "Question",
      name: "How is Pre-AP different from AP coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-AP coaching focuses on strengthening foundational concepts in Grades 8–10 before a student formally registers for AP exams in Grades 11–12. AP coaching is intensive exam-oriented preparation targeted at students who are ready to sit the College Board AP exam in the upcoming May window. EduQuest offers both, and many students transition seamlessly from one to the other.",
      },
    },
    {
      "@type": "Question",
      name: "What subjects does EduQuest cover in Pre-AP coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest covers all major Pre-AP pathways: STEM subjects including Pre-AP Calculus (AB/BC pathway), Pre-AP Physics, Pre-AP Chemistry, Pre-AP Biology, Pre-AP Computer Science A and Principles, Pre-AP Statistics, and Pre-AP Environmental Science; as well as Liberal Arts subjects including Pre-AP English Language and Literature, Pre-AP World and US History, Pre-AP Psychology, Pre-AP Economics (Micro and Macro), and Pre-AP Human Geography.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Pre-AP coaching programme last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Programme duration ranges from 6 months (AP Readiness Sprint for Grade 11 students) to 4–5 years for the full Early Foundation Programme starting in Grade 8. Duration is finalised after a free diagnostic assessment tailored to the student's current level and target goals.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pre-AP coaching help with Indian school board exams like CBSE or ICSE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest's Pre-AP curriculum is carefully aligned with CBSE and ICSE syllabuses so that students reinforce what they study in school while going deeper. Students consistently report improved performance in school exams alongside their AP preparation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pre-AP coaching only for students targeting US universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AP scores are accepted at 4,000+ universities in the US, UK (Oxford, Cambridge, Imperial), Canada (University of Toronto, UBC), Australia (Melbourne, Monash), and beyond. Pre-AP coaching builds a foundation that is valuable regardless of the student's target geography.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest offer online Pre-AP coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers online, offline and hybrid Pre-AP coaching with live interactive classes, recorded session replays, virtual whiteboards, comprehensive study materials, and unlimited doubt-clearing sessions. Students across India and internationally — including the UAE, Singapore, UK, Canada, and the US — enrol every year.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest personalise the Pre-AP learning path?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every student begins with a free diagnostic assessment covering subject knowledge, reasoning ability, and study habits. Based on the results, EduQuest's academic counsellors create a personalised 3–5 year roadmap covering subject sequencing, milestone targets, practice exam schedules, and extracurricular narrative development aligned with the student's target universities.",
      },
    },
    {
      "@type": "Question",
      name: "What makes EduQuest's Pre-AP coaching in Gurgaon different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduQuest combines 20+ years of AP and pre-university coaching experience with a proven curriculum, small-batch classes (maximum 8 students per batch), subject-specialist faculty, regular diagnostic testing, parent progress updates, and full US/UK/Canada university admissions support — making it India's most comprehensive Pre-AP coaching ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "Does EduQuest help with college applications beyond coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers end-to-end support including university shortlisting, application strategy, personal statement and essay guidance, extracurricular narrative development, scholarship preparation, and interview coaching. Pre-AP coaching is one component of EduQuest's full admissions ecosystem.",
      },
    },
    {
      "@type": "Question",
      name: "How many AP exams should a student take for top US universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most competitive applicants to top US universities take 5–8 AP exams over Grades 11 and 12. Quality matters more than quantity — scoring 5 on four well-chosen subjects outweighs scoring 3 on eight. EduQuest helps students select the right AP combination for their target universities and intended major during the initial roadmap session.",
      },
    },
  ],
};
 
/* ── 2. Breadcrumb Schema ────────────────────────────────────────────────────
   Displays the breadcrumb trail in Google Search results.
─────────────────────────────────────────────────────────────────────────────── */
export const preApBreadcrumbSchema = {
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
      name: "AP Exam Coaching",
      item: "https://eduquest.org.in/ap-coaching/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pre-AP Coaching Gurgaon",
      item: "https://eduquest.org.in/pre-ap-coaching/",
    },
  ],
};
 
/* ── 3. Course Schema ────────────────────────────────────────────────────────
   Enables rich course snippets in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const preApCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Pre-AP Coaching — EduQuest Gurgaon",
  description:
    "India's most comprehensive Pre-AP coaching programme for students in Grades 8–11. Builds the conceptual foundation, critical-thinking skills, and exam readiness required to score 4–5 on College Board AP exams. Covers all major STEM and Liberal Arts AP subjects with personalised learning roadmaps and full university admissions support.",
  url: "https://eduquest.org.in/pre-ap-coaching/",
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
    url: "https://eduquest.org.in/pre-ap-coaching/",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["Online", "Onsite", "Blended"],
      courseWorkload: "PT200H",
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
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
  educationalLevel: "MiddleSchool,HighSchool",
  teaches: [
    "Pre-AP Calculus AB pathway",
    "Pre-AP Calculus BC pathway",
    "Pre-AP Physics 1",
    "Pre-AP Physics C: Mechanics",
    "Pre-AP Chemistry",
    "Pre-AP Biology",
    "Pre-AP Computer Science A",
    "Pre-AP Computer Science Principles",
    "Pre-AP Statistics",
    "Pre-AP Environmental Science",
    "Pre-AP English Language and Composition",
    "Pre-AP English Literature and Composition",
    "Pre-AP World History: Modern",
    "Pre-AP US History",
    "Pre-AP Psychology",
    "Pre-AP Microeconomics",
    "Pre-AP Macroeconomics",
    "Pre-AP Human Geography",
  ],
};
 
/* ── 4. Organization Schema ──────────────────────────────────────────────────
   Reinforces EduQuest's brand entity in Google's Knowledge Graph.
─────────────────────────────────────────────────────────────────────────────── */
export const preApOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/wp-content/uploads/eduquest-logo.png",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  description:
    "EduQuest is India's leading coaching institute for international standardised tests — SAT, AP, Pre-AP, UCAT, GRE and more — with 20+ years of experience and 10,000+ students coached.",
  foundingDate: "2004",
  areaServed: ["IN", "US", "GB", "AU", "CA", "AE", "SG"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 1212, 1212A, Galleria, DLF Phase-IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
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
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};
 
/* ── 5. WebPage Schema ───────────────────────────────────────────────────────
   Gives Google additional page-level signals (date, author, about).
─────────────────────────────────────────────────────────────────────────────── */
export const preApWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Pre-AP Coaching in Gurgaon | Grades 8–11 | EduQuest",
  url: "https://eduquest.org.in/pre-ap-coaching/",
  description:
    "India's most comprehensive Pre-AP coaching in Gurgaon for students in Grades 8–11. Personalised learning pathways, expert faculty, and end-to-end admissions support to build AP readiness and score 4–5.",
  inLanguage: "en-IN",
  datePublished: "2024-09-01",
  dateModified: new Date().toISOString().split("T")[0],
  isPartOf: {
    "@type": "WebSite",
    name: "EduQuest",
    url: "https://eduquest.org.in",
  },
  about: [
    { "@type": "Thing", name: "Pre-AP Coaching" },
    { "@type": "Thing", name: "AP Exams" },
    { "@type": "Thing", name: "Advanced Placement" },
    { "@type": "Thing", name: "US University Admissions" },
    { "@type": "Thing", name: "College Board AP" },
    { "@type": "Thing", name: "Study Abroad for Indian Students" },
    { "@type": "Thing", name: "AP Readiness Programme" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                    item: "https://eduquest.org.in/" },
      { "@type": "ListItem", position: 2, name: "AP Exam Coaching",        item: "https://eduquest.org.in/ap-coaching/" },
      { "@type": "ListItem", position: 3, name: "Pre-AP Coaching Gurgaon", item: "https://eduquest.org.in/pre-ap-coaching/" },
    ],
  },
};
 
/* ── 6. Local Business Schema ────────────────────────────────────────────────
   Boosts local SEO for "Pre-AP coaching near me / Gurgaon" searches.
─────────────────────────────────────────────────────────────────────────────── */
export const preApLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest Pre-AP Coaching Gurgaon",
  url: "https://eduquest.org.in/pre-ap-coaching/",
  image: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
  telephone: "+91-9958041888",
  email: "contact@eduquest.org.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 1210 & 1212A, Galleria Boulevard, DLF Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  areaServed: [
    "Gurugram", "Gurgaon", "DLF Phase IV", "South City", "Sohna Road",
    "Golf Course Road", "MG Road", "Cyber City", "Palam Vihar", "Sector 50",
    "Delhi", "New Delhi", "Faridabad", "Noida",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
    bestRating: "5",
    worstRating: "1",
  },
};
 
/* ── 7. ItemList Schema ──────────────────────────────────────────────────────
   Surfaces individual Pre-AP subjects as a list rich result in Google Search.
─────────────────────────────────────────────────────────────────────────────── */
export const preApSubjectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pre-AP Subjects Coached by EduQuest Gurgaon",
  description:
    "List of Pre-AP subjects offered under EduQuest's Pre-AP coaching programme for students in Grades 8–11 in Gurgaon, India.",
  url: "https://eduquest.org.in/pre-ap-coaching/",
  itemListElement: [
    { "@type": "ListItem", position: 1,  name: "Pre-AP Calculus (AB pathway)",             url: "https://eduquest.org.in/pre-ap-coaching/#calculus-ab" },
    { "@type": "ListItem", position: 2,  name: "Pre-AP Calculus (BC pathway)",             url: "https://eduquest.org.in/pre-ap-coaching/#calculus-bc" },
    { "@type": "ListItem", position: 3,  name: "Pre-AP Physics 1",                         url: "https://eduquest.org.in/pre-ap-coaching/#physics-1" },
    { "@type": "ListItem", position: 4,  name: "Pre-AP Physics C: Mechanics",              url: "https://eduquest.org.in/pre-ap-coaching/#physics-c" },
    { "@type": "ListItem", position: 5,  name: "Pre-AP Chemistry",                         url: "https://eduquest.org.in/pre-ap-coaching/#chemistry" },
    { "@type": "ListItem", position: 6,  name: "Pre-AP Biology",                           url: "https://eduquest.org.in/pre-ap-coaching/#biology" },
    { "@type": "ListItem", position: 7,  name: "Pre-AP Computer Science A",                url: "https://eduquest.org.in/pre-ap-coaching/#csa" },
    { "@type": "ListItem", position: 8,  name: "Pre-AP Computer Science Principles",       url: "https://eduquest.org.in/pre-ap-coaching/#csp" },
    { "@type": "ListItem", position: 9,  name: "Pre-AP Statistics",                        url: "https://eduquest.org.in/pre-ap-coaching/#statistics" },
    { "@type": "ListItem", position: 10, name: "Pre-AP Environmental Science",             url: "https://eduquest.org.in/pre-ap-coaching/#env-science" },
    { "@type": "ListItem", position: 11, name: "Pre-AP English Language and Composition",  url: "https://eduquest.org.in/pre-ap-coaching/#english-lang" },
    { "@type": "ListItem", position: 12, name: "Pre-AP English Literature and Composition",url: "https://eduquest.org.in/pre-ap-coaching/#english-lit" },
    { "@type": "ListItem", position: 13, name: "Pre-AP World History: Modern",             url: "https://eduquest.org.in/pre-ap-coaching/#world-history" },
    { "@type": "ListItem", position: 14, name: "Pre-AP US History",                        url: "https://eduquest.org.in/pre-ap-coaching/#us-history" },
    { "@type": "ListItem", position: 15, name: "Pre-AP Psychology",                        url: "https://eduquest.org.in/pre-ap-coaching/#psychology" },
    { "@type": "ListItem", position: 16, name: "Pre-AP Microeconomics",                    url: "https://eduquest.org.in/pre-ap-coaching/#microeconomics" },
    { "@type": "ListItem", position: 17, name: "Pre-AP Macroeconomics",                    url: "https://eduquest.org.in/pre-ap-coaching/#macroeconomics" },
    { "@type": "ListItem", position: 18, name: "Pre-AP Human Geography",                   url: "https://eduquest.org.in/pre-ap-coaching/#human-geography" },
  ],
};
 
 
// ============================================================
//  app/pre-ap-coaching/page.tsx
//  Next.js Metadata export for the Pre-AP Coaching page
// ============================================================
 
import type { Metadata } from "next";
 
export const preApMetadata: Metadata = {
  title: "Best Pre-AP Coaching in Gurgaon | Grades 8–11 | EduQuest",
  description:
    "India's most comprehensive Pre-AP coaching in Gurgaon for students in Grades 8–11. Personalised learning pathways, subject-specialist faculty, and end-to-end admissions support to build AP readiness and score 4–5 on College Board AP exams.",
 
  keywords: [
    // ── Core Pre-AP terms ─────────────────────────────────────────────
    "Pre-AP coaching",
    "Pre-AP coaching India",
    "Pre-AP coaching Gurgaon",
    "Pre-AP coaching Gurugram",
    "Pre-AP coaching Delhi",
    "Pre-AP coaching Delhi NCR",
    "Pre-AP coaching online India",
    "Pre-AP classes Gurgaon",
    "Pre-AP classes India",
    "Pre-AP online classes",
    "Pre-AP programme India",
    "Pre-AP programme Gurgaon",
    "Pre-AP tutoring India",
    "Pre-AP tutor Gurgaon",
    "Pre-AP tutor online",
    "best Pre-AP coaching India",
    "best Pre-AP coaching Gurgaon",
    "EduQuest Pre-AP coaching",
 
    // ── Grade-level targeting ─────────────────────────────────────────
    "Pre-AP coaching Grade 8",
    "Pre-AP coaching Grade 9",
    "Pre-AP coaching Grade 10",
    "Pre-AP coaching Grade 11",
    "AP preparation for Grade 8",
    "AP preparation for Grade 9",
    "AP preparation for Grade 10",
    "AP preparation for Grade 11",
    "AP readiness Grade 8 India",
    "AP readiness Grade 9 India",
    "AP readiness programme India",
    "AP foundation course India",
    "AP foundation coaching Gurgaon",
    "early AP preparation India",
    "AP head start programme",
 
    // ── Subject-specific Pre-AP ───────────────────────────────────────
    "Pre-AP Calculus coaching",
    "Pre-AP Physics coaching",
    "Pre-AP Chemistry coaching",
    "Pre-AP Biology coaching",
    "Pre-AP Computer Science coaching",
    "Pre-AP Statistics coaching",
    "Pre-AP English coaching",
    "Pre-AP History coaching",
    "Pre-AP Psychology coaching",
    "Pre-AP Economics coaching",
    "Pre-AP Environmental Science coaching",
    "Pre-AP Human Geography coaching",
    "Pre-AP Calculus AB pathway",
    "Pre-AP Calculus BC pathway",
    "Pre-AP Physics 1 coaching",
    "Pre-AP Physics C Mechanics coaching",
    "Pre-AP Computer Science A coaching",
    "Pre-AP Computer Science Principles coaching",
    "Pre-AP English Language Composition",
    "Pre-AP English Literature Composition",
    "Pre-AP World History Modern",
    "Pre-AP Microeconomics coaching",
    "Pre-AP Macroeconomics coaching",
 
    // ── AP exam & scoring terms ───────────────────────────────────────
    "AP exam preparation India",
    "AP exam coaching Gurgaon",
    "AP exam preparation Gurgaon",
    "AP score 5 India",
    "AP score 4 India",
    "how to score 5 in AP exam",
    "AP exam tips India",
    "AP exam strategy India",
    "College Board AP India",
    "AP exam 2025 India",
    "AP exam 2026 India",
    "AP mock test India",
    "AP practice test Gurgaon",
    "AP diagnostic test India",
 
    // ── US & global university admissions ────────────────────────────
    "AP for US university admission",
    "AP for Ivy League India",
    "AP for MIT India",
    "AP for Stanford India",
    "AP for Harvard India",
    "AP for top US universities India",
    "AP for UK universities India",
    "AP for Oxford Cambridge India",
    "AP for Canadian universities India",
    "AP for University of Toronto India",
    "AP for UBC India",
    "AP for Australian universities India",
    "US college admission from India",
    "study in USA from India",
    "US university application India",
    "AP credit US universities India",
    "how many AP exams for top US colleges",
    "AP exams for pre-med India",
    "AP exams for engineering India",
    "AP exams for Ivy League admission",
    "AP for international students India",
    "study abroad from India AP",
 
    // ── CBSE / ICSE alignment ─────────────────────────────────────────
    "AP coaching for CBSE students",
    "AP coaching for ICSE students",
    "CBSE student AP exam India",
    "ICSE student AP exam India",
    "AP alongside CBSE India",
    "AP alongside ICSE India",
    "international curriculum India AP",
    "AP school Gurgaon",
    "AP curriculum school India",
    "IB vs AP India",
    "AP vs IB for Indian students",
    "AP vs A Level India",
    "AP vs IGCSE India",
 
    // ── Local / geo-specific ──────────────────────────────────────────
    "Pre-AP coaching DLF Phase IV",
    "Pre-AP coaching South City Gurgaon",
    "Pre-AP coaching Sector 50 Gurgaon",
    "Pre-AP coaching Golf Course Road",
    "Pre-AP coaching Sohna Road",
    "Pre-AP coaching MG Road Gurgaon",
    "Pre-AP coaching Cyber City Gurgaon",
    "Pre-AP coaching Palam Vihar",
    "Pre-AP coaching Faridabad",
    "Pre-AP coaching Noida",
    "Pre-AP coaching near me",
 
    // ── Informational / long-tail ─────────────────────────────────────
    "what is Pre-AP coaching",
    "what is Pre-AP programme",
    "Pre-AP vs AP coaching difference",
    "when to start Pre-AP coaching",
    "Pre-AP coaching benefits",
    "Pre-AP personalised learning plan",
    "Pre-AP academic roadmap India",
    "Pre-AP diagnostic assessment India",
    "Pre-AP study plan India",
    "Pre-AP preparation timeline India",
    "Pre-AP coaching fees India",
    "Pre-AP coaching fees Gurgaon",
    "Pre-AP batch size India",
    "small batch AP coaching Gurgaon",
    "AP coaching with admissions support India",
    "AP coaching with essay guidance India",
    "AP coaching university shortlisting India",
    "EduQuest Pre-AP Gurgaon",
    "EduQuest AP coaching India",
  ],
 
  alternates: {
    canonical: "https://eduquest.org.in/pre-ap-coaching/",
    languages: {
      "x-default": "https://eduquest.org.in/pre-ap-coaching/",
      en: "https://eduquest.org.in/pre-ap-coaching/",
      "en-IN": "https://eduquest.org.in/pre-ap-coaching/",
    },
  },
 
  openGraph: {
    title: "Best Pre-AP Coaching in Gurgaon | Grades 8–11 | EduQuest",
    description:
      "India's most comprehensive Pre-AP coaching in Gurgaon — personalised learning pathways, expert faculty & full admissions support for students in Grades 8–11 targeting US, UK, Canada & Australia universities.",
    url: "https://eduquest.org.in/pre-ap-coaching/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "EduQuest Pre-AP Coaching Gurgaon India",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Pre-AP Coaching Gurgaon | EduQuest India",
    description:
      "Build AP readiness from Grade 8. Expert Pre-AP coaching in Gurgaon with personalised roadmaps & full admissions support for top global universities.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
 