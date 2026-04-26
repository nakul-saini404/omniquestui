// ─── data/constants.ts ───────────────────────────────────────────────────────
// All static data arrays extracted from page.tsx

export const PATHWAYS = [
    {
      icon: "🏛",
      division: "School Division · EduQuest",
      title: "Ivy League & Global UG Admissions",
      href: "./eduQuest",
      desc: "End-to-end admissions architecture for students targeting Ivy League, Oxbridge, and top-50 global universities — from cognitive profiling to offer letter.",
      features: [
        "SAT / ACT / AP Coaching",
        "Ivy League Profile Building",
        "Essay & Application Architecture",
        "Scholarship & Financial Aid Strategy",
      ],
      shortName: "School Strategy",
    },
    {
      icon: "💼",
      division: "MBA Division · MbaWizards",
      title: "Elite MBA & Master's Admissions",
      href: "https://eduquest.org.in/",
      desc: "Precision MBA consulting for M7, ISB, INSEAD, and top European schools — built by former admissions officers and alumni of the programmes themselves.",
      features: [
        "GMAT / GRE Strategy (720+ avg)",
        "School Selection Architecture",
        "Essay & Interview Coaching",
        "Post-MBA Career Positioning",
      ],
      shortName: "MBA Strategy",
    },
    {
      icon: "⚡",
      division: "Tech & Skills Division · Aptech",
      title: "Future-Ready Career Acceleration",
      href: "https://eduquest.org.in/eduquest-aptech/",
      desc: "Industry-designed programmes in AI, Data Science, and technology — built for professionals who want to pivot fast and land elite roles in the digital economy.",
      features: [
        "AI & Data Science Bootcamp",
        "Tech Career Strategy",
        "Portfolio & Project Architecture",
        "Placement & Hiring Support",
      ],
      shortName: "Tech Pathways",
    },
  ];
  
  export const WHY = [
    {
      title: "We Don't Coach. We Build Profiles.",
      desc: "Every engagement begins with a full strategic audit — not a course enrollment. We architect your academic and professional profile from first principles.",
    },
    {
      title: "Ivy League & Top 50 Strategy",
      desc: "Our consultants have personally navigated Harvard, Wharton, MIT, and INSEAD admissions. We bring insider precision — not guesswork.",
    },
    {
      title: "End-to-End Architecture",
      desc: "From psychometric assessment to visa approval — we manage every milestone of your journey with dedicated strategy consultants.",
    },
    {
      title: "Leadership by Design",
      desc: "We engineer the extracurricular profile, leadership narrative, and essay architecture that admissions committees at elite schools actually reward.",
    },
    {
      title: "Data-Driven Decisions",
      desc: "We analyse thousands of successful applicant profiles to give you a statistically-informed strategy — not hope and guesswork.",
    },
    {
      title: "Long-Term Career Positioning",
      desc: "Our work does not stop at admission. We align your university choice and profile to your 10-year career trajectory from day one.",
    },
  ];
  
  export const METRICS = [
    { badge: "Profile Outcomes", target: 2299, label: "Student Profiles Designed" },
    { badge: "UG Strategy", target: 1839, label: "Undergraduate Admits" },
    { badge: "MBA Division", target: 460, label: "MBA Admits Secured" },
    { badge: "Scholarships", target: 115, label: "Scholarships Won (₹Cr+)" },
  ];
  
  export const MAP_LABELS = [
    { name: "Canada", top: "18%", left: "14%", gold: false },
    { name: "United States", top: "30%", left: "10%", gold: false },
    { name: "United Kingdom", top: "22%", left: "40%", gold: false },
    { name: "Europe", top: "30%", left: "46%", gold: false },
    { name: "India", top: "50%", left: "58%", gold: true, flag: "🇮🇳" },
    { name: "Australia", top: "68%", left: "70%", gold: false },
  ];
  
  export const BLOGS = [
    {
      emoji: "📚",
      tag: "SAT Strategy",
      title: "How to Score 1500+ on the SAT: A Proven Study Plan",
      meta: "8 min read · Study Abroad",
    },
    {
      emoji: "🎯",
      tag: "GMAT Guide",
      title: "The Complete GMAT 720+ Blueprint for Indian MBA Aspirants",
      meta: "12 min read · MBA Admissions",
    },
    {
      emoji: "🌍",
      tag: "Ivy League",
      title: "What Ivy League Admissions Officers Actually Look For in 2026",
      meta: "10 min read · Profile Strategy",
    },
    {
      emoji: "🤖",
      tag: "Tech Careers",
      title: "Careers in AI: Skills, Salaries & How to Break In Without a CS Degree",
      meta: "9 min read · Career Strategy",
    },
  ];
  
  export const BLOG_COLORS = [
    "linear-gradient(135deg,#dbeafe,#bfdbfe)",
    "linear-gradient(135deg,#fef3c7,#fde68a)",
    "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    "linear-gradient(135deg,#fce7f3,#fbcfe8)",
  ];
  
  export const FOOTER_COLS = [
    {
      title: "Strategy",
      links: [
        { label: "Ivy League Admissions", href: "https://eduquest.org.in/", external: true },
        { label: "UG Profile Building", href: "https://eduquest.org.in/", external: true },
        { label: "MBA Admissions", href: "https://eduquest.org.in/", external: true },
        { label: "GMAT Strategy", href: "https://eduquest.org.in/", external: true },
        { label: "Tech Career Programs", href: "https://eduquest.org.in/eduquest-aptech/", external: true },
        { label: "Psychometric Assessment", href: "/personality-test", external: false },
      ],
    },
    {
      title: "Offices",
      links: [
        { label: "Delhi / NCR", href: "https://eduquest.org.in/contact-us/", external: true },
        { label: "Bangalore", href: "https://eduquest.org.in/contact-us/", external: true },
        { label: "Mumbai", href: "https://eduquest.org.in/contact-us/", external: true },
        { label: "Hyderabad", href: "https://eduquest.org.in/contact-us/", external: true },
        { label: "Online — Pan India", href: "https://eduquest.org.in/contact-us/", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About OmniQuest", href: "https://eduquest.org.in/about-us/", external: true },
        { label: "Success Outcomes", href: "https://eduquest.org.in/our-achievements/", external: true },
        { label: "Strategic Insights", href: "https://eduquest.org.in/blog", external: true },
        { label: "FAQs", href: "#faq", external: false },
        { label: "Contact Us", href: "https://eduquest.org.in/contact-us/", external: true },
        { label: "Join Our Team", href: "https://eduquest.org.in/franchise/", external: true },
      ],
    },
  ];