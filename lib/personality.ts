export interface Question {
  id: number;
  text: string;
  category: "analytical" | "creative" | "leadership" | "empathy" | "ambition" | "resilience";
  options: { label: string; value: number }[];
}

export const PERSONALITY_QUESTIONS: Question[] = [
  { id:1, category:"analytical", text:"When solving a complex problem, you prefer to:", options:[{label:"Break it into smaller logical steps",value:4},{label:"Look for patterns and trends first",value:3},{label:"Discuss with others to get perspectives",value:2},{label:"Trust your gut instinct",value:1}] },
  { id:2, category:"analytical", text:"How do you feel about working with data and numbers?", options:[{label:"Love it — data reveals the truth",value:4},{label:"Useful when needed",value:3},{label:"Neutral — I manage when required",value:2},{label:"I prefer ideas over numbers",value:1}] },
  { id:3, category:"creative", text:"When given an open-ended task, you typically:", options:[{label:"Generate many unique ideas first",value:4},{label:"Find an innovative twist on existing solutions",value:3},{label:"Research what others have done",value:2},{label:"Follow a proven process",value:1}] },
  { id:4, category:"creative", text:"Which best describes how you communicate ideas?", options:[{label:"Through visuals, stories, or metaphors",value:4},{label:"Mix of storytelling and logic",value:3},{label:"Structured presentations with data",value:2},{label:"Direct, to-the-point explanations",value:1}] },
  { id:5, category:"leadership", text:"In a group project, you naturally:", options:[{label:"Step up to lead and coordinate",value:4},{label:"Help define direction but share leadership",value:3},{label:"Contribute strongly to execution",value:2},{label:"Focus on doing your part well",value:1}] },
  { id:6, category:"leadership", text:"When conflict arises in a team, you:", options:[{label:"Mediate and drive towards resolution",value:4},{label:"Voice your perspective clearly",value:3},{label:"Try to stay neutral",value:2},{label:"Focus on your own tasks",value:1}] },
  { id:7, category:"empathy", text:"When a friend or colleague is struggling, you:", options:[{label:"Listen deeply before offering help",value:4},{label:"Offer both emotional support and solutions",value:3},{label:"Jump in with practical advice",value:2},{label:"Give them space to figure it out",value:1}] },
  { id:8, category:"empathy", text:"How easily can you sense someone else's emotions?", options:[{label:"Very easily — I pick up subtle cues",value:4},{label:"Usually, if I pay attention",value:3},{label:"Sometimes — depends on the person",value:2},{label:"I focus more on actions than feelings",value:1}] },
  { id:9, category:"ambition", text:"Where do you see yourself in 10 years?", options:[{label:"Leading an organisation or building my own",value:4},{label:"At the top of my field / subject matter expert",value:3},{label:"In a stable, rewarding role with growth",value:2},{label:"Living comfortably — exact role doesn't matter",value:1}] },
  { id:10, category:"ambition", text:"How do you feel about taking big career risks?", options:[{label:"Excited — high risk means high reward",value:4},{label:"Willing if the opportunity is strong",value:3},{label:"Cautious — I evaluate carefully",value:2},{label:"I prefer security over big gambles",value:1}] },
  { id:11, category:"resilience", text:"When you fail at something important, you typically:", options:[{label:"Analyse what went wrong and try again stronger",value:4},{label:"Take a break then restart with a new plan",value:3},{label:"Seek support from others before moving on",value:2},{label:"It takes a while to bounce back",value:1}] },
  { id:12, category:"resilience", text:"Under intense pressure (deadlines, high stakes), you:", options:[{label:"Thrive — pressure sharpens my focus",value:4},{label:"Manage well with a clear plan",value:3},{label:"Get it done but feel the stress",value:2},{label:"Struggle and need more time",value:1}] },
];

export interface CategoryScore {
  name: string; score: number; maxScore: number; percentage: number;
  label: string; description: string; color: string;
}

export interface PersonalityReport {
  studentName: string; personalityType: string; tagline: string;
  overallScore: number; categories: CategoryScore[];
  strengths: string[]; growthAreas: string[];
  careerMatches: { title: string; fit: number; icon: string }[];
  programRecommendation: string; aiInsight: string;
}

// Fallback local compute (used if Grok API fails)
export function computeReport(answers: Record<number, number>, studentName: string): PersonalityReport {
  const catTotals: Record<string, { sum: number; max: number }> = {};
  for (const q of PERSONALITY_QUESTIONS) {
    if (!catTotals[q.category]) catTotals[q.category] = { sum: 0, max: 0 };
    catTotals[q.category].max += 4;
    catTotals[q.category].sum += answers[q.id] ?? 0;
  }
  const COLORS: Record<string, string> = { analytical:"#5b8aff", creative:"#a78bfa", leadership:"#00C9B1", empathy:"#f472b6", ambition:"#fb923c", resilience:"#34d399" };
  const categories: CategoryScore[] = Object.entries(catTotals).map(([cat, { sum, max }]) => {
    const pct = Math.round((sum / max) * 100);
    return { name: cat.charAt(0).toUpperCase()+cat.slice(1), score: sum, maxScore: max, percentage: pct, label: pct>=80?"Exceptional":pct>=60?"Strong":pct>=40?"Developing":"Emerging", description: `Your ${cat} dimension scores ${pct}%.`, color: COLORS[cat]||"#5b8aff" };
  });
  const overallScore = Math.round(categories.reduce((a,c)=>a+c.percentage,0)/categories.length);
  const sorted = [...categories].sort((a,b)=>b.percentage-a.percentage);
  return { studentName, personalityType:"Balanced Achiever", tagline:"You bring a well-rounded approach to every challenge.", overallScore, categories, strengths: sorted.slice(0,3).map(c=>`${c.name} (${c.percentage}%)`), growthAreas: sorted.slice(-2).map(c=>`Build on your ${c.name.toLowerCase()} dimension`), careerMatches:[{title:"Management Consultant",fit:88,icon:"📊"},{title:"Product Manager",fit:84,icon:"🎯"},{title:"Data Scientist",fit:80,icon:"🧠"},{title:"Entrepreneur",fit:76,icon:"🚀"},{title:"UX Researcher",fit:72,icon:"🔍"}], programRecommendation:"Personalised Counselling — Book a Free Session", aiInsight:`${studentName}, your balanced profile positions you well for a wide range of global programs. OmniQuest can help you unlock your full potential.` };
}
