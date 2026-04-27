import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import {
  computeReport, computeRawScores, computeMBTIType,
  UNIVERSITY_TRACKS, getTrackForCountry, getFlowType,
  MBTI_TYPES,
} from "@/lib/personality";
import type { CareerMatch, LeadFormData, Category } from "@/lib/personality";

// ── Clients ───────────────────────────────────────────────────────────────────
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const OPENAI_MODEL = "gpt-4o-mini";
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

// ── POST /api/personality-test ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { answers, studentName, email, leadData } = await req.json() as {
      answers: Record<number, number>;
      studentName: string;
      email?: string;
      leadData?: LeadFormData;
    };

    if (!answers || !studentName)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    // ── Step 1: Compute MBTI type deterministically from quiz answers ─────────
    const rawScores  = computeRawScores(answers);
    const mbtiType   = computeMBTIType(rawScores);

    // ── Step 2: Resolve flow context ──────────────────────────────────────────
    const currentClass    = leadData?.currentClass ?? "12";
    const flowType        = getFlowType(currentClass);
    const isStreamMode    = flowType === "stream_recommendation";
    const isUniversityMode = !isStreamMode;

    // Country/degree are OPTIONAL for Class 11/12
    const targetCountry = leadData?.targetCountry?.trim() ?? "";
    const targetDegree  = leadData?.targetDegree?.trim()  ?? "";
    const hasCountry    = targetCountry !== "";
    const hasDegree     = targetDegree  !== "";

    // ── Step 3: Determine university scope ───────────────────────────────────
    // A — Student selected country + degree → targeted list in that country
    // B — Student selected country only → best programs in that country
    // C — Student selected nothing → AI picks best across USA, UK, Canada, Australia, Singapore based on personality
    const uniMode = hasCountry ? (hasDegree ? "A" : "B") : "C";
    const defaultCountries = ["USA", "UK", "Canada", "Australia", "Singapore"];

    const track = hasCountry ? getTrackForCountry(targetCountry) : null;

    // University Track context for AI
    const relevantTracks = hasCountry
      ? UNIVERSITY_TRACKS.filter(t => t.region === targetCountry)
      : UNIVERSITY_TRACKS.filter(t => defaultCountries.includes(t.region));

    const trackContext = relevantTracks.map(t =>
      `${t.flag} ${t.region}:\n  Universities: ${t.targetUniversities.slice(0,6).join(", ")}\n  Tests: ${t.testingStrategy}\n  Profile: ${t.profileRequirements}\n  Insight: ${t.keyStrategicInsight}`
    ).join("\n\n");

    // ── Step 4: Score labels ──────────────────────────────────────────────────
    const pct = (cat: Category) => Math.round((rawScores[cat] / 12) * 100);
    const lbl = (cat: Category) => {
      const p = pct(cat);
      return p>=80?"Exceptional":p>=60?"Strong":p>=40?"Developing":"Emerging";
    };

    // ── Step 5: Build AI prompt ───────────────────────────────────────────────
    const uniInstruction = isStreamMode ? "" : uniMode === "A"
      ? `UNIVERSITY MODE A — Student selected ${targetCountry} + ${targetDegree}. Recommend EXACTLY 6 universities in ${targetCountry} for ${targetDegree}. Rank #1 (best fit) → #6. Use ${targetCountry} track data above.`
      : uniMode === "B"
      ? `UNIVERSITY MODE B — Student selected ${targetCountry} but no degree. Recommend EXACTLY 6 universities in ${targetCountry} best suited to ${mbtiType.fullLabel} personality and career matches. Rank #1 → #6.`
      : `UNIVERSITY MODE C — Student did NOT select country or degree. Based purely on their ${mbtiType.fullLabel} personality profile and top career matches, recommend 6 universities spread across USA, UK, Canada, Australia and Singapore (1-2 per country). Pick countries that naturally suit ${mbtiType.code} personality traits. Rank #1 → #6.`;

    const examInstruction = isStreamMode
      ? `Exams for Class 9–10: (1) NTSE — Essential, (2) Subject Olympiads — High, (3) SAT Foundation start — High. All classLevel "Class 9–10".`
      : hasCountry
      ? `Exams for ${targetCountry} admission${hasDegree ? " — " + targetDegree : ""}. Use track testing strategy: ${track?.testingStrategy ?? "SAT + IELTS"}. Include SAT (if applicable), IELTS/TOEFL (always), and country-specific: UK→UCAT/TMUA/LNAT/ESAT, USA→AP Exams, Singapore→TMUA, Europe→subject/language tests. classLevel "Class 11–12" or "Class 12".`
      : `Exams applicable across USA, UK, Canada, Australia, Singapore: SAT (Essential), IELTS/TOEFL (Essential), AP Exams (High), 1 more based on ${mbtiType.code} top career. All classLevel "Class 11–12".`;

    const prompt = `You are Dr. Alex, a world-class educational psychologist and global university admissions expert for Indian students.

═══════════════════════════════════
STUDENT PROFILE
═══════════════════════════════════
Name: ${studentName}
Current Class: ${currentClass}
Flow Type: ${isStreamMode ? "STREAM RECOMMENDATION (Class 8–10)" : "UNIVERSITY RECOMMENDATION (Class 11/12+)"}
MBTI Type (already computed from quiz): ${mbtiType.fullLabel}
MBTI Tagline: ${mbtiType.tagline}
MBTI Description: ${mbtiType.description}
MBTI Key Strengths: ${mbtiType.strengths.join(", ")}

Raw Quiz Category Scores (max 12 each):
  Analytical: ${rawScores.analytical} / 12 (${pct("analytical")}% — ${lbl("analytical")})
  Creative:   ${rawScores.creative}   / 12 (${pct("creative")}% — ${lbl("creative")})
  Leadership: ${rawScores.leadership} / 12 (${pct("leadership")}% — ${lbl("leadership")})
  Empathy:    ${rawScores.empathy}    / 12 (${pct("empathy")}% — ${lbl("empathy")})
  Ambition:   ${rawScores.ambition}   / 12 (${pct("ambition")}% — ${lbl("ambition")})
  Resilience: ${rawScores.resilience} / 12 (${pct("resilience")}% — ${lbl("resilience")})

${isUniversityMode ? `Target Country: ${hasCountry ? targetCountry : "NOT SELECTED"}
Target Degree: ${hasDegree ? targetDegree : "NOT SELECTED"}
University Mode: ${uniMode}` : ""}

═══════════════════════════════════
UNIVERSITY TRACK DATA
═══════════════════════════════════
${trackContext}

═══════════════════════════════════
TASK
═══════════════════════════════════
${uniInstruction}
${examInstruction ? "Exams: " + examInstruction : ""}

═══════════════════════════════════
ABSOLUTE RULES
═══════════════════════════════════
1. "personalityType" field MUST be exactly: "${mbtiType.code}"
2. "personalityName" field MUST be exactly: "${mbtiType.name}"
3. "personalityFullLabel" field MUST be exactly: "${mbtiType.fullLabel}"
4. "tagline" should be personalised but echo the spirit of: "${mbtiType.tagline}"
5. ${isStreamMode ? "Recommend best stream (Science PCM/PCB, Commerce, Arts/Humanities, Vocational/Design) based on scores." : uniInstruction}
6. ALL university recommendations must be REAL universities.
7. Return ONLY valid JSON. No markdown. No text outside JSON.
8. Every section must be deeply personalised to this specific student's scores — NOT generic.

Return this exact JSON:

{
  "personalityType": "${mbtiType.code}",
  "personalityName": "${mbtiType.name}",
  "personalityFullLabel": "${mbtiType.fullLabel}",
  "tagline": "Personalised version of: ${mbtiType.tagline}",
  "overallScore": <integer 50-95 based on answer consistency>,

  "categories": [
    { "name": "Analytical", "score": ${rawScores.analytical}, "maxScore": 12, "percentage": ${pct("analytical")}, "label": "${lbl("analytical")}", "description": "2–3 sentences — personalised insight about their analytical pattern in the quiz.", "color": "#5b8aff" },
    { "name": "Creative",   "score": ${rawScores.creative},   "maxScore": 12, "percentage": ${pct("creative")},   "label": "${lbl("creative")}",   "description": "2–3 sentences personalised to their creative answers.", "color": "#a78bfa" },
    { "name": "Leadership", "score": ${rawScores.leadership}, "maxScore": 12, "percentage": ${pct("leadership")}, "label": "${lbl("leadership")}", "description": "2–3 sentences personalised.", "color": "#00C9B1" },
    { "name": "Empathy",    "score": ${rawScores.empathy},    "maxScore": 12, "percentage": ${pct("empathy")},    "label": "${lbl("empathy")}",    "description": "2–3 sentences personalised.", "color": "#f472b6" },
    { "name": "Ambition",   "score": ${rawScores.ambition},   "maxScore": 12, "percentage": ${pct("ambition")},   "label": "${lbl("ambition")}",   "description": "2–3 sentences personalised.", "color": "#fb923c" },
    { "name": "Resilience", "score": ${rawScores.resilience}, "maxScore": 12, "percentage": ${pct("resilience")}, "label": "${lbl("resilience")}", "description": "2–3 sentences personalised.", "color": "#34d399" }
  ],

  "strengths": [
    "Strength 1 — 15–25 words specific to ${mbtiType.code} and their highest scoring dimension",
    "Strength 2 — specific to second highest dimension",
    "Strength 3 — a cross-category insight unique to ${mbtiType.fullLabel} profile"
  ],
  "growthAreas": [
    "Growth area 1 with concrete actionable tip tied to lowest scoring dimension",
    "Growth area 2 with specific tip"
  ],

  ${isStreamMode ? `
  "streamRecommendation": {
    "primary": "best stream: Science (PCM) | Science (PCB) | Commerce | Arts / Humanities | Vocational / Design",
    "alternates": ["second best stream","third option"],
    "reasoning": "3–4 sentences — why this stream aligns with ${mbtiType.fullLabel} personality + their actual score pattern. Name specific subjects.",
    "subjects": ["Subject 1","Subject 2","Subject 3","Subject 4"],
    "careerPathsFromStream": ["Career 1","Career 2","Career 3","Career 4","Career 5"],
    "confidence": <65-98 based on how clearly scores indicate this stream>
  },` : `"streamRecommendation": null,`}

  "careerMatches": [
    { "title": "Best career for ${mbtiType.fullLabel}", "fit": <88-98>, "icon": "emoji", "description": "1 exciting sentence specific to this MBTI type.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Second career", "fit": <78-88>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Third career", "fit": <70-80>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Fourth career", "fit": <62-72>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" }
  ],
  "secondaryCareerMatches": [
    { "title": "Secondary 1", "fit": <50-64>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary 2", "fit": <44-54>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary 3", "fit": <38-48>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" }
  ],

  ${isUniversityMode ? `
  "universities": [
    {
      "name": "University #1 — best overall fit for ${mbtiType.fullLabel}${hasDegree ? " studying " + targetDegree : ""}",
      "country": "${hasCountry ? targetCountry : "best country for their personality"}",
      "flag": "correct country flag emoji",
      "program": "${hasDegree ? targetDegree + " — specific program name at this university" : "Program best aligned to " + mbtiType.code + " personality traits"}",
      "ranking": "specific world or national ranking",
      "website": "https://official-university-website.edu",
      "region": "${hasCountry ? targetCountry : "USA or UK or Canada or Australia or Singapore"}",
      "tuitionRange": "annual tuition in correct local currency",
      "whyForYou": "1–2 sentences: why this university is perfect for a ${mbtiType.fullLabel} student${hasDegree ? " pursuing " + targetDegree : ""}",
      "requiredExams": ["SAT","IELTS","any country-specific test"]
    },
    { "name": "University #2", "country": "...", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "...", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #3", "country": "...", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "...", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #4", "country": "...", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "...", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #5", "country": "...", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "...", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #6", "country": "...", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "...", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] }
  ],` : `"universities": [],`}

  "recommendedExams": [
    { "title": "Exam 1", "fullForm": "Full name", "classLevel": "Class 11–12", "description": "What it is and which universities require it", "whyForYou": "Personalised: why this exam matters for this ${mbtiType.code} student's goals", "priority": "Essential", "preparationTime": "X–Y months", "link": "https://...", "benefit": "Specific benefit — universities it unlocks", "targetCountries": ["country"] },
    { "title": "Exam 2", "fullForm": "...", "classLevel": "Class 11–12", "description": "...", "whyForYou": "...", "priority": "Essential", "preparationTime": "...", "link": "https://...", "benefit": "...", "targetCountries": ["..."] },
    { "title": "Exam 3", "fullForm": "...", "classLevel": "Class 11–12", "description": "...", "whyForYou": "...", "priority": "High", "preparationTime": "...", "link": "https://...", "benefit": "...", "targetCountries": ["..."] },
    { "title": "Exam 4", "fullForm": "...", "classLevel": "Class 12", "description": "...", "whyForYou": "...", "priority": "High", "preparationTime": "...", "link": "https://...", "benefit": "...", "targetCountries": ["..."] }
  ],

  "futuristicCareers": [
    { "title": "Future career perfectly suited to ${mbtiType.fullLabel}", "icon": "emoji", "description": "1 sentence.", "blend": "Field A + Field B + Field C matching ${mbtiType.code} traits", "growthOutlook": "Very High — specific reason" },
    { "title": "Future career 2", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 3", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 4", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 5", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." }
  ],

  "aptitudeEnhancement": {
    "books": [
      { "title": "Book relevant to ${mbtiType.code} top career", "author": "Author" },
      { "title": "Book that speaks to ${mbtiType.name} personality", "author": "Author" },
      { "title": "Inspirational book matching their ambition level", "author": "Author" }
    ],
    "apps": ["App 1","App 2","App 3","App 4","App 5","App 6","App 7","App 8"],
    "techniques": [
      "Technique 1 specific to ${mbtiType.code} learning style",
      "Technique 2 — targets their lowest scoring dimension",
      "Technique 3 — leverages their strongest trait",
      "Technique 4 — memory / focus technique",
      "Technique 5 — ${mbtiType.code}-specific growth technique"
    ],
    "quote": "Inspiring quote perfectly suited to ${mbtiType.fullLabel} personality"
  },

  "skillAttributes": [
    { "skill": "Top skill for ${mbtiType.code}", "level": <72-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Second skill", "level": <62-88>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Third skill",  "level": <55-82>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fourth skill", "level": <50-78>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fifth skill",  "level": <45-72>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Sixth — growth area skill", "level": <40-65>, "description": "1 sentence.", "icon": "emoji" }
  ],

  "profileBuilding": {
    "degrees": [
      { "type": "degree", "title": "${hasDegree ? targetDegree + " — best university program" : "Best degree for " + mbtiType.code + " personality"}", "description": "Why it fits in 1 sentence.", "priority": "Essential", "link": "https://eduquest.org.in/", "benefit": "Specific benefit for this student", "importance": "Long-term career impact", "classLevel": "Post Class 12" },
      { "type": "degree", "title": "Second degree option", "description": "...", "priority": "High", "link": "https://eduquest.org.in/", "benefit": "...", "importance": "...", "classLevel": "Post Class 12" },
      { "type": "degree", "title": "Third complementary option", "description": "...", "priority": "Medium", "link": "https://eduquest.org.in/", "benefit": "...", "importance": "...", "classLevel": "Post Class 12" }
    ],
    "exams": [],
    "activities": [
      "Activity perfectly matched to ${mbtiType.code} personality's top trait",
      "Activity aligned to their top career match",
      "Community/social impact activity matched to empathy score",
      "Activity that builds their lowest dimension",
      "Portfolio-building activity for university applications"
    ],
    "importantTip": "Personalised strategic tip for ${mbtiType.fullLabel} student. Naturally mention SAT + EduQuest (eduquest.org.in) and the specific exams they need.",
    "quote": "The difference between Ordinary and Extraordinary is that little extra."
  },

  "profileBuildingBenefits": {
    "overview": "2–3 sentences: why a ${mbtiType.fullLabel} needs to start building their profile NOW for ${hasDegree ? targetDegree : "global universities"}.",
    "keyBenefits": [
      { "icon": "🏆", "title": "Admission Advantage", "description": "Specific to ${hasCountry ? targetCountry : "global"} universities for ${mbtiType.code}." },
      { "icon": "💰", "title": "Scholarship Access", "description": "Scholarships for this profile and target." },
      { "icon": "🌍", "title": "Global Career Positioning", "description": "Career outcomes for ${mbtiType.fullLabel} internationally." },
      { "icon": "🧠", "title": "Self-Discovery", "description": "How the journey clarifies ${mbtiType.code}'s true direction." },
      { "icon": "⚡", "title": "Compounding Advantage", "description": "Why starting now beats starting in Class 12." }
    ],
    "whyItMatters": "3–4 passionate sentences directly to ${studentName} — reference ${mbtiType.fullLabel} specific strengths and what awaits them if they act now.",
    "timelineByClass": [
      { "classLevel": "Class 11", "actions": ["${mbtiType.code}-specific action 1", "Action 2 aligned to career match", "Action 3 — leadership/community", "Action 4 — exam prep start"] },
      { "classLevel": "Class 12", "actions": ["SAT + IELTS exams", "University application essays", "Scholarship applications", "Finalise list with EduQuest"] },
      { "classLevel": "Post Class 12", "actions": ["Confirm admission", "Apply for student visa", "Prepare for departure", "Connect with EduQuest alumni"] }
    ]
  },

  "scholarships": [
    { "name": "Scholarship 1 relevant to ${hasCountry ? targetCountry : "USA/UK/Canada/Australia"}${hasDegree ? " for " + targetDegree : ""}", "country": "Country + flag", "amount": "Amount", "eligibility": "Who qualifies in 1 sentence", "deadline": "Month annually", "link": "https://..." },
    { "name": "Scholarship 2", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 3", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 4", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 5", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." }
  ],

  "bestColleges": [
    { "name": "College 1", "country": "Country + flag", "flag": "emoji", "program": "${hasDegree ? targetDegree : mbtiType.code + " best-fit program"}", "acceptanceRate": "X%", "avgPackage": "Amount in currency", "region": "${hasCountry ? targetCountry : "USA"}" },
    { "name": "College 2", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${hasCountry ? targetCountry : "UK"}" },
    { "name": "College 3", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${hasCountry ? targetCountry : "Canada"}" },
    { "name": "College 4", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${hasCountry ? targetCountry : "Australia"}" },
    { "name": "College 5", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${hasCountry ? targetCountry : "Singapore"}" },
    { "name": "College 6", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "..." }
  ],

  "programRecommendation": "Specific EduQuest program for ${mbtiType.fullLabel} pursuing ${hasDegree ? targetDegree : "global education"} — name the actual program",

  "aiInsight": "Warm, personal 4–5 sentence paragraph directly to ${studentName}. MUST: (1) open by addressing them as ${mbtiType.fullLabel} and what that means for them, (2) name their top 2 dimension scores by name + percentage, (3) ${isStreamMode ? "explain why the recommended stream is PERFECT for " + mbtiType.code : hasCountry ? "name 2–3 specific recommended universities and the exact exams needed for " + targetCountry : "explain why their " + mbtiType.code + " personality points to specific countries and programs — name them"}, (4) end with inspiring call-to-action mentioning EduQuest at eduquest.org.in."
}`;

    // ── Call OpenAI ───────────────────────────────────────────────────────────
    let report: Record<string, unknown>;
    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: "You are a world-class educational psychologist and global admissions expert. Respond with ONLY valid JSON — no markdown, no code blocks, no text outside the JSON object.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.72,
        max_tokens: 7000,
        response_format: { type: "json_object" },
      });
      report = JSON.parse(completion.choices[0].message.content ?? "{}");
    } catch (aiErr) {
      console.error("OpenAI failed, using fallback:", aiErr);
      report = computeReport(answers, studentName, leadData) as unknown as Record<string, unknown>;
    }

    // ── Force MBTI type (never let AI override) ────────────────────────────
    report.personalityType      = mbtiType.code;
    report.personalityName      = mbtiType.name;
    report.personalityFullLabel = mbtiType.fullLabel;
    report.personalityTypeData  = mbtiType;   // full metadata for UI
    report.studentName          = studentName;
    report.generatedAt          = new Date().toISOString();
    report.currentClass         = currentClass;
    report.targetCountry        = targetCountry || null;
    report.targetDegree         = targetDegree  || null;
    report.uniMode              = uniMode;
    report.adminContact = {
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name:  "EduQuest Admissions Team",
    };

    // ── Save to Supabase ──────────────────────────────────────────────────────
    try {
      await supabaseAdmin.from("personality_leads").upsert(
        {
          name:               studentName,
          email:              email ?? "",
          phone:              leadData?.phone          ?? "",
          city:               leadData?.city           ?? "",
          age:                leadData?.age ? Number(leadData.age) : null,
          current_class:      currentClass,
          target_country:     targetCountry || null,
          target_degree:      targetDegree  || null,
          flow_type:          flowType,
          university_mode:    uniMode,
          personality_type:   mbtiType.code,
          personality_name:   mbtiType.name,
          overall_score:      report.overallScore as number,
          top_career:         (report.careerMatches as CareerMatch[])?.[0]?.title ?? null,
          stream_recommendation: (report.streamRecommendation as {primary?:string})?.primary ?? null,
          full_report:        report,
          quiz_answers:       answers,
          consent:            leadData?.consent ?? false,
          created_at:         new Date().toISOString(),
        },
        { onConflict: "email" }
      );
    } catch (dbErr) {
      console.error("Supabase save error (non-fatal):", dbErr);
    }

    // ── Admin email ───────────────────────────────────────────────────────────
    try {
      const cm   = report.careerMatches as CareerMatch[];
      const unis = (report.universities as Array<{name:string}> | undefined) ?? [];

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject: `${mbtiType.emoji} ${mbtiType.fullLabel} — ${studentName} · Class ${currentClass}${targetCountry ? " · " + targetCountry : ""}`,
          html: `
<div style="font-family:sans-serif;max-width:620px;margin:0 auto;background:#0b1c3d;color:white;padding:32px;border-radius:16px;">
  <div style="text-align:center;margin-bottom:20px;padding:20px;background:linear-gradient(135deg,${mbtiType.gradient.includes("#") ? "rgba(91,138,255,.15)" : "rgba(91,138,255,.15)"});border:1px solid rgba(255,255,255,.1);border-radius:14px;">
    <div style="font-size:2.5rem;margin-bottom:6px;">${mbtiType.emoji}</div>
    <div style="font-size:1.1rem;font-weight:800;color:#d4af37;">${mbtiType.fullLabel}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px;font-style:italic;">${mbtiType.tagline}</div>
  </div>
  <table style="width:100%;border-collapse:collapse;">
    ${[
      ["Student",          studentName],
      ["Email",            email ?? "—"],
      ["Phone",            leadData?.phone ?? "—"],
      ["City",             leadData?.city  ?? "—"],
      ["Current Class",    currentClass],
      ["MBTI Type",        `${mbtiType.emoji} ${mbtiType.fullLabel}`],
      ["Overall Score",    `${report.overallScore}/100`],
      ["Flow",             isStreamMode ? "Stream Recommendation" : `University (Mode ${uniMode})`],
      ...(isUniversityMode ? [
        ["Target Country",   targetCountry || "Not selected (AI suggested)"],
        ["Target Degree",    targetDegree  || "Not selected (AI suggested)"],
        ["Top Universities", unis.slice(0,3).map((u:{name:string})=>u.name).join(", ")],
      ] : [
        ["Recommended Stream", (report.streamRecommendation as {primary?:string})?.primary ?? "—"],
      ]),
      ["Top Career",       cm?.[0]?.title ?? "—"],
    ].map(([k,v])=>`
      <tr>
        <td style="padding:8px 0;color:rgba(255,255,255,.45);font-size:13px;width:180px;border-bottom:1px solid rgba(255,255,255,.06);">${k}</td>
        <td style="padding:8px 0;font-weight:600;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">${v}</td>
      </tr>`).join("")}
  </table>
  <div style="margin-top:16px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;font-size:12px;color:rgba(255,255,255,.4);">
    Careers: ${cm?.slice(0,4).map(c=>`${c.icon} ${c.title} (${c.fit}%)`).join(" · ") ?? "—"}
  </div>
</div>`,
        }),
      });
    } catch (emailErr) {
      console.error("Admin email error (non-fatal):", emailErr);
    }

    return NextResponse.json({ report });

  } catch (e) {
    console.error("personality-test route error:", e);
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 });
  }
}