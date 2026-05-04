// sat_us_schema.ts
// Structured data schemas for the SAT Coaching — United States page

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the SAT still required at US universities in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of 2025–2026, MIT, Yale, Dartmouth, UT Austin, Florida, Georgia Tech, and 80+ other US universities have reinstated mandatory SAT/ACT requirements. Even at test-optional schools, submitting a strong score (1500+) statistically improves admission chances and merit aid eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduQuest coach US-based students? Do I need to travel to India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No travel required. All sessions are conducted online via live video with screen sharing and a virtual whiteboard. Sessions are scheduled to match your US time zone — EST, CST, MST, or PST. Weekend intensives are also available.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Digital SAT and how is it different from the old paper SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Digital SAT replaced the paper SAT for US students in 2024. Key changes: taken on a computer via the Bluebook app, fully adaptive (Module 2 difficulty adjusts based on Module 1 performance), shorter at 2 hours 14 minutes versus 3+ hours, calculator allowed throughout the Math section, and shorter reading passages with one question each.",
      },
    },
    {
      "@type": "Question",
      name: "How many times can I take the SAT? Is there a limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "College Board allows unlimited SAT attempts. Most US colleges use Superscoring — taking your highest Math and highest Reading & Writing scores across all attempts. EduQuest recommends 2–3 attempts, peaking by August or October of Grade 12.",
      },
    },
    {
      "@type": "Question",
      name: "What is PSAT/NMSQT and should my child take it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The PSAT/NMSQT is taken in October of Grade 11. High scorers are designated National Merit Semifinalists, unlocking significant scholarships and strengthening college applications. EduQuest offers dedicated PSAT prep as part of its long-horizon programmes for US students.",
      },
    },
    {
      "@type": "Question",
      name: "When should my child start SAT preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grade 10 is ideal for students targeting 1500+. Grade 11 students should begin immediately, with March or May test dates as the primary goal. Grade 12 students targeting Early Action or Early Decision applications should prepare to test in August or October.",
      },
    },
    {
      "@type": "Question",
      name: "Can EduQuest help with the full college application and not just SAT prep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduQuest offers comprehensive admissions positioning including university shortlisting, application strategy, essay guidance, extracurricular narrative development, and profile building. SAT coaching is one component of an end-to-end admissions ecosystem used by many US families.",
      },
    },
    {
      "@type": "Question",
      name: "What SAT score do I need for top US universities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Target scores vary by institution: MIT and Harvard require 1580+, Stanford and Yale 1570+, Princeton 1545+, UCLA and UC Berkeley 1510+, and UT Austin 1490+. EduQuest's Elite 1570+ Programme is specifically designed for students targeting top-10 US universities.",
      },
    },
  ],
};

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
      name: "SAT Coaching",
      item: "https://eduquest.org.in/sat/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SAT Coaching for US Students",
      item: "https://eduquest.org.in/sat-coaching-us-students/",
    },
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduQuest",
  url: "https://eduquest.org.in",
  logo: "https://eduquest.org.in/logo.png",
  description:
    "India's premier SAT, ACT, AP, and UCAT coaching firm offering online programmes for US-based students. Established 1995. 320+ US students coached, average score 1560.",
  telephone: "+91-9958041888",
  email: "contact@eduquest.org.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1210 Galleria Boulevard, DLF Phase IV",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SAT Coaching Programmes for US Students",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Accelerated SAT Programme",
          description:
            "6–8 week intensive SAT prep for US students targeting 1400+. Includes 20 hours of 1-on-1 live sessions and 3 full Bluebook adaptive mocks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Elite SAT 1570+ Programme",
          description:
            "3–4 month programme targeting 1550–1600 for top-10 US university applicants. Includes 40 hours of 1-on-1 sessions, 6 Bluebook mocks, PSAT/NMSQT strategy, and admissions integration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Long-Horizon 2-Year SAT Programme",
          description:
            "Grades 9–11 programme integrating SAT, PSAT, and AP coaching for National Merit and top-10 university targeting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Live Group SAT Batches",
          description:
            "3-month weekend cohort for US students targeting 1400–1500. Small batch sizes with 4 full Bluebook adaptive mocks.",
        },
      },
    ],
  },
};