/* ─────────────────────────────────────────────────────────────
   lib/personality.ts — Complete Extended Personality Engine
───────────────────────────────────────────────────────────── */

export type Category =
  | "analytical" | "creative" | "leadership"
  | "empathy"    | "ambition" | "resilience";

export interface Question {
  id: number;
  text: string;
  category: Category;
  options: { label: string; value: number }[];
}

export interface CategoryScore {
  name: string; score: number; maxScore: number;
  percentage: number; label: string; description: string; color: string;
}

export interface StreamRecommendation {
  primary: string; alternates: string[];
  reasoning: string; subjects: string[];
  careerPathsFromStream: string[]; confidence: number;
}

/* ── Career types ── */
export interface CareerMatch {
  title: string; fit: number; icon: string;
  description: string;
  primarySkills: string[];
  salaryRange: string;
  priority: "primary" | "secondary";
}

/* ── University — restricted to USA / Canada / Australia / Europe ── */
export interface University {
  name: string;
  country: string;
  flag: string;
  program: string;
  ranking: string;
  website: string;
  region: "USA" | "Canada" | "Australia" | "Europe";
  tuitionRange?: string;   // e.g. "$45–80K/yr"
  whyForYou?: string;      // AI personalised reason
}

export interface FuturisticCareer {
  title: string; icon: string; description: string;
  blend: string;
  growthOutlook: string;
}

export interface AptitudeEnhancement {
  books: { title: string; author: string }[];
  apps: string[];
  techniques: string[];
  quote: string;
}

export interface SkillAttribute {
  skill: string; level: number;
  description: string; icon: string;
}

/* ── Exam — class-aware ── */
export interface ExamRecommendation {
  title: string;
  fullForm: string;
  classLevel: "Class 9–10" | "Class 11" | "Class 11–12" | "Class 12" | "Post Class 12";
  description: string;
  whyForYou: string;          // personalised to student's profile
  priority: "Essential" | "High" | "Medium";
  preparationTime: string;    // e.g. "8–12 months"
  link: string;
}

/* ── Profile building item ── */
export interface ProfileBuildingItem {
  type: "degree" | "exam" | "certification" | "activity";
  title: string;
  description: string;
  priority: "Essential" | "High" | "Medium";
  link?: string;
  benefit?: string;        // Why this matters for the student
  importance?: string;     // Long-term career impact
  classLevel?: string;     // When to pursue: "Class 10", "Class 11–12", etc.
}

/* ── Profile building benefits (new section) ── */
export interface ProfileBuildingBenefits {
  overview: string;           // 2–3 sentence intro
  keyBenefits: {
    icon: string;
    title: string;
    description: string;      // 1–2 sentences
  }[];
  whyItMatters: string;       // Closing motivational paragraph
  timelineByClass: {
    classLevel: string;       // "Class 9–10", "Class 11", "Class 12"
    actions: string[];        // 2–4 actions per stage
  }[];
}

export interface Scholarship {
  name: string; country: string; amount: string;
  eligibility: string; deadline: string; link: string;
}

export interface BestCollege {
  name: string; country: string; flag: string;
  program: string; acceptanceRate: string; avgPackage: string;
  region: "USA" | "Canada" | "Australia" | "Europe";
}

export interface PersonalityReport {
  /* core */
  studentName: string; personalityType: string; tagline: string;
  overallScore: number; categories: CategoryScore[];
  strengths: string[]; growthAreas: string[];
  aiInsight: string; programRecommendation: string;
  streamRecommendation: StreamRecommendation;

  /* career */
  careerMatches: CareerMatch[];
  secondaryCareerMatches: CareerMatch[];

  /* universities — USA / Canada / Australia / Europe ONLY */
  universities: University[];

  /* future */
  futuristicCareers: FuturisticCareer[];

  /* aptitude */
  aptitudeEnhancement: AptitudeEnhancement;

  /* skills */
  skillAttributes: SkillAttribute[];

  /* profile building — fully AI generated */
  profileBuilding: {
    degrees: ProfileBuildingItem[];
    exams: ExamRecommendation[];      // ← replaces old ProfileBuildingItem[] for exams
    activities: string[];
    importantTip: string;
    quote: string;
  };

  /* NEW: profile building benefits section */
  profileBuildingBenefits: ProfileBuildingBenefits;

  /* scholarships & colleges */
  scholarships: Scholarship[];
  bestColleges: BestCollege[];

  /* contact */
  adminContact: { email: string; phone: string; name: string };
}

/* ══════════════════════════════════════════════════════════════
   QUESTIONS
══════════════════════════════════════════════════════════════ */

export const PERSONALITY_QUESTIONS: Question[] = [
  { id:1, category:"analytical", text:"When solving a complex problem, you prefer to:", options:[{label:"Break it into smaller logical steps",value:4},{label:"Look for patterns and trends first",value:3},{label:"Discuss with others to get perspectives",value:2},{label:"Trust your gut instinct",value:1}] },
  { id:2, category:"analytical", text:"How do you feel about working with data and numbers?", options:[{label:"Love it — data reveals the truth",value:4},{label:"Useful when needed",value:3},{label:"Neutral — I manage when required",value:2},{label:"I prefer ideas over numbers",value:1}] },
  { id:3, category:"analytical", text:"When you encounter conflicting information, you:", options:[{label:"Cross-check sources and build evidence",value:4},{label:"Weigh the most logical argument",value:3},{label:"Ask someone more knowledgeable",value:2},{label:"Go with what feels right",value:1}] },
  { id:4, category:"creative", text:"When given an open-ended task, you typically:", options:[{label:"Generate many unique ideas first",value:4},{label:"Find an innovative twist on existing ideas",value:3},{label:"Research what others have done",value:2},{label:"Follow a proven process",value:1}] },
  { id:5, category:"creative", text:"Which best describes how you communicate ideas?", options:[{label:"Through visuals, stories, or metaphors",value:4},{label:"Mix of storytelling and logic",value:3},{label:"Structured presentations with data",value:2},{label:"Direct, to-the-point explanations",value:1}] },
  { id:6, category:"creative", text:"When you have free time, you are most drawn to:", options:[{label:"Creating something — writing, art, music",value:4},{label:"Exploring new ideas or learning something",value:3},{label:"Socialising or outdoor activities",value:2},{label:"Relaxing with familiar routines",value:1}] },
  { id:7, category:"leadership", text:"In a group project, you naturally:", options:[{label:"Step up to lead and coordinate",value:4},{label:"Help define direction but share leadership",value:3},{label:"Contribute strongly to execution",value:2},{label:"Focus on doing your part well",value:1}] },
  { id:8, category:"leadership", text:"When conflict arises in a team, you:", options:[{label:"Mediate and drive towards resolution",value:4},{label:"Voice your perspective clearly",value:3},{label:"Try to stay neutral",value:2},{label:"Focus on your own tasks",value:1}] },
  { id:9, category:"leadership", text:"When a group has no clear direction, you:", options:[{label:"Immediately propose a plan and rally others",value:4},{label:"Suggest ideas but wait for consensus",value:3},{label:"Wait for someone else to take charge",value:2},{label:"Work independently on your piece",value:1}] },
  { id:10, category:"empathy", text:"When a friend or colleague is struggling, you:", options:[{label:"Listen deeply before offering help",value:4},{label:"Offer both emotional support and solutions",value:3},{label:"Jump in with practical advice",value:2},{label:"Give them space to figure it out",value:1}] },
  { id:11, category:"empathy", text:"How easily can you sense someone else's emotions?", options:[{label:"Very easily — I pick up subtle cues",value:4},{label:"Usually, if I pay attention",value:3},{label:"Sometimes — depends on the person",value:2},{label:"I focus more on actions than feelings",value:1}] },
  { id:12, category:"empathy", text:"After a difficult conversation, you typically:", options:[{label:"Reflect on how the other person felt",value:4},{label:"Think about both sides equally",value:3},{label:"Focus on what was said, not emotions",value:2},{label:"Move on quickly without overthinking",value:1}] },
  { id:13, category:"ambition", text:"Where do you see yourself in 10 years?", options:[{label:"Leading an organisation or building my own",value:4},{label:"At the top of my field / subject expert",value:3},{label:"In a stable, rewarding role with growth",value:2},{label:"Living comfortably — exact role doesn't matter",value:1}] },
  { id:14, category:"ambition", text:"How do you feel about taking big career risks?", options:[{label:"Excited — high risk means high reward",value:4},{label:"Willing if the opportunity is strong",value:3},{label:"Cautious — I evaluate carefully",value:2},{label:"I prefer security over big gambles",value:1}] },
  { id:15, category:"ambition", text:"When you set a goal, you:", options:[{label:"Pursue it relentlessly until achieved",value:4},{label:"Work hard but adapt if circumstances change",value:3},{label:"Try your best but don't stress over outcomes",value:2},{label:"Set loose goals and see where life takes you",value:1}] },
  { id:16, category:"resilience", text:"When you fail at something important, you typically:", options:[{label:"Analyse what went wrong and try again stronger",value:4},{label:"Take a break then restart with a new plan",value:3},{label:"Seek support from others before moving on",value:2},{label:"It takes a while to bounce back",value:1}] },
  { id:17, category:"resilience", text:"Under intense pressure (deadlines, high stakes), you:", options:[{label:"Thrive — pressure sharpens my focus",value:4},{label:"Manage well with a clear plan",value:3},{label:"Get it done but feel the stress",value:2},{label:"Struggle and need more time",value:1}] },
  { id:18, category:"resilience", text:"When your plans fall through unexpectedly, you:", options:[{label:"Pivot quickly and find a better path",value:4},{label:"Regroup and adjust the plan systematically",value:3},{label:"Feel frustrated but recover gradually",value:2},{label:"Find it hard to adapt quickly",value:1}] },
];

export const TOTAL_QUESTIONS = PERSONALITY_QUESTIONS.length;

const CATEGORY_COLORS: Record<string, string> = {
  analytical:"#5b8aff", creative:"#a78bfa", leadership:"#00C9B1",
  empathy:"#f472b6", ambition:"#fb923c", resilience:"#34d399",
};

/* ══════════════════════════════════════════════════════════════
   FALLBACK COMPUTE  (used only when AI call fails)
══════════════════════════════════════════════════════════════ */

export function computeReport(
  answers: Record<number, number>,
  studentName: string
): PersonalityReport {
  const catTotals: Record<string, { sum: number; max: number }> = {};
  for (const q of PERSONALITY_QUESTIONS) {
    if (!catTotals[q.category]) catTotals[q.category] = { sum: 0, max: 0 };
    catTotals[q.category].max += 4;
    catTotals[q.category].sum += answers[q.id] ?? 0;
  }

  const categories: CategoryScore[] = Object.entries(catTotals).map(([cat, { sum, max }]) => {
    const pct = Math.round((sum / max) * 100);
    return {
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      score: sum, maxScore: max, percentage: pct,
      label: pct>=80?"Exceptional":pct>=60?"Strong":pct>=40?"Developing":"Emerging",
      description: `Your ${cat} dimension scores ${pct}%.`,
      color: CATEGORY_COLORS[cat] ?? "#5b8aff",
    };
  });

  const overallScore = Math.round(categories.reduce((a,c)=>a+c.percentage,0)/categories.length);
  const sorted = [...categories].sort((a,b)=>b.percentage-a.percentage);

  return {
    studentName, overallScore, categories,
    personalityType: "Balanced Achiever",
    tagline: "You bring a well-rounded approach to every challenge.",
    strengths: sorted.slice(0,3).map(c=>`${c.name} (${c.percentage}%)`),
    growthAreas: sorted.slice(-2).map(c=>`Build on your ${c.name.toLowerCase()} dimension`),
    aiInsight: `${studentName}, your balanced profile positions you for a wide range of global programs.`,
    programRecommendation: "Personalised Counselling — Book a Free Session",
    streamRecommendation: {
      primary:"Commerce", alternates:["Science (PCM)","Arts / Humanities"],
      reasoning:"Your balanced profile suggests Commerce as a strong default.",
      subjects:["Economics","Business Studies","Accountancy","Mathematics"],
      careerPathsFromStream:["MBA","Finance","Entrepreneurship","CA"],
      confidence:65,
    },
    careerMatches: [
      { title:"Management Consultant", fit:88, icon:"📊", description:"Helps organisations solve complex business problems.", primarySkills:["Analytical Thinking","Communication","Strategy"], salaryRange:"₹12–40 LPA", priority:"primary" },
      { title:"Product Manager", fit:84, icon:"🎯", description:"Leads product development from concept to launch.", primarySkills:["Leadership","User Research","Data Analysis"], salaryRange:"₹15–50 LPA", priority:"primary" },
      { title:"Data Scientist", fit:80, icon:"🧠", description:"Extracts insights from large datasets using ML and statistics.", primarySkills:["Python","Statistics","Machine Learning"], salaryRange:"₹10–45 LPA", priority:"primary" },
      { title:"Entrepreneur", fit:76, icon:"🚀", description:"Builds and scales new businesses or startups.", primarySkills:["Vision","Resilience","Leadership"], salaryRange:"Variable", priority:"primary" },
    ],
    secondaryCareerMatches: [
      { title:"UX Researcher", fit:72, icon:"🔍", description:"Studies user behaviour to improve product design.", primarySkills:["Empathy","Research Methods","Synthesis"], salaryRange:"₹8–30 LPA", priority:"secondary" },
      { title:"Business Analyst", fit:68, icon:"📋", description:"Bridges business needs with tech solutions.", primarySkills:["Analysis","Documentation","Communication"], salaryRange:"₹8–28 LPA", priority:"secondary" },
    ],
    universities: [
      { name:"University of Toronto", country:"Canada", flag:"🇨🇦", program:"Business / CS / Engineering", ranking:"#21 World", website:"https://utoronto.ca", region:"Canada" },
      { name:"University of Melbourne", country:"Australia", flag:"🇦🇺", program:"Business / Sciences / Law", ranking:"#33 World", website:"https://unimelb.edu.au", region:"Australia" },
      { name:"Harvard University", country:"USA", flag:"🇺🇸", program:"Business / Law / Medicine", ranking:"#4 World", website:"https://harvard.edu", region:"USA" },
      { name:"University of Oxford", country:"UK (Europe)", flag:"🇬🇧", program:"PPE / Law / Sciences", ranking:"#1 World", website:"https://ox.ac.uk", region:"Europe" },
      { name:"ETH Zurich", country:"Switzerland (Europe)", flag:"🇨🇭", program:"Engineering / Sciences", ranking:"#7 World", website:"https://ethz.ch", region:"Europe" },
      { name:"Stanford University", country:"USA", flag:"🇺🇸", program:"Business / CS / Engineering", ranking:"#3 World", website:"https://stanford.edu", region:"USA" },
    ],
    futuristicCareers: [
      { title:"AI Ethics Officer", icon:"🤖", description:"Ensures AI systems are fair, transparent and human-aligned.", blend:"AI + Philosophy + Law", growthOutlook:"Very High — 2025 onwards" },
      { title:"Virtual Reality Experience Designer", icon:"🥽", description:"Crafts immersive VR/AR experiences for education, entertainment and therapy.", blend:"Design + Technology + Psychology", growthOutlook:"High — Metaverse economy" },
      { title:"Sustainability Strategist", icon:"🌱", description:"Helps organisations build carbon-neutral, ESG-compliant strategies.", blend:"Environmental Science + Business + Policy", growthOutlook:"Very High — Global mandate" },
      { title:"Neurotech Product Manager", icon:"🧬", description:"Leads brain-computer interface product development.", blend:"Neuroscience + Engineering + Product", growthOutlook:"Emerging — 2028+ opportunity" },
      { title:"Cybersecurity Architect", icon:"🔐", description:"Designs enterprise-level security systems against next-gen threats.", blend:"CS + Cryptography + Systems Thinking", growthOutlook:"Very High — Every industry" },
    ],
    aptitudeEnhancement: {
      books: [
        { title:"A Modern Approach to Logical Reasoning", author:"R.S. Aggarwal" },
        { title:"Shortcuts in Reasoning", author:"Disha Experts" },
        { title:"Analytical Reasoning", author:"M.K. Pandey" },
      ],
      apps: ["Lumosity","Brilliant","Elevate","Peak","NeuroNation","Sudoku","Brain Wars","Crossword"],
      techniques: [
        "Study logical fallacies to evaluate arguments critically",
        "Break problems into smaller components before solving",
        "Practice under timed conditions to improve speed and accuracy",
        "Use mind mapping to connect ideas and spot patterns",
        "Solve puzzles daily for 20 minutes to build cognitive agility",
      ],
      quote: "Aptitude ignites potential, turning passion into purpose and dreams into reality.",
    },
    skillAttributes: [
      { skill:"Communication",    level:82, description:"Ability to convey ideas clearly across audiences.", icon:"💬" },
      { skill:"Problem-Solving",  level:78, description:"Structured approach to breaking down complex issues.", icon:"🧩" },
      { skill:"Leadership",       level:74, description:"Natural tendency to guide, motivate and coordinate teams.", icon:"🏆" },
      { skill:"Time Management",  level:70, description:"Capacity to prioritise and execute efficiently under pressure.", icon:"⏱" },
      { skill:"Adaptability",     level:76, description:"Ease of pivoting when circumstances change unexpectedly.", icon:"🔄" },
      { skill:"Critical Thinking",level:80, description:"Evaluating information and arguments with logical rigour.", icon:"🔬" },
    ],
    profileBuilding: {
      degrees: [
        { type:"degree", title:"Bachelor of Science in Computer Science", description:"Opens tech and data roles globally.", priority:"High", link:"https://eduquest.org.in/", benefit:"High global demand with strong salary prospects.", importance:"Foundation for AI, software, and product careers.", classLevel:"Post Class 12" },
        { type:"degree", title:"Bachelor of Business Administration (BBA)", description:"Develops core business, finance and management competencies.", priority:"High", link:"https://eduquest.org.in/", benefit:"Builds entrepreneurial and corporate leadership skills.", importance:"Gateway to MBA, consulting, and C-suite roles.", classLevel:"Post Class 12" },
        { type:"degree", title:"Bachelor of Arts in Psychology", description:"Builds deep understanding of human behaviour.", priority:"Medium", link:"https://eduquest.org.in/", benefit:"Ideal for HR, UX research, therapy and counselling.", importance:"Growing field with interdisciplinary applications.", classLevel:"Post Class 12" },
      ],
      exams: [
        { title:"SAT", fullForm:"Scholastic Assessment Test", classLevel:"Class 11–12", description:"Opens 50+ leading universities in India and global admission to USA/Canada/Australia universities.", whyForYou:"Your analytical strength makes you a strong SAT candidate — especially in Math and Evidence-Based Reading.", priority:"Essential", preparationTime:"6–12 months", link:"https://collegereadiness.collegeboard.org/sat" },
        { title:"IELTS / TOEFL", fullForm:"English Language Proficiency Tests", classLevel:"Class 11–12", description:"English proficiency test required by all UK, USA, Canada, Australia universities.", whyForYou:"A must-have for all international university applications — start early in Class 11.", priority:"Essential", preparationTime:"2–4 months", link:"https://www.ielts.org" },
        { title:"AP Exams", fullForm:"Advanced Placement Examinations", classLevel:"Class 11–12", description:"College-level courses recognised by 4,000+ US/Canadian universities for credit transfer.", whyForYou:"Taking AP courses shows academic rigour and can earn you college credits before you even enrol.", priority:"High", preparationTime:"Full academic year", link:"https://apstudents.collegeboard.org" },
        { title:"GMAT", fullForm:"Graduate Management Admission Test", classLevel:"Post Class 12", description:"Required for MBA admissions at M7 and top global business schools.", whyForYou:"If MBA is your goal, start GMAT prep 1–2 years into your undergraduate degree.", priority:"Medium", preparationTime:"4–6 months", link:"https://www.mba.com/exams/gmat" },
      ],
      activities: [
        "Join Model United Nations (MUN) to build leadership and public speaking",
        "Participate in national-level Olympiads (Math, Science, Economics)",
        "Take on a school club leadership role (captain, head, editor)",
        "Complete a summer internship or research project before Class 12",
        "Build a personal project, portfolio or startup idea by Class 11",
      ],
      importantTip: "Take SAT and you can apply to 50+ leading universities in India and avoid multiple entrance tests. To navigate SAT preparation, reach out to EduQuest at eduquest.org.in",
      quote: "The difference between Ordinary and Extraordinary is that little extra.",
    },
    profileBuildingBenefits: {
      overview: "Building a strong academic and extracurricular profile from Class 9 onwards significantly increases your chances of admission to top global universities and scholarship opportunities.",
      keyBenefits: [
        { icon:"🏆", title:"Stronger University Applications", description:"A well-rounded profile gives you a competitive edge over thousands of applicants at top universities in USA, Canada, Australia and Europe." },
        { icon:"💰", title:"Scholarship Eligibility", description:"Many merit scholarships (Chevening, Fulbright, Erasmus) require demonstrated leadership, community involvement and academic excellence built over years." },
        { icon:"🌍", title:"Global Career Opportunities", description:"International degree + strong profile = access to global job markets with 3–5x higher earning potential compared to domestic-only qualifications." },
        { icon:"🧠", title:"Personal Growth & Clarity", description:"The process of building your profile forces you to discover what you're truly passionate about — leading to better career decisions." },
        { icon:"⚡", title:"Early Competitive Advantage", description:"Students who start profile-building in Class 9–10 arrive at Class 12 with a story that no last-minute cramming can replicate." },
      ],
      whyItMatters: "Top universities look far beyond grades — they want students who lead, create, serve, and grow. Your profile is your story, and the earlier you start writing it, the more compelling it becomes.",
      timelineByClass: [
        { classLevel:"Class 9–10", actions:["Build foundational study habits and explore interests","Participate in school clubs, sports, or arts","Attempt Olympiads and inter-school competitions","Research different career paths and streams"] },
        { classLevel:"Class 11", actions:["Choose stream aligned with career goals","Begin SAT / AP exam preparation","Take on a leadership role in school or community","Start building a portfolio or personal project"] },
        { classLevel:"Class 12", actions:["Appear for SAT, IELTS/TOEFL and AP Exams","Finalise university shortlist and write application essays","Apply for scholarships early — most deadlines are Oct–Jan","Secure strong recommendation letters from teachers"] },
      ],
    },
    scholarships: [
      { name:"Fulbright Scholarship", country:"USA 🇺🇸", amount:"Full funding", eligibility:"Graduate students — exceptional academic record", deadline:"October annually", link:"https://fulbrightprogram.org" },
      { name:"Chevening Scholarship", country:"UK 🇬🇧", amount:"Full funding + stipend", eligibility:"1+ year work experience, leadership potential", deadline:"November annually", link:"https://chevening.org" },
      { name:"Erasmus Mundus", country:"Europe 🇪🇺", amount:"€1,000–1,400/month", eligibility:"UG/PG students — merit-based", deadline:"January annually", link:"https://erasmus-plus.ec.europa.eu" },
      { name:"Vanier Canada Graduate", country:"Canada 🇨🇦", amount:"CAD $50,000/year", eligibility:"Doctoral students with leadership and research excellence", deadline:"November annually", link:"https://vanier.gc.ca" },
      { name:"Australia Awards", country:"Australia 🇦🇺", amount:"Full funding + living allowance", eligibility:"Citizens of eligible developing countries", deadline:"April–June annually", link:"https://australiaawards.gov.au" },
    ],
    bestColleges: [
      { name:"MIT", country:"USA 🇺🇸", flag:"🇺🇸", program:"Engineering / Data Science / AI", acceptanceRate:"3.9%", avgPackage:"$130K+", region:"USA" },
      { name:"University of British Columbia", country:"Canada 🇨🇦", flag:"🇨🇦", program:"Business / Sciences / Engineering", acceptanceRate:"52%", avgPackage:"CAD $75K+", region:"Canada" },
      { name:"University of Sydney", country:"Australia 🇦🇺", flag:"🇦🇺", program:"Business / Law / Engineering", acceptanceRate:"30%", avgPackage:"AUD $85K+", region:"Australia" },
      { name:"London School of Economics", country:"UK 🇬🇧", flag:"🇬🇧", program:"Economics / Finance / Law", acceptanceRate:"8%", avgPackage:"£55K+", region:"Europe" },
      { name:"Stanford University", country:"USA 🇺🇸", flag:"🇺🇸", program:"CS / Business / Engineering", acceptanceRate:"3.7%", avgPackage:"$140K+", region:"USA" },
      { name:"University of Amsterdam", country:"Netherlands 🇳🇱", flag:"🇳🇱", program:"Business / Social Sciences", acceptanceRate:"35%", avgPackage:"€55K+", region:"Europe" },
    ],
    adminContact: {
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name:  "EduQuest Admissions Team",
    },
  };
}