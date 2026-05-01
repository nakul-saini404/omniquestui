// ─── data/constants.ts
// ─────────────────────────────────────────────────────────────────────────────

export const PATHWAYS = [
  {
    icon:  "🏛",
    color: "blue",
    route: "For Students · Grades 8–12",
    title: "EduQuest",
    href:  "/eduQuest",
    desc:  "EduQuest builds academically strong students into strategically positioned applicants for the world's most selective universities. We architect positioning — not just applications.",
    cta:   "Enter the Admissions Strategy System →",
  },
  {
    icon:  "💼",
    color: "purple",
    route: "For Serious MBA Applicants & Professionals",
    title: "MBA Wizards",
    href:  "https://www.mbawizards.co.in/",
    desc:  "MBA Wizards transforms professional experience into high-impact MBA applications. We design career narratives, reposition trajectories, and build strategies that convert experience into admission outcomes.",
    cta:   "Begin Your MBA Strategy Process →",
  },
  {
    icon:  "⚡",
    color: "green",
    route: "For Execution-Focused Learners & Professionals",
    title: "Aptech",
    href:  "https://www.aptechindia.com/",
    desc:  "Aptech develops applied skill systems that translate learning into measurable, industry-relevant capability. Beyond learning — we focus on execution and demonstrable competence.",
    cta:   "Build Execution-Level Capability →",
  },
];

export const WHY = [
  {
    title: "We Don't Coach. We Build Profiles.",
    desc:  "Every engagement begins with a full strategic audit — not a course enrollment. We architect your academic and professional profile from first principles.",
  },
  {
    title: "Ivy League & Top 50 Strategy",
    desc:  "Our consultants have personally navigated Harvard, Wharton, MIT, and INSEAD admissions. We bring insider precision — not guesswork.",
  },
  {
    title: "End-to-End Architecture",
    desc:  "From psychometric assessment to visa approval — we manage every milestone of your journey with dedicated strategy consultants.",
  },
  {
    title: "Leadership by Design",
    desc:  "We engineer the extracurricular profile, leadership narrative, and essay architecture that admissions committees at elite schools actually reward.",
  },
  {
    title: "Data-Driven Decisions",
    desc:  "We analyse thousands of successful applicant profiles to give you a statistically-informed strategy — not hope and guesswork.",
  },
  {
    title: "Long-Term Career Positioning",
    desc:  "Our work does not stop at admission. We align your university choice and profile to your 10-year career trajectory from day one.",
  },
];

// ── System Philosophy section ─────────────────────────────────────────────────

export const PHILOSOPHY_STEPS = [
  {
    num:   "01",
    title: "Positioning before effort",
    desc:  "Strategy is defined before action. Clarity of positioning drives every decision in the system.",
  },
  {
    num:   "02",
    title: "Clarity before action",
    desc:  "Structured thinking and narrative clarity underpin every pathway — no randomness, no guesswork.",
  },
  {
    num:   "03",
    title: "Depth over randomness",
    desc:  "Each stage is built to create demonstrable depth — not surface-level activity.",
  },
  {
    num:   "04",
    title: "Strategy over activity",
    desc:  "Outcome-driven execution separates the OmniQuest system from conventional approaches.",
  },
];

export const BEFORE_AFTER = {
  before: {
    label: "Before OmniQuest",
    items: [
      "Random academic activities",
      "No structured narrative",
      "Weak global positioning",
    ],
  },
  after: {
    label: "After OmniQuest",
    items: [
      "Clear academic identity",
      "Structured profile architecture",
      "Strong admissions narrative",
      "Real-world readiness signals",
    ],
  },
};

export const PHILOSOPHY_QUOTE =
  "Outcomes are not achieved by effort alone — they are engineered through positioning.";

// ── Other sections ────────────────────────────────────────────────────────────

export const METRICS = [
  { badge: "Profile Outcomes", target: 10000,  label: "Student Profiles\nDesigned",        display: "10K+" },
  { badge: "UG Strategy",      target: 8000,   label: "Undergraduate\nAdmits Secured",      display: "8K+"  },
  { badge: "GMAT Score",       target: 720,    label: "Average\nGMAT Score",                display: "720+" },
  { badge: "Scholarships",     target: 2000000,label: "Scholarships\nWon",                  display: "$2M+" },
];

export const MAP_LABELS = [
  { name: "Canada",         top: "18%", left: "14%", gold: false },
  { name: "United States",  top: "30%", left: "10%", gold: false },
  { name: "United Kingdom", top: "22%", left: "40%", gold: false },
  { name: "Europe",         top: "30%", left: "46%", gold: false },
  { name: "India",          top: "50%", left: "58%", gold: true, flag: "🇮🇳" },
  { name: "Australia",      top: "68%", left: "70%", gold: false },
];

export const BLOGS = [
  {
    emoji: "📚",
    tag:   "SAT Strategy",
    title: "How to Score 1500+ on the SAT: A Proven Study Plan",
    meta:  "8 min read · Study Abroad",
  },
  {
    emoji: "🎯",
    tag:   "GMAT Guide",
    title: "The Complete GMAT 720+ Blueprint for Indian MBA Aspirants",
    meta:  "12 min read · MBA Admissions",
  },
  {
    emoji: "🌍",
    tag:   "Ivy League",
    title: "What Ivy League Admissions Officers Actually Look For in 2026",
    meta:  "10 min read · Profile Strategy",
  },
  {
    emoji: "🤖",
    tag:   "Tech Careers",
    title: "Careers in AI: Skills, Salaries & How to Break In Without a CS Degree",
    meta:  "9 min read · Career Strategy",
  },
];

export const BLOG_COLORS = [
  "linear-gradient(135deg,#dbeafe,#bfdbfe)",
  "linear-gradient(135deg,#fef3c7,#fde68a)",
  "linear-gradient(135deg,#d1fae5,#a7f3d0)",
  "linear-gradient(135deg,#fce7f3,#fbcfe8)",
];

// data/footer.ts

export const FOOTER_BRAND = {
  logoText: "Omni",
  logoSpan: "Quest",
  tagline:
    "India's premium global admissions strategy firm — designing globally competitive futures through psychometric intelligence and profile architecture.",
  offices: [
    {
      label: "Main Office",
      address:
        "1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009",
    },
    {
      label: "Regional Office",
      address:
        "F-45, First Floor, South City II, Sector 50, Gurugram, Haryana 122018",
    },
    {
      label: "Corporate Office",
      address:
        "Bangalore Alpha Lab, #1316/C, 1st Floor, 9th Cross, J.P. Nagar 2nd Phase, Bangalore – 560078",
    },
  ],
};

export const FOOTER_COLS = [
  {
    title: "Strategy",
    links: [
      { label: "Ivy League Admissions",   href: "https://eduquest.org.in/" },
      { label: "UG Profile Building",     href: "https://eduquest.org.in/" },
      { label: "MBA Admissions",          href: "https://eduquest.org.in/" },
      { label: "GMAT Strategy",           href: "https://eduquest.org.in/" },
      { label: "Tech Career Programs",    href: "https://eduquest.org.in/eduquest-aptech/" },
      { label: "Narrative Intelligence Scan", href: "https://omniquestui.vercel.app/personality-test" },
    ],
  },
  {
    title: "Offices",
    links: [
      { label: "Delhi / NCR",        href: "https://eduquest.org.in/contact-us/" },
      { label: "Bangalore",          href: "https://eduquest.org.in/contact-us/" },
      { label: "Mumbai",             href: "https://eduquest.org.in/contact-us/" },
      { label: "Hyderabad",          href: "https://eduquest.org.in/contact-us/" },
      { label: "Online — Pan India", href: "https://eduquest.org.in/contact-us/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About OmniQuest",    href: "https://eduquest.org.in/about-us/" },
      { label: "Success Outcomes",   href: "https://eduquest.org.in/our-achievements/" },
      { label: "Strategic Insights", href: "https://eduquest.org.in/blog" },
      { label: "FAQs",               href: "#" },
      { label: "Contact Us",         href: "https://eduquest.org.in/contact-us/" },
      { label: "Join Our Team",      href: "https://eduquest.org.in/franchise/" },
    ],
  },
];

export const FOOTER_BOTTOM = {
  copy: "© 2026 OmniQuest. All rights reserved. A premium division of EduQuest · MbaWizards · Aptech.",
  links: [
    { label: "Privacy Policy",  href: "https://eduquest.org.in/privacy-policy/" },
    { label: "Terms of Service", href: "https://eduquest.org.in/terms-of-use/" },
    { label: "Cookie Policy",   href: "#" },
  ],
};


export const DECISION_CTA = {
  tag: "✦ Not sure where to begin?",
  heading: {
    line1: "Start with a structured",
    line2: "evaluation of your",
    line3Em: "current positioning.",
  },
  body: "Your outcome is not defined by effort — but by how you are positioned. Choose the pathway aligned with your stage, and enter a system designed for high-performance outcomes.",
  buttons: [
    {
      label: "Run Your Narrative Intelligence Scan",
      href: "/personality-test",
      primary: true,
    },
    {
      label: "Begin Strategy →",
      href: "#pathways",
      primary: false,
    },
  ],
};