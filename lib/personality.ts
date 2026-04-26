/* ─────────────────────────────────────────────────────────────
   lib/personality.ts — Complete Extended Personality Engine
   with Class-Aware Logic, Country/Course Routing, and
   University Track Intelligence Matrix
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

/* ── University Track (from Intelligence Matrix) ── */
export type UniversityRegion = "USA" | "Canada" | "Australia" | "Europe" | "Singapore" | "UK" | "South Korea";

export interface UniversityTrack {
  region: UniversityRegion;
  flag: string;
  targetUniversities: string[];
  academicExpectations: string;
  testingStrategy: string;
  profileRequirements: string;
  keyStrategicInsight: string;
}

export const UNIVERSITY_TRACKS: UniversityTrack[] = [
  {
    region: "USA",
    flag: "🇺🇸",
    targetUniversities: ["Harvard", "Yale", "Princeton", "Stanford", "MIT", "Columbia", "UPenn", "Cornell", "Dartmouth", "Brown", "Duke", "Northwestern", "Johns Hopkins"],
    academicExpectations: "Very high academic consistency + rigorous subject selection",
    testingStrategy: "SAT/ACT strongly recommended + AP highly recommended",
    profileRequirements: "Highly structured, deeply focused profile building is essential. Only coherent, high-impact, narrative-driven profiles are competitive.",
    keyStrategicInsight: "Holistic evaluation — academics, narrative, and impact must align into one unified identity",
  },
  {
    region: "UK",
    flag: "🇬🇧",
    targetUniversities: ["Oxford", "Cambridge", "LSE", "Imperial", "UCL", "King's College London", "Edinburgh", "Manchester"],
    academicExpectations: "Deep subject specialization with strong academic consistency",
    testingStrategy: "SAT/AP (optional but recommended) + TMUA (Maths/Econ/CS) + ESAT (Engineering/Sciences) + UCAT (Medicine/Dentistry) + LNAT (Law) + TARA (select routes)",
    profileRequirements: "Highly focused, subject-aligned profile depth; extracurriculars must directly reinforce academic intent",
    keyStrategicInsight: "UK admissions are test + subject mastery driven, where entrance tests often define selection",
  },
  {
    region: "Canada",
    flag: "🇨🇦",
    targetUniversities: ["University of Toronto", "UBC", "McGill", "Waterloo", "McMaster", "Queens University"],
    academicExpectations: "Strong academic grades + consistency",
    testingStrategy: "SAT optional but helpful (not required for most programs)",
    profileRequirements: "Academic performance is primary filter. Balanced profile required; structured profile depth becomes important for highly competitive programs (Business, Engineering, Computer Science).",
    keyStrategicInsight: "Canada is academics-first, with selective profile importance in top professional programs",
  },
  {
    region: "Singapore",
    flag: "🇸🇬",
    targetUniversities: ["NUS", "NTU", "SMU"],
    academicExpectations: "Extremely high academic excellence",
    testingStrategy: "SAT recommended but not mandatory + AP recommended for competitive edge + TMUA-level quantitative reasoning highly valued",
    profileRequirements: "Sharp academic identity with clear subject direction; structured profile strengthens competitiveness but academics remain primary filter",
    keyStrategicInsight: "Highly competitive system prioritizing top-percentile academics and strong quantitative reasoning signals",
  },
  {
    region: "Australia",
    flag: "🇦🇺",
    targetUniversities: ["University of Melbourne", "ANU", "University of Sydney", "UNSW", "Monash"],
    academicExpectations: "Strong academic performance with consistent grades",
    testingStrategy: "SAT/AP not mandatory but recommended for scholarships; UCAT for medical pathways",
    profileRequirements: "Moderately structured profile; academics are primary, differentiation improves scholarship chances",
    keyStrategicInsight: "Flexible admissions system with strong scholarship-based differentiation logic",
  },
  {
    region: "Europe",
    flag: "🇪🇺",
    targetUniversities: ["ETH Zurich", "LMU Munich", "University of Amsterdam", "Heidelberg University", "TU Delft", "HEC Paris", "Sciences Po", "Bocconi University"],
    academicExpectations: "Strong subject alignment + academic rigor",
    testingStrategy: "SAT required in some programs depending on country/university",
    profileRequirements: "Academic-depth driven profiles; subject relevance is more important than extracurricular diversity",
    keyStrategicInsight: "Program-specific admissions; academically strict but less holistic",
  },
  {
    region: "South Korea",
    flag: "🇰🇷",
    targetUniversities: ["Seoul National University", "KAIST", "Yonsei", "Korea University"],
    academicExpectations: "Very high academic performance",
    testingStrategy: "SAT required for many international admissions routes",
    profileRequirements: "Strong academic consistency with focused subject strength required",
    keyStrategicInsight: "Highly exam-driven and academically selective system",
  },
];

/* ── University ── */
export interface University {
  name: string;
  country: string;
  flag: string;
  program: string;
  ranking: string;
  website: string;
  region: UniversityRegion;
  tuitionRange?: string;
  whyForYou?: string;
  requiredExams?: string[];
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
  whyForYou: string;
  priority: "Essential" | "High" | "Medium";
  preparationTime: string;
  link: string;
  benefit: string;
  targetCountries: string[];
}

/* ── Profile building item ── */
export interface ProfileBuildingItem {
  type: "degree" | "exam" | "certification" | "activity";
  title: string;
  description: string;
  priority: "Essential" | "High" | "Medium";
  link?: string;
  benefit?: string;
  importance?: string;
  classLevel?: string;
}

export interface ProfileBuildingBenefits {
  overview: string;
  keyBenefits: { icon: string; title: string; description: string }[];
  whyItMatters: string;
  timelineByClass: { classLevel: string; actions: string[] }[];
}

export interface Scholarship {
  name: string; country: string; amount: string;
  eligibility: string; deadline: string; link: string;
}

export interface BestCollege {
  name: string; country: string; flag: string;
  program: string; acceptanceRate: string; avgPackage: string;
  region: UniversityRegion;
}

/* ── Lead form data ── */
export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentClass: string;   // NEW — "8", "9", "10", "11", "12", "Graduate", "Working Professional"
  educationLevel?: string;
  programInterest?: string;
  age?: string;
  consent: boolean;
  // For Class 11/12 students — after quiz
  targetCountry?: string;   // e.g. "USA", "UK", "Canada", "Australia", "Europe", "Singapore", "South Korea"
  targetDegree?: string;    // e.g. "Engineering", "Business/MBA", "Medicine", "Law", "Arts & Design", "Sciences", "Computer Science"
}

/* ── Main report ── */
export interface PersonalityReport {
  studentName: string; personalityType: string; tagline: string;
  overallScore: number; categories: CategoryScore[];
  strengths: string[]; growthAreas: string[];
  aiInsight: string; programRecommendation: string;
  streamRecommendation?: StreamRecommendation;  // Only for Class 8–10
  targetCountry?: string;
  targetDegree?: string;
  careerMatches: CareerMatch[];
  secondaryCareerMatches: CareerMatch[];
  universities: University[];
  recommendedExams: ExamRecommendation[];   // Unified exam list derived from country + class
  futuristicCareers: FuturisticCareer[];
  aptitudeEnhancement: AptitudeEnhancement;
  skillAttributes: SkillAttribute[];
  profileBuilding: {
    degrees: ProfileBuildingItem[];
    exams: ExamRecommendation[];
    activities: string[];
    importantTip: string;
    quote: string;
  };
  profileBuildingBenefits: ProfileBuildingBenefits;
  scholarships: Scholarship[];
  bestColleges: BestCollege[];
  adminContact: { email: string; phone: string; name: string };
  currentClass?: string;
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

/* ── Helper: get track for country ── */
export function getTrackForCountry(country: string): UniversityTrack | undefined {
  return UNIVERSITY_TRACKS.find(t =>
    t.region.toLowerCase() === country.toLowerCase() ||
    (country === "UK" && t.region === "UK")
  );
}

/* ── Helper: determine flow type ── */
export type FlowType = "stream_recommendation" | "university_recommendation";

export function getFlowType(currentClass: string): FlowType {
  const classNum = parseInt(currentClass, 10);
  if (!isNaN(classNum) && classNum <= 10) return "stream_recommendation";
  return "university_recommendation";
}

/* ══════════════════════════════════════════════════════════════
   FALLBACK COMPUTE
══════════════════════════════════════════════════════════════ */

export function computeReport(
  answers: Record<number, number>,
  studentName: string,
  leadData?: Partial<LeadFormData>
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
  const flowType = getFlowType(leadData?.currentClass ?? "12");
  const targetCountry = leadData?.targetCountry ?? "USA";
  const track = getTrackForCountry(targetCountry);

  const streamRec: StreamRecommendation = {
    primary:"Commerce", alternates:["Science (PCM)","Arts / Humanities"],
    reasoning:"Your balanced profile suggests Commerce as a strong default.",
    subjects:["Economics","Business Studies","Accountancy","Mathematics"],
    careerPathsFromStream:["MBA","Finance","Entrepreneurship","CA"],
    confidence:65,
  };

  const baseExams: ExamRecommendation[] = [
    {
      title:"SAT", fullForm:"Scholastic Assessment Test",
      classLevel:"Class 11–12",
      description:`The SAT opens doors to 4,000+ universities globally. Target universities in ${targetCountry}: ${track?.targetUniversities.slice(0,3).join(", ")}.`,
      whyForYou:"Your analytical strength makes you a strong SAT candidate.",
      priority:"Essential", preparationTime:"6–12 months",
      link:"https://collegereadiness.collegeboard.org/sat",
      benefit:"Accepted by top universities across USA, Canada, and beyond.",
      targetCountries:["USA","Canada","Singapore","Australia"],
    },
    {
      title:"IELTS / TOEFL", fullForm:"English Language Proficiency Tests",
      classLevel:"Class 11–12",
      description:"English proficiency test required by all international universities.",
      whyForYou:"A non-negotiable gateway for all international university applications.",
      priority:"Essential", preparationTime:"2–4 months",
      link:"https://www.ielts.org",
      benefit:"Mandatory for admission. Aim for 7.0+ IELTS or 100+ TOEFL.",
      targetCountries:["USA","UK","Canada","Australia","Europe","Singapore"],
    },
  ];

  if (targetCountry === "UK") {
    baseExams.push({
      title:"UCAT/TMUA/LNAT", fullForm:"UK University Entrance Tests",
      classLevel:"Class 12",
      description:"Subject-specific UK entrance tests for Medicine (UCAT), Maths/Econ (TMUA), Law (LNAT).",
      whyForYou:"Required by Oxford, Cambridge and Russell Group universities for your chosen subject.",
      priority:"Essential", preparationTime:"3–6 months",
      link:"https://www.ucas.com",
      benefit:"Critical differentiator for UK top-tier admission.",
      targetCountries:["UK"],
    });
  }

  return {
    studentName, overallScore, categories,
    personalityType: "Balanced Achiever",
    tagline: "You bring a well-rounded approach to every challenge.",
    strengths: sorted.slice(0,3).map(c=>`${c.name} (${c.percentage}%)`),
    growthAreas: sorted.slice(-2).map(c=>`Build on your ${c.name.toLowerCase()} dimension`),
    aiInsight: `${studentName}, your balanced profile positions you for a wide range of global programs.`,
    programRecommendation: "Personalised Counselling — Book a Free Session",
    streamRecommendation: flowType === "stream_recommendation" ? streamRec : undefined,
    targetCountry,
    targetDegree: leadData?.targetDegree,
    currentClass: leadData?.currentClass,
    careerMatches: [
      { title:"Management Consultant", fit:88, icon:"📊", description:"Helps organisations solve complex business problems.", primarySkills:["Analytical Thinking","Communication","Strategy"], salaryRange:"₹12–40 LPA", priority:"primary" },
      { title:"Product Manager", fit:84, icon:"🎯", description:"Leads product development from concept to launch.", primarySkills:["Leadership","User Research","Data Analysis"], salaryRange:"₹15–50 LPA", priority:"primary" },
      { title:"Data Scientist", fit:80, icon:"🧠", description:"Extracts insights from large datasets.", primarySkills:["Python","Statistics","Machine Learning"], salaryRange:"₹10–45 LPA", priority:"primary" },
      { title:"Entrepreneur", fit:76, icon:"🚀", description:"Builds and scales new businesses.", primarySkills:["Vision","Resilience","Leadership"], salaryRange:"Variable", priority:"primary" },
    ],
    secondaryCareerMatches: [
      { title:"UX Researcher", fit:72, icon:"🔍", description:"Studies user behaviour to improve product design.", primarySkills:["Empathy","Research","Synthesis"], salaryRange:"₹8–30 LPA", priority:"secondary" },
      { title:"Business Analyst", fit:68, icon:"📋", description:"Bridges business needs with tech solutions.", primarySkills:["Analysis","Documentation","Communication"], salaryRange:"₹8–28 LPA", priority:"secondary" },
    ],
    universities: (track?.targetUniversities.slice(0,6) ?? ["Harvard","MIT","Stanford"]).map((name, i) => ({
      name, country: targetCountry, flag: track?.flag ?? "🌍",
      program: leadData?.targetDegree ?? "Business / Sciences",
      ranking: `Top ${(i+1)*10} in ${targetCountry}`,
      website: `https://www.google.com/search?q=${encodeURIComponent(name)}`,
      region: (targetCountry as UniversityRegion) ?? "USA",
    })),
    recommendedExams: baseExams,
    futuristicCareers: [
      { title:"AI Ethics Officer", icon:"🤖", description:"Ensures AI systems are fair and human-aligned.", blend:"AI + Philosophy + Law", growthOutlook:"Very High — 2025 onwards" },
      { title:"Sustainability Strategist", icon:"🌱", description:"Builds carbon-neutral strategies for organisations.", blend:"Environmental Science + Business + Policy", growthOutlook:"Very High — Global mandate" },
      { title:"Cybersecurity Architect", icon:"🔐", description:"Designs enterprise-level security systems.", blend:"CS + Cryptography + Systems Thinking", growthOutlook:"Very High — Every industry" },
    ],
    aptitudeEnhancement: {
      books:[{title:"Thinking, Fast and Slow",author:"Daniel Kahneman"},{title:"Deep Work",author:"Cal Newport"},{title:"The Lean Startup",author:"Eric Ries"}],
      apps:["Lumosity","Brilliant","Elevate","Peak","Duolingo","Khan Academy"],
      techniques:["Break problems into sub-problems","Practice timed exercises","Use mind mapping for complex topics"],
      quote:"Aptitude ignites potential, turning passion into purpose and dreams into reality.",
    },
    skillAttributes:[
      {skill:"Communication",level:82,description:"Ability to convey ideas clearly.",icon:"💬"},
      {skill:"Problem-Solving",level:78,description:"Structured approach to complex issues.",icon:"🧩"},
      {skill:"Leadership",level:74,description:"Guides and motivates teams.",icon:"🏆"},
      {skill:"Critical Thinking",level:80,description:"Evaluates information with logical rigour.",icon:"🔬"},
      {skill:"Adaptability",level:76,description:"Pivots when circumstances change.",icon:"🔄"},
      {skill:"Time Management",level:70,description:"Prioritises and executes efficiently.",icon:"⏱"},
    ],
    profileBuilding:{
      degrees:[
        {type:"degree",title:"Bachelor of Science in Computer Science",description:"Opens tech and data roles globally.",priority:"High",link:"https://eduquest.org.in/",benefit:"High global demand.",importance:"Foundation for AI, software, and product careers.",classLevel:"Post Class 12"},
        {type:"degree",title:"Bachelor of Business Administration",description:"Develops core business competencies.",priority:"High",link:"https://eduquest.org.in/",benefit:"Builds corporate leadership skills.",importance:"Gateway to MBA, consulting, and C-suite roles.",classLevel:"Post Class 12"},
      ],
      exams: baseExams,
      activities:["Join Model United Nations (MUN)","Participate in Math/Science Olympiads","Take on school club leadership","Build a personal project or portfolio","Complete a summer internship"],
      importantTip:`Take SAT to apply to top universities in ${targetCountry}. Reach out to EduQuest at eduquest.org.in for personalised guidance.`,
      quote:"The difference between Ordinary and Extraordinary is that little extra.",
    },
    profileBuildingBenefits:{
      overview:"Building a strong academic profile from Class 9 significantly increases your chances at top global universities.",
      keyBenefits:[
        {icon:"🏆",title:"Stronger University Applications",description:"A well-rounded profile gives you a competitive edge at target universities."},
        {icon:"💰",title:"Scholarship Eligibility",description:"Merit scholarships require demonstrated leadership and academic excellence built over years."},
        {icon:"🌍",title:"Global Career Opportunities",description:"International degree opens global job markets with higher earning potential."},
        {icon:"⚡",title:"Early Competitive Advantage",description:"Students who start in Class 9–10 arrive at Class 12 with a story no last-minute effort can replicate."},
      ],
      whyItMatters:"Top universities look far beyond grades — they want students who lead, create, and grow.",
      timelineByClass:[
        {classLevel:"Class 9–10",actions:["Explore interests and career paths","Participate in Olympiads and competitions","Build foundational study habits","Join clubs aligned to interests"]},
        {classLevel:"Class 11",actions:["Begin SAT/IELTS preparation","Choose subjects aligned to target degree","Take on leadership roles","Build portfolio or personal project"]},
        {classLevel:"Class 12",actions:["Appear for SAT, IELTS, and subject tests","Write university application essays","Apply for scholarships","Finalise university shortlist with EduQuest"]},
      ],
    },
    scholarships:[
      {name:"Fulbright Scholarship",country:"USA 🇺🇸",amount:"Full funding",eligibility:"Graduate students with exceptional academic record",deadline:"October annually",link:"https://fulbrightprogram.org"},
      {name:"Chevening Scholarship",country:"UK 🇬🇧",amount:"Full funding + stipend",eligibility:"1+ year work experience, leadership potential",deadline:"November annually",link:"https://chevening.org"},
      {name:"Erasmus Mundus",country:"Europe 🇪🇺",amount:"€1,000–1,400/month",eligibility:"UG/PG students — merit-based",deadline:"January annually",link:"https://erasmus-plus.ec.europa.eu"},
    ],
    bestColleges:[
      {name:"MIT",country:"USA 🇺🇸",flag:"🇺🇸",program:"Engineering / CS / AI",acceptanceRate:"3.9%",avgPackage:"$130K+",region:"USA"},
      {name:"University of Toronto",country:"Canada 🇨🇦",flag:"🇨🇦",program:"Business / Sciences",acceptanceRate:"43%",avgPackage:"CAD $75K+",region:"Canada"},
      {name:"University of Melbourne",country:"Australia 🇦🇺",flag:"🇦🇺",program:"Business / Law",acceptanceRate:"30%",avgPackage:"AUD $85K+",region:"Australia"},
      {name:"LSE",country:"UK 🇬🇧",flag:"🇬🇧",program:"Economics / Finance",acceptanceRate:"8%",avgPackage:"£55K+",region:"UK"},
    ],
    adminContact:{
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name: "EduQuest Admissions Team",
    },
  };
}