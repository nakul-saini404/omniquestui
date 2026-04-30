// ─────────────────────────────────────────────────────────────────────────────
// SAT CITY DATA — Single source of truth for all city-specific SAT pages
// To add a new city: add an entry to SAT_CITIES and update Footer satLocations
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
  /** Component key — maps to a switch in SATCityPage */
  id: "LocalSchools" | "CollegeBoard" | "VisaInfo" | "OnlineAdvantage" | "CityRank";
  props?: Record<string, unknown>;
}

export interface SATCityData {
  slug: CitySlug;
  /** Display name used in headings */
  city: string;
  /** Country label */
  country: string;
  /** Page <title> */
  metaTitle: string;
  metaDescription: string;
  /** Hero section */
  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    stats: HeroStat[];
  };
  about: {
    paragraphs: string[];
  };
  testimonials: Testimonial[];
  faqs: FAQ[];
  /** Optional extra sections shown after ScoreImprovement */
  extraSections?: ExtraSection[];
  /** Schools / landmark context sentence */
  localContext: string;
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
    metaTitle: "SAT Coaching in Jaipur 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "India's #1 SAT coaching in Jaipur. Digital SAT 2026, adaptive testing, diagnostics, 1500+ score plans. Online & offline classes. Free diagnostic test.",
    hero: {
      tagline: "Jaipur → Top US Universities",
      headline: "SAT Coaching in Jaipur — Score 1500+",
      subheadline:
        "Online live classes and hybrid programmes tailored for Jaipur students targeting 1500+ on the Digital SAT 2026.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)" },
        { value: "97%", label: "Score improvement rate" },
        { value: "200+", label: "Jaipur students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest has been Jaipur's most trusted SAT preparation partner since 2010, serving students from St. Xavier's, Maharaja Sawai Man Singh Vidyalaya, Seedling Modern High School, and other leading CBSE and IB schools across the Pink City.",
        "Since EduQuest's physical centre is in Gurgaon, Jaipur students primarily attend Online Live Group classes or fully Online 1-on-1 sessions. Hybrid options are available for students willing to travel to our Gurgaon centre periodically for intensive weekends.",
      ],
    },
    localContext:
      "Serving students from St. Xavier's, MSMV, Seedling Modern, and all major CBSE/IB schools in Jaipur.",
    testimonials: [
      {
        name: "Aanya Sharma",
        school: "St. Xavier's Senior Secondary School, Jaipur",
        score: "1540",
        previousScore: "1280",
        quote:
          "EduQuest's adaptive mocks were identical to the real Bluebook interface. My Math score jumped 120 points after their skill-cluster targeting.",
        year: "2025",
      },
      {
        name: "Rohan Singhvi",
        school: "Maharaja Sawai Man Singh Vidyalaya, Jaipur",
        score: "1560",
        previousScore: "1310",
        quote:
          "The online live classes felt as personal as offline tutoring. Got into University of Michigan — EduQuest made it happen.",
        year: "2025",
      },
      {
        name: "Priya Agarwal",
        school: "Seedling Modern High School, Jaipur",
        score: "1510",
        previousScore: "1250",
        quote:
          "Coming from Jaipur, I was worried about the distance. EduQuest's online programme was better than any local option I could find.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "What is SAT coaching in Jaipur at EduQuest?",
        answer:
          "EduQuest serves Jaipur students from leading schools like Maharaja Sawai Man Singh Vidyalaya, St. Xavier's, and Seedling Modern. Programmes include a Diagnostic Test Framework, adaptive 1-on-1 coaching, and full Bluebook interface training.",
      },
      {
        question: "How much does SAT coaching cost in Jaipur?",
        answer:
          "Online 1-on-1 programmes start at ₹50,000. Hybrid (online + Gurgaon centre) programmes start at ₹70,000. All include diagnostics, mock tests, and score planning.",
      },
      {
        question: "How do Jaipur students attend classes?",
        answer:
          "Primarily via Online Live Group or 1-on-1 sessions. Hybrid students visit the Gurgaon centre for intensive weekend batches.",
      },
      {
        question: "What Digital SAT score can Jaipur students expect?",
        answer:
          "Our 2025 Jaipur batch averaged 1540. Students starting in Grade 10 with consistent prep typically cross 1500.",
      },
      {
        question: "Which Jaipur schools does EduQuest work with?",
        answer:
          "St. Xavier's Senior Secondary School, Maharaja Sawai Man Singh Vidyalaya, Seedling Modern High School, and all major CBSE and IB schools across Jaipur.",
      },
      {
        question: "What is the Digital SAT exam pattern 2026?",
        answer:
          "Digital SAT 2026 has 2 sections: Reading & Writing (54 questions, 64 min) and Math (44 questions, 70 min). Total 2 hrs 14 min. Fully adaptive, calculator allowed throughout Math. Scored 400–1600.",
      },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── DELHI ─────────────────────────────────────────────────────────────────
  delhi: {
    slug: "delhi",
    city: "Delhi / NCR",
    country: "India",
    metaTitle: "SAT Coaching in Delhi 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Top-rated SAT coaching in Delhi/NCR. Digital SAT 2026, adaptive mocks, 1500+ score plans. Offline & online classes. Free diagnostic test.",
    hero: {
      tagline: "Delhi NCR → Top US Universities",
      headline: "SAT Coaching in Delhi — Score 1500+",
      subheadline:
        "India's most experienced SAT faculty, in-person sessions in Gurgaon, and live online classes for students across Delhi NCR.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1550", label: "Avg. Score (2025 batch)" },
        { value: "98%", label: "Score improvement rate" },
        { value: "800+", label: "Delhi NCR students coached" },
        { value: "8+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest's Gurgaon centre is the hub for Delhi NCR students — accessible from South Delhi, Noida, Faridabad, and Gurgaon. We've coached students from DPS RK Puram, Modern School Barakhamba, The Shri Ram School, and every major IB and CBSE school in the region.",
        "Our flagship in-person batches run on weekends at our South City II centre. Weekday students join our Online Live classes. Both formats use the same expert faculty and Bluebook-identical mock infrastructure.",
      ],
    },
    localContext:
      "Serving DPS RK Puram, Modern School, The Shri Ram School, Sanskriti, and 50+ CBSE/IB schools in Delhi NCR.",
    testimonials: [
      {
        name: "Ishaan Kapoor",
        school: "DPS RK Puram, Delhi",
        score: "1580",
        previousScore: "1340",
        quote:
          "The weekend in-person batches at EduQuest's Gurgaon centre were phenomenal. Got into NYU Stern with a 1580.",
        year: "2025",
      },
      {
        name: "Meera Nair",
        school: "The Shri Ram School, Vasant Vihar",
        score: "1550",
        previousScore: "1290",
        quote:
          "EduQuest's diagnostic framework pinpointed exactly which algebra clusters I was losing points on. 260-point improvement.",
        year: "2025",
      },
      {
        name: "Arjun Malhotra",
        school: "Modern School Barakhamba, Delhi",
        score: "1530",
        previousScore: "1270",
        quote:
          "Best SAT coaching in Delhi NCR. The adaptive mocks felt exactly like test day. I was completely prepared.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Is EduQuest's SAT coaching available offline in Delhi?",
        answer:
          "Yes — in-person classes run at our Gurgaon (South City II) centre on weekends. Delhi students from South Delhi, Noida, and Faridabad regularly attend.",
      },
      {
        question: "How much does SAT coaching cost in Delhi?",
        answer:
          "Group programmes start at ₹45,000. 1-on-1 online coaching starts at ₹50,000. In-person hybrid starts at ₹70,000.",
      },
      {
        question: "What score can Delhi students expect?",
        answer: "Our 2025 Delhi NCR batch averaged 1550. Students starting prep in Grade 9–10 consistently cross 1500.",
      },
      {
        question: "What is the Digital SAT exam pattern 2026?",
        answer:
          "Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min). Total 2 hrs 14 min. Adaptive, calculator-permitted. Scored 400–1600.",
      },
    ],
    extraSections: [{ id: "LocalSchools" }, { id: "CityRank" }],
  },

  // ── MUMBAI ────────────────────────────────────────────────────────────────
  mumbai: {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    metaTitle: "SAT Coaching in Mumbai 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Premier SAT coaching in Mumbai. Digital SAT 2026, 1500+ score plans. Online live classes for Mumbai students. Free diagnostic test.",
    hero: {
      tagline: "Mumbai → Top US Universities",
      headline: "SAT Coaching in Mumbai — Score 1500+",
      subheadline:
        "Online live and 1-on-1 SAT prep for Mumbai students targeting top US universities with 1500+ Digital SAT scores.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "300+", label: "Mumbai students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Mumbai students from Dhirubhai Ambani International School, Cathedral & John Connon, Bombay Scottish, and other leading IB and ICSE schools across the city. All coaching is delivered via Online Live sessions with optional visits to our Gurgaon centre.",
        "Mumbai students benefit from our flexible evening and weekend batch timings, designed around the city's school and commute schedule.",
      ],
    },
    localContext:
      "Serving DAIS, Cathedral & John Connon, Bombay Scottish, Jamnabai Narsee, and leading IB/ICSE schools in Mumbai.",
    testimonials: [
      {
        name: "Zara Mehta",
        school: "Dhirubhai Ambani International School, Mumbai",
        score: "1560",
        previousScore: "1300",
        quote:
          "The online format was perfect for Mumbai — no commute, same quality as in-person. Got into UCLA.",
        year: "2025",
      },
      {
        name: "Kabir Desai",
        school: "Cathedral & John Connon, Mumbai",
        score: "1520",
        previousScore: "1260",
        quote:
          "EduQuest's R&W section strategy is unmatched. Improved from 630 to 790 in just four months.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Does EduQuest have a centre in Mumbai?",
        answer:
          "EduQuest's physical centre is in Gurgaon. Mumbai students attend Online Live Group or 1-on-1 sessions. Hybrid visits to Gurgaon are available.",
      },
      {
        question: "How much does SAT coaching cost in Mumbai?",
        answer:
          "Online 1-on-1 starts at ₹50,000. Online Group starts at ₹45,000. All include diagnostics and mock tests.",
      },
      {
        question: "What score can Mumbai students expect?",
        answer: "Our 2025 Mumbai batch averaged 1535. Strong performers consistently cross 1550+.",
      },
    ],
  },

  // ── GURGAON ───────────────────────────────────────────────────────────────
  gurgaon: {
    slug: "gurgaon",
    city: "Gurgaon",
    country: "India",
    metaTitle: "SAT Coaching in Gurgaon 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "EduQuest's home city — India's best SAT coaching centre in Gurgaon. In-person, online & hybrid. 1500+ score plans. Free diagnostic.",
    hero: {
      tagline: "Gurgaon → Top US Universities",
      headline: "SAT Coaching in Gurgaon — Score 1500+",
      subheadline:
        "Walk into EduQuest's flagship Gurgaon centre for in-person coaching, or join our online live batches. India's most experienced SAT faculty — right here.",
      ctaLabel: "Visit Our Centre",
      stats: [
        { value: "1555", label: "Avg. Score (2025 batch)" },
        { value: "99%", label: "Score improvement rate" },
        { value: "1200+", label: "Gurgaon students coached" },
        { value: "10+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest's flagship centre at South City II, Sector 50, Gurgaon is where our most intensive in-person SAT coaching happens. Students from GD Goenka World School, The Heritage School, Scottish High International, and Pathways walk in for weekend batches and exam-week intensives.",
        "Gurgaon students have the unique advantage of in-person diagnostic reviews, live whiteboard sessions, and same-day doubt clearing with our senior faculty.",
      ],
    },
    localContext:
      "Serving GD Goenka, The Heritage School, Scottish High, Pathways World School, and all major IB/CBSE schools in Gurgaon.",
    testimonials: [
      {
        name: "Ananya Gupta",
        school: "GD Goenka World School, Gurgaon",
        score: "1590",
        previousScore: "1370",
        quote:
          "Being able to walk into the Gurgaon centre for doubt sessions made all the difference. 220 point jump, got into Duke.",
        year: "2025",
      },
      {
        name: "Rahul Verma",
        school: "The Heritage School, Gurgaon",
        score: "1570",
        previousScore: "1320",
        quote:
          "Weekend in-person batches + weekday online practice — the hybrid format was perfect. EduQuest is the real deal.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Where is EduQuest's Gurgaon centre?",
        answer:
          "F-45, First Floor, South City II, Sector 50, Gurugram – 122018. Also accessible from our 1210, Galleria Boulevard, DLF Phase IV location.",
      },
      {
        question: "What SAT programmes are available in Gurgaon?",
        answer:
          "In-person weekend batches, weekday online live, 1-on-1 coaching, and intensive crash courses. All include Bluebook mocks and diagnostics.",
      },
      {
        question: "How much does in-person SAT coaching in Gurgaon cost?",
        answer: "In-person group starts at ₹55,000. 1-on-1 in-person starts at ₹85,000.",
      },
    ],
    extraSections: [{ id: "LocalSchools" }, { id: "CityRank" }],
  },

  // ── US ────────────────────────────────────────────────────────────────────
  us: {
    slug: "us",
    city: "United States",
    country: "USA",
    metaTitle: "SAT Coaching for US Students 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in the US. Digital SAT 2026, 1-on-1 adaptive prep, 1500+ score plans. Time-zone flexible sessions. Free diagnostic.",
    hero: {
      tagline: "US Students → Top US Universities",
      headline: "SAT Coaching for Students in the USA",
      subheadline:
        "Time-zone flexible 1-on-1 and live group sessions for US-based students targeting 1500+ on the Digital SAT 2026.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1560", label: "Avg. Score (2025 US batch)" },
        { value: "97%", label: "Score improvement rate" },
        { value: "150+", label: "US students coached" },
        { value: "8+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest coaches students across the US — from New York, New Jersey, California, Texas, and beyond. Our online 1-on-1 format is designed for US school schedules, with sessions scheduled to match EST, CST, and PST time zones.",
        "US-based students often come to EduQuest for a fresh perspective on SAT prep — our diagnostic-first approach identifies exactly where scores are being left on the table, and our Bluebook-native mock tests mirror the real test environment.",
      ],
    },
    localContext:
      "Serving Indian-American and international students across New York, New Jersey, California, Texas, and the broader US.",
    testimonials: [
      {
        name: "Riya Patel",
        school: "Princeton Day School, NJ",
        score: "1570",
        previousScore: "1310",
        quote:
          "EduQuest fit perfectly into my US schedule. The 1-on-1 sessions were laser-focused on my weak areas. Scored 1570.",
        year: "2025",
      },
      {
        name: "Aryan Bose",
        school: "Cupertino High School, CA",
        score: "1580",
        previousScore: "1360",
        quote:
          "I tried a local US tutor first but EduQuest's systematic approach was on another level entirely.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "How does EduQuest coach US-based students?",
        answer:
          "Fully online 1-on-1 and live group sessions. EST, CST, and PST slots available. Weekend intensives also offered.",
      },
      {
        question: "What does SAT coaching for US students cost?",
        answer:
          "Online 1-on-1 starts at USD 600 (approx. ₹50,000). All include diagnostics, mock tests, and score planning.",
      },
      {
        question: "Is EduQuest familiar with US school SAT testing calendars?",
        answer:
          "Yes — we align our prep timelines with College Board's US test date schedule (August, October, November, March, May).",
      },
    ],
    extraSections: [{ id: "CollegeBoard" }, { id: "OnlineAdvantage" }],
  },

  // ── UK ────────────────────────────────────────────────────────────────────
  uk: {
    slug: "uk",
    city: "United Kingdom",
    country: "UK",
    metaTitle: "SAT Coaching for UK Students 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in the UK. Digital SAT 2026, 1-on-1 adaptive prep, flexible UK time-zone sessions. Free diagnostic test.",
    hero: {
      tagline: "UK Students → Top US Universities",
      headline: "SAT Coaching for Students in the UK",
      subheadline:
        "GMT/BST-compatible online sessions for UK-based students targeting 1500+ and admission to top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1545", label: "Avg. Score (2025 UK batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "80+", label: "UK students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest coaches UK students across London, Birmingham, Manchester, and beyond — predominantly Indian-origin students in British schools targeting US universities alongside UCAS applications.",
        "Sessions are scheduled in GMT/BST-compatible windows, typically on weekday evenings and weekends. Our faculty are experienced in guiding UK students through the nuances of US admissions alongside the Digital SAT.",
      ],
    },
    localContext:
      "Serving Indian-origin students in London, Birmingham, Manchester, and across the UK pursuing US university admissions.",
    testimonials: [
      {
        name: "Neha Chadha",
        school: "King's College School, London",
        score: "1540",
        previousScore: "1290",
        quote:
          "EduQuest sessions were timed perfectly for UK evenings. The faculty understood the dual A-levels + SAT workload challenge.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "How does EduQuest coach UK-based students?",
        answer:
          "Fully online. GMT/BST sessions available on weekday evenings and weekends. 1-on-1 and group formats.",
      },
      {
        question: "Do UK students need the SAT for US universities?",
        answer:
          "Many top US universities are test-optional but a strong SAT score (1500+) significantly strengthens applications from UK-based students.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }, { id: "VisaInfo" }],
  },

  // ── UAE ───────────────────────────────────────────────────────────────────
  uae: {
    slug: "uae",
    city: "UAE",
    country: "United Arab Emirates",
    metaTitle: "SAT Coaching in UAE 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Top SAT coaching for UAE students in Dubai, Abu Dhabi, Sharjah. Digital SAT 2026, online live sessions, 1500+ score plans. Free diagnostic.",
    hero: {
      tagline: "UAE → Top US Universities",
      headline: "SAT Coaching in UAE — Score 1500+",
      subheadline:
        "Online live and 1-on-1 SAT coaching for students across Dubai, Abu Dhabi, Sharjah, and the wider UAE targeting 1500+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1545", label: "Avg. Score (2025 UAE batch)" },
        { value: "97%", label: "Score improvement rate" },
        { value: "200+", label: "UAE students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest is a trusted name in UAE SAT prep, coaching students from GEMS schools, Jumeirah College, Delhi Private School Dubai, and the city's top IB institutions across Dubai, Abu Dhabi, and Sharjah.",
        "All sessions are online in UAE-compatible time slots. Our faculty regularly guides UAE students through the specific challenges of taking the Digital SAT at College Board's UAE test centres.",
      ],
    },
    localContext:
      "Serving GEMS schools, Jumeirah College, DPS Dubai, Abu Dhabi Indian School, and leading IB schools across the UAE.",
    testimonials: [
      {
        name: "Aditya Shah",
        school: "GEMS Our Own Indian School, Dubai",
        score: "1550",
        previousScore: "1300",
        quote:
          "Best SAT prep available in the UAE. The online sessions fit my school schedule perfectly. Got into Purdue.",
        year: "2025",
      },
      {
        name: "Sana Mirza",
        school: "Jumeirah College, Dubai",
        score: "1520",
        previousScore: "1260",
        quote:
          "EduQuest's mock tests were identical to what I saw on test day at the Dubai centre. 260-point improvement.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Does EduQuest have a centre in Dubai or Abu Dhabi?",
        answer:
          "EduQuest's centre is in Gurgaon, India. UAE students attend Online Live sessions in UAE-compatible time slots.",
      },
      {
        question: "Where do UAE students take the Digital SAT?",
        answer:
          "College Board's authorised UAE test centres are in Dubai, Abu Dhabi, and Sharjah. EduQuest helps with test registration strategy and date selection.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SHARJAH ───────────────────────────────────────────────────────────────
  sharjah: {
    slug: "sharjah",
    city: "Sharjah",
    country: "UAE",
    metaTitle: "SAT Coaching in Sharjah 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "SAT coaching for Sharjah students. Digital SAT 2026, online live sessions, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Sharjah → Top US Universities",
      headline: "SAT Coaching in Sharjah — Score 1500+",
      subheadline:
        "Online 1-on-1 and group SAT coaching for students in Sharjah targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "60+", label: "Sharjah students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Sharjah students from Indian schools, IB institutions, and British curriculum schools across the emirate via online live sessions.",
      ],
    },
    localContext:
      "Serving Indian and international schools across Sharjah emirate.",
    testimonials: [
      {
        name: "Tanvi Joshi",
        school: "Our Own English High School, Sharjah",
        score: "1510",
        previousScore: "1260",
        quote:
          "EduQuest's online sessions were perfectly timed for UAE students. My R&W jumped 100 points.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Can Sharjah students attend in-person SAT coaching?",
        answer:
          "EduQuest's centre is in Gurgaon, India. Sharjah students attend online. Hybrid options are available for those visiting India.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SINGAPORE ─────────────────────────────────────────────────────────────
  singapore: {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    metaTitle: "SAT Coaching in Singapore 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Singapore students. Digital SAT 2026, 1-on-1 adaptive prep, SGT-compatible sessions. Free diagnostic test.",
    hero: {
      tagline: "Singapore → Top US Universities",
      headline: "SAT Coaching in Singapore — Score 1500+",
      subheadline:
        "SGT-compatible online live and 1-on-1 SAT prep for Singapore students targeting 1500+ and admission to top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1555", label: "Avg. Score (2025 SG batch)" },
        { value: "98%", label: "Score improvement rate" },
        { value: "90+", label: "Singapore students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest coaches Singapore students from Singapore American School, United World College, GIIS, and other international schools via SGT-friendly online sessions.",
      ],
    },
    localContext:
      "Serving Singapore American School, UWC, GIIS, Canadian International School, and leading international schools in Singapore.",
    testimonials: [
      {
        name: "Vikram Pillai",
        school: "Singapore American School",
        score: "1570",
        previousScore: "1340",
        quote:
          "EduQuest's sessions were timed for Singapore evenings. Scored 1570 and got into Johns Hopkins.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Are SAT sessions available in SGT for Singapore students?",
        answer: "Yes — sessions are scheduled in SGT-compatible windows on weekday evenings and weekends.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── BANGALORE ─────────────────────────────────────────────────────────────
  bangalore: {
    slug: "bangalore",
    city: "Bangalore",
    country: "India",
    metaTitle: "SAT Coaching in Bangalore 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Premier SAT coaching in Bangalore. Digital SAT 2026, online & in-person sessions, 1500+ score plans. Free diagnostic.",
    hero: {
      tagline: "Bangalore → Top US Universities",
      headline: "SAT Coaching in Bangalore — Score 1500+",
      subheadline:
        "Online live sessions and in-person support at our Bangalore corporate office for students targeting 1500+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)" },
        { value: "97%", label: "Score improvement rate" },
        { value: "250+", label: "Bangalore students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest's Bangalore corporate office at JP Nagar 2nd Phase supports students from Inventure Academy, Canadian International School, The International School Bangalore, and leading CBSE schools.",
        "Most Bangalore coaching is online with optional in-person intensives at our JP Nagar office.",
      ],
    },
    localContext:
      "Serving Inventure Academy, CIS Bangalore, TISB, Delhi Public School Bangalore, and leading IB/CBSE schools.",
    testimonials: [
      {
        name: "Priya Rao",
        school: "Inventure Academy, Bangalore",
        score: "1545",
        previousScore: "1290",
        quote:
          "EduQuest's Bangalore team was fantastic. The JP Nagar office was convenient for intensive weekends.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Does EduQuest have an office in Bangalore?",
        answer:
          "Yes — our Bangalore Corporate Office is at JP Nagar 2nd Phase. Most coaching is online with optional in-person sessions.",
      },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── CHENNAI ───────────────────────────────────────────────────────────────
  chennai: {
    slug: "chennai",
    city: "Chennai",
    country: "India",
    metaTitle: "SAT Coaching in Chennai 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Chennai students. Digital SAT 2026, adaptive prep, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Chennai → Top US Universities",
      headline: "SAT Coaching in Chennai — Score 1500+",
      subheadline:
        "Online live SAT coaching for Chennai students from top CBSE and IB schools targeting 1500+ and US admissions.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "120+", label: "Chennai students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Chennai students from Lalaji Memorial Omega International School, The PSBB Group, Chettinad Vidyashram, and other leading institutions via online live sessions.",
      ],
    },
    localContext:
      "Serving LMOIS, PSBB, Chettinad Vidyashram, DAV, and leading CBSE/IB schools in Chennai.",
    testimonials: [
      {
        name: "Kavya Subramaniam",
        school: "Lalaji Memorial Omega International, Chennai",
        score: "1525",
        previousScore: "1260",
        quote:
          "The adaptive mock tests were spot-on. 265-point improvement and into University of Illinois.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Is EduQuest's SAT coaching available for Chennai students?",
        answer:
          "Yes — primarily via Online Live and 1-on-1 sessions. Hybrid visits to our Gurgaon centre are available.",
      },
    ],
  },

  // ── HYDERABAD ─────────────────────────────────────────────────────────────
  hyderabad: {
    slug: "hyderabad",
    city: "Hyderabad",
    country: "India",
    metaTitle: "SAT Coaching in Hyderabad 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "SAT coaching for Hyderabad students. Digital SAT 2026, online live sessions, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Hyderabad → Top US Universities",
      headline: "SAT Coaching in Hyderabad — Score 1500+",
      subheadline:
        "Online live and 1-on-1 coaching for Hyderabad students from leading IB and CBSE schools targeting 1500+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "180+", label: "Hyderabad students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Hyderabad students from Oakridge International, Chirec International, and leading CBSE/IB schools via online sessions.",
      ],
    },
    localContext:
      "Serving Oakridge International, Chirec, Meridian, DPS Hyderabad, and leading schools across Hyderabad.",
    testimonials: [
      {
        name: "Siddharth Reddy",
        school: "Oakridge International School, Hyderabad",
        score: "1540",
        previousScore: "1280",
        quote:
          "EduQuest's diagnostic approach found my weak spots in 2 weeks. 260-point improvement.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Is SAT coaching available in Hyderabad?",
        answer:
          "Yes — via Online Live and 1-on-1 sessions. Hybrid visits to Gurgaon available for intensive weekends.",
      },
    ],
  },

  // ── PUNE ──────────────────────────────────────────────────────────────────
  pune: {
    slug: "pune",
    city: "Pune",
    country: "India",
    metaTitle: "SAT Coaching in Pune 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Pune students. Digital SAT 2026, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Pune → Top US Universities",
      headline: "SAT Coaching in Pune — Score 1500+",
      subheadline:
        "Online live SAT coaching tailored for Pune students from IB, CBSE, and ICSE schools.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "100+", label: "Pune students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Pune students from Symbiosis International School, Bishops Co-ed, Mercedes-Benz International School, and other top institutions via online live sessions.",
      ],
    },
    localContext:
      "Serving Symbiosis International, Bishops, Mercedes-Benz International School, and leading IB/ICSE schools in Pune.",
    testimonials: [
      {
        name: "Anisha Kulkarni",
        school: "Symbiosis International School, Pune",
        score: "1520",
        previousScore: "1260",
        quote: "Perfect for Pune students — fully online, same quality as attending in person.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Is EduQuest's SAT coaching available in Pune?",
        answer: "Yes — online live and 1-on-1 sessions. Hybrid Gurgaon visits available.",
      },
    ],
  },

  // ── CHANDIGARH ────────────────────────────────────────────────────────────
  chandigarh: {
    slug: "chandigarh",
    city: "Chandigarh",
    country: "India",
    metaTitle: "SAT Coaching in Chandigarh 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "SAT coaching for Chandigarh students. Digital SAT 2026, online live sessions, 1500+ score plans.",
    hero: {
      tagline: "Chandigarh → Top US Universities",
      headline: "SAT Coaching in Chandigarh — Score 1500+",
      subheadline:
        "Online live SAT coaching for Chandigarh students from top schools in the tricity area.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1525", label: "Avg. Score (2025 batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "70+", label: "Chandigarh students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Chandigarh students from St. John's High School, Carmel Convent, and DAV schools across the tricity via online live sessions.",
      ],
    },
    localContext: "Serving St. John's, Carmel Convent, DAV, and leading schools across Chandigarh, Panchkula, and Mohali.",
    testimonials: [
      {
        name: "Gurpreet Singh",
        school: "St. John's High School, Chandigarh",
        score: "1510",
        previousScore: "1250",
        quote: "Great online programme. Scored 1510 and got into Penn State.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Can Chandigarh students attend EduQuest in person?",
        answer:
          "Chandigarh students can visit our Gurgaon centre for in-person sessions. Online live and 1-on-1 sessions are the primary format.",
      },
    ],
  },

  // ── NOIDA ─────────────────────────────────────────────────────────────────
  noida: {
    slug: "noida",
    city: "Noida",
    country: "India",
    metaTitle: "SAT Coaching in Noida 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "SAT coaching for Noida students. Digital SAT 2026, online & in-person sessions at our Gurgaon centre, 1500+ score plans.",
    hero: {
      tagline: "Noida → Top US Universities",
      headline: "SAT Coaching in Noida — Score 1500+",
      subheadline:
        "Online live and hybrid in-person SAT coaching for Noida students targeting 1500+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1540", label: "Avg. Score (2025 batch)" },
        { value: "97%", label: "Score improvement rate" },
        { value: "150+", label: "Noida students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "Noida students from Amity International, DPS Noida, Genesis Global School, and Step by Step attend EduQuest via online live sessions and weekend visits to our Gurgaon centre.",
      ],
    },
    localContext: "Serving Amity International, DPS Noida, Genesis Global, Step by Step, and Lotus Valley.",
    testimonials: [
      {
        name: "Ankit Saxena",
        school: "Amity International School, Noida",
        score: "1550",
        previousScore: "1300",
        quote: "Weekend trips to Gurgaon for in-person sessions were totally worth it. 250-point jump.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Can Noida students attend EduQuest in person?",
        answer: "Yes — Noida is close to our Gurgaon centre. Weekend in-person batches are available.",
      },
    ],
  },

  // ── LUCKNOW ───────────────────────────────────────────────────────────────
  lucknow: {
    slug: "lucknow",
    city: "Lucknow",
    country: "India",
    metaTitle: "SAT Coaching in Lucknow 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Lucknow students. Digital SAT 2026, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Lucknow → Top US Universities",
      headline: "SAT Coaching in Lucknow — Score 1500+",
      subheadline: "Online live SAT coaching for Lucknow students targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "60+", label: "Lucknow students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Lucknow students from City Montessori School, La Martiniere, and other leading CBSE schools via online live sessions.",
      ],
    },
    localContext: "Serving CMS, La Martiniere, Seth Anandram Jaipuria School, and leading Lucknow schools.",
    testimonials: [
      {
        name: "Neha Tripathi",
        school: "City Montessori School, Lucknow",
        score: "1505",
        previousScore: "1240",
        quote: "EduQuest's online programme was excellent. Best SAT prep option from Lucknow.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Is online SAT coaching from Lucknow effective?",
        answer: "Absolutely — our Lucknow students average 1520. The online format provides the same quality as in-person coaching.",
      },
    ],
  },

  // ── KOLKATA ───────────────────────────────────────────────────────────────
  kolkata: {
    slug: "kolkata",
    city: "Kolkata",
    country: "India",
    metaTitle: "SAT Coaching in Kolkata 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Kolkata students. Digital SAT 2026, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Kolkata → Top US Universities",
      headline: "SAT Coaching in Kolkata — Score 1500+",
      subheadline: "Online live SAT coaching for Kolkata students from top schools targeting US admissions.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1525", label: "Avg. Score (2025 batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "80+", label: "Kolkata students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Kolkata students from La Martiniere, South Point, Calcutta International School, and The Newtown School via online live sessions.",
      ],
    },
    localContext: "Serving La Martiniere, South Point, Calcutta International School, and leading CBSE/ICSE schools in Kolkata.",
    testimonials: [
      {
        name: "Soumya Das",
        school: "La Martiniere for Boys, Kolkata",
        score: "1530",
        previousScore: "1270",
        quote: "Exceptional online coaching. EduQuest's faculty is the best I've encountered.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Is online SAT coaching good enough for Kolkata students?",
        answer: "Yes — our online programme is identical in quality to in-person. Kolkata batch averaged 1525 in 2025.",
      },
    ],
  },

  // ── INDORE ────────────────────────────────────────────────────────────────
  indore: {
    slug: "indore",
    city: "Indore",
    country: "India",
    metaTitle: "SAT Coaching in Indore 2026 | Score 1500+ | EduQuest",
    metaDescription: "Online SAT coaching for Indore students. Digital SAT 2026, 1500+ score plans.",
    hero: {
      tagline: "Indore → Top US Universities",
      headline: "SAT Coaching in Indore — Score 1500+",
      subheadline: "Online live SAT coaching for Indore students from top CBSE and IB schools.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1515", label: "Avg. Score (2025 batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "50+", label: "Indore students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Indore students from Daly College, Choithram International, and other leading schools via online live sessions.",
      ],
    },
    localContext: "Serving Daly College, Choithram International, and leading CBSE schools in Indore.",
    testimonials: [
      {
        name: "Ritika Sharma",
        school: "Daly College, Indore",
        score: "1510",
        previousScore: "1250",
        quote: "Great experience. EduQuest is the best SAT coaching option for Indore students.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Is there good SAT coaching available in Indore?",
        answer: "EduQuest's online programme provides world-class SAT coaching for Indore students with no local centre needed.",
      },
    ],
  },

  // ── AHMEDABAD ─────────────────────────────────────────────────────────────
  ahmedabad: {
    slug: "ahmedabad",
    city: "Ahmedabad",
    country: "India",
    metaTitle: "SAT Coaching in Ahmedabad 2026 | Score 1500+ | EduQuest",
    metaDescription: "Online SAT coaching for Ahmedabad students. Digital SAT 2026, 1500+ score plans.",
    hero: {
      tagline: "Ahmedabad → Top US Universities",
      headline: "SAT Coaching in Ahmedabad — Score 1500+",
      subheadline: "Online live SAT prep for Ahmedabad students targeting 1500+ on the Digital SAT.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "70+", label: "Ahmedabad students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Ahmedabad students from Zydus School for Excellence, Udgam School, and top CBSE/IB institutions via online sessions.",
      ],
    },
    localContext: "Serving Zydus School, Udgam, ANAND Niketan, and leading CBSE/IB schools in Ahmedabad.",
    testimonials: [
      {
        name: "Devang Patel",
        school: "Zydus School for Excellence, Ahmedabad",
        score: "1525",
        previousScore: "1270",
        quote: "EduQuest's online sessions were flexible and effective. 255-point improvement.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "How do Ahmedabad students attend EduQuest SAT coaching?",
        answer: "Fully online. Live group and 1-on-1 sessions with Gurgaon hybrid options.",
      },
    ],
  },

  // ── DEHRADUN ──────────────────────────────────────────────────────────────
  dehradun: {
    slug: "dehradun",
    city: "Dehradun",
    country: "India",
    metaTitle: "SAT Coaching in Dehradun 2026 | Score 1500+ | EduQuest",
    metaDescription: "SAT coaching for Dehradun boarding school students. Digital SAT 2026, 1500+ score plans.",
    hero: {
      tagline: "Dehradun → Top US Universities",
      headline: "SAT Coaching in Dehradun — Score 1500+",
      subheadline:
        "Boarding school-friendly online SAT coaching for Dehradun students targeting top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1530", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "90+", label: "Dehradun students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest has a strong track record with Dehradun boarding school students from The Doon School, Welham Girls', Woodstock School, and other prestigious institutions. Sessions are structured around boarding school schedules.",
      ],
    },
    localContext: "Serving The Doon School, Welham Girls', Woodstock School, St. George's, and leading Dehradun schools.",
    testimonials: [
      {
        name: "Aarav Thakur",
        school: "The Doon School, Dehradun",
        score: "1545",
        previousScore: "1300",
        quote:
          "EduQuest understood the boarding school schedule perfectly. Weekend sessions were ideal. Got into Boston University.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "How do boarding school students in Dehradun attend sessions?",
        answer:
          "Online live sessions scheduled around boarding school exeats and holidays. Weekend batches are available.",
      },
    ],
    extraSections: [{ id: "LocalSchools" }],
  },

  // ── NEPAL ─────────────────────────────────────────────────────────────────
  nepal: {
    slug: "nepal",
    city: "Nepal",
    country: "Nepal",
    metaTitle: "SAT Coaching in Nepal 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "SAT coaching for Nepal students in Kathmandu and beyond. Digital SAT 2026, online live sessions, 1500+ score plans.",
    hero: {
      tagline: "Nepal → Top US Universities",
      headline: "SAT Coaching in Nepal — Score 1500+",
      subheadline:
        "Online live SAT coaching for Nepal students from Kathmandu, Pokhara, and beyond targeting 1500+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1520", label: "Avg. Score (2025 Nepal batch)" },
        { value: "95%", label: "Score improvement rate" },
        { value: "100+", label: "Nepal students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest coaches Nepal students from Rato Bangala School, Budhanilkantha School, Saint Xavier's College, and other leading institutions in Kathmandu via online sessions.",
      ],
    },
    localContext: "Serving Rato Bangala, Budhanilkantha, Saint Xavier's, and leading schools in Kathmandu and Nepal.",
    testimonials: [
      {
        name: "Shreya Shrestha",
        school: "Rato Bangala School, Kathmandu",
        score: "1515",
        previousScore: "1250",
        quote:
          "EduQuest is the best SAT coaching option for Nepal students. Online sessions, expert faculty.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "Can Nepal students take the Digital SAT?",
        answer:
          "Yes — College Board has authorised test centres in Kathmandu. EduQuest helps with test registration and prep.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── SAUDI ARABIA ──────────────────────────────────────────────────────────
  "saudi-arabia": {
    slug: "saudi-arabia",
    city: "Saudi Arabia",
    country: "Saudi Arabia",
    metaTitle: "SAT Coaching in Saudi Arabia 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for students in Saudi Arabia — Riyadh, Jeddah, Dammam. Digital SAT 2026, 1500+ score plans.",
    hero: {
      tagline: "Saudi Arabia → Top US Universities",
      headline: "SAT Coaching in Saudi Arabia — Score 1500+",
      subheadline:
        "Online live and 1-on-1 SAT coaching for students across Riyadh, Jeddah, and Dammam targeting 1500+.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1535", label: "Avg. Score (2025 batch)" },
        { value: "96%", label: "Score improvement rate" },
        { value: "70+", label: "KSA students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves students from Indian, British, and American curriculum schools across Riyadh, Jeddah, and Dammam via AST/AST+3-compatible online sessions.",
      ],
    },
    localContext: "Serving Indian and international schools across Riyadh, Jeddah, Dammam, and Khobar.",
    testimonials: [
      {
        name: "Aryan Menon",
        school: "Indian International School, Riyadh",
        score: "1530",
        previousScore: "1270",
        quote: "EduQuest's Saudi sessions were timed perfectly. Got into Purdue Engineering.",
        year: "2025",
      },
    ],
    faqs: [
      {
        question: "How do Saudi Arabia students attend SAT coaching?",
        answer: "Fully online in AST-compatible time slots. 1-on-1 and group sessions available.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }, { id: "VisaInfo" }],
  },

  // ── NIGERIA ───────────────────────────────────────────────────────────────
  nigeria: {
    slug: "nigeria",
    city: "Nigeria",
    country: "Nigeria",
    metaTitle: "SAT Coaching in Nigeria 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Nigerian students in Lagos, Abuja. Digital SAT 2026, 1500+ score plans. Free diagnostic.",
    hero: {
      tagline: "Nigeria → Top US Universities",
      headline: "SAT Coaching in Nigeria — Score 1500+",
      subheadline:
        "Online SAT coaching for students in Lagos, Abuja, and across Nigeria targeting 1500+ and top US universities.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1510", label: "Avg. Score (2025 batch)" },
        { value: "94%", label: "Score improvement rate" },
        { value: "40+", label: "Nigerian students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest coaches Nigerian students via WAT-compatible online sessions. Our programmes are designed for students in Lagos, Abuja, and Port Harcourt targeting top US universities.",
      ],
    },
    localContext: "Serving international and local schools in Lagos, Abuja, Port Harcourt, and across Nigeria.",
    testimonials: [
      {
        name: "Chidi Obi",
        school: "Atlantic Hall, Lagos",
        score: "1505",
        previousScore: "1240",
        quote: "EduQuest provided professional, structured SAT coaching. Scored 1505 on first attempt.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Are there SAT test centres in Nigeria?",
        answer: "Yes — College Board has test centres in Lagos and Abuja. EduQuest helps with test date strategy.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },

  // ── MAURITIUS ─────────────────────────────────────────────────────────────
  mauritius: {
    slug: "mauritius",
    city: "Mauritius",
    country: "Mauritius",
    metaTitle: "SAT Coaching in Mauritius 2026 | Score 1500+ | EduQuest",
    metaDescription:
      "Online SAT coaching for Mauritius students. Digital SAT 2026, 1500+ score plans. Free diagnostic test.",
    hero: {
      tagline: "Mauritius → Top US Universities",
      headline: "SAT Coaching in Mauritius — Score 1500+",
      subheadline:
        "Online SAT coaching for Mauritius students targeting top US universities with 1500+ scores.",
      ctaLabel: "Book Free Diagnostic",
      stats: [
        { value: "1505", label: "Avg. Score (2025 batch)" },
        { value: "94%", label: "Score improvement rate" },
        { value: "30+", label: "Mauritius students coached" },
        { value: "6+", label: "Full-length adaptive mocks" },
      ],
    },
    about: {
      paragraphs: [
        "EduQuest serves Mauritius students via online sessions compatible with MUT time zone, helping them access the same quality SAT coaching as students in India.",
      ],
    },
    localContext: "Serving international and local schools across Mauritius.",
    testimonials: [
      {
        name: "Priya Ramgolam",
        school: "Lycée Labourdonnais, Mauritius",
        score: "1500",
        previousScore: "1240",
        quote: "Online coaching from Mauritius worked perfectly. EduQuest's programme is excellent.",
        year: "2024",
      },
    ],
    faqs: [
      {
        question: "Can Mauritius students take the Digital SAT?",
        answer: "Yes — test centres are available in Mauritius. EduQuest helps with registration and test-date strategy.",
      },
    ],
    extraSections: [{ id: "OnlineAdvantage" }],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER NAV DATA — matches Footer.tsx satLocations array
// ─────────────────────────────────────────────────────────────────────────────

export const SAT_FOOTER_LOCATIONS: { href: string; label: string }[] = [
  { href: "/sat_delhi", label: "Delhi/NCR" },
  { href: "/sat_mumbai", label: "Mumbai" },
  { href: "/sat_gurgaon", label: "Gurgaon" },
  { href: "/sat_jaipur", label: "Jaipur" },
  { href: "/sat/nepal", label: "Nepal" },
  { href: "/sat/pune", label: "Pune" },
  { href: "/sat/us", label: "US" },
  { href: "/sat/sharjah", label: "Sharjah" },
  { href: "/sat/bangalore", label: "Bangalore" },
  { href: "/sat/chennai", label: "Chennai" },
  { href: "/sat/hyderabad", label: "Hyderabad" },
  { href: "/sat/indore", label: "Indore" },
  { href: "/sat/uae", label: "UAE" },
  { href: "/sat/ahmedabad", label: "Ahmedabad" },
  { href: "/sat/uk", label: "UK" },
  { href: "/sat/saudi-arabia", label: "Saudi Arabia" },
  { href: "/sat/dehradun", label: "Dehradun" },
  { href: "/sat/singapore", label: "Singapore" },
  { href: "/sat/chandigarh", label: "Chandigarh" },
  { href: "/sat/noida", label: "Noida" },
  { href: "/sat/lucknow", label: "Lucknow" },
  { href: "/sat/kolkata", label: "Kolkata" },
  { href: "/sat/nigeria", label: "Nigeria" },
  { href: "/sat/mauritius", label: "Mauritius" },
];