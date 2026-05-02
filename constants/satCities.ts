// constants/satCities.ts
// ─────────────────────────────────────────────────────────────────────────────
// SAT CITY DATA — Single source of truth for all city-specific SAT pages
// New fields added for CitySatStructure:
//   structureIntro      — custom paragraph under the section heading
//   structureAvgScore   — "1540" shown in city avg callout
//   structureAvgNote    — short note next to avg score
//   structureFootNote   — paragraph below the adaptive panel
// ─────────────────────────────────────────────────────────────────────────────

export type CitySlug =
  | "jaipur" | "delhi" | "mumbai" | "gurgaon" | "bangalore" | "chennai"
  | "hyderabad" | "pune" | "chandigarh" | "noida" | "lucknow" | "kolkata"
  | "indore" | "ahmedabad" | "dehradun"
  | "us" | "uk" | "uae" | "singapore" | "saudi-arabia" | "nigeria" | "mauritius"
  | "nepal" | "sharjah";

export interface Testimonial {
  name: string;
  school: string;
  score: string;
  previousScore: string;
  quote: string;
  year: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ExtraSection {
  id: "LocalSchools" | "CollegeBoard" | "VisaInfo" | "OnlineAdvantage" | "CityRank";
  props?: Record<string, unknown>;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export interface SATCityData {
  slug: CitySlug;
  city: string;
  country: string;
  /** ISO 3166-1 alpha-2 country code for hreflang */
  countryCode: string;
  /** Full canonical URL */
  canonicalUrl: string;
  /** ISO date string — drives lastModified in sitemap and schema dateModified */
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  /** Short OG-optimised description ≤ 200 chars */
  ogDescription: string;
  /** City-specific keyword list */
  keywords: string[];
  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    stats: HeroStat[];
    /** Alt text for hero image */
    imageAlt: string;
  };
  about: {
    paragraphs: string[];
  };
  testimonials: Testimonial[];
  aggregateRating: AggregateRating;
  faqs: FAQ[];
  extraSections?: ExtraSection[];
  localContext: string;

  // ── CitySatStructure fields ──────────────────────────────────
  /** Custom intro paragraph under the structure heading. Falls back to generic if omitted. */
  structureIntro?: string;
  /** 2025 batch average shown in the score callout card, e.g. "1540" */
  structureAvgScore?: string;
  /** Short note next to the avg, e.g. "top performer: 1590" */
  structureAvgNote?: string;
  /** Paragraph rendered below the adaptive panel */
  structureFootNote?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTED SCHEMA BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

export function buildAggregateRatingSchema(data: SATCityData) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `EduQuest SAT Coaching ${data.city}`,
    url: data.canonicalUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue.toString(),
      reviewCount: data.aggregateRating.reviewCount.toString(),
      bestRating: data.aggregateRating.bestRating.toString(),
      worstRating: data.aggregateRating.worstRating.toString(),
    },
    review: data.testimonials.slice(0, 3).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: `${t.year}-06-01`,
    })),
  };
}

export function buildEventSchema(data: SATCityData) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Free SAT Diagnostic Test for ${data.city} Students`,
    startDate: "2026-05-01",
    endDate: "2026-12-31",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: data.canonicalUrl,
    },
    organizer: {
      "@type": "Organization",
      name: "EduQuest",
      url: "https://eduquest.org.in",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: data.canonicalUrl,
      validFrom: "2026-01-01",
    },
    description: `Free Digital SAT diagnostic test for students in ${data.city}. Identify score gaps and get a personalised 1570+ prep plan from EduQuest.`,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CITY DATA
// ─────────────────────────────────────────────────────────────────────────────

export const SAT_CITIES: Record<CitySlug, SATCityData> = {

  // ── JAIPUR ────────────────────────────────────────────────────────────────
  jaipur: {
    slug: "jaipur",
    city: "Jaipur",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-jaipur/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Jaipur 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "India's #1 SAT coaching in Jaipur. Digital SAT 2026, adaptive testing, diagnostics, 1570+ score plans. Online & offline classes. Free diagnostic test.",
    ogDescription:
      "Score 1570+ on Digital SAT 2026. EduQuest's expert SAT coaching for Jaipur students — adaptive mocks, live classes, free diagnostic.",
    keywords: [
      "SAT coaching Jaipur", "SAT classes Jaipur", "Digital SAT 2026 Jaipur",
      "best SAT coaching Jaipur", "SAT preparation Jaipur", "SAT tutor Jaipur",
      "1570 SAT score Jaipur", "online SAT coaching Jaipur",
    ],
    hero: {
      tagline: "Jaipur → Top US Universities",
      headline: "SAT Coaching in Jaipur — Score 1570+",
      subheadline:
        "Online live classes and hybrid programmes tailored for Jaipur students targeting 1570+ on the Digital SAT 2026.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)" },
        { value: "97%",  label: "Score improvement rate"  },
        { value: "200+", label: "Jaipur students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "EduQuest SAT coaching class for Jaipur students — online live session",
    },
    about: {
      paragraphs: [
        "EduQuest has been Jaipur's most trusted SAT preparation partner since 2010, serving students from St. Xavier's, Maharaja Sawai Man Singh Vidyalaya, Seedling Modern High School, and other leading CBSE and IB schools across the Pink City.",
        "Since EduQuest's physical centre is in Gurgaon, Jaipur students primarily attend Online Live Group classes or fully Online 1-on-1 sessions. Hybrid options are available for students willing to travel to our Gurgaon centre periodically for intensive weekends.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 200, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving students from St. Xavier's, MSMV, Seedling Modern, and all major CBSE/IB schools in Jaipur.",
    structureIntro:
      "Jaipur students consistently benefit from mastering the adaptive module system early. Understanding how Module 1 performance routes you to Module 2 Hard — and why that routing is everything for a 1570+ score — is the foundation of EduQuest's Jaipur programme.",
    structureAvgScore: "1540",
    structureAvgNote: "top performer: 1580, online batch 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Jaipur students is fully aligned with the Digital SAT 2026 format and the Bluebook interface used on test day. Jaipur students from St. Xavier's, MSMV, and Seedling Modern regularly achieve 1560+ through our structured adaptive prep.",
    testimonials: [
  {
    name: "Aanya Sharma",
    school: "St. Xavier's Senior Secondary School, Jaipur",
    score: "1540", previousScore: "1280",
    quote: "EduQuest's adaptive mocks were identical to the real Bluebook interface. My Math score jumped 120 points after their skill-cluster targeting.",
    year: "2025",
  },
  {
    name: "Rohan Singhvi",
    school: "Maharaja Sawai Man Singh Vidyalaya, Jaipur",
    score: "1560", previousScore: "1310",
    quote: "The online live classes felt as personal as offline tutoring. Got into University of Michigan — EduQuest made it happen.",
    year: "2025",
  },
  {
    name: "Priya Agarwal",
    school: "Seedling Modern High School, Jaipur",
    score: "1510", previousScore: "1250",
    quote: "Coming from Jaipur, I was worried about the distance. EduQuest's online programme was better than any local option I could find.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "St. Xavier's Senior Secondary School, Jaipur",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Maharaja Sawai Man Singh Vidyalaya, Jaipur",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's guidance through digital SAT coaching in Jaipur supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Seedling Modern High School, Jaipur",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "What is SAT coaching in Jaipur at EduQuest?", answer: "EduQuest serves Jaipur students from leading schools like Maharaja Sawai Man Singh Vidyalaya, St. Xavier's, and Seedling Modern. Programmes include a Diagnostic Test Framework, adaptive 1-on-1 coaching, and full Bluebook interface training." },
      { question: "How much does SAT coaching cost in Jaipur?", answer: "Online 1-on-1 programmes start at ₹50,000. Hybrid (online + Gurgaon centre) programmes start at ₹70,000. All include diagnostics, mock tests, and score planning." },
      { question: "How do Jaipur students attend classes?", answer: "Primarily via Online Live Group or 1-on-1 sessions. Hybrid students visit the Gurgaon centre for intensive weekend batches." },
      { question: "What Digital SAT score can Jaipur students expect?", answer: "Our 2025 Jaipur batch averaged 1540. Students starting in Grade 10 with consistent prep typically cross 1570." },
      { question: "Which Jaipur schools does EduQuest work with?", answer: "St. Xavier's Senior Secondary School, Maharaja Sawai Man Singh Vidyalaya, Seedling Modern High School, and all major CBSE and IB schools across Jaipur." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026 has 2 sections: Reading & Writing (54 questions, 64 min) and Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator allowed throughout Math. Scored 400–1600." },
      { question: "When should a Jaipur student start SAT preparation?", answer: "EduQuest recommends starting SAT prep in Grade 10 and completing it by November of Grade 11." },
      { question: "What SAT coaching options are available for Jaipur students?", answer: "Jaipur students can choose from Online Live Group classes, Online 1-on-1 sessions, or a Hybrid programme combining online coaching with periodic visits to our Gurgaon centre." },
      { question: "Is there any offline SAT coaching option for Jaipur students?", answer: "EduQuest's physical centre is in Gurgaon. Jaipur students who wish to attend in-person can enrol in our Hybrid programme and visit the Gurgaon centre on select weekends for intensive sessions." },
      { question: "How does EduQuest's diagnostic framework help Jaipur students?", answer: "Every Jaipur student starts with a full-length Bluebook diagnostic that benchmarks their current score and maps their performance across 19 skill clusters." },
      { question: "Are SAT mock tests included in the Jaipur programme?", answer: "Yes — all EduQuest programmes for Jaipur students include a minimum of 6 full-length adaptive mock tests on the actual Bluebook platform." },
      { question: "What US universities do Jaipur EduQuest students get into?", answer: "Recent Jaipur students have been admitted to University of Michigan, Purdue, University of Illinois, Penn State, and other top-ranked US universities." },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── DELHI ─────────────────────────────────────────────────────────────────
  delhi: {
    slug: "delhi",
    city: "Delhi / NCR",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-delhi/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Delhi 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Top-rated SAT coaching in Delhi/NCR. Digital SAT 2026, adaptive mocks, 1570+ score plans. Offline & online classes. Free diagnostic test.",
    ogDescription:
      "Best SAT coaching in Delhi NCR — in-person at Gurgaon + online. Score 1570+ on Digital SAT 2026. Free diagnostic test.",
    keywords: [
      "SAT coaching Delhi", "SAT classes Delhi NCR", "Digital SAT 2026 Delhi",
      "best SAT coaching Delhi", "SAT preparation Delhi", "SAT coaching Gurgaon",
      "offline SAT coaching Delhi", "1570 SAT score Delhi",
    ],
    hero: {
      tagline: "Delhi NCR → Top US Universities",
      headline: "SAT Coaching in Delhi — Score 1570+",
      subheadline:
        "India's most experienced SAT faculty, in-person sessions in Gurgaon, and live online classes for students across Delhi NCR.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1550", label: "Avg. Score (2025 batch)" },
        { value: "98%",  label: "Score improvement rate"  },
        { value: "800+", label: "Delhi NCR students coached" },
        { value: "8+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "EduQuest SAT coaching centre Gurgaon — serving Delhi NCR students",
    },
    about: {
      paragraphs: [
        "EduQuest's Gurgaon centre is the hub for Delhi NCR students — accessible from South Delhi, Noida, Faridabad, and Gurgaon. We've coached students from DPS RK Puram, Modern School Barakhamba, The Shri Ram School, and every major IB and CBSE school in the region.",
        "Our flagship in-person batches run on weekends at our South City II centre. Weekday students join our Online Live classes. Both formats use the same expert faculty and Bluebook-identical mock infrastructure.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 800, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving DPS RK Puram, Modern School, The Shri Ram School, Sanskriti, and 50+ CBSE/IB schools in Delhi NCR.",
    structureIntro:
      "Delhi NCR students have access to EduQuest's flagship in-person centre in Gurgaon — the only location in India where you can sit a Bluebook adaptive mock and review it face-to-face with a senior faculty member the same day. This structural advantage is why the Delhi NCR batch consistently leads EduQuest's national averages.",
    structureAvgScore: "1550",
    structureAvgNote: "top performer: 1590, 2025 batch",
    structureFootNote:
      "EduQuest's Delhi NCR SAT programme is fully aligned with Digital SAT 2026 format and College Board's Bluebook interface. Students from DPS RK Puram, Modern School, Shri Ram School, and Sanskriti School regularly achieve 1570+ through our in-person and hybrid preparation model.",
   testimonials: [
  {
    name: "Ishaan Kapoor",
    school: "DPS RK Puram, Delhi",
    score: "1580", previousScore: "1340",
    quote: "The weekend in-person batches at EduQuest's Gurgaon centre were phenomenal. Got into NYU Stern with a 1580.",
    year: "2025",
  },
  {
    name: "Meera Nair",
    school: "The Shri Ram School, Vasant Vihar",
    score: "1550", previousScore: "1290",
    quote: "EduQuest's diagnostic framework pinpointed exactly which algebra clusters I was losing points on. 260-point improvement.",
    year: "2025",
  },
  {
    name: "Arjun Malhotra",
    school: "Modern School Barakhamba, Delhi",
    score: "1530", previousScore: "1270",
    quote: "Best SAT coaching in Delhi NCR. The adaptive mocks felt exactly like test day. I was completely prepared.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "DPS RK Puram, Delhi",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Sanskriti School, New Delhi",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's guidance through digital SAT coaching in Delhi supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "The Shri Ram School, New Delhi",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is EduQuest's SAT coaching available offline in Delhi?", answer: "Yes — in-person classes run at our Gurgaon (South City II) centre on weekends. Delhi students from South Delhi, Noida, and Faridabad regularly attend." },
      { question: "How much does SAT coaching cost in Delhi?", answer: "Group programmes start at ₹45,000. 1-on-1 online coaching starts at ₹50,000. In-person hybrid starts at ₹70,000." },
      { question: "What score can Delhi students expect?", answer: "Our 2025 Delhi NCR batch averaged 1550. Students starting prep in Grade 9–10 consistently cross 1570." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Adaptive, calculator-permitted. Scored 400–1600." },
      { question: "What SAT coaching options does EduQuest offer in Delhi?", answer: "Classroom coaching at Gurgaon, Online Live Group, Online 1-on-1, and full Hybrid programmes. All include diagnostics, 100+ hours, adaptive mocks, and unlimited doubt-clearing." },
      { question: "What is the batch size for SAT coaching at EduQuest for Delhi students?", answer: "We maintain a strict maximum of 12 students per batch." },
      { question: "When should a Delhi student start SAT prep?", answer: "We recommend starting in Grade 10 and finishing by November of Grade 11." },
      { question: "What is the average SAT score improvement for Delhi NCR students?", answer: "Delhi NCR students achieve an average improvement of 220–300 points. The 2025 Delhi batch averaged 1550, with multiple students scoring 1580+." },
      { question: "Which Delhi schools does EduQuest work with?", answer: "DPS RK Puram, DPS Mathura Road, Modern School Barakhamba, The Shri Ram School, Sanskriti School, Vasant Valley, Springdales, Amity International, and 50+ CBSE and IB schools." },
      { question: "How does EduQuest compare to other SAT coaching institutes in Delhi?", answer: "Diagnostic-first approach, batch caps at 12 students, Bluebook-native adaptive mock tests, and focus exclusively on SAT. Our 2025 Delhi NCR batch averaged 1550." },
      { question: "Does EduQuest offer crash courses for Delhi students?", answer: "Yes — intensive 6-week and 8-week crash courses in online and hybrid in-person formats." },
    ],
    extraSections: [{ id: "LocalSchools" }, { id: "CityRank" }],
  },

  // ── MUMBAI ────────────────────────────────────────────────────────────────
  mumbai: {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-mumbai/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Mumbai 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Premier SAT coaching in Mumbai. Digital SAT 2026, 1570+ score plans. Online live classes for Mumbai students. Free diagnostic test.",
    ogDescription:
      "SAT coaching for Mumbai students — online live classes, expert faculty, 1570+ scores. Free diagnostic test.",
    keywords: [
      "SAT coaching Mumbai", "SAT classes Mumbai", "Digital SAT 2026 Mumbai",
      "best SAT coaching Mumbai", "online SAT coaching Mumbai", "SAT preparation Mumbai", "SAT tutor Mumbai",
    ],
    hero: {
      tagline: "Mumbai → Top US Universities",
      headline: "SAT Coaching in Mumbai — Score 1570+",
      subheadline:
        "Online live and 1-on-1 SAT prep for Mumbai students targeting top US universities with 1570+ Digital SAT scores.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%",  label: "Score improvement rate"  },
        { value: "300+", label: "Mumbai students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "EduQuest online SAT coaching for Mumbai students",
    },
    about: {
      paragraphs: [
        "EduQuest serves Mumbai students from Dhirubhai Ambani International School, Cathedral & John Connon, Bombay Scottish, and other leading IB and ICSE schools across the city.",
        "Mumbai students benefit from our flexible evening and weekend batch timings, designed around the city's school and commute schedule.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 300, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving DAIS, Cathedral & John Connon, Bombay Scottish, Jamnabai Narsee, and leading IB/ICSE schools in Mumbai.",
    structureIntro:
      "Mumbai students from DAIS, Cathedral, and Bombay Scottish bring strong IB and ICSE foundations that translate exceptionally well into the Digital SAT's adaptive structure — when channelled through EduQuest's skill-cluster framework.",
    structureAvgScore: "1535",
    structureAvgNote: "top performer: 1570, online batch 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Mumbai students is fully aligned with Digital SAT 2026 and Bluebook. Flexible evening and weekend batches ensure zero conflict with Mumbai school schedules or commute demands.",
    testimonials: [
      {
        name: "Zara Mehta",
        school: "Dhirubhai Ambani International School, Mumbai",
        score: "1560", previousScore: "1300",
        quote: "The online format was perfect for Mumbai — no commute, same quality as in-person. Got into UCLA.",
        year: "2025",
      },
      {
        name: "Kabir Desai",
        school: "Cathedral & John Connon, Mumbai",
        score: "1520", previousScore: "1260",
        quote: "EduQuest's R&W section strategy is unmatched. Improved from 630 to 790 in just four months.",
        year: "2024",
      },
    ],
    faqs: [
      { question: "Does EduQuest have a centre in Mumbai?", answer: "EduQuest's physical centre is in Gurgaon. Mumbai students attend Online Live Group or 1-on-1 sessions. Hybrid visits to Gurgaon are available." },
      { question: "How much does SAT coaching cost in Mumbai?", answer: "Online 1-on-1 starts at ₹50,000. Online Group starts at ₹45,000. All include diagnostics and mock tests." },
      { question: "What score can Mumbai students expect?", answer: "Our 2025 Mumbai batch averaged 1535. Strong performers consistently cross 1550+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: 2 sections — Reading & Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total 2 hours 14 minutes. Fully adaptive, calculator-permitted throughout Math. Scored 400–1600." },
      { question: "Which Mumbai schools does EduQuest work with?", answer: "DAIS, Cathedral & John Connon, Bombay Scottish, Jamnabai Narsee School, Oberoi International School, and other leading IB and ICSE schools." },
      { question: "Are batch timings flexible for Mumbai students?", answer: "Yes — morning, evening, and weekend batch slots. All classes are online, ensuring zero travel time." },
      { question: "When should a Mumbai student start SAT preparation?", answer: "We recommend starting SAT prep in Grade 10 and finishing by November of Grade 11." },
      { question: "How does the online SAT coaching work for Mumbai students?", answer: "All sessions via Zoom or Webex. Same Bluebook-native mock tests, diagnostic frameworks, and faculty access as in-person Gurgaon students." },
      { question: "What US universities do Mumbai EduQuest students get into?", answer: "Recent Mumbai students have been admitted to UCLA, USC, University of Michigan, NYU, Boston University, and other top US universities." },
      { question: "Is there an in-person SAT coaching option for Mumbai students?", answer: "Mumbai students can enrol in our Hybrid programme and visit the Gurgaon centre during school holidays or long weekends for intensive sessions." },
    ],
  },

  // ── GURGAON ───────────────────────────────────────────────────────────────
  gurgaon: {
    slug: "gurgaon",
    city: "Gurgaon",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-gurgaon/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Gurgaon 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "EduQuest's home city — India's best SAT coaching centre in Gurgaon. In-person, online & hybrid. 1570+ score plans. Free diagnostic.",
    ogDescription:
      "Walk into EduQuest's flagship Gurgaon centre for in-person SAT coaching. Score 1570+ on Digital SAT 2026. India's top SAT faculty.",
    keywords: [
      "SAT coaching Gurgaon", "SAT classes Gurgaon", "best SAT coaching Gurgaon",
      "in-person SAT coaching Gurgaon", "SAT coaching centre Gurgaon",
      "Digital SAT 2026 Gurgaon", "SAT tutor Gurgaon", "SAT coaching South City Gurgaon",
    ],
    hero: {
      tagline: "Gurgaon → Top US Universities",
      headline: "SAT Coaching in Gurgaon — Score 1570+",
      subheadline:
        "Walk into EduQuest's flagship Gurgaon centre for in-person coaching, or join our online live batches. India's most experienced SAT faculty — right here.",
      ctaLabel: "Visit Our Centre",
      stats: [
        { value: "1555", label: "Avg. Score (2025 batch)"    },
        { value: "99%",  label: "Score improvement rate"     },
        { value: "1200+",label: "Gurgaon students coached"   },
        { value: "10+",  label: "Full-length adaptive mocks" },
      ],
      imageAlt: "EduQuest flagship SAT coaching centre South City II Gurgaon",
    },
    about: {
      paragraphs: [
        "EduQuest's flagship centre at South City II, Sector 50, Gurgaon is where our most intensive in-person SAT coaching happens. Students from GD Goenka World School, The Heritage School, Scottish High International, and Pathways walk in for weekend batches and exam-week intensives.",
        "Gurgaon students have the unique advantage of in-person diagnostic reviews, live whiteboard sessions, and same-day doubt clearing with our senior faculty.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 1200, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving GD Goenka, The Heritage School, Scottish High, Pathways World School, and all major IB/CBSE schools in Gurgaon.",
    structureIntro:
      "Gurgaon students at EduQuest's flagship centre experience the Digital SAT structure first-hand — sitting full Bluebook adaptive mocks in conditions identical to test day, then reviewing every skill cluster in person with senior faculty. No other centre in India replicates this environment.",
    structureAvgScore: "1555",
    structureAvgNote: "top performer: 1590, Gurgaon in-person batch 2025",
    structureFootNote:
      "EduQuest's Gurgaon programme is the gold standard for Digital SAT 2026 preparation in India. In-person adaptive mock reviews at South City II, combined with Bluebook-native practice, have produced India's highest SAT batch average — 1555 in 2025.",
    testimonials: [
      {
        name: "Ananya Gupta",
        school: "GD Goenka World School, Gurgaon",
        score: "1590", previousScore: "1370",
        quote: "Being able to walk into the Gurgaon centre for doubt sessions made all the difference. 220 point jump, got into Duke.",
        year: "2025",
      },
      {
        name: "Rahul Verma",
        school: "The Heritage School, Gurgaon",
        score: "1570", previousScore: "1320",
        quote: "Weekend in-person batches + weekday online practice — the hybrid format was perfect. EduQuest is the real deal.",
        year: "2025",
      },
    ],
    faqs: [
      { question: "Where is EduQuest's Gurgaon centre?", answer: "F-45, First Floor, South City II, Sector 50, Gurugram – 122018. Also accessible from our 1210, Galleria Boulevard, DLF Phase IV location." },
      { question: "What SAT programmes are available in Gurgaon?", answer: "In-person weekend batches, weekday online live, 1-on-1 coaching, and intensive crash courses. All include Bluebook mocks and diagnostics." },
      { question: "How much does in-person SAT coaching in Gurgaon cost?", answer: "In-person group starts at ₹55,000. 1-on-1 in-person starts at ₹85,000." },
      { question: "What SAT coaching options does EduQuest offer in Gurgaon?", answer: "Classroom coaching, Online Live Group, 1-on-1 sessions, and full Hybrid programmes. All include diagnostics, 100+ minimum hours, and unlimited doubt-clearing." },
      { question: "What is the fee for SAT coaching at EduQuest Gurgaon?", answer: "Online Live Group from ₹45,000, Hybrid Group ₹70,800, Classroom Group ₹55,000, 1-on-1 ₹80,000, Hybrid 1-on-1 ₹1,18,000. GST applicable." },
      { question: "How to score 1570+ on the SAT at EduQuest Gurgaon?", answer: "Diagnostic → skill-cluster targeting → Bluebook mastery → 15+ adaptive mocks → review every wrong answer → align with admissions strategy." },
      { question: "When should a Gurgaon student start SAT coaching?", answer: "Grade 10, finishing by November of Grade 11 for a potential retake." },
      { question: "Does EduQuest offer online SAT coaching for Gurgaon students?", answer: "Yes — Online Live Group, Online 1-on-1, and Hybrid programmes combining online and classroom coaching." },
      { question: "What is the batch size at EduQuest Gurgaon?", answer: "Strict maximum of 12 students per SAT batch." },
      { question: "What is the average SAT score improvement for EduQuest Gurgaon students?", answer: "200–300 points. Students starting around 1100–1200 regularly reach 1450–1580+." },
      { question: "Which Gurgaon schools does EduQuest work with?", answer: "GD Goenka, The Heritage School, Scottish High International, Pathways World School, DPS Gurgaon, Shriram Millennium, Amity International Gurgaon." },
      { question: "Does EduQuest offer crash courses for Gurgaon students?", answer: "Yes — 6-week and 8-week intensive crash courses in-person and online." },
    ],
    extraSections: [{ id: "LocalSchools" }, { id: "CityRank" }],
  },

  // ── BANGALORE ─────────────────────────────────────────────────────────────
  bangalore: {
    slug: "bangalore",
    city: "Bangalore",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-bangalore/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Bangalore 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Premier SAT coaching in Bangalore. Digital SAT 2026, online & in-person sessions, 1570+ score plans. Free diagnostic.",
    ogDescription:
      "SAT coaching for Bangalore students — JP Nagar office + online sessions, expert faculty, 1570+ scores.",
    keywords: [
      "SAT coaching Bangalore", "SAT classes Bangalore", "Digital SAT 2026 Bangalore",
      "best SAT coaching Bangalore", "SAT coaching JP Nagar",
      "online SAT coaching Bangalore", "SAT preparation Bangalore",
    ],
    hero: {
      tagline: "Bangalore → Top US Universities",
      headline: "SAT Coaching in Bangalore — Score 1570+",
      subheadline:
        "Online live sessions and in-person support at our Bangalore corporate office for students targeting 1570+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)" },
        { value: "97%",  label: "Score improvement rate"  },
        { value: "250+", label: "Bangalore students coached" },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "EduQuest SAT coaching Bangalore JP Nagar office — online and in-person",
    },
    about: {
      paragraphs: [
        "EduQuest's Bangalore corporate office at JP Nagar 2nd Phase supports students from Inventure Academy, Canadian International School, The International School Bangalore, and leading CBSE schools.",
        "Most Bangalore coaching is online with optional in-person intensives at our JP Nagar office.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 250, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Inventure Academy, CIS Bangalore, TISB, Delhi Public School Bangalore, and leading IB/CBSE schools.",
    structureIntro:
      "Bangalore's IB and CBSE students bring a strong quantitative foundation — especially from schools like Inventure Academy and TISB — that maps directly onto the Digital SAT's Math adaptive structure. EduQuest's Bangalore programme builds on this advantage to target Module 2 Hard consistently.",
    structureAvgScore: "1540",
    structureAvgNote: "top performer: 1580, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Bangalore students is fully aligned with Digital SAT 2026 and the Bluebook interface. Our JP Nagar corporate office supports periodic in-person intensives alongside our core online live programme.",
   testimonials: [
  {
    name: "Priya Rao",
    school: "Inventure Academy, Bangalore",
    score: "1545", previousScore: "1290",
    quote: "EduQuest's Bangalore team was fantastic. The JP Nagar office was convenient for intensive weekends.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Canadian International School, Bangalore",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "The International School Bangalore",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Bangalore students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Inventure Academy, Bangalore",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Does EduQuest have an office in Bangalore?", answer: "Yes — our Bangalore Corporate Office is at JP Nagar 2nd Phase. Most coaching is online with optional in-person sessions." },
      { question: "How much does SAT coaching cost in Bangalore?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000. In-person sessions at JP Nagar and hybrid options are available." },
      { question: "What Digital SAT score can Bangalore students expect?", answer: "Our 2025 Bangalore batch averaged 1540. Students from IB schools like TISB and CIS who start early typically cross 1550+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Bangalore schools does EduQuest work with?", answer: "Inventure Academy, CIS, TISB, DPS Bangalore, National Public School, and other leading IB and CBSE schools." },
      { question: "When should a Bangalore student start SAT preparation?", answer: "We recommend starting in Grade 10. EduQuest's flexible scheduling avoids IB exam conflicts." },
      { question: "Are there in-person SAT coaching sessions available in Bangalore?", answer: "Yes — EduQuest's JP Nagar office offers in-person intensive sessions on select weekends." },
      { question: "Does EduQuest offer a free SAT diagnostic test for Bangalore students?", answer: "Yes — every Bangalore student starts with a free full-length Bluebook diagnostic test." },
      { question: "What US universities do Bangalore EduQuest students get admitted to?", answer: "UC campuses, University of Michigan, Georgia Tech, Purdue, UT Austin, and other top US universities." },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── CHENNAI ───────────────────────────────────────────────────────────────
  chennai: {
    slug: "chennai",
    city: "Chennai",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-chennai/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Chennai 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Chennai students. Digital SAT 2026, adaptive prep, 1570+ score plans. Free diagnostic test.",
    ogDescription:
      "SAT coaching for Chennai students — online live classes, adaptive mocks, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching Chennai", "SAT classes Chennai", "Digital SAT 2026 Chennai",
      "best SAT coaching Chennai", "online SAT coaching Chennai", "SAT tutor Chennai",
    ],
    hero: {
      tagline: "Chennai → Top US Universities",
      headline: "SAT Coaching in Chennai — Score 1570+",
      subheadline:
        "Online live SAT coaching for Chennai students from top CBSE and IB schools targeting 1570+ and US admissions.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)" },
        { value: "96%",  label: "Score improvement rate"  },
        { value: "120+", label: "Chennai students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Chennai students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Chennai students from Lalaji Memorial Omega International School, The PSBB Group, Chettinad Vidyashram, and other leading institutions via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 120, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving LMOIS, PSBB, Chettinad Vidyashram, DAV, and leading CBSE/IB schools in Chennai.",
    structureIntro:
      "Chennai students from PSBB, LMOIS, and Chettinad Vidyashram enter EduQuest's programme with disciplined study habits — an asset that translates directly into mastering the Digital SAT's 2-module adaptive structure under timed conditions.",
    structureAvgScore: "1530",
    structureAvgNote: "top performer: 1565, 2025 batch",
    structureFootNote:
      "EduQuest's Chennai SAT programme is fully aligned with Digital SAT 2026 format. All online sessions are timed for Chennai school schedules, and Bluebook mock tests mirror the exact interface students encounter on test day.",
   testimonials: [
  {
    name: "Kavya Subramaniam",
    school: "Lalaji Memorial Omega International, Chennai",
    score: "1525", previousScore: "1260",
    quote: "The adaptive mock tests were spot-on. 265-point improvement and into University of Illinois.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "The PSBB Group, Chennai",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Chettinad Vidyashram, Chennai",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Chennai students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "DAV School, Chennai",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is EduQuest's SAT coaching available for Chennai students?", answer: "Yes — primarily via Online Live and 1-on-1 sessions. Hybrid visits to our Gurgaon centre are available." },
      { question: "How much does SAT coaching cost for Chennai students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What Digital SAT score can Chennai students expect?", answer: "Our 2025 Chennai batch averaged 1530. Students from IB schools who start in Grade 10 consistently reach 1570+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Chennai schools does EduQuest work with?", answer: "LMOIS, PSBB Group, Chettinad Vidyashram, DAV, Padma Seshadri Bala Bhavan, and other leading CBSE and IB schools." },
      { question: "When should a Chennai student start SAT preparation?", answer: "We recommend starting in Grade 10 and completing by November of Grade 11." },
      { question: "Does EduQuest offer a free SAT diagnostic test for Chennai students?", answer: "Yes — all Chennai students begin with a free full-length Bluebook diagnostic test." },
      { question: "Are batch timings suitable for Chennai students?", answer: "Yes — morning, evening, and weekend batches that fit around Chennai school schedules." },
      { question: "What US universities have Chennai EduQuest students been admitted to?", answer: "University of Illinois, Purdue, Penn State, UT Dallas, and other strong US universities." },
    ],
  },

  // ── HYDERABAD ─────────────────────────────────────────────────────────────
  hyderabad: {
    slug: "hyderabad",
    city: "Hyderabad",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-hyderabad/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Hyderabad 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "SAT coaching for Hyderabad students. Digital SAT 2026, online live sessions, 1570+ score plans. Free diagnostic test.",
    ogDescription:
      "Online SAT coaching for Hyderabad students — adaptive mocks, expert faculty, 1570+ scores.",
    keywords: [
      "SAT coaching Hyderabad", "SAT classes Hyderabad", "Digital SAT 2026 Hyderabad",
      "best SAT coaching Hyderabad", "online SAT coaching Hyderabad", "SAT tutor Hyderabad",
    ],
    hero: {
      tagline: "Hyderabad → Top US Universities",
      headline: "SAT Coaching in Hyderabad — Score 1570+",
      subheadline:
        "Online live and 1-on-1 coaching for Hyderabad students from leading IB and CBSE schools targeting 1570+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)"   },
        { value: "96%",  label: "Score improvement rate"    },
        { value: "180+", label: "Hyderabad students coached" },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Hyderabad students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Hyderabad students from Oakridge International, Chirec International, and leading CBSE/IB schools via online sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 180, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Oakridge International, Chirec, Meridian, DPS Hyderabad, and leading schools across Hyderabad.",
    structureIntro:
      "Hyderabad has one of India's strongest STEM student populations. EduQuest's programme for Hyderabad students channels this quantitative strength through the Digital SAT's Math adaptive modules — targeting 750+ on Math while systematically closing any Reading & Writing gaps.",
    structureAvgScore: "1535",
    structureAvgNote: "top performer: 1570, 2025 batch",
    structureFootNote:
      "EduQuest's Hyderabad SAT programme is fully aligned with Digital SAT 2026. Our online sessions are scheduled around Hyderabad school timetables, and every student receives a minimum of 6 full-length Bluebook adaptive mocks.",
   testimonials: [
  {
    name: "Siddharth Reddy",
    school: "Oakridge International School, Hyderabad",
    score: "1540", previousScore: "1280",
    quote: "EduQuest's diagnostic approach found my weak spots in 2 weeks. 260-point improvement.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Chirec International School, Hyderabad",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Meridian School, Hyderabad",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Hyderabad students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "DPS Hyderabad",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is SAT coaching available in Hyderabad?", answer: "Yes — via Online Live and 1-on-1 sessions. Hybrid visits to Gurgaon available for intensive weekends." },
      { question: "How much does SAT coaching cost for Hyderabad students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000. Hybrid programmes with Gurgaon visits start at ₹70,000." },
      { question: "What Digital SAT score can Hyderabad students expect?", answer: "Our 2025 Hyderabad batch averaged 1535. Students from Oakridge and Chirec who start prep in Grade 10 consistently reach 1570+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Hyderabad schools does EduQuest work with?", answer: "Oakridge International, Chirec International, Meridian School, DPS Hyderabad, Glendale Academy, and other leading IB and CBSE schools." },
      { question: "When should a Hyderabad student start SAT preparation?", answer: "We recommend starting in Grade 10. EduQuest's SAT programme works well alongside JEE/NEET preparation for students exploring both paths." },
      { question: "Does EduQuest offer a free SAT diagnostic for Hyderabad students?", answer: "Yes — every Hyderabad student receives a free full-length Bluebook diagnostic." },
      { question: "Can Hyderabad students attend EduQuest in person?", answer: "Hyderabad students can enrol in our Hybrid programme and visit the Gurgaon centre for weekend intensives during school breaks." },
      { question: "What US universities have Hyderabad EduQuest students been admitted to?", answer: "Purdue, University of Illinois, Texas A&M, UT Dallas, Carnegie Mellon, and other top US engineering and technology universities." },
    ],
  },

  // ── PUNE ──────────────────────────────────────────────────────────────────
  pune: {
    slug: "pune",
    city: "Pune",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-pune/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Pune 2026 | Score 1570+ | EduQuest",
    metaDescription: "Online SAT coaching for Pune students. Digital SAT 2026, 1570+ score plans. Free diagnostic test.",
    ogDescription: "SAT coaching for Pune students — online live classes, 1570+ Digital SAT scores, free diagnostic.",
    keywords: [
      "SAT coaching Pune", "SAT classes Pune", "Digital SAT 2026 Pune",
      "best SAT coaching Pune", "online SAT coaching Pune", "SAT tutor Pune",
    ],
    hero: {
      tagline: "Pune → Top US Universities",
      headline: "SAT Coaching in Pune — Score 1570+",
      subheadline: "Online live SAT coaching tailored for Pune students from IB, CBSE, and ICSE schools.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)"  },
        { value: "96%",  label: "Score improvement rate"   },
        { value: "100+", label: "Pune students coached"    },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Pune students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Pune students from Symbiosis International School, Bishops Co-ed, Mercedes-Benz International School, and other top institutions via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 100, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Symbiosis International, Bishops, Mercedes-Benz International School, and leading IB/ICSE schools in Pune.",
    structureIntro:
      "Pune's IB and ICSE students are well-prepared for the analytical demands of the Digital SAT. EduQuest's Pune programme specifically targets the Reading & Writing adaptive modules, where IB-trained students can build their largest score gains.",
    structureAvgScore: "1530",
    structureAvgNote: "top performer: 1570, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Pune students is fully aligned with Digital SAT 2026 and the Bluebook interface. All sessions are online with flexible timings to suit Pune school and commute schedules.",
   testimonials: [
  {
    name: "Anisha Kulkarni",
    school: "Symbiosis International School, Pune",
    score: "1520", previousScore: "1260",
    quote: "Perfect for Pune students — fully online, same quality as attending in person.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Bishops Co-ed School, Pune",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Mercedes-Benz International School, Pune",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Pune students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Symbiosis International School, Pune",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is EduQuest's SAT coaching available in Pune?", answer: "Yes — online live and 1-on-1 sessions. Hybrid Gurgaon visits available." },
      { question: "How much does SAT coaching cost for Pune students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What Digital SAT score can Pune students expect?", answer: "Our 2025 Pune batch averaged 1530. Students from IB schools in Pune who start prep in Grade 10 regularly cross 1570." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Pune schools does EduQuest work with?", answer: "Symbiosis International School, Bishops Co-ed, Mercedes-Benz International School, Indus International Pune, The Orchid School, and other leading IB and ICSE schools." },
      { question: "When should a Pune student start SAT preparation?", answer: "We recommend starting in Grade 10. EduQuest's flexible scheduling makes it straightforward to run SAT prep alongside IB curriculum." },
      { question: "Does EduQuest offer a free SAT diagnostic for Pune students?", answer: "Yes — all Pune students begin with a free full-length Bluebook diagnostic test." },
      { question: "Are batch timings suitable for Pune students?", answer: "Yes — morning, evening, and weekend slots that work with Pune school timetables." },
    ],
  },

  // ── CHANDIGARH ────────────────────────────────────────────────────────────
  chandigarh: {
    slug: "chandigarh",
    city: "Chandigarh",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-chandigarh/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Chandigarh 2026 | Score 1570+ | EduQuest",
    metaDescription: "SAT coaching for Chandigarh students. Digital SAT 2026, online live sessions, 1570+ score plans.",
    ogDescription: "Online SAT coaching for Chandigarh students — expert faculty, adaptive mocks, 1570+ scores.",
    keywords: [
      "SAT coaching Chandigarh", "SAT classes Chandigarh", "Digital SAT 2026 Chandigarh",
      "SAT coaching Mohali", "SAT coaching Panchkula", "online SAT tutor Chandigarh",
    ],
    hero: {
      tagline: "Chandigarh → Top US Universities",
      headline: "SAT Coaching in Chandigarh — Score 1570+",
      subheadline: "Online live SAT coaching for Chandigarh students from top schools in the tricity area.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1525", label: "Avg. Score (2025 batch)"      },
        { value: "95%",  label: "Score improvement rate"       },
        { value: "70+",  label: "Chandigarh students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks"   },
      ],
      imageAlt: "Online SAT coaching for Chandigarh students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Chandigarh students from St. John's High School, Carmel Convent, and DAV schools across the tricity via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 70, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving St. John's, Carmel Convent, DAV, and leading schools across Chandigarh, Panchkula, and Mohali.",
    structureIntro:
      "Chandigarh tricity students benefit from EduQuest's fully online adaptive programme, which delivers the same structured module-by-module Digital SAT preparation as our Gurgaon in-person centre — without any travel requirement.",
    structureAvgScore: "1525",
    structureAvgNote: "top performer: 1560, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Chandigarh, Panchkula, and Mohali students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Chandigarh, and EduQuest assists with registration and test-date strategy.",
   testimonials: [
  {
    name: "Gurpreet Singh",
    school: "St. John's High School, Chandigarh",
    score: "1510", previousScore: "1250",
    quote: "Great online programme. Scored 1510 and got into Penn State.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Carmel Convent School, Chandigarh",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "DAV School, Chandigarh",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Chandigarh students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Bhavan Vidyalaya, Chandigarh",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Can Chandigarh students attend EduQuest in person?", answer: "Chandigarh students can visit our Gurgaon centre for in-person sessions. Online live and 1-on-1 sessions are the primary format." },
      { question: "How much does SAT coaching cost for Chandigarh students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000. Hybrid programmes with Gurgaon visits start at ₹70,000." },
      { question: "What Digital SAT score can Chandigarh students expect?", answer: "Our 2025 Chandigarh batch averaged 1525. Students who start in Grade 10 with consistent prep regularly cross 1570." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Chandigarh schools does EduQuest work with?", answer: "St. John's High School, Carmel Convent, DAV schools, Bhavan Vidyalaya, and other leading CBSE schools across Chandigarh, Panchkula, and Mohali." },
      { question: "Does EduQuest cover students from Mohali and Panchkula too?", answer: "Yes — EduQuest's online programme serves the entire Chandigarh tricity area." },
      { question: "When should a Chandigarh student start SAT preparation?", answer: "We recommend starting in Grade 10 and completing the SAT by November of Grade 11." },
      { question: "Is there a local SAT test centre near Chandigarh?", answer: "College Board test centres are available in Chandigarh. EduQuest helps with registration, test date selection, and score-send strategy." },
    ],
  },

  // ── NOIDA ─────────────────────────────────────────────────────────────────
  noida: {
    slug: "noida",
    city: "Noida",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-noida/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Noida 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "SAT coaching for Noida students. Digital SAT 2026, online & in-person sessions at our Gurgaon centre, 1570+ score plans.",
    ogDescription: "SAT coaching for Noida students — online + Gurgaon in-person, expert faculty, 1570+ scores.",
    keywords: [
      "SAT coaching Noida", "SAT classes Noida", "Digital SAT 2026 Noida",
      "best SAT coaching Noida", "SAT preparation Noida", "in-person SAT coaching Noida",
    ],
    hero: {
      tagline: "Noida → Top US Universities",
      headline: "SAT Coaching in Noida — Score 1570+",
      subheadline:
        "Online live and hybrid in-person SAT coaching for Noida students targeting 1570+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)"  },
        { value: "97%",  label: "Score improvement rate"   },
        { value: "150+", label: "Noida students coached"   },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "SAT coaching for Noida students — online and Gurgaon centre",
    },
    about: {
      paragraphs: [
        "Noida students from Amity International, DPS Noida, Genesis Global School, and Step by Step attend EduQuest via online live sessions and weekend visits to our Gurgaon centre.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 150, bestRating: 5, worstRating: 1 },
    localContext: "Serving Amity International, DPS Noida, Genesis Global, Step by Step, and Lotus Valley.",
    structureIntro:
      "Noida students are geographically close to EduQuest's flagship Gurgaon centre — making the hybrid model especially powerful. Weekend in-person adaptive mock reviews combined with weekday online sessions deliver results that mirror our full Gurgaon programme.",
    structureAvgScore: "1540",
    structureAvgNote: "top performer: 1570, hybrid batch 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Noida students combines online live sessions with optional weekend visits to our Gurgaon centre. Students from Amity International, Genesis Global, and DPS Noida regularly achieve 1570+ through this hybrid model.",
testimonials: [
  {
    name: "Ankit Saxena",
    school: "Amity International School, Noida",
    score: "1550", previousScore: "1300",
    quote: "Weekend trips to Gurgaon for in-person sessions were totally worth it. 250-point jump.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Genesis Global School, Noida",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "DPS Noida",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's guidance through digital SAT coaching in Noida supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Lotus Valley International School, Noida",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Can Noida students attend EduQuest in person?", answer: "Yes — Noida is close to our Gurgaon centre. Weekend in-person batches are available." },
      { question: "How much does SAT coaching cost for Noida students?", answer: "Online Live Group starts at ₹45,000. In-person/hybrid programmes at Gurgaon start at ₹70,000. 1-on-1 online starts at ₹50,000." },
      { question: "What Digital SAT score can Noida students expect?", answer: "Our 2025 Noida batch averaged 1540. Students from schools like Amity International and Genesis Global who start in Grade 10 typically cross 1570+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Noida schools does EduQuest work with?", answer: "Amity International School Noida, DPS Noida, Genesis Global School, Step by Step School, Lotus Valley International, and other leading CBSE and IB schools." },
      { question: "How far is Noida from EduQuest's Gurgaon centre?", answer: "Approximately 40–50 minutes from central Noida via the Yamuna Expressway or NH-48." },
      { question: "What SAT programmes are available for Noida students?", answer: "Online Live Group, Online 1-on-1, Hybrid (online + Gurgaon in-person weekends), or full in-person programmes at our Gurgaon centre." },
      { question: "When should a Noida student start SAT preparation?", answer: "We recommend starting in Grade 10 and finishing by November of Grade 11." },
    ],
  },

  // ── LUCKNOW ───────────────────────────────────────────────────────────────
  lucknow: {
    slug: "lucknow",
    city: "Lucknow",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-lucknow/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Lucknow 2026 | Score 1570+ | EduQuest",
    metaDescription: "Online SAT coaching for Lucknow students. Digital SAT 2026, 1570+ score plans. Free diagnostic test.",
    ogDescription: "Online SAT coaching for Lucknow students — CMS, La Martiniere, expert faculty, 1570+ scores.",
    keywords: [
      "SAT coaching Lucknow", "SAT classes Lucknow", "Digital SAT 2026 Lucknow",
      "online SAT tutor Lucknow", "SAT preparation Lucknow",
    ],
    hero: {
      tagline: "Lucknow → Top US Universities",
      headline: "SAT Coaching in Lucknow — Score 1570+",
      subheadline: "Online live SAT coaching for Lucknow students targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 batch)"  },
        { value: "95%",  label: "Score improvement rate"   },
        { value: "60+",  label: "Lucknow students coached" },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Lucknow students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Lucknow students from City Montessori School, La Martiniere, and other leading CBSE schools via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 60, bestRating: 5, worstRating: 1 },
    localContext: "Serving CMS, La Martiniere, Seth Anandram Jaipuria School, and leading Lucknow schools.",
    structureIntro:
      "Lucknow students from CMS and La Martiniere bring strong English foundations that give them a natural edge in the Digital SAT's Reading & Writing adaptive modules. EduQuest's Lucknow programme builds on this to target 1570+ through structured Math skill-cluster work.",
    structureAvgScore: "1520",
    structureAvgNote: "top performer: 1555, 2025 batch",
    structureFootNote:
      "EduQuest's online SAT coaching for Lucknow students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Lucknow, and EduQuest assists with registration and test-date strategy.",
  testimonials: [
  {
    name: "Neha Tripathi",
    school: "City Montessori School, Lucknow",
    score: "1505", previousScore: "1240",
    quote: "EduQuest's online programme was excellent. Best SAT prep option from Lucknow.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "La Martiniere College, Lucknow",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Seth Anandram Jaipuria School, Lucknow",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Lucknow students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "City Montessori School, Lucknow",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is online SAT coaching from Lucknow effective?", answer: "Absolutely — our Lucknow students average 1520. The online format provides the same quality as in-person coaching." },
      { question: "How much does SAT coaching cost for Lucknow students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Lucknow schools does EduQuest work with?", answer: "CMS, La Martiniere College, Seth Anandram Jaipuria School, Loreto Convent, and other leading CBSE schools." },
      { question: "Is there a SAT test centre in Lucknow?", answer: "Yes — College Board has authorised test centres in Lucknow. EduQuest helps with registration and date selection." },
      { question: "When should a Lucknow student start SAT preparation?", answer: "We recommend starting in Grade 10. Our online programme fits easily around the Lucknow school calendar." },
      { question: "Can Lucknow students attend EduQuest in person?", answer: "Lucknow students can visit our Gurgaon centre for hybrid intensive sessions during school holidays. Lucknow to Delhi by train is under 5 hours." },
    ],
  },

  // ── KOLKATA ───────────────────────────────────────────────────────────────
  kolkata: {
    slug: "kolkata",
    city: "Kolkata",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-kolkata/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Kolkata 2026 | Score 1570+ | EduQuest",
    metaDescription: "Online SAT coaching for Kolkata students. Digital SAT 2026, 1570+ score plans. Free diagnostic test.",
    ogDescription: "Online SAT coaching for Kolkata students — expert faculty, adaptive mocks, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching Kolkata", "SAT classes Kolkata", "Digital SAT 2026 Kolkata",
      "best SAT coaching Kolkata", "online SAT tutor Kolkata",
    ],
    hero: {
      tagline: "Kolkata → Top US Universities",
      headline: "SAT Coaching in Kolkata — Score 1570+",
      subheadline: "Online live SAT coaching for Kolkata students from top schools targeting US admissions.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1525", label: "Avg. Score (2025 batch)"  },
        { value: "95%",  label: "Score improvement rate"   },
        { value: "80+",  label: "Kolkata students coached" },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Kolkata students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Kolkata students from La Martiniere, South Point, Calcutta International School, and The Newtown School via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 80, bestRating: 5, worstRating: 1 },
    localContext: "Serving La Martiniere, South Point, Calcutta International School, and leading CBSE/ICSE schools in Kolkata.",
    structureIntro:
      "Kolkata students from La Martiniere and South Point have a long tradition of academic excellence that maps directly onto the Digital SAT's evidence-based structure. EduQuest's programme sharpens these foundations into test-day performance across both adaptive sections.",
    structureAvgScore: "1525",
    structureAvgNote: "top performer: 1560, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Kolkata students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Kolkata, and EduQuest assists with registration and test-date strategy.",
    testimonials: [
  {
    name: "Soumya Das",
    school: "La Martiniere for Boys, Kolkata",
    score: "1530", previousScore: "1270",
    quote: "Exceptional online coaching. EduQuest's faculty is the best I've encountered.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "South Point High School, Kolkata",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Calcutta International School, Kolkata",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Kolkata students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "La Martiniere for Girls, Kolkata",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is online SAT coaching good enough for Kolkata students?", answer: "Yes — our online programme is identical in quality to in-person. Kolkata batch averaged 1525 in 2025." },
      { question: "How much does SAT coaching cost for Kolkata students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Kolkata schools does EduQuest work with?", answer: "La Martiniere for Boys and Girls, South Point High School, Calcutta International School, The Newtown School, DPS Newtown, and other leading CBSE and ICSE schools." },
      { question: "Is there a SAT test centre in Kolkata?", answer: "Yes — College Board has authorised test centres in Kolkata. EduQuest helps with test registration and date selection." },
      { question: "When should a Kolkata student start SAT preparation?", answer: "We recommend starting in Grade 10 and finishing SAT prep by November of Grade 11." },
      { question: "Does EduQuest offer a free SAT diagnostic for Kolkata students?", answer: "Yes — all Kolkata students begin with a complimentary full-length Bluebook diagnostic test." },
      { question: "Can Kolkata students attend EduQuest in person?", answer: "Kolkata students can visit our Gurgaon centre for hybrid intensive sessions during Puja holidays or summer breaks." },
    ],
  },

  // ── INDORE ────────────────────────────────────────────────────────────────
  indore: {
    slug: "indore",
    city: "Indore",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-indore/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Indore 2026 | Score 1570+ | EduQuest",
    metaDescription: "Online SAT coaching for Indore students. Digital SAT 2026, 1570+ score plans.",
    ogDescription: "SAT coaching for Indore students — online live classes, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching Indore", "SAT classes Indore", "Digital SAT 2026 Indore",
      "online SAT tutor Indore", "SAT preparation Indore",
    ],
    hero: {
      tagline: "Indore → Top US Universities",
      headline: "SAT Coaching in Indore — Score 1570+",
      subheadline: "Online live SAT coaching for Indore students from top CBSE and IB schools.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1515", label: "Avg. Score (2025 batch)" },
        { value: "95%",  label: "Score improvement rate"  },
        { value: "50+",  label: "Indore students coached" },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Indore students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Indore students from Daly College, Choithram International, and other leading schools via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 50, bestRating: 5, worstRating: 1 },
    localContext: "Serving Daly College, Choithram International, and leading CBSE schools in Indore.",
    structureIntro:
      "EduQuest's online programme gives Indore students access to the same Digital SAT adaptive training as students in metro cities — eliminating the geographic disadvantage and enabling Daly College and Choithram students to compete on equal footing for top US admissions.",
    structureAvgScore: "1515",
    structureAvgNote: "top performer: 1550, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Indore students is fully aligned with Digital SAT 2026. Indore has good rail and air connectivity to Delhi/Gurgaon for students who want occasional in-person sessions at our centre.",
    testimonials: [
  {
    name: "Ritika Sharma",
    school: "Daly College, Indore",
    score: "1510", previousScore: "1250",
    quote: "Great experience. EduQuest is the best SAT coaching option for Indore students.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Choithram International, Indore",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Emerald Heights International School, Indore",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Indore students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Daly College, Indore",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Is there good SAT coaching available in Indore?", answer: "EduQuest's online programme provides world-class SAT coaching for Indore students with no local centre needed." },
      { question: "How much does SAT coaching cost for Indore students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What Digital SAT score can Indore students expect?", answer: "Our 2025 Indore batch averaged 1515. Students from Daly College and Choithram who start early reach 1570+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Indore schools does EduQuest work with?", answer: "Daly College, Choithram International, Emerald Heights International School, and other leading CBSE and IB schools in Indore." },
      { question: "Does EduQuest offer a free SAT diagnostic for Indore students?", answer: "Yes — every Indore student starts with a free full-length Bluebook diagnostic test." },
      { question: "When should an Indore student start SAT preparation?", answer: "We recommend starting in Grade 10." },
      { question: "Can Indore students attend EduQuest in person?", answer: "Indore students can visit our Gurgaon centre for hybrid intensive weekends during school holidays." },
    ],
  },

  // ── AHMEDABAD ─────────────────────────────────────────────────────────────
  ahmedabad: {
    slug: "ahmedabad",
    city: "Ahmedabad",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-ahmedabad/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Ahmedabad 2026 | Score 1570+ | EduQuest",
    metaDescription: "Online SAT coaching for Ahmedabad students. Digital SAT 2026, 1570+ score plans.",
    ogDescription: "SAT coaching for Ahmedabad students — online live sessions, adaptive mocks, 1570+ scores.",
    keywords: [
      "SAT coaching Ahmedabad", "SAT classes Ahmedabad", "Digital SAT 2026 Ahmedabad",
      "online SAT tutor Ahmedabad", "SAT preparation Ahmedabad",
    ],
    hero: {
      tagline: "Ahmedabad → Top US Universities",
      headline: "SAT Coaching in Ahmedabad — Score 1570+",
      subheadline: "Online live SAT prep for Ahmedabad students targeting 1570+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 batch)"     },
        { value: "95%",  label: "Score improvement rate"      },
        { value: "70+",  label: "Ahmedabad students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "Online SAT coaching for Ahmedabad students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Ahmedabad students from Zydus School for Excellence, Udgam School, and top CBSE/IB institutions via online sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 70, bestRating: 5, worstRating: 1 },
    localContext: "Serving Zydus School, Udgam, ANAND Niketan, and leading CBSE/IB schools in Ahmedabad.",
    structureIntro:
      "Ahmedabad students — many from strong CBSE schools with excellent Math foundations — are well-positioned for the Digital SAT's Math adaptive modules. EduQuest's programme converts this mathematical aptitude into structured 800-target Math preparation while closing R&W gaps systematically.",
    structureAvgScore: "1520",
    structureAvgNote: "top performer: 1565, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Ahmedabad students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Ahmedabad, and EduQuest assists with registration and test-date strategy.",
 testimonials: [
  {
    name: "Devang Patel",
    school: "Zydus School for Excellence, Ahmedabad",
    score: "1525", previousScore: "1270",
    quote: "EduQuest's online sessions were flexible and effective. 255-point improvement.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Udgam School, Ahmedabad",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "ANAND Niketan, Ahmedabad",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Ahmedabad students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Zydus School for Excellence, Ahmedabad",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "How do Ahmedabad students attend EduQuest SAT coaching?", answer: "Fully online. Live group and 1-on-1 sessions with Gurgaon hybrid options." },
      { question: "How much does SAT coaching cost for Ahmedabad students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What Digital SAT score can Ahmedabad students expect?", answer: "Our 2025 Ahmedabad batch averaged 1520. Students from Zydus School and ANAND Niketan who start prep in Grade 10 regularly achieve 1570+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Ahmedabad schools does EduQuest work with?", answer: "Zydus School for Excellence, Udgam School, ANAND Niketan, DPS Ahmedabad, and other leading CBSE and IB schools across Ahmedabad and Gandhinagar." },
      { question: "Is there a SAT test centre in Ahmedabad?", answer: "Yes — College Board has authorised test centres in Ahmedabad." },
      { question: "When should an Ahmedabad student start SAT preparation?", answer: "We recommend starting in Grade 10." },
      { question: "Does EduQuest offer a free SAT diagnostic for Ahmedabad students?", answer: "Yes — every Ahmedabad student starts with a complimentary full-length Bluebook diagnostic test." },
    ],
  },

  // ── DEHRADUN ──────────────────────────────────────────────────────────────
  dehradun: {
    slug: "dehradun",
    city: "Dehradun",
    country: "India",
    countryCode: "IN",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-dehradun/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Dehradun 2026 | Score 1570+ | EduQuest",
    metaDescription: "SAT coaching for Dehradun boarding school students. Digital SAT 2026, 1570+ score plans.",
    ogDescription: "SAT coaching for Dehradun boarding school students — Doon School, Welham, Woodstock. 1570+ scores.",
    keywords: [
      "SAT coaching Dehradun", "SAT coaching Doon School", "SAT coaching boarding school Dehradun",
      "Digital SAT 2026 Dehradun", "online SAT tutor Dehradun",
    ],
    hero: {
      tagline: "Dehradun → Top US Universities",
      headline: "SAT Coaching in Dehradun — Score 1570+",
      subheadline:
        "Boarding school-friendly online SAT coaching for Dehradun students targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)"     },
        { value: "96%",  label: "Score improvement rate"      },
        { value: "90+",  label: "Dehradun students coached"   },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "Online SAT coaching for Dehradun boarding school students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest has a strong track record with Dehradun boarding school students from The Doon School, Welham Girls', Woodstock School, and other prestigious institutions. Sessions are structured around boarding school schedules.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 90, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving The Doon School, Welham Girls', Woodstock School, St. George's, and leading Dehradun schools.",
    structureIntro:
      "Dehradun boarding school students face a unique challenge: preparing for the Digital SAT's timed adaptive structure while managing boarding school device policies and study schedules. EduQuest's programme is specifically designed around exeat weekends, school holidays, and asynchronous resources.",
    structureAvgScore: "1530",
    structureAvgNote: "top performer: 1570, Doon School 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Dehradun boarding school students is fully aligned with Digital SAT 2026. Our Gurgaon centre (4–5 hours from Dehradun) is available for intensive in-person sessions during half-term and holiday periods.",
    testimonials: [
  {
    name: "Aarav Thakur",
    school: "The Doon School, Dehradun",
    score: "1545", previousScore: "1300",
    quote: "EduQuest understood the boarding school schedule perfectly. Weekend sessions were ideal. Got into Boston University.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Welham Girls' School, Dehradun",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik Singh",
    school: "Woodstock School, Dehradun",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Dehradun students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Sneha Taneja",
    school: "St. George's College, Dehradun",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "How do boarding school students in Dehradun attend sessions?", answer: "Online live sessions scheduled around boarding school exeats and holidays. Weekend batches are available." },
      { question: "How much does SAT coaching cost for Dehradun students?", answer: "Online Live Group starts at ₹45,000. Online 1-on-1 starts at ₹50,000." },
      { question: "What Digital SAT score can Dehradun boarding school students expect?", answer: "Our 2025 Dehradun batch averaged 1530. Students from The Doon School and Welham who engage seriously with the programme regularly cross 1540+." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Which Dehradun schools does EduQuest work with?", answer: "The Doon School, Welham Girls' School, Woodstock School, St. George's College, Wynberg Allen, and other prestigious boarding schools." },
      { question: "How does EduQuest accommodate boarding school device restrictions?", answer: "Sessions during exeat weekends and holidays, with asynchronous resources (recorded sessions, printed materials) for restricted periods." },
      { question: "Can Dehradun boarding school students visit EduQuest in person?", answer: "Yes — our Gurgaon centre is approximately 4–5 hours from Dehradun by road or rail." },
      { question: "Is the SAT the right exam for Dehradun boarding school students?", answer: "A strong SAT score (1570+) significantly strengthens US applications. EduQuest advises on whether SAT, ACT, or both make sense based on each student's profile." },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── US ────────────────────────────────────────────────────────────────────
  us: {
    slug: "us",
    city: "United States",
    country: "USA",
    countryCode: "US",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-us/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching for US Students 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in the US. Digital SAT 2026, 1-on-1 adaptive prep, 1570+ score plans. Time-zone flexible sessions. Free diagnostic.",
    ogDescription:
      "SAT coaching for US-based students — EST/CST/PST flexible sessions, 1570+ score plans, free diagnostic test.",
    keywords: [
      "SAT coaching USA", "online SAT tutor USA", "SAT prep for Indian students USA",
      "Digital SAT 2026 USA", "SAT coaching New Jersey", "SAT coaching California", "best online SAT coaching",
    ],
    hero: {
      tagline: "US Students → Top US Universities",
      headline: "SAT Coaching for Students in the USA",
      subheadline:
        "Time-zone flexible 1-on-1 and live group sessions for US-based students targeting 1570+ on the Digital SAT 2026.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1560", label: "Avg. Score (2025 US batch)" },
        { value: "97%",  label: "Score improvement rate"     },
        { value: "150+", label: "US students coached"        },
        { value: "8+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for US-based Indian students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest coaches students across the US — from New York, New Jersey, California, Texas, and beyond. Our online 1-on-1 format is designed for US school schedules, with sessions scheduled to match EST, CST, and PST time zones.",
        "US-based students often come to EduQuest for a fresh perspective on SAT prep — our diagnostic-first approach identifies exactly where scores are being left on the table.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 150, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Indian-American and international students across New York, New Jersey, California, Texas, and the broader US.",
    structureIntro:
      "US-based students are among EduQuest's highest scorers — the 2025 US batch averaged 1560, the highest of any cohort. Strong US school foundations combined with EduQuest's adaptive module targeting produce elite results. Sessions are available in EST, CST, and PST slots.",
    structureAvgScore: "1560",
    structureAvgNote: "highest of all EduQuest city cohorts, 2025",
    structureFootNote:
      "EduQuest's US programme is fully aligned with Digital SAT 2026 and College Board's US test date schedule (August, October, November, March, May). PSAT/NMSQT preparation is also available for National Merit targeting.",
    testimonials: [
      {
        name: "Riya Patel",
        school: "Princeton Day School, NJ",
        score: "1570", previousScore: "1310",
        quote: "EduQuest fit perfectly into my US schedule. The 1-on-1 sessions were laser-focused on my weak areas. Scored 1570.",
        year: "2025",
      },
      {
        name: "Aryan Bose",
        school: "Cupertino High School, CA",
        score: "1580", previousScore: "1360",
        quote: "I tried a local US tutor first but EduQuest's systematic approach was on another level entirely.",
        year: "2024",
      },
        {
    name: "Aryan Bose",
    school: "Cupertino High School, CA",
    score: "1580", previousScore: "1360",
    quote: "I tried a local US tutor first but EduQuest's systematic approach was on another level entirely.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Thomas Jefferson High School, NJ",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
    ],
    faqs: [
      { question: "How does EduQuest coach US-based students?", answer: "Fully online 1-on-1 and live group sessions. EST, CST, and PST slots available. Weekend intensives also offered." },
      { question: "What does SAT coaching for US students cost?", answer: "Online 1-on-1 starts at USD 600 (approx. ₹50,000). All include diagnostics, mock tests, and score planning." },
      { question: "Is EduQuest familiar with US school SAT testing calendars?", answer: "Yes — we align our prep timelines with College Board's US test date schedule (August, October, November, March, May)." },
      { question: "What SAT score can US-based students expect from EduQuest?", answer: "Our 2025 US batch averaged 1560 — the highest of any EduQuest city cohort." },
      { question: "Is EduQuest's approach different for US-based students?", answer: "Same core methodology — diagnostic-first, skill-cluster targeting, Bluebook-native mocks — adjusted for US school calendars and College Board's US test dates." },
      { question: "Which US states does EduQuest serve?", answer: "All US states — highest concentration in New Jersey, California, Texas, New York, Georgia, Illinois, and Washington." },
      { question: "How does EduQuest's SAT coaching compare to local US tutors?", answer: "Structured, diagnostic-driven programme with Bluebook-native mock tests, 19-cluster skill mapping, and average improvement of 200+ points." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Does EduQuest offer PSAT preparation for US students?", answer: "Yes — PSAT/NMSQT preparation for students targeting National Merit recognition." },
    ],
    extraSections: [{ id: "CollegeBoard" }, { id: "OnlineAdvantage" }],
  },

  // ── UK ────────────────────────────────────────────────────────────────────
  uk: {
    slug: "uk",
    city: "United Kingdom",
    country: "UK",
    countryCode: "GB",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-uk/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching for UK Students 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in the UK. Digital SAT 2026, 1-on-1 adaptive prep, flexible UK time-zone sessions. Free diagnostic test.",
    ogDescription:
      "SAT coaching for UK students — GMT/BST sessions, expert Indian faculty, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching UK", "SAT coaching London", "online SAT tutor UK",
      "Digital SAT 2026 UK", "SAT prep Indian students UK", "best SAT coaching UK",
    ],
    hero: {
      tagline: "UK Students → Top US Universities",
      headline: "SAT Coaching for Students in the UK",
      subheadline:
        "GMT/BST-compatible online sessions for UK-based students targeting 1570+ and admission to top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1545", label: "Avg. Score (2025 UK batch)" },
        { value: "96%",  label: "Score improvement rate"     },
        { value: "80+",  label: "UK students coached"        },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for UK-based students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest coaches UK students across London, Birmingham, Manchester, and beyond — predominantly Indian-origin students in British schools targeting US universities alongside UCAS applications.",
        "Sessions are scheduled in GMT/BST-compatible windows, typically on weekday evenings and weekends.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 80, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Indian-origin students in London, Birmingham, Manchester, and across the UK pursuing US university admissions.",
    structureIntro:
      "UK students managing A-levels alongside SAT prep face a uniquely demanding schedule. EduQuest's UK programme is structured around AS and A2 exam periods — ensuring Digital SAT adaptive module preparation runs without conflict and peaks at the right test date.",
    structureAvgScore: "1545",
    structureAvgNote: "top performer: 1580, London batch 2025",
    structureFootNote:
      "EduQuest's UK SAT programme is fully aligned with Digital SAT 2026. College Board has multiple authorised Digital SAT test centres in the UK, with the highest concentration in London. EduQuest advises UK students on test centre selection and registration.",
    testimonials: [
      {
        name: "Neha Chadha",
        school: "King's College School, London",
        score: "1540", previousScore: "1290",
        quote: "EduQuest sessions were timed perfectly for UK evenings. The faculty understood the dual A-levels + SAT workload challenge.",
        year: "2025",
      },
      {
    name: "Arvind Deshmukh",
    school: "Harrow School, London",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Rohit Khanna",
    school: "Westminster School, London",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for UK students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "King's College School, London",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
    ],
    faqs: [
      { question: "How does EduQuest coach UK-based students?", answer: "Fully online. GMT/BST sessions available on weekday evenings and weekends. 1-on-1 and group formats." },
      { question: "Do UK students need the SAT for US universities?", answer: "Many top US universities are test-optional but a strong SAT score (1570+) significantly strengthens applications from UK-based students." },
      { question: "How much does SAT coaching cost for UK students?", answer: "Online 1-on-1 starts at GBP 500. Online Group starts at GBP 450. All include diagnostics, Bluebook mock tests, and study material." },
      { question: "What Digital SAT score can UK students expect?", answer: "Our 2025 UK batch averaged 1545. Students from top British schools who balance A-levels and SAT consistently reach 1570+." },
      { question: "How does EduQuest handle the A-levels + SAT workload?", answer: "Sessions are scheduled around AS and A2 exam periods, and prep timeline is calibrated to avoid conflicts with major A-level assessment windows." },
      { question: "Which UK cities does EduQuest serve?", answer: "London, Birmingham, Manchester, Leicester, Leeds, Glasgow, Edinburgh, and all UK cities via fully online delivery." },
      { question: "Where do UK students take the Digital SAT?", answer: "Multiple authorised Digital SAT test centres in the UK, with the highest concentration in London." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }, { id: "VisaInfo" }],
  },

  // ── UAE ───────────────────────────────────────────────────────────────────
  uae: {
    slug: "uae",
    city: "UAE",
    country: "United Arab Emirates",
    countryCode: "AE",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-uae/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in UAE 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Top SAT coaching for UAE students in Dubai, Abu Dhabi, Sharjah. Digital SAT 2026, online live sessions, 1570+ score plans. Free diagnostic.",
    ogDescription:
      "SAT coaching for Dubai, Abu Dhabi & Sharjah students. Online live classes, 1570+ scores, free diagnostic.",
    keywords: [
      "SAT coaching UAE", "SAT coaching Dubai", "SAT coaching Abu Dhabi",
      "Digital SAT 2026 UAE", "best SAT coaching Dubai", "online SAT tutor Dubai", "SAT preparation UAE",
    ],
    hero: {
      tagline: "UAE → Top US Universities",
      headline: "SAT Coaching in UAE — Score 1570+",
      subheadline:
        "Online live and 1-on-1 SAT coaching for students across Dubai, Abu Dhabi, Sharjah, and the wider UAE targeting 1570+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1545", label: "Avg. Score (2025 UAE batch)" },
        { value: "97%",  label: "Score improvement rate"      },
        { value: "200+", label: "UAE students coached"        },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "Online SAT coaching for UAE students — Dubai, Abu Dhabi, Sharjah",
    },
    about: {
      paragraphs: [
        "EduQuest is a trusted name in UAE SAT prep, coaching students from GEMS schools, Jumeirah College, Delhi Private School Dubai, and the city's top IB institutions across Dubai, Abu Dhabi, and Sharjah.",
        "All sessions are online in UAE-compatible time slots. Our faculty regularly guides UAE students through the Digital SAT at College Board's UAE test centres.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 200, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving GEMS schools, Jumeirah College, DPS Dubai, Abu Dhabi Indian School, and leading IB schools across the UAE.",
    structureIntro:
      "UAE students from GEMS, Jumeirah College, and DPS Dubai bring strong multi-curriculum foundations — CBSE, ICSE, IB, and British A-levels. EduQuest's UAE programme normalises performance across these curricula and channels it through the Digital SAT's adaptive structure for consistent 1570+ outcomes.",
    structureAvgScore: "1545",
    structureAvgNote: "top performer: 1580, Dubai batch 2025",
    structureFootNote:
      "EduQuest's UAE SAT programme is fully aligned with Digital SAT 2026. College Board has authorised test centres in Dubai, Abu Dhabi, and Sharjah. EduQuest helps UAE students with test registration, date selection, and score-send strategy.",
   testimonials: [
  {
    name: "Aditya Shah",
    school: "GEMS Our Own Indian School, Dubai",
    score: "1550", previousScore: "1300",
    quote: "Best SAT prep available in the UAE. The online sessions fit my school schedule perfectly. Got into Purdue.",
    year: "2025",
  },
  {
    name: "Sana Mirza",
    school: "Jumeirah College, Dubai",
    score: "1520", previousScore: "1260",
    quote: "EduQuest's mock tests were identical to what I saw on test day at the Dubai centre. 260-point improvement.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "GEMS Wellington International School, Dubai",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Delhi Private School, Dubai",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for UAE students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Abu Dhabi Indian School",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Does EduQuest have a centre in Dubai or Abu Dhabi?", answer: "EduQuest's centre is in Gurgaon, India. UAE students attend Online Live sessions in UAE-compatible time slots." },
      { question: "Where do UAE students take the Digital SAT?", answer: "College Board's authorised UAE test centres are in Dubai, Abu Dhabi, and Sharjah." },
      { question: "How much does SAT coaching cost for UAE students?", answer: "Online Live Group starts at AED 2,200. Online 1-on-1 starts at AED 2,500. All include diagnostics, Bluebook mock tests, and study material." },
      { question: "What Digital SAT score can UAE students expect?", answer: "Our 2025 UAE batch averaged 1545. Students from GEMS schools and top IB institutions in Dubai who start prep in Grade 10 consistently reach 1570+." },
      { question: "Which UAE schools does EduQuest work with?", answer: "GEMS Our Own Indian School, GEMS Wellington International, Jumeirah College, DPS Dubai, Abu Dhabi Indian School, Choueifat International, and other top IB and CBSE schools across Dubai, Abu Dhabi, Sharjah, and Al Ain." },
      { question: "What SAT test dates are available in the UAE?", answer: "College Board offers the Digital SAT at UAE centres typically in October, November, March, and May." },
      { question: "When should a UAE student start SAT preparation?", answer: "We recommend starting SAT prep in Grade 10 and completing it by November of Grade 11." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SHARJAH ───────────────────────────────────────────────────────────────
  sharjah: {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    countryCode: "AE",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-sharjah/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Sharjah 2026 | Score 1570+ | EduQuest",
    metaDescription: "SAT coaching for Sharjah students. Digital SAT 2026, online live sessions, 1570+ score plans. Free diagnostic test.",
    ogDescription: "Online SAT coaching for Sharjah students — expert faculty, adaptive mocks, 1570+ scores.",
    keywords: [
      "SAT coaching Sharjah", "SAT classes Sharjah", "Digital SAT 2026 Sharjah",
      "online SAT tutor Sharjah", "SAT preparation Sharjah UAE",
    ],
    hero: {
      tagline: "Sharjah → Top US Universities",
      headline: "SAT Coaching in Sharjah — Score 1570+",
      subheadline: "Online 1-on-1 and group SAT coaching for students in Sharjah targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)"    },
        { value: "96%",  label: "Score improvement rate"     },
        { value: "60+",  label: "Sharjah students coached"   },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Sharjah students — EduQuest UAE",
    },
    about: {
      paragraphs: [
        "EduQuest serves Sharjah students from Indian schools, IB institutions, and British curriculum schools across the emirate via online live sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 60, bestRating: 5, worstRating: 1 },
    localContext: "Serving Indian and international schools across Sharjah emirate.",
    structureIntro:
      "Sharjah students benefit from College Board's authorised test centre within the emirate — allowing them to sit the Digital SAT locally. EduQuest's online programme ensures Sharjah students are fully prepared for both the adaptive module structure and the Bluebook interface before test day.",
    structureAvgScore: "1535",
    structureAvgNote: "top performer: 1560, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Sharjah students is fully aligned with Digital SAT 2026. College Board has an authorised test centre in Sharjah, and EduQuest assists with registration, test-date selection, and score-send strategy.",
testimonials: [
  {
    name: "Tanvi Joshi",
    school: "Our Own English High School, Sharjah",
    score: "1510", previousScore: "1260",
    quote: "EduQuest's online sessions were perfectly timed for UAE students. My R&W jumped 100 points.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Indian High School, Sharjah",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "American International School, Sharjah",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Sharjah students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "GEMS Schools, Sharjah",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Can Sharjah students attend in-person SAT coaching?", answer: "EduQuest's centre is in Gurgaon, India. Sharjah students attend online. Hybrid options are available for those visiting India." },
      { question: "How much does SAT coaching cost for Sharjah students?", answer: "Online Live Group starts at AED 2,200. Online 1-on-1 starts at AED 2,500." },
      { question: "What Digital SAT score can Sharjah students expect?", answer: "Our 2025 Sharjah batch averaged 1535. Students from Indian and IB schools who start prep in Grade 10 consistently reach 1570+." },
      { question: "Which Sharjah schools does EduQuest work with?", answer: "Our Own English High School, Indian High School Sharjah, American International School, GEMS schools in Sharjah, and other leading Indian and international curriculum schools." },
      { question: "Where do Sharjah students take the Digital SAT?", answer: "College Board has an authorised test centre in Sharjah. Students can also take the exam at test centres in Dubai and Abu Dhabi." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "When should a Sharjah student start SAT preparation?", answer: "We recommend starting in Grade 10 with the goal of completing the SAT by November of Grade 11." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SINGAPORE ─────────────────────────────────────────────────────────────
  singapore: {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-singapore/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Singapore 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Singapore students. Digital SAT 2026, 1-on-1 adaptive prep, SGT-compatible sessions. Free diagnostic test.",
    ogDescription: "SAT coaching for Singapore students — SGT-friendly online sessions, 1570+ scores, free diagnostic.",
    keywords: [
      "SAT coaching Singapore", "SAT classes Singapore", "Digital SAT 2026 Singapore",
      "online SAT tutor Singapore", "SAT preparation Singapore", "best SAT coaching Singapore",
    ],
    hero: {
      tagline: "Singapore → Top US Universities",
      headline: "SAT Coaching in Singapore — Score 1570+",
      subheadline:
        "SGT-compatible online live and 1-on-1 SAT prep for Singapore students targeting 1570+ and admission to top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1555", label: "Avg. Score (2025 SG batch)" },
        { value: "98%",  label: "Score improvement rate"     },
        { value: "90+",  label: "Singapore students coached" },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Singapore students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest coaches Singapore students from Singapore American School, United World College, GIIS, and other international schools via SGT-friendly online sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.9, reviewCount: 90, bestRating: 5, worstRating: 1 },
    localContext:
      "Serving Singapore American School, UWC, GIIS, Canadian International School, and leading international schools in Singapore.",
    structureIntro:
      "Singapore students are EduQuest's second-highest performing cohort — averaging 1555 in 2025. Singapore's rigorous academic environment, particularly in Math, maps directly onto the Digital SAT's adaptive Math modules, and EduQuest's programme converts this advantage into consistent Module 2 Hard routing.",
    structureAvgScore: "1555",
    structureAvgNote: "second-highest of all EduQuest cohorts, 2025",
    structureFootNote:
      "EduQuest's Singapore programme is fully aligned with Digital SAT 2026. College Board has multiple authorised Digital SAT test centres in Singapore, and EduQuest advises on registration, test date selection, and score-send strategy.",
  testimonials: [
  {
    name: "Vikram Pillai",
    school: "Singapore American School",
    score: "1570", previousScore: "1340",
    quote: "EduQuest's sessions were timed for Singapore evenings. Scored 1570 and got into Johns Hopkins.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "United World College of South East Asia",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "GIIS Singapore",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Singapore students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Canadian International School, Singapore",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Are SAT sessions available in SGT for Singapore students?", answer: "Yes — sessions are scheduled in SGT-compatible windows on weekday evenings and weekends." },
      { question: "How much does SAT coaching cost for Singapore students?", answer: "Online 1-on-1 starts at SGD 800. Online Group starts at SGD 700. All include diagnostics, Bluebook mock tests, and study material." },
      { question: "What Digital SAT score can Singapore students expect?", answer: "Our 2025 Singapore batch averaged 1555 — the second highest of any EduQuest city cohort." },
      { question: "Which Singapore schools does EduQuest work with?", answer: "Singapore American School (SAS), United World College of South East Asia (UWCSEA), GIIS Singapore, Canadian International School, Anglo-Chinese School (International), and other leading international schools." },
      { question: "Where do Singapore students take the Digital SAT?", answer: "College Board has multiple authorised Digital SAT test centres in Singapore." },
      { question: "Does EduQuest accommodate IB students at Singapore schools?", answer: "Yes — highly experienced with IB Diploma students. Our SAT prep is scheduled to complement IB Internal Assessments and avoid IB exam conflicts." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "What US universities do Singapore EduQuest students get admitted to?", answer: "Johns Hopkins, Cornell, University of Michigan, NYU, Boston University, and other top US universities." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── NEPAL ─────────────────────────────────────────────────────────────────
  nepal: {
    slug: "nepal",
    city: "Nepal",
    country: "Nepal",
    countryCode: "NP",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-nepal/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Nepal 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "SAT coaching for Nepal students in Kathmandu and beyond. Digital SAT 2026, online live sessions, 1570+ score plans.",
    ogDescription: "SAT coaching for Nepal students — Kathmandu, online live classes, expert faculty, 1570+ scores.",
    keywords: [
      "SAT coaching Nepal", "SAT coaching Kathmandu", "Digital SAT 2026 Nepal",
      "online SAT tutor Nepal", "SAT preparation Kathmandu", "best SAT coaching Nepal",
    ],
    hero: {
      tagline: "Nepal → Top US Universities",
      headline: "SAT Coaching in Nepal — Score 1570+",
      subheadline:
        "Online live SAT coaching for Nepal students from Kathmandu, Pokhara, and beyond targeting 1570+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 Nepal batch)" },
        { value: "95%",  label: "Score improvement rate"        },
        { value: "100+", label: "Nepal students coached"        },
        { value: "6+",   label: "Full-length adaptive mocks"    },
      ],
      imageAlt: "Online SAT coaching for Nepal students Kathmandu — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest coaches Nepal students from Rato Bangala School, Budhanilkantha School, Saint Xavier's College, and other leading institutions in Kathmandu via online sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 100, bestRating: 5, worstRating: 1 },
    localContext: "Serving Rato Bangala, Budhanilkantha, Saint Xavier's, and leading schools in Kathmandu and Nepal.",
    structureIntro:
      "Nepal students preparing for the Digital SAT have access to College Board test centres in Kathmandu. EduQuest's online programme ensures Nepal students are fully prepared for both the adaptive module system and the Bluebook interface before their test date.",
    structureAvgScore: "1520",
    structureAvgNote: "top performer: 1560, Kathmandu 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Nepal students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Kathmandu, and EduQuest assists with registration, date selection, and score-send strategy for US university applications.",
testimonials: [
  {
    name: "Shreya Shrestha",
    school: "Rato Bangala School, Kathmandu",
    score: "1515", previousScore: "1250",
    quote: "EduQuest is the best SAT coaching option for Nepal students. Online sessions, expert faculty.",
    year: "2025",
  },
  {
    name: "Shubham Taneja",
    school: "Budhanilkantha School, Kathmandu",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Vimal Xtri",
    school: "Saint Xavier's College, Kathmandu",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Nepal students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Priya Taneja",
    school: "Shuvatara School, Kathmandu",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Can Nepal students take the Digital SAT?", answer: "Yes — College Board has authorised test centres in Kathmandu. EduQuest helps with test registration and prep." },
      { question: "How much does SAT coaching cost for Nepal students?", answer: "Online Live Group starts at NPR 65,000. Online 1-on-1 starts at NPR 75,000." },
      { question: "What Digital SAT score can Nepal students expect?", answer: "Our 2025 Nepal batch averaged 1520. Students from Rato Bangala and Budhanilkantha who follow the programme consistently cross 1570." },
      { question: "Which Nepal schools does EduQuest work with?", answer: "Rato Bangala School, Budhanilkantha School, Saint Xavier's College, Shuvatara School, and other leading institutions across Kathmandu and Nepal." },
      { question: "How do Nepal students access EduQuest's SAT coaching?", answer: "Fully via online live sessions timed to Nepal Standard Time (NPT)." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Why do Nepal students need the SAT for US universities?", answer: "A strong score (1570+) significantly strengthens applications from Nepal and can unlock merit scholarship opportunities at US universities." },
      { question: "Does EduQuest help Nepal students with the full US admissions process?", answer: "EduQuest specialises in SAT coaching and works with partner college counselling firms for holistic admissions guidance." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SAUDI ARABIA ──────────────────────────────────────────────────────────
  "saudi-arabia": {
    slug: "saudi-arabia",
    city: "Saudi Arabia",
    country: "Saudi Arabia",
    countryCode: "SA",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-saudi-arabia/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Saudi Arabia 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in Saudi Arabia — Riyadh, Jeddah, Dammam. Digital SAT 2026, 1570+ score plans.",
    ogDescription:
      "SAT coaching for Saudi Arabia students — Riyadh, Jeddah, Dammam. Online live classes, 1570+ scores.",
    keywords: [
      "SAT coaching Saudi Arabia", "SAT coaching Riyadh", "SAT coaching Jeddah",
      "Digital SAT 2026 Saudi Arabia", "online SAT tutor Saudi Arabia", "SAT preparation KSA",
    ],
    hero: {
      tagline: "Saudi Arabia → Top US Universities",
      headline: "SAT Coaching in Saudi Arabia — Score 1570+",
      subheadline:
        "Online live and 1-on-1 SAT coaching for students across Riyadh, Jeddah, and Dammam targeting 1570+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%",  label: "Score improvement rate"  },
        { value: "70+",  label: "KSA students coached"    },
        { value: "6+",   label: "Full-length adaptive mocks" },
      ],
      imageAlt: "Online SAT coaching for Saudi Arabia students — Riyadh Jeddah Dammam",
    },
    about: {
      paragraphs: [
        "EduQuest serves students from Indian, British, and American curriculum schools across Riyadh, Jeddah, and Dammam via AST-compatible online sessions.",
      ],
    },
    aggregateRating: { ratingValue: 4.8, reviewCount: 70, bestRating: 5, worstRating: 1 },
    localContext: "Serving Indian and international schools across Riyadh, Jeddah, Dammam, and Khobar.",
    structureIntro:
      "Saudi Arabia students from Indian International Schools and British curriculum schools in Riyadh, Jeddah, and Dammam have College Board test centres available locally. EduQuest's AST-compatible online programme prepares KSA students for every aspect of the Digital SAT's adaptive structure.",
    structureAvgScore: "1535",
    structureAvgNote: "top performer: 1570, Riyadh 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Saudi Arabia students is fully aligned with Digital SAT 2026. College Board has authorised Digital SAT test centres in Riyadh, Jeddah, and Dammam. EduQuest assists with registration and test-date strategy.",
   testimonials: [
  {
    name: "Aryan Menon",
    school: "Indian International School, Riyadh",
    score: "1530", previousScore: "1270",
    quote: "EduQuest's Saudi sessions were timed perfectly. Got into Purdue Engineering.",
    year: "2025",
  },
  {
    name: "Sahil Taneja",
    school: "Indian International School, Jeddah",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Vishal Thakur",
    school: "British International School, Riyadh",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Saudi Arabia students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Riktika Taneja",
    school: "Dhahran Ahliyya Schools, Dammam",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "How do Saudi Arabia students attend SAT coaching?", answer: "Fully online in AST-compatible time slots. 1-on-1 and group sessions available." },
      { question: "How much does SAT coaching cost for Saudi Arabia students?", answer: "Online Live Group starts at SAR 2,000. Online 1-on-1 starts at SAR 2,300." },
      { question: "What Digital SAT score can Saudi Arabia students expect?", answer: "Our 2025 KSA batch averaged 1535. Students from Indian International Schools in Riyadh and Jeddah consistently reach 1570+." },
      { question: "Which Saudi Arabia schools does EduQuest work with?", answer: "Indian International School Riyadh, Indian International School Jeddah, British International School Riyadh, Dhahran Ahliyya Schools, and other leading Indian, British, and American curriculum schools." },
      { question: "Are there SAT test centres in Saudi Arabia?", answer: "Yes — College Board has authorised Digital SAT test centres in Riyadh, Jeddah, and Dammam." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "When should a Saudi Arabia student start SAT preparation?", answer: "We recommend starting in Grade 10. Saudi Arabia students targeting US engineering and business schools benefit significantly from starting early." },
      { question: "Does EduQuest understand the Saudi Arabia school calendar?", answer: "Yes — sessions are planned around Saudi National Day holidays, Eid breaks, and the second-term exam schedule." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }, { id: "VisaInfo" }],
  },

  // ── NIGERIA ───────────────────────────────────────────────────────────────
  nigeria: {
    slug: "nigeria",
    city: "Nigeria",
    country: "Nigeria",
    countryCode: "NG",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-nigeria/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Nigeria 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Nigerian students in Lagos, Abuja. Digital SAT 2026, 1570+ score plans. Free diagnostic.",
    ogDescription: "SAT coaching for Nigerian students — Lagos, Abuja. Online live classes, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching Nigeria", "SAT coaching Lagos", "SAT coaching Abuja",
      "Digital SAT 2026 Nigeria", "online SAT tutor Nigeria", "SAT preparation Lagos",
    ],
    hero: {
      tagline: "Nigeria → Top US Universities",
      headline: "SAT Coaching in Nigeria — Score 1570+",
      subheadline:
        "Online SAT coaching for students in Lagos, Abuja, and across Nigeria targeting 1570+ and top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1510", label: "Avg. Score (2025 batch)"     },
        { value: "94%",  label: "Score improvement rate"      },
        { value: "40+",  label: "Nigerian students coached"   },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "Online SAT coaching for Nigeria students Lagos Abuja — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest coaches Nigerian students via WAT-compatible online sessions. Our programmes are designed for students in Lagos, Abuja, and Port Harcourt targeting top US universities.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 40, bestRating: 5, worstRating: 1 },
    localContext: "Serving international and local schools in Lagos, Abuja, Port Harcourt, and across Nigeria.",
    structureIntro:
      "Nigerian students from Atlantic Hall, American International School Lagos, and Greensprings School targeting US universities need a strong Digital SAT score to stand out internationally. EduQuest's WAT-compatible online programme delivers structured adaptive preparation for both sections.",
    structureAvgScore: "1510",
    structureAvgNote: "top performer: 1550, Lagos 2025",
    structureFootNote:
      "EduQuest's SAT coaching for Nigerian students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Lagos and Abuja. EduQuest assists with test registration and date selection for Nigerian students.",
    testimonials: [
  {
    name: "Chidi Obi",
    school: "Atlantic Hall, Lagos",
    score: "1505", previousScore: "1240",
    quote: "EduQuest provided professional, structured SAT coaching. Scored 1505 on first attempt.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "American International School of Lagos",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Greensprings School, Lagos",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Nigerian students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "British International School, Abuja",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Are there SAT test centres in Nigeria?", answer: "Yes — College Board has test centres in Lagos and Abuja. EduQuest helps with test date strategy." },
      { question: "How much does SAT coaching cost for Nigerian students?", answer: "Online Live Group starts at USD 550. Online 1-on-1 starts at USD 600." },
      { question: "What Digital SAT score can Nigerian students expect?", answer: "Our 2025 Nigeria batch averaged 1510. Students from top Lagos and Abuja schools who engage consistently with the programme regularly cross 1570." },
      { question: "Which Nigerian schools does EduQuest work with?", answer: "Atlantic Hall Lagos, American International School of Lagos, Greensprings School, British International School Abuja, and other leading international and local schools." },
      { question: "How do Nigerian students access EduQuest's SAT coaching?", answer: "Fully via online live sessions timed to West Africa Time (WAT)." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Why do Nigerian students need the SAT for US universities?", answer: "A strong SAT score (1570+) significantly strengthens applications from Nigeria and can unlock merit scholarship opportunities." },
      { question: "Does EduQuest have experience coaching students from West Africa?", answer: "Yes — EduQuest has coached students from Nigeria, Ghana, and other West African countries." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── MAURITIUS ─────────────────────────────────────────────────────────────
  mauritius: {
    slug: "mauritius",
    city: "Mauritius",
    country: "Mauritius",
    countryCode: "MU",
    canonicalUrl: "https://eduquest.org.in/sat-coaching-classes-mauritius/",
    lastUpdated: "2025-12-01",
    metaTitle: "SAT Coaching in Mauritius 2026 | Score 1570+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Mauritius students. Digital SAT 2026, 1570+ score plans. Free diagnostic test.",
    ogDescription: "Online SAT coaching for Mauritius students — expert faculty, adaptive mocks, 1570+ Digital SAT scores.",
    keywords: [
      "SAT coaching Mauritius", "SAT classes Mauritius", "Digital SAT 2026 Mauritius",
      "online SAT tutor Mauritius", "SAT preparation Mauritius",
    ],
    hero: {
      tagline: "Mauritius → Top US Universities",
      headline: "SAT Coaching in Mauritius — Score 1570+",
      subheadline: "Online SAT coaching for Mauritius students targeting top US universities with 1570+ scores.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1505", label: "Avg. Score (2025 batch)"     },
        { value: "94%",  label: "Score improvement rate"      },
        { value: "30+",  label: "Mauritius students coached"  },
        { value: "6+",   label: "Full-length adaptive mocks"  },
      ],
      imageAlt: "Online SAT coaching for Mauritius students — EduQuest",
    },
    about: {
      paragraphs: [
        "EduQuest serves Mauritius students via online sessions compatible with MUT time zone, helping them access the same quality SAT coaching as students in India.",
      ],
    },
    aggregateRating: { ratingValue: 4.7, reviewCount: 30, bestRating: 5, worstRating: 1 },
    localContext: "Serving international and local schools across Mauritius.",
    structureIntro:
      "Mauritius students have access to Digital SAT test centres locally and increasingly target US universities alongside UK and Australian options. EduQuest's MUT-compatible online programme delivers the same structured adaptive preparation as our India-based programmes.",
    structureAvgScore: "1505",
    structureAvgNote: "top performer: 1570, 2025 batch",
    structureFootNote:
      "EduQuest's SAT coaching for Mauritius students is fully aligned with Digital SAT 2026. College Board has authorised test centres in Mauritius, and EduQuest assists with registration and test-date strategy for US university applications.",
    testimonials: [
  {
    name: "Priya Ramgolam",
    school: "Lycée Labourdonnais, Mauritius",
    score: "1570", previousScore: "1240",
    quote: "Online coaching from Mauritius worked perfectly. EduQuest's programme is excellent.",
    year: "2024",
  },
  {
    name: "Sahil Taneja",
    school: "Le Bocage International School, Mauritius",
    score: "1520", previousScore: "1320",
    quote: "EduQuest transformed how I approached the SAT. It wasn't just tutoring — they helped me understand how my score fits into my entire university strategy. I went from 1320 to 1520.",
    year: "2025",
  },
  {
    name: "Hardik K.",
    school: "Mahatma Gandhi Institute, Mauritius",
    score: "1520", previousScore: "1300",
    quote: "On my first attempt at the SAT, I scored 1520. EduQuest's digital SAT coaching for Mauritius students supported me immensely. Their unwavering commitment made a real difference.",
    year: "2025",
  },
  {
    name: "Seher Taneja",
    school: "Lycée Labourdonnais, Mauritius",
    score: "1510", previousScore: "1350",
    quote: "I got a 1510 in my SAT and EduQuest was a huge part of my journey. Their constant preparation was incredibly useful — they helped me identify and work on my weak spots consistently.",
    year: "2025",
  },
],
    faqs: [
      { question: "Can Mauritius students take the Digital SAT?", answer: "Yes — test centres are available in Mauritius. EduQuest helps with registration and test-date strategy." },
      { question: "How much does SAT coaching cost for Mauritius students?", answer: "Online Live Group starts at USD 550. Online 1-on-1 starts at USD 600." },
      { question: "What Digital SAT score can Mauritius students expect?", answer: "Our 2025 Mauritius batch averaged 1505. Students who follow the full programme and start in Grade 10 consistently reach 1570." },
      { question: "How do Mauritius students access EduQuest's SAT coaching?", answer: "Fully via online live sessions timed to Mauritius Time (MUT, UTC+4)." },
      { question: "Which Mauritius schools does EduQuest work with?", answer: "Lycée Labourdonnais, Mahatma Gandhi Institute, Le Bocage International School, and other leading institutions across Mauritius." },
      { question: "What is the Digital SAT exam pattern 2026?", answer: "Digital SAT 2026: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator-permitted. Scored 400–1600." },
      { question: "Why should Mauritius students consider the SAT for US admissions?", answer: "The SAT remains the most widely recognised standardised test for US university admissions. A strong score (1570+) keeps all US, UK, and Australian options open." },
      { question: "Does EduQuest offer a free diagnostic test for Mauritius students?", answer: "Yes — every Mauritius student begins with a complimentary full-length Bluebook diagnostic test." },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER NAV DATA
// ─────────────────────────────────────────────────────────────────────────────

export const SAT_FOOTER_LOCATIONS: { href: string; label: string }[] = [
  { href: "/sat_delhi",        label: "Delhi/NCR"   },
  { href: "/sat_mumbai",       label: "Mumbai"      },
  { href: "/sat_gurgaon",      label: "Gurgaon"     },
  { href: "/sat_jaipur",       label: "Jaipur"      },
  { href: "/sat/nepal",        label: "Nepal"       },
  { href: "/sat/pune",         label: "Pune"        },
  { href: "/sat/us",           label: "US"          },
  { href: "/sat/sharjah",      label: "Sharjah"     },
  { href: "/sat/bangalore",    label: "Bangalore"   },
  { href: "/sat/chennai",      label: "Chennai"     },
  { href: "/sat/hyderabad",    label: "Hyderabad"   },
  { href: "/sat/indore",       label: "Indore"      },
  { href: "/sat/uae",          label: "UAE"         },
  { href: "/sat/ahmedabad",    label: "Ahmedabad"   },
  { href: "/sat/uk",           label: "UK"          },
  { href: "/sat/saudi-arabia", label: "Saudi Arabia"},
  { href: "/sat/dehradun",     label: "Dehradun"    },
  { href: "/sat/singapore",    label: "Singapore"   },
  { href: "/sat/chandigarh",   label: "Chandigarh"  },
  { href: "/sat/noida",        label: "Noida"       },
  { href: "/sat/lucknow",      label: "Lucknow"     },
  { href: "/sat/kolkata",      label: "Kolkata"     },
  { href: "/sat/nigeria",      label: "Nigeria"     },
  { href: "/sat/mauritius",    label: "Mauritius"   },
];