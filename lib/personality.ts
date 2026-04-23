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

/* ── NEW extended types ── */
export interface CareerMatch {
  title: string; fit: number; icon: string;
  description: string;           // what the role does
  primarySkills: string[];       // top 3 skills needed
  salaryRange: string;           // e.g. "₹8–35 LPA"
  priority: "primary" | "secondary";
}

export interface University {
  name: string; country: string; flag: string;
  program: string; ranking: string; website: string;
}

export interface FuturisticCareer {
  title: string; icon: string; description: string;
  blend: string;                 // e.g. "AI + Psychology"
  growthOutlook: string;        // e.g. "Very High — 2030s onwards"
}

export interface AptitudeEnhancement {
  books: { title: string; author: string }[];
  apps: string[];
  techniques: string[];
  quote: string;
}

export interface SkillAttribute {
  skill: string; level: number;  // 0–100
  description: string; icon: string;
}

export interface ProfileBuildingItem {
  type: "degree" | "exam" | "certification" | "activity";
  title: string; description: string; priority: string;
  link?: string;
}

export interface Scholarship {
  name: string; country: string; amount: string;
  eligibility: string; deadline: string; link: string;
}

export interface BestCollege {
  name: string; country: string; flag: string;
  program: string; acceptanceRate: string; avgPackage: string;
}

export interface PersonalityReport {
  /* core */
  studentName: string; personalityType: string; tagline: string;
  overallScore: number; categories: CategoryScore[];
  strengths: string[]; growthAreas: string[];
  aiInsight: string; programRecommendation: string;
  streamRecommendation: StreamRecommendation;

  /* ── NEW extended sections ── */
  careerMatches: CareerMatch[];
  secondaryCareerMatches: CareerMatch[];
  universities: University[];
  futuristicCareers: FuturisticCareer[];
  aptitudeEnhancement: AptitudeEnhancement;
  skillAttributes: SkillAttribute[];
  profileBuilding: {
    degrees: ProfileBuildingItem[];
    exams: ProfileBuildingItem[];
    activities: string[];
    importantTip: string;
    quote: string;
  };
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
   FALLBACK COMPUTE
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
    streamRecommendation: { primary:"Commerce", alternates:["Science (PCM)","Arts / Humanities"], reasoning:"Your balanced profile suggests Commerce as a strong default.", subjects:["Economics","Business Studies","Accountancy","Mathematics"], careerPathsFromStream:["MBA","Finance","Entrepreneurship","CA"], confidence:65 },

    /* Extended sections — fallback values */
    careerMatches: [
      { title:"Management Consultant", fit:88, icon:"📊", description:"Helps organisations solve complex business problems.", primarySkills:["Analytical Thinking","Communication","Strategy"], salaryRange:"₹12–40 LPA", priority:"primary" },
      { title:"Product Manager", fit:84, icon:"🎯", description:"Leads product development from concept to launch.", primarySkills:["Leadership","User Research","Data Analysis"], salaryRange:"₹15–50 LPA", priority:"primary" },
      { title:"Data Scientist", fit:80, icon:"🧠", description:"Extracts insights from large datasets using ML and statistics.", primarySkills:["Python","Statistics","Machine Learning"], salaryRange:"₹10–45 LPA", priority:"primary" },
      { title:"Entrepreneur", fit:76, icon:"🚀", description:"Builds and scales new businesses or startups.", primarySkills:["Vision","Resilience","Leadership"], salaryRange:"Variable", priority:"primary" },
    ],
    secondaryCareerMatches: [
      { title:"UX Researcher", fit:72, icon:"🔍", description:"Studies user behaviour to improve product design.", primarySkills:["Empathy","Research Methods","Synthesis"], salaryRange:"₹8–30 LPA", priority:"secondary" },
      { title:"Business Analyst", fit:68, icon:"📋", description:"Bridges the gap between business needs and tech solutions.", primarySkills:["Analysis","Documentation","Communication"], salaryRange:"₹8–28 LPA", priority:"secondary" },
    ],
    universities: [
      { name:"Stanford University", country:"USA", flag:"🇺🇸", program:"Business / CS / Engineering", ranking:"#3 World", website:"https://stanford.edu" },
      { name:"University of Oxford", country:"UK", flag:"🇬🇧", program:"PPE / Law / Sciences", ranking:"#1 World", website:"https://ox.ac.uk" },
      { name:"MIT", country:"USA", flag:"🇺🇸", program:"Engineering / Data Science", ranking:"#1 Engineering", website:"https://mit.edu" },
      { name:"University of Cambridge", country:"UK", flag:"🇬🇧", program:"Natural Sciences / Economics", ranking:"#2 World", website:"https://cam.ac.uk" },
      { name:"Harvard University", country:"USA", flag:"🇺🇸", program:"Business / Law / Medicine", ranking:"#4 World", website:"https://harvard.edu" },
      { name:"NUS Singapore", country:"Singapore", flag:"🇸🇬", program:"Business / Engineering / CS", ranking:"#8 Asia", website:"https://nus.edu.sg" },
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
        { type:"degree", title:"Bachelor of Science in Computer Science", description:"Focuses on theory and application of computing principles — opens tech and data roles globally.", priority:"High", link:"https://eduquest.org.in/" },
        { type:"degree", title:"Bachelor of Business Administration (BBA)", description:"Develops core business, finance and management competencies.", priority:"High", link:"https://eduquest.org.in/" },
        { type:"degree", title:"Bachelor of Arts in Psychology", description:"Builds deep understanding of human behaviour — ideal for HR, UX, therapy.", priority:"Medium", link:"https://eduquest.org.in/" },
      ],
      exams: [
        { type:"exam", title:"SAT", description:"Opens 50+ leading universities in India and global admission to USA/UK universities.", priority:"Essential", link:"https://collegereadiness.collegeboard.org/sat" },
        { type:"exam", title:"GMAT", description:"Required for MBA admissions at M7 and top global business schools.", priority:"High", link:"https://www.mba.com/exams/gmat" },
        { type:"exam", title:"GRE", description:"Needed for graduate programmes in sciences, engineering and humanities.", priority:"High", link:"https://www.ets.org/gre" },
        { type:"exam", title:"IELTS / TOEFL", description:"English proficiency test required by all UK, USA, Canada, Australia universities.", priority:"Essential", link:"https://www.ielts.org" },
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
    scholarships: [
      { name:"Fulbright Scholarship", country:"USA 🇺🇸", amount:"Full funding", eligibility:"Graduate students — exceptional academic record", deadline:"October annually", link:"https://fulbrightprogram.org" },
      { name:"Chevening Scholarship", country:"UK 🇬🇧", amount:"Full funding + stipend", eligibility:"1+ year work experience, leadership potential", deadline:"November annually", link:"https://chevening.org" },
      { name:"Erasmus Mundus", country:"Europe 🇪🇺", amount:"€1,000–1,400/month", eligibility:"UG/PG students — merit-based", deadline:"January annually", link:"https://erasmus-plus.ec.europa.eu" },
      { name:"Commonwealth Scholarship", country:"UK 🇬🇧", amount:"Full funding", eligibility:"Citizens of Commonwealth nations", deadline:"December annually", link:"https://cscuk.fcdo.gov.uk" },
      { name:"Rotary Foundation GSE", country:"Global 🌍", amount:"Full exchange funding", eligibility:"Young professionals 25–40", deadline:"Varies by district", link:"https://rotary.org" },
      { name:"QS Scholarships", country:"Various 🌐", amount:"Up to ₹40 Lakhs", eligibility:"Merit-based, varies by university", deadline:"Rolling", link:"https://scholarships.qs.com" },
    ],
    bestColleges: [
      { name:"IIT Bombay", country:"India 🇮🇳", flag:"🇮🇳", program:"B.Tech / M.Tech", acceptanceRate:"<1%", avgPackage:"₹18–80 LPA" },
      { name:"IIM Ahmedabad", country:"India 🇮🇳", flag:"🇮🇳", program:"MBA / PGP", acceptanceRate:"<1%", avgPackage:"₹35–90 LPA" },
      { name:"Stanford University", country:"USA 🇺🇸", flag:"🇺🇸", program:"Multiple", acceptanceRate:"3.7%", avgPackage:"$130K+" },
      { name:"London School of Economics", country:"UK 🇬🇧", flag:"🇬🇧", program:"Economics / Finance / Law", acceptanceRate:"8%", avgPackage:"£55K+" },
      { name:"NUS Singapore", country:"Singapore 🇸🇬", flag:"🇸🇬", program:"Business / CS / Engineering", acceptanceRate:"5%", avgPackage:"S$65K+" },
      { name:"INSEAD", country:"France / Singapore 🇫🇷", flag:"🇫🇷", program:"MBA", acceptanceRate:"30%", avgPackage:"€90K+" },
    ],
    adminContact: {
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name:  "EduQuest Admissions Team",
    },
  };
}