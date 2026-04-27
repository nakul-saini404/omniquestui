/* ─────────────────────────────────────────────────────────────
   lib/personality.ts
   Complete Personality Engine with 16 MBTI Types,
   Class-Aware Logic, Country/Course Routing,
   and University Track Intelligence Matrix
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

/* ══════════════════════════════════════════════════════════════
   16 MBTI PERSONALITY TYPES (from your EduQuest images)
══════════════════════════════════════════════════════════════ */
export interface MBTIType {
  code: string;          // e.g. "INTJ"
  name: string;          // e.g. "The Architect"
  fullLabel: string;     // e.g. "INTJ - The Architect"
  emoji: string;         // display icon
  color: string;         // primary colour
  gradient: string;      // card gradient
  tagline: string;       // short tagline
  description: string;   // 2-sentence description
  strengths: string[];   // 3 key strengths
  // Which of our 6 quiz dimensions map to this type
  // Higher weight = this type scores higher when that dimension is high
  dimensionWeights: Partial<Record<Category, number>>;
}

export const MBTI_TYPES: MBTIType[] = [
  {
    code: "INTJ", name: "The Architect", fullLabel: "INTJ - The Architect",
    emoji: "📐", color: "#5b8aff", gradient: "linear-gradient(135deg,#5b8aff,#a78bfa)",
    tagline: "Strategic minds building the future.",
    description: "You are a rare combination of analytical depth and visionary ambition. Methodical, independent, and fiercely determined — you build systems others can only imagine.",
    strengths: ["Strategic thinking", "Independent reasoning", "Long-term vision"],
    dimensionWeights: { analytical: 5, ambition: 4, resilience: 3, leadership: 2, creative: 1, empathy: 0 },
  },
  {
    code: "INFJ", name: "The Advocate", fullLabel: "INFJ - The Advocate",
    emoji: "🌿", color: "#34d399", gradient: "linear-gradient(135deg,#34d399,#00C9B1)",
    tagline: "Purpose-driven, quietly powerful.",
    description: "You carry a deep sense of mission and an extraordinary ability to understand people. Visionary and empathetic, you inspire change through insight and integrity.",
    strengths: ["Deep empathy", "Idealism with action", "Quiet leadership"],
    dimensionWeights: { empathy: 5, creative: 4, ambition: 3, resilience: 3, analytical: 2, leadership: 1 },
  },
  {
    code: "ESFP", name: "The Entertainer", fullLabel: "ESFP - The Entertainer",
    emoji: "🎭", color: "#fb923c", gradient: "linear-gradient(135deg,#fb923c,#f59e0b)",
    tagline: "Life is a stage — you own it.",
    description: "Spontaneous, energetic and infectiously enthusiastic, you bring joy and excitement to everything you touch. People are drawn to your warmth and vibrant energy.",
    strengths: ["Natural charisma", "Adaptability", "Connecting with people"],
    dimensionWeights: { creative: 5, empathy: 4, leadership: 3, resilience: 2, ambition: 2, analytical: 0 },
  },
  {
    code: "ENTP", name: "The Debater", fullLabel: "ENTP - The Debater",
    emoji: "⚡", color: "#f59e0b", gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    tagline: "Ideas are your weapon of choice.",
    description: "Quick-witted, intellectually fearless and endlessly curious — you love to challenge ideas, break assumptions and find ingenious solutions no one else considered.",
    strengths: ["Rapid ideation", "Intellectual courage", "Persuasive communication"],
    dimensionWeights: { analytical: 4, creative: 5, leadership: 3, ambition: 3, resilience: 1, empathy: 0 },
  },
  {
    code: "ENTJ", name: "The Director", fullLabel: "ENTJ - The Director",
    emoji: "👑", color: "#a78bfa", gradient: "linear-gradient(135deg,#a78bfa,#5b8aff)",
    tagline: "Born to lead. Built to win.",
    description: "Commanding, strategic and relentlessly goal-oriented — you see the path forward with unmatched clarity and drive everyone around you toward it.",
    strengths: ["Executive leadership", "Strategic decisiveness", "Commanding presence"],
    dimensionWeights: { leadership: 5, ambition: 5, analytical: 4, resilience: 3, creative: 1, empathy: 0 },
  },
  {
    code: "ESTP", name: "The Persuader", fullLabel: "ESTP - The Persuader",
    emoji: "🔥", color: "#ef4444", gradient: "linear-gradient(135deg,#ef4444,#fb923c)",
    tagline: "Action first. Think later. Win always.",
    description: "Bold, direct and supremely observant — you thrive in the moment and have an unmatched ability to read people and situations, turning them in your favour.",
    strengths: ["Quick action under pressure", "Reading people", "Practical problem-solving"],
    dimensionWeights: { resilience: 5, leadership: 4, ambition: 3, analytical: 2, creative: 2, empathy: 1 },
  },
  {
    code: "ENFP", name: "The Campaigner", fullLabel: "ENFP - The Campaigner",
    emoji: "🌈", color: "#00C9B1", gradient: "linear-gradient(135deg,#00C9B1,#34d399)",
    tagline: "Possibilities are everywhere. Chase them all.",
    description: "Imaginative, passionate and endlessly optimistic — you see potential in everything and everyone. Your enthusiasm is contagious and your ideas inspire action.",
    strengths: ["Creative vision", "Inspiring others", "Emotional intelligence"],
    dimensionWeights: { creative: 5, empathy: 4, ambition: 3, leadership: 3, resilience: 1, analytical: 0 },
  },
  {
    code: "ISTP", name: "The Innovator", fullLabel: "ISTP - The Innovator",
    emoji: "🔧", color: "#5b8aff", gradient: "linear-gradient(135deg,#5b8aff,#00C9B1)",
    tagline: "Quiet genius. Explosive results.",
    description: "Observant, logical and masterfully hands-on — you understand how systems work and love to build, fix and innovate with precision and efficiency.",
    strengths: ["Technical mastery", "Cool-headed analysis", "Practical innovation"],
    dimensionWeights: { analytical: 5, resilience: 4, creative: 3, ambition: 2, leadership: 1, empathy: 0 },
  },
  {
    code: "ISFJ", name: "The Protector", fullLabel: "ISFJ - The Protector",
    emoji: "🛡️", color: "#34d399", gradient: "linear-gradient(135deg,#34d399,#5b8aff)",
    tagline: "Strength in service. Power in loyalty.",
    description: "Warm, reliable and deeply committed — you are the quiet backbone of every team and relationship. Your care for others is unmatched, and your dependability is a rare strength.",
    strengths: ["Deep loyalty", "Attention to detail", "Practical compassion"],
    dimensionWeights: { empathy: 5, resilience: 4, analytical: 3, leadership: 1, creative: 1, ambition: 1 },
  },
  {
    code: "ESFJ", name: "The Contributor", fullLabel: "ESFJ - The Contributor",
    emoji: "🤝", color: "#f472b6", gradient: "linear-gradient(135deg,#f472b6,#fb923c)",
    tagline: "Community is everything. You build it.",
    description: "Warm, organised and profoundly people-focused — you thrive when helping others succeed and creating harmony in the groups you lead.",
    strengths: ["People management", "Social intelligence", "Team building"],
    dimensionWeights: { empathy: 5, leadership: 4, resilience: 3, creative: 1, ambition: 2, analytical: 1 },
  },
  {
    code: "ISTJ", name: "The Logistician", fullLabel: "ISTJ - The Logistician",
    emoji: "📋", color: "#a78bfa", gradient: "linear-gradient(135deg,#a78bfa,#34d399)",
    tagline: "Order, precision, excellence — always.",
    description: "Thoroughly responsible and deeply reliable — you take your commitments seriously and execute with a level of precision and consistency that sets the standard for everyone around you.",
    strengths: ["Systematic execution", "Reliability", "Meticulous analysis"],
    dimensionWeights: { analytical: 5, resilience: 5, ambition: 2, empathy: 1, leadership: 1, creative: 0 },
  },
  {
    code: "ESTJ", name: "The Manager", fullLabel: "ESTJ - The Manager",
    emoji: "📊", color: "#00C9B1", gradient: "linear-gradient(135deg,#00C9B1,#a78bfa)",
    tagline: "Standards set. Results demanded.",
    description: "Organised, assertive and fiercely competent — you are a natural administrator who brings order to chaos and drives teams to meet high standards with disciplined efficiency.",
    strengths: ["Organisational leadership", "Setting high standards", "Structured execution"],
    dimensionWeights: { leadership: 5, analytical: 4, ambition: 4, resilience: 3, empathy: 0, creative: 0 },
  },
  {
    code: "INTP", name: "The Deviser", fullLabel: "INTP - The Deviser",
    emoji: "💡", color: "#5b8aff", gradient: "linear-gradient(135deg,#5b8aff,#f59e0b)",
    tagline: "Thinking outside the box is your default.",
    description: "Endlessly curious, intellectually honest and profoundly creative — you are driven to understand the deep mechanics of everything and design elegant solutions to complex problems.",
    strengths: ["Abstract thinking", "Original ideas", "Logical precision"],
    dimensionWeights: { analytical: 5, creative: 4, resilience: 2, ambition: 2, empathy: 1, leadership: 0 },
  },
  {
    code: "INFP", name: "The Mediator", fullLabel: "INFP - The Mediator",
    emoji: "🌸", color: "#f472b6", gradient: "linear-gradient(135deg,#f472b6,#a78bfa)",
    tagline: "Ideals are worth fighting for.",
    description: "Deeply values-driven and profoundly empathetic — you see the humanity in every situation and use your creativity and emotional depth to heal, inspire and connect.",
    strengths: ["Emotional depth", "Creative expression", "Moral courage"],
    dimensionWeights: { empathy: 5, creative: 4, resilience: 2, ambition: 1, analytical: 1, leadership: 0 },
  },
  {
    code: "ENFJ", name: "The Educator", fullLabel: "ENFJ - The Educator",
    emoji: "🌟", color: "#f59e0b", gradient: "linear-gradient(135deg,#f59e0b,#34d399)",
    tagline: "Elevating every person you encounter.",
    description: "Charismatic, empathetic and driven by a deep desire to help others grow — you are a natural mentor and leader who brings out the best in everyone around you.",
    strengths: ["Inspiring leadership", "Mentoring others", "Emotional intelligence"],
    dimensionWeights: { empathy: 5, leadership: 4, creative: 3, ambition: 2, resilience: 2, analytical: 0 },
  },
  {
    code: "ISFP", name: "The Adventurer", fullLabel: "ISFP - The Adventurer",
    emoji: "🧭", color: "#34d399", gradient: "linear-gradient(135deg,#34d399,#f59e0b)",
    tagline: "Live boldly. Create freely. Feel deeply.",
    description: "Artistic, curious and deeply in tune with the world around you — you experience life with extraordinary richness and express your inner world through creativity and authentic action.",
    strengths: ["Artistic creativity", "Authentic living", "Sensory awareness"],
    dimensionWeights: { creative: 5, empathy: 4, resilience: 2, ambition: 1, analytical: 1, leadership: 0 },
  },
];

/* ── MBTI scoring: pick best type from raw category scores ─── */
export function computeMBTIType(rawScores: Record<Category, number>): MBTIType {
  let bestType  = MBTI_TYPES[0];
  let bestScore = -Infinity;

  for (const type of MBTI_TYPES) {
    let score = 0;
    for (const [dim, weight] of Object.entries(type.dimensionWeights) as [Category, number][]) {
      score += (rawScores[dim] ?? 0) * (weight ?? 0);
    }
    if (score > bestScore) { bestScore = score; bestType = type; }
  }
  return bestType;
}

/* ══════════════════════════════════════════════════════════════
   UNIVERSITY TRACK INTELLIGENCE MATRIX
══════════════════════════════════════════════════════════════ */
export type UniversityRegion =
  "USA" | "Canada" | "Australia" | "Europe" | "Singapore" | "UK" | "South Korea";

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
    region: "USA", flag: "🇺🇸",
    targetUniversities: ["Harvard","Yale","Princeton","Stanford","MIT","Columbia","UPenn","Cornell","Dartmouth","Brown","Duke","Northwestern","Johns Hopkins","UCLA","UC Berkeley"],
    academicExpectations: "Very high academic consistency + rigorous subject selection",
    testingStrategy: "SAT/ACT strongly recommended + AP Exams highly recommended",
    profileRequirements: "Highly structured, deeply focused narrative-driven profile. Only coherent, high-impact profiles are competitive.",
    keyStrategicInsight: "Holistic evaluation — academics, narrative, and impact must align into one unified identity",
  },
  {
    region: "UK", flag: "🇬🇧",
    targetUniversities: ["Oxford","Cambridge","LSE","Imperial","UCL","King's College London","Edinburgh","Manchester","Warwick","Bristol"],
    academicExpectations: "Deep subject specialisation with strong academic consistency",
    testingStrategy: "SAT/AP optional but recommended + TMUA (Maths/Econ/CS) + ESAT (Engineering) + UCAT (Medicine) + LNAT (Law)",
    profileRequirements: "Highly focused, subject-aligned profile depth. Extracurriculars must reinforce academic intent.",
    keyStrategicInsight: "UK admissions are test + subject mastery driven — entrance tests often define selection",
  },
  {
    region: "Canada", flag: "🇨🇦",
    targetUniversities: ["University of Toronto","UBC","McGill","Waterloo","McMaster","Queen's University","Western University","Alberta"],
    academicExpectations: "Strong academic grades + consistency",
    testingStrategy: "SAT optional but helpful — not required for most programs",
    profileRequirements: "Academics are the primary filter. Structured profile depth important for Business, Engineering, CS.",
    keyStrategicInsight: "Canada is academics-first, with selective profile importance in top professional programs",
  },
  {
    region: "Singapore", flag: "🇸🇬",
    targetUniversities: ["NUS","NTU","SMU"],
    academicExpectations: "Extremely high academic excellence",
    testingStrategy: "SAT recommended + AP recommended for competitive edge + strong quantitative signals",
    profileRequirements: "Sharp academic identity with clear subject direction. Academics remain primary filter.",
    keyStrategicInsight: "Highly competitive — top-percentile academics and strong quantitative reasoning required",
  },
  {
    region: "Australia", flag: "🇦🇺",
    targetUniversities: ["University of Melbourne","ANU","University of Sydney","UNSW","Monash","Queensland","Adelaide"],
    academicExpectations: "Strong academic performance with consistent grades",
    testingStrategy: "SAT/AP not mandatory but recommended for scholarships. UCAT for Medical pathways.",
    profileRequirements: "Moderately structured profile. Academics primary, differentiation improves scholarship chances.",
    keyStrategicInsight: "Flexible admissions system with strong scholarship-based differentiation logic",
  },
  {
    region: "Europe", flag: "🇪🇺",
    targetUniversities: ["ETH Zurich","LMU Munich","University of Amsterdam","Heidelberg","TU Delft","HEC Paris","Sciences Po","Bocconi"],
    academicExpectations: "Strong subject alignment + academic rigour",
    testingStrategy: "SAT required in some programs depending on country/university",
    profileRequirements: "Academic-depth driven profiles. Subject relevance more important than extracurricular diversity.",
    keyStrategicInsight: "Program-specific admissions — academically strict but less holistic than USA",
  },
  {
    region: "South Korea", flag: "🇰🇷",
    targetUniversities: ["Seoul National University","KAIST","Yonsei","Korea University","POSTECH"],
    academicExpectations: "Very high academic performance",
    testingStrategy: "SAT required for many international admissions routes",
    profileRequirements: "Strong academic consistency with focused subject strength",
    keyStrategicInsight: "Highly exam-driven and academically selective system",
  },
];

export function getTrackForCountry(country: string): UniversityTrack | undefined {
  return UNIVERSITY_TRACKS.find(t =>
    t.region.toLowerCase() === country.toLowerCase()
  );
}

/* ══════════════════════════════════════════════════════════════
   INTERFACES
══════════════════════════════════════════════════════════════ */

export interface StreamRecommendation {
  primary: string;
  alternates: string[];
  reasoning: string;
  subjects: string[];
  careerPathsFromStream: string[];
  confidence: number;
}

export interface CareerMatch {
  title: string; fit: number; icon: string;
  description: string; primarySkills: string[];
  salaryRange: string; priority: "primary" | "secondary";
}

export interface University {
  name: string; country: string; flag: string;
  program: string; ranking: string; website: string;
  region: UniversityRegion;
  tuitionRange?: string; whyForYou?: string;
  requiredExams?: string[];
}

export interface ExamRecommendation {
  title: string; fullForm: string;
  classLevel: "Class 9–10" | "Class 11" | "Class 11–12" | "Class 12" | "Post Class 12";
  description: string; whyForYou: string;
  priority: "Essential" | "High" | "Medium";
  preparationTime: string; link: string;
  benefit: string; targetCountries: string[];
}

export interface ProfileBuildingItem {
  type: "degree" | "exam" | "certification" | "activity";
  title: string; description: string;
  priority: "Essential" | "High" | "Medium";
  link?: string; benefit?: string; importance?: string; classLevel?: string;
}

export interface ProfileBuildingBenefits {
  overview: string;
  keyBenefits: { icon: string; title: string; description: string }[];
  whyItMatters: string;
  timelineByClass: { classLevel: string; actions: string[] }[];
}

export interface FuturisticCareer {
  title: string; icon: string; description: string;
  blend: string; growthOutlook: string;
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

export interface Scholarship {
  name: string; country: string; amount: string;
  eligibility: string; deadline: string; link: string;
}

export interface BestCollege {
  name: string; country: string; flag: string;
  program: string; acceptanceRate: string; avgPackage: string;
  region: UniversityRegion;
}

export interface LeadFormData {
  fullName: string; email: string; phone: string;
  city: string; currentClass: string;
  educationLevel?: string; programInterest?: string;
  age?: string; consent: boolean;
  targetCountry?: string;  // optional for Class 11/12
  targetDegree?: string;   // optional for Class 11/12
}

export type FlowType = "stream_recommendation" | "university_recommendation";

export function getFlowType(currentClass: string): FlowType {
  const n = parseInt(currentClass, 10);
  if (!isNaN(n) && n <= 10) return "stream_recommendation";
  return "university_recommendation";
}

export interface PersonalityReport {
  studentName: string;
  personalityType: string;        // MBTI code e.g. "INTJ"
  personalityTypeData?: MBTIType; // full metadata injected server-side
  tagline: string;
  overallScore: number;
  categories: CategoryScore[];
  strengths: string[];
  growthAreas: string[];
  aiInsight: string;
  programRecommendation: string;
  streamRecommendation?: StreamRecommendation;
  targetCountry?: string;
  targetDegree?: string;
  currentClass?: string;
  careerMatches: CareerMatch[];
  secondaryCareerMatches: CareerMatch[];
  universities: University[];
  recommendedExams: ExamRecommendation[];
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
}

/* ══════════════════════════════════════════════════════════════
   18 QUESTIONS
══════════════════════════════════════════════════════════════ */
export const PERSONALITY_QUESTIONS: Question[] = [
  { id:1,  category:"analytical", text:"When solving a complex problem, you prefer to:", options:[{label:"Break it into smaller logical steps",value:4},{label:"Look for patterns and trends first",value:3},{label:"Discuss with others to get perspectives",value:2},{label:"Trust your gut instinct",value:1}] },
  { id:2,  category:"analytical", text:"How do you feel about working with data and numbers?", options:[{label:"Love it — data reveals the truth",value:4},{label:"Useful when needed",value:3},{label:"Neutral — I manage when required",value:2},{label:"I prefer ideas over numbers",value:1}] },
  { id:3,  category:"analytical", text:"When you encounter conflicting information, you:", options:[{label:"Cross-check sources and build evidence",value:4},{label:"Weigh the most logical argument",value:3},{label:"Ask someone more knowledgeable",value:2},{label:"Go with what feels right",value:1}] },
  { id:4,  category:"creative",   text:"When given an open-ended task, you typically:", options:[{label:"Generate many unique ideas first",value:4},{label:"Find an innovative twist on existing ideas",value:3},{label:"Research what others have done",value:2},{label:"Follow a proven process",value:1}] },
  { id:5,  category:"creative",   text:"Which best describes how you communicate ideas?", options:[{label:"Through visuals, stories, or metaphors",value:4},{label:"Mix of storytelling and logic",value:3},{label:"Structured presentations with data",value:2},{label:"Direct, to-the-point explanations",value:1}] },
  { id:6,  category:"creative",   text:"When you have free time, you are most drawn to:", options:[{label:"Creating something — writing, art, music",value:4},{label:"Exploring new ideas or learning something",value:3},{label:"Socialising or outdoor activities",value:2},{label:"Relaxing with familiar routines",value:1}] },
  { id:7,  category:"leadership", text:"In a group project, you naturally:", options:[{label:"Step up to lead and coordinate",value:4},{label:"Help define direction but share leadership",value:3},{label:"Contribute strongly to execution",value:2},{label:"Focus on doing your part well",value:1}] },
  { id:8,  category:"leadership", text:"When conflict arises in a team, you:", options:[{label:"Mediate and drive towards resolution",value:4},{label:"Voice your perspective clearly",value:3},{label:"Try to stay neutral",value:2},{label:"Focus on your own tasks",value:1}] },
  { id:9,  category:"leadership", text:"When a group has no clear direction, you:", options:[{label:"Immediately propose a plan and rally others",value:4},{label:"Suggest ideas but wait for consensus",value:3},{label:"Wait for someone else to take charge",value:2},{label:"Work independently on your piece",value:1}] },
  { id:10, category:"empathy",    text:"When a friend or colleague is struggling, you:", options:[{label:"Listen deeply before offering help",value:4},{label:"Offer both emotional support and solutions",value:3},{label:"Jump in with practical advice",value:2},{label:"Give them space to figure it out",value:1}] },
  { id:11, category:"empathy",    text:"How easily can you sense someone else's emotions?", options:[{label:"Very easily — I pick up subtle cues",value:4},{label:"Usually, if I pay attention",value:3},{label:"Sometimes — depends on the person",value:2},{label:"I focus more on actions than feelings",value:1}] },
  { id:12, category:"empathy",    text:"After a difficult conversation, you typically:", options:[{label:"Reflect on how the other person felt",value:4},{label:"Think about both sides equally",value:3},{label:"Focus on what was said, not emotions",value:2},{label:"Move on quickly without overthinking",value:1}] },
  { id:13, category:"ambition",   text:"Where do you see yourself in 10 years?", options:[{label:"Leading an organisation or building my own",value:4},{label:"At the top of my field / subject expert",value:3},{label:"In a stable, rewarding role with growth",value:2},{label:"Living comfortably — exact role doesn't matter",value:1}] },
  { id:14, category:"ambition",   text:"How do you feel about taking big career risks?", options:[{label:"Excited — high risk means high reward",value:4},{label:"Willing if the opportunity is strong",value:3},{label:"Cautious — I evaluate carefully",value:2},{label:"I prefer security over big gambles",value:1}] },
  { id:15, category:"ambition",   text:"When you set a goal, you:", options:[{label:"Pursue it relentlessly until achieved",value:4},{label:"Work hard but adapt if circumstances change",value:3},{label:"Try your best but don't stress over outcomes",value:2},{label:"Set loose goals and see where life takes you",value:1}] },
  { id:16, category:"resilience", text:"When you fail at something important, you typically:", options:[{label:"Analyse what went wrong and try again stronger",value:4},{label:"Take a break then restart with a new plan",value:3},{label:"Seek support from others before moving on",value:2},{label:"It takes a while to bounce back",value:1}] },
  { id:17, category:"resilience", text:"Under intense pressure (deadlines, high stakes), you:", options:[{label:"Thrive — pressure sharpens my focus",value:4},{label:"Manage well with a clear plan",value:3},{label:"Get it done but feel the stress",value:2},{label:"Struggle and need more time",value:1}] },
  { id:18, category:"resilience", text:"When your plans fall through unexpectedly, you:", options:[{label:"Pivot quickly and find a better path",value:4},{label:"Regroup and adjust the plan systematically",value:3},{label:"Feel frustrated but recover gradually",value:2},{label:"Find it hard to adapt quickly",value:1}] },
];

export const TOTAL_QUESTIONS = PERSONALITY_QUESTIONS.length;

const CATEGORY_COLORS: Record<string, string> = {
  analytical:"#5b8aff", creative:"#a78bfa", leadership:"#00C9B1",
  empathy:"#f472b6", ambition:"#fb923c", resilience:"#34d399",
};

/* ── Compute raw category scores from answers ── */
export function computeRawScores(answers: Record<number, number>): Record<Category, number> {
  const map: Record<Category, number[]> = {
    analytical:[1,2,3], creative:[4,5,6], leadership:[7,8,9],
    empathy:[10,11,12], ambition:[13,14,15], resilience:[16,17,18],
  };
  const result = {} as Record<Category, number>;
  for (const [cat, ids] of Object.entries(map)) {
    result[cat as Category] = ids.reduce((s, id) => s + (answers[id] ?? 0), 0);
  }
  return result;
}

/* ── Fallback compute (when AI is unavailable) ── */
export function computeReport(
  answers: Record<number, number>,
  studentName: string,
  leadData?: Partial<LeadFormData>
): PersonalityReport {
  const rawScores = computeRawScores(answers);
  const mbtiType  = computeMBTIType(rawScores);

  const categories: CategoryScore[] = Object.entries(rawScores).map(([cat, score]) => {
    const pct = Math.round((score / 12) * 100);
    return {
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      score, maxScore: 12, percentage: pct,
      label: pct>=80?"Exceptional":pct>=60?"Strong":pct>=40?"Developing":"Emerging",
      description: `Your ${cat} dimension scores ${pct}%.`,
      color: CATEGORY_COLORS[cat] ?? "#5b8aff",
    };
  });

  const overallScore = Math.round(categories.reduce((a,c)=>a+c.percentage,0)/categories.length);
  const sorted = [...categories].sort((a,b)=>b.percentage-a.percentage);
  const flowType = getFlowType(leadData?.currentClass ?? "12");
  const targetCountry = leadData?.targetCountry ?? "";
  const track = targetCountry ? getTrackForCountry(targetCountry) : null;

  return {
    studentName, overallScore, categories,
    personalityType: mbtiType.code,
    personalityTypeData: mbtiType,
    tagline: mbtiType.tagline,
    strengths: sorted.slice(0,3).map(c=>`Strong ${c.name.toLowerCase()} — ${c.percentage}%`),
    growthAreas: sorted.slice(-2).map(c=>`Build your ${c.name.toLowerCase()} capacity`),
    aiInsight: `${studentName}, as ${mbtiType.fullLabel}, you are uniquely positioned for global success. Connect with EduQuest at eduquest.org.in to chart your path.`,
    programRecommendation: "Personalised Counselling — Book a Free Session",
    streamRecommendation: flowType === "stream_recommendation" ? {
      primary:"Commerce", alternates:["Science (PCM)","Arts / Humanities"],
      reasoning:`As ${mbtiType.fullLabel}, your profile suggests Commerce as a strong default.`,
      subjects:["Economics","Business Studies","Accountancy","Mathematics"],
      careerPathsFromStream:["MBA","Finance","Entrepreneurship","CA"], confidence:65,
    } : undefined,
    targetCountry: targetCountry || undefined,
    targetDegree: leadData?.targetDegree || undefined,
    currentClass: leadData?.currentClass,
    careerMatches: [
      { title:"Management Consultant", fit:88, icon:"📊", description:"Helps organisations solve complex business problems.", primarySkills:["Strategic Thinking","Communication","Analysis"], salaryRange:"₹12–40 LPA", priority:"primary" },
      { title:"Product Manager", fit:84, icon:"🎯", description:"Leads product development from concept to launch.", primarySkills:["Leadership","User Research","Data Analysis"], salaryRange:"₹15–50 LPA", priority:"primary" },
      { title:"Data Scientist", fit:80, icon:"🧠", description:"Extracts insights from large datasets.", primarySkills:["Python","Statistics","ML"], salaryRange:"₹10–45 LPA", priority:"primary" },
      { title:"Entrepreneur", fit:76, icon:"🚀", description:"Builds and scales new businesses.", primarySkills:["Vision","Resilience","Leadership"], salaryRange:"Variable", priority:"primary" },
    ],
    secondaryCareerMatches: [
      { title:"UX Researcher", fit:72, icon:"🔍", description:"Studies user behaviour to improve product design.", primarySkills:["Empathy","Research","Synthesis"], salaryRange:"₹8–30 LPA", priority:"secondary" },
      { title:"Business Analyst", fit:68, icon:"📋", description:"Bridges business needs with tech solutions.", primarySkills:["Analysis","Documentation","Communication"], salaryRange:"₹8–28 LPA", priority:"secondary" },
    ],
    universities: (track?.targetUniversities.slice(0,6) ?? ["Harvard","MIT","Stanford","Oxford","Toronto","Melbourne"]).map((name,i) => ({
      name, country: targetCountry || "USA", flag: track?.flag ?? "🌍",
      program: leadData?.targetDegree ?? "Business / Sciences",
      ranking: `Top ${(i+1)*10} globally`,
      website: `https://www.google.com/search?q=${encodeURIComponent(name)}`,
      region: (targetCountry as UniversityRegion) ?? "USA",
    })),
    recommendedExams: [
      { title:"SAT", fullForm:"Scholastic Assessment Test", classLevel:"Class 11–12", description:"Required for top global university admissions.", whyForYou:"Your analytical strength makes you a strong SAT candidate.", priority:"Essential", preparationTime:"6–12 months", link:"https://collegereadiness.collegeboard.org/sat", benefit:"Opens 4,000+ universities globally.", targetCountries:["USA","Canada","Singapore","Australia"] },
      { title:"IELTS / TOEFL", fullForm:"English Proficiency Tests", classLevel:"Class 11–12", description:"Mandatory for all international university applications.", whyForYou:"Non-negotiable for every international application.", priority:"Essential", preparationTime:"2–4 months", link:"https://www.ielts.org", benefit:"Required by all target universities.", targetCountries:["USA","UK","Canada","Australia","Singapore","Europe"] },
    ],
    futuristicCareers:[
      {title:"AI Ethics Officer",icon:"🤖",description:"Ensures AI systems are fair and human-aligned.",blend:"AI + Philosophy + Law",growthOutlook:"Very High — 2025+"},
      {title:"Sustainability Strategist",icon:"🌱",description:"Builds carbon-neutral strategies.",blend:"Environmental Science + Business + Policy",growthOutlook:"Very High — Global mandate"},
      {title:"Cybersecurity Architect",icon:"🔐",description:"Designs enterprise security systems.",blend:"CS + Cryptography + Systems",growthOutlook:"Very High — Every industry"},
    ],
    aptitudeEnhancement:{
      books:[{title:"Thinking, Fast and Slow",author:"Daniel Kahneman"},{title:"Deep Work",author:"Cal Newport"},{title:"The Lean Startup",author:"Eric Ries"}],
      apps:["Lumosity","Brilliant","Elevate","Peak","Duolingo","Khan Academy","Coursera","edX"],
      techniques:["Break problems into sub-components","Practise under timed conditions","Use mind mapping for complex topics","Daily 20-min focused reading","Teach concepts to solidify understanding"],
      quote:"Aptitude ignites potential, turning passion into purpose and dreams into reality.",
    },
    skillAttributes:[
      {skill:"Communication",level:82,description:"Conveys ideas clearly across audiences.",icon:"💬"},
      {skill:"Problem-Solving",level:78,description:"Structured approach to complex issues.",icon:"🧩"},
      {skill:"Leadership",level:74,description:"Guides and motivates teams.",icon:"🏆"},
      {skill:"Critical Thinking",level:80,description:"Evaluates arguments with logical rigour.",icon:"🔬"},
      {skill:"Adaptability",level:76,description:"Pivots when circumstances change.",icon:"🔄"},
      {skill:"Time Management",level:70,description:"Prioritises and executes efficiently.",icon:"⏱"},
    ],
    profileBuilding:{
      degrees:[
        {type:"degree",title:"Bachelor of Science — Computer Science",description:"Opens global tech and data careers.",priority:"High",link:"https://eduquest.org.in/",benefit:"High global demand.",importance:"Foundation for AI, software, and product careers.",classLevel:"Post Class 12"},
        {type:"degree",title:"Bachelor of Business Administration",description:"Develops core business competencies.",priority:"High",link:"https://eduquest.org.in/",benefit:"Builds corporate leadership skills.",importance:"Gateway to MBA and C-suite roles.",classLevel:"Post Class 12"},
      ],
      exams:[],
      activities:["Join Model United Nations (MUN)","Participate in Math/Science Olympiads","Take a school leadership role","Build a personal project or portfolio","Complete a relevant summer internship"],
      importantTip:`As ${mbtiType.fullLabel}, start SAT preparation early. Reach out to EduQuest at eduquest.org.in for personalised guidance.`,
      quote:"The difference between Ordinary and Extraordinary is that little extra.",
    },
    profileBuildingBenefits:{
      overview:"Building a strong academic profile from Class 9 significantly increases your chances at top global universities.",
      keyBenefits:[
        {icon:"🏆",title:"Stronger Applications",description:"A well-rounded profile gives you a competitive edge at top universities."},
        {icon:"💰",title:"Scholarship Access",description:"Merit scholarships require demonstrated excellence built over years."},
        {icon:"🌍",title:"Global Opportunities",description:"International degree + strong profile opens global job markets."},
        {icon:"⚡",title:"Early Advantage",description:"Students who start in Class 9–10 arrive at Class 12 with an unbeatable story."},
      ],
      whyItMatters:"Top universities look far beyond grades — they want students who lead, create, and grow.",
      timelineByClass:[
        {classLevel:"Class 9–10",actions:["Explore career paths","Join Olympiads and competitions","Build study habits","Start reading in your interest area"]},
        {classLevel:"Class 11",actions:["Begin SAT/IELTS prep","Take on leadership roles","Build portfolio","Choose subjects aligned to goals"]},
        {classLevel:"Class 12",actions:["Appear for SAT + IELTS","Write university essays","Apply for scholarships","Finalise university list with EduQuest"]},
      ],
    },
    scholarships:[
      {name:"Fulbright Scholarship",country:"USA 🇺🇸",amount:"Full funding",eligibility:"Graduate students — exceptional academic record",deadline:"October annually",link:"https://fulbrightprogram.org"},
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