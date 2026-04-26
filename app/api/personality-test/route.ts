import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { computeReport, UNIVERSITY_TRACKS, getTrackForCountry, getFlowType } from "@/lib/personality";
import type { CareerMatch, LeadFormData } from "@/lib/personality";

// ── Clients ──────────────────────────────────────────────────
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const OPENAI_MODEL = "gpt-4o-mini";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

// ── POST /api/personality-test ────────────────────────────────
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

    const currentClass   = leadData?.currentClass ?? "12";
    const flowType       = getFlowType(currentClass);
    const targetCountry  = leadData?.targetCountry ?? "USA";
    const targetDegree   = leadData?.targetDegree  ?? "";
    const track          = getTrackForCountry(targetCountry);
    const isStreamMode   = flowType === "stream_recommendation";
    const isUniversityMode = !isStreamMode;

    // ── University Track Matrix context for AI ────────────────
    const trackContext = UNIVERSITY_TRACKS.map(t => `
${t.flag} ${t.region}:
  Universities: ${t.targetUniversities.join(", ")}
  Academic Requirements: ${t.academicExpectations}
  Testing Strategy: ${t.testingStrategy}
  Profile Requirements: ${t.profileRequirements}
  Key Insight: ${t.keyStrategicInsight}`).join("\n");

    // ── Class-aware prompt sections ───────────────────────────
    const streamSection = isStreamMode ? `
  "streamRecommendation": {
    "primary": "Science (PCM) | Science (PCB) | Commerce | Arts / Humanities | Vocational / Design",
    "alternates": ["Second best stream", "Third option"],
    "reasoning": "3–4 sentences personalised — explain why this stream aligns with their dominant traits and 10-year career goals. Be specific about subjects they should take.",
    "subjects": ["Subject 1", "Subject 2", "Subject 3", "Subject 4"],
    "careerPathsFromStream": ["Career 1", "Career 2", "Career 3", "Career 4", "Career 5"],
    "confidence": <integer 65-98>
  },` : `"streamRecommendation": null,`;

    const universitySection = isUniversityMode ? `
  "universities": [
    {
      "name": "Best fit university #1 for ${targetDegree} in ${targetCountry}",
      "country": "${targetCountry}",
      "flag": "${track?.flag ?? "🌍"}",
      "program": "Specific ${targetDegree} program at this university",
      "ranking": "Specific world/national ranking",
      "website": "https://official-website.edu",
      "region": "${targetCountry}",
      "tuitionRange": "Annual tuition in local currency",
      "whyForYou": "1–2 sentences: why this university suits this student's personality + career goals",
      "requiredExams": ["List exams from track testing strategy, e.g. SAT, IELTS, AP Calculus"]
    },
    { "name": "University #2", "country": "${targetCountry}", "flag": "${track?.flag ?? "🌍"}", "program": "...", "ranking": "...", "website": "https://...", "region": "${targetCountry}", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #3", "country": "${targetCountry}", "flag": "${track?.flag ?? "🌍"}", "program": "...", "ranking": "...", "website": "https://...", "region": "${targetCountry}", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #4", "country": "${targetCountry}", "flag": "${track?.flag ?? "🌍"}", "program": "...", "ranking": "...", "website": "https://...", "region": "${targetCountry}", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #5", "country": "${targetCountry}", "flag": "${track?.flag ?? "🌍"}", "program": "...", "ranking": "...", "website": "https://...", "region": "${targetCountry}", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] },
    { "name": "University #6", "country": "${targetCountry}", "flag": "${track?.flag ?? "🌍"}", "program": "...", "ranking": "...", "website": "https://...", "region": "${targetCountry}", "tuitionRange": "...", "whyForYou": "...", "requiredExams": ["..."] }
  ],` : `"universities": [],`;

    const examSection = isStreamMode ? `
  "recommendedExams": [
    {
      "title": "NTSE",
      "fullForm": "National Talent Search Examination",
      "classLevel": "Class 9–10",
      "description": "Flagship national scholarship exam by NCERT — identifies talent among Class 10 students across India.",
      "whyForYou": "Personalised: why NTSE matters for this student based on their analytical/academic profile",
      "priority": "Essential",
      "preparationTime": "6–8 months",
      "link": "https://ncert.nic.in/ntse.php",
      "benefit": "Prestigious national scholarship + recognition that strengthens future university applications",
      "targetCountries": ["India"]
    },
    {
      "title": "Olympiads",
      "fullForm": "National / International Olympiad Examinations",
      "classLevel": "Class 9–10",
      "description": "SOF, Unified Council, CBSE Olympiads in Math, Science, English for Class 9–10 students.",
      "whyForYou": "Personalised reason tied to their top categories — e.g. if analytical is high, Math Olympiad",
      "priority": "High",
      "preparationTime": "3–4 months",
      "link": "https://www.sofworld.org",
      "benefit": "International recognition, scholarship opportunities, and profile strength for future university applications",
      "targetCountries": ["India", "International"]
    },
    {
      "title": "SAT Foundation",
      "fullForm": "Scholastic Assessment Test — Early Preparation Start",
      "classLevel": "Class 9–10",
      "description": "Begin SAT foundations now — English reading, vocabulary, math concepts. You'll take the actual SAT in Class 11–12.",
      "whyForYou": "Students who start SAT prep in Class 9–10 consistently score 100–150 points higher. Now is the best time to begin.",
      "priority": "High",
      "preparationTime": "Foundation building — 12–24 months",
      "link": "https://collegereadiness.collegeboard.org/sat",
      "benefit": "Early SAT prep compounds into 1450+ scores that open Ivy League and top global university doors",
      "targetCountries": ["USA", "Canada", "Singapore", "Australia"]
    }
  ],` : `
  "recommendedExams": [
    {
      "title": "SAT",
      "fullForm": "Scholastic Assessment Test",
      "classLevel": "Class 11–12",
      "description": "Required for ${targetCountry} admissions. Track: ${track?.testingStrategy ?? "SAT strongly recommended"}",
      "whyForYou": "Personalised: why SAT matters for this student targeting ${targetDegree} at ${targetCountry} universities — reference their top trait",
      "priority": "${targetCountry === "Canada" ? "High" : "Essential"}",
      "preparationTime": "6–12 months",
      "link": "https://collegereadiness.collegeboard.org/sat",
      "benefit": "Opens doors to: ${track?.targetUniversities.slice(0,4).join(", ") ?? "top global universities"}",
      "targetCountries": ["${targetCountry}"]
    },
    {
      "title": "IELTS / TOEFL",
      "fullForm": "International English Language Testing System / Test of English as a Foreign Language",
      "classLevel": "Class 11–12",
      "description": "Mandatory English proficiency test. Target: 7.0–7.5 IELTS or 100–105 TOEFL for ${targetCountry} universities.",
      "whyForYou": "Non-negotiable — every university in ${targetCountry} requires IELTS or TOEFL as part of the application.",
      "priority": "Essential",
      "preparationTime": "2–4 months",
      "link": "https://www.ielts.org",
      "benefit": "Required by all 6 recommended universities. A 7.5+ score strengthens your scholarship eligibility.",
      "targetCountries": ["${targetCountry}"]
    },
    {
      "title": "${targetCountry === "UK" ? "UCAT / TMUA / LNAT" : targetCountry === "USA" ? "AP Exams" : targetCountry === "Singapore" ? "TMUA / AP" : targetCountry === "Europe" ? "TestDaF / DELF / SAT Subject Tests" : "AP Exams"}",
      "fullForm": "${targetCountry === "UK" ? "UK University Entrance Tests (subject-specific)" : targetCountry === "USA" ? "Advanced Placement Examinations" : "Subject-specific entrance test"}",
      "classLevel": "${targetCountry === "UK" || targetCountry === "USA" ? "Class 11–12" : "Class 12"}",
      "description": "${targetCountry === "UK" ? "Subject-specific tests: UCAT (Medicine/Dentistry), TMUA (Maths/Econ/CS), LNAT (Law), ESAT (Engineering). Required by Oxford, Cambridge, Russell Group." : targetCountry === "USA" ? "College Board AP exams — score 4–5 to earn college credits at 4,000+ US universities, reducing degree cost by 1 semester." : "Subject-specific entrance test for " + targetCountry + " — check individual university requirements for " + targetDegree + "."}",
      "whyForYou": "Personalised: which specific subject test matters for this student's ${targetDegree} at ${targetCountry} universities, tied to their top career goal",
      "priority": "High",
      "preparationTime": "3–6 months",
      "link": "${targetCountry === "UK" ? "https://www.ucat.ac.uk" : targetCountry === "USA" ? "https://apstudents.collegeboard.org" : "https://www.ielts.org"}",
      "benefit": "Personalised benefit — how this specific exam strengthens their application for ${targetDegree} in ${targetCountry}",
      "targetCountries": ["${targetCountry}"]
    }
    // Add 1 more exam if targeting MBA/Graduate: GMAT (link: https://www.mba.com) or GRE (link: https://www.ets.org/gre)
  ],`;

    const prompt = `You are Dr. Alex, a world-class educational psychologist and global university admissions strategist, specialising in Indian students targeting international universities.

STUDENT PROFILE:
- Name: ${studentName}
- Current Class: ${currentClass}
- Report Type: ${isStreamMode ? "STREAM RECOMMENDATION (Class 8–10)" : "UNIVERSITY RECOMMENDATION (Class 11/12+)"}
${isUniversityMode ? `- Target Country: ${targetCountry}
- Target Degree: ${targetDegree}
- Target Universities from Track: ${track?.targetUniversities.join(", ") ?? "Top universities"}` : ""}
- Quiz Answers (question_id → score 1-4): ${JSON.stringify(answers)}

UNIVERSITY TRACK INTELLIGENCE MATRIX:
${trackContext}

CRITICAL RULES:
1. ${isStreamMode
  ? "Recommend the BEST stream for Class 11 (Science PCM/PCB, Commerce, Arts/Humanities, or Vocational/Design) based on actual scores. Be specific and personalised."
  : `Recommend EXACTLY 6 universities in ${targetCountry} ordered #1 (best fit) to #6. Use the Track Intelligence Matrix. All must be real universities in ${targetCountry}.`}
2. Exams must match class level and country. Use track testing strategy.
3. ONLY return valid JSON. No markdown, no text outside JSON.
4. Every field must be genuinely personalised to this student's scores — not generic.

{
  "personalityType": "3–5 word distinctive title based on their top 2 trait combo",
  "tagline": "12–18 word tagline tied to their ${isStreamMode ? "stream choice and strengths" : "target of " + targetDegree + " in " + targetCountry}",
  "overallScore": <integer 45-95 based on answer consistency and engagement>,

  "categories": [
    { "name": "Analytical", "score": <sum Q1+Q2+Q3>, "maxScore": 12, "percentage": <0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences referencing their actual analytical answers.", "color": "#5b8aff" },
    { "name": "Creative",   "score": <integer>, "maxScore": 12, "percentage": <0-100>, "label": "...", "description": "2–3 sentences.", "color": "#a78bfa" },
    { "name": "Leadership", "score": <integer>, "maxScore": 12, "percentage": <0-100>, "label": "...", "description": "2–3 sentences.", "color": "#00C9B1" },
    { "name": "Empathy",    "score": <integer>, "maxScore": 12, "percentage": <0-100>, "label": "...", "description": "2–3 sentences.", "color": "#f472b6" },
    { "name": "Ambition",   "score": <integer>, "maxScore": 12, "percentage": <0-100>, "label": "...", "description": "2–3 sentences.", "color": "#fb923c" },
    { "name": "Resilience", "score": <integer>, "maxScore": 12, "percentage": <0-100>, "label": "...", "description": "2–3 sentences.", "color": "#34d399" }
  ],

  "strengths": [
    "Strength 1 — 15–25 words, specific to their highest scoring category",
    "Strength 2 — specific to second highest",
    "Strength 3 — a cross-category insight"
  ],
  "growthAreas": [
    "Growth area 1 with a concrete actionable tip based on lowest category",
    "Growth area 2 with actionable tip"
  ],

  ${streamSection}

  "careerMatches": [
    { "title": "Top career for this profile", "fit": <85-98>, "icon": "emoji", "description": "1 exciting sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Second career", "fit": <75-88>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Third career", "fit": <68-80>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Fourth career", "fit": <60-75>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" }
  ],

  "secondaryCareerMatches": [
    { "title": "Secondary 1", "fit": <50-65>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary 2", "fit": <45-60>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary 3", "fit": <40-55>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" }
  ],

  ${universitySection}

  ${examSection}

  "futuristicCareers": [
    { "title": "Future career 1 personalised to their trait combo", "icon": "emoji", "description": "1 sentence.", "blend": "Field A + Field B + Field C", "growthOutlook": "Very High — specific reason" },
    { "title": "Future career 2", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 3", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 4", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 5", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." }
  ],

  "aptitudeEnhancement": {
    "books": [
      { "title": "Book relevant to top career match", "author": "Author name" },
      { "title": "Book about reasoning or strengths", "author": "Author name" },
      { "title": "Inspirational book for their ambition level", "author": "Author name" }
    ],
    "apps": ["App 1","App 2","App 3","App 4","App 5","App 6","App 7","App 8"],
    "techniques": [
      "Technique 1 — specific to this student's profile",
      "Technique 2 — targets their weakest category",
      "Technique 3 — leverages their strongest trait",
      "Technique 4 — memory or focus technique",
      "Technique 5 — leadership or creativity development"
    ],
    "quote": "Inspiring quote suited to this student's personality type"
  },

  "skillAttributes": [
    { "skill": "Top skill aligned to career matches", "level": <70-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Second skill", "level": <60-88>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Third skill", "level": <55-85>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fourth skill", "level": <50-80>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fifth skill", "level": <45-78>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Sixth skill — growth area", "level": <40-70>, "description": "1 sentence.", "icon": "emoji" }
  ],

  "profileBuilding": {
    "degrees": [
      { "type": "degree", "title": "Best degree for ${isStreamMode ? "recommended stream" : targetDegree + " in " + targetCountry}", "description": "Why it fits in 1 sentence.", "priority": "Essential", "link": "https://eduquest.org.in/", "benefit": "Specific benefit for this student", "importance": "Long-term career impact", "classLevel": "Post Class 12" },
      { "type": "degree", "title": "Second degree option", "description": "...", "priority": "High", "link": "https://eduquest.org.in/", "benefit": "...", "importance": "...", "classLevel": "Post Class 12" },
      { "type": "degree", "title": "Third interdisciplinary option", "description": "...", "priority": "Medium", "link": "https://eduquest.org.in/", "benefit": "...", "importance": "...", "classLevel": "Post Class 12" }
    ],
    "exams": [],
    "activities": [
      "Activity 1 — specific to top personality trait",
      "Activity 2 — aligned to top career match",
      "Activity 3 — community impact relevant to their empathy score",
      "Activity 4 — builds their weakest category",
      "Activity 5 — builds portfolio evidence for university applications"
    ],
    "importantTip": "${isStreamMode
      ? "Personalised strategic tip for Class " + currentClass + " student. Mention SAT preparation start and EduQuest (eduquest.org.in) naturally."
      : "Personalised tip for targeting " + targetDegree + " in " + targetCountry + ". Mention specific exams from track and EduQuest (eduquest.org.in)."}",
    "quote": "The difference between Ordinary and Extraordinary is that little extra."
  },

  "profileBuildingBenefits": {
    "overview": "${isStreamMode
      ? "2–3 sentences: why choosing the right stream in Class 11 is critical for this student's long-term goals"
      : "2–3 sentences: why building a strong profile for " + targetDegree + " in " + targetCountry + " is critical right now"}",
    "keyBenefits": [
      { "icon": "🏆", "title": "Admission Advantage", "description": "1–2 sentences specific to ${isStreamMode ? "stream choice" : targetCountry + " universities"}." },
      { "icon": "💰", "title": "Scholarship Access", "description": "1–2 sentences about scholarships for this student's profile." },
      { "icon": "🌍", "title": "Global Career Positioning", "description": "1–2 sentences about career outcomes for ${isStreamMode ? "chosen stream" : targetDegree}." },
      { "icon": "🧠", "title": "Self-Discovery & Clarity", "description": "1–2 sentences about clarity and growth through the process." },
      { "icon": "⚡", "title": "Compounding Early Advantage", "description": "1–2 sentences about starting early being the biggest competitive advantage." }
    ],
    "whyItMatters": "3–4 sentence passionate paragraph addressed to ${studentName} — reference their specific strengths and the opportunity ahead.",
    "timelineByClass": [
      {
        "classLevel": "${isStreamMode ? "Class " + currentClass : "Class 11"}",
        "actions": [
          "Action 1 specific to this student's profile — e.g. if analytical is high: Enrol in Math Olympiad",
          "Action 2 — explore interests aligned to career matches",
          "Action 3 — begin foundational reading in top career area",
          "Action 4 — join 1–2 clubs that build weakest trait"
        ]
      },
      {
        "classLevel": "${isStreamMode ? "Class 11" : "Class 12"}",
        "actions": [
          "Action 1 — ${isStreamMode ? "begin SAT prep with EduQuest" : "appear for SAT + IELTS/TOEFL"}",
          "Action 2 — ${isStreamMode ? "take on school leadership role" : "write compelling university essays using profile built over years"}",
          "Action 3",
          "Action 4"
        ]
      },
      {
        "classLevel": "${isStreamMode ? "Class 12" : "Post Class 12"}",
        "actions": [
          "Action 1 — ${isStreamMode ? "appear for SAT + IELTS" : "finalise admission to " + targetCountry + " university"}",
          "Action 2", "Action 3", "Action 4"
        ]
      }
    ]
  },

  "scholarships": [
    { "name": "Scholarship 1 relevant to ${targetCountry}", "country": "Country + flag emoji", "amount": "Amount", "eligibility": "Who qualifies in 1 sentence", "deadline": "Month annually", "link": "https://..." },
    { "name": "Scholarship 2", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 3", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 4", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." },
    { "name": "Scholarship 5", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "..." }
  ],

  "bestColleges": [
    { "name": "College 1", "country": "Country flag", "flag": "emoji", "program": "${targetDegree || "relevant program"}", "acceptanceRate": "X%", "avgPackage": "Amount", "region": "${targetCountry}" },
    { "name": "College 2", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${targetCountry}" },
    { "name": "College 3", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${targetCountry}" },
    { "name": "College 4", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${targetCountry}" },
    { "name": "College 5", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${targetCountry}" },
    { "name": "College 6", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "${targetCountry}" }
  ],

  "programRecommendation": "${isStreamMode
    ? "Specific EduQuest program for Class " + currentClass + " students — e.g. EduQuest Early Profile Builder"
    : "Specific EduQuest program for " + targetDegree + " admissions in " + targetCountry}",

  "aiInsight": "Warm, deeply personal 4–5 sentence paragraph directly to ${studentName}. MUST: (1) name top 2–3 categories by name + percentage, (2) ${isStreamMode
    ? "explain why the recommended stream fits them personally + 2 specific subject suggestions"
    : "name #1 career match and explain fit, mention " + targetCountry + " track strategy and 2 specific universities by name"}, (3) name 2 specific exams they need and why, (4) end with inspiring call-to-action referencing EduQuest at eduquest.org.in."
}

Label rules: 80–100 = Exceptional, 60–79 = Strong, 40–59 = Developing, 0–39 = Emerging
Salary ranges in Indian context (LPA). Be specific and deeply personalised throughout.`;

    // ── Call OpenAI ──────────────────────────────────────────
    let report: Record<string, unknown>;
    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: "You are a world-class educational psychologist and global university admissions expert. Always respond with valid JSON only — no markdown, no code blocks, no text outside the JSON object.",
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

    // ── Inject server-side fields ────────────────────────────
    report.studentName    = studentName;
    report.generatedAt    = new Date().toISOString();
    report.currentClass   = currentClass;
    report.targetCountry  = targetCountry;
    report.targetDegree   = targetDegree;
    report.adminContact   = {
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name:  "EduQuest Admissions Team",
    };

    // ── Save to Supabase ─────────────────────────────────────
    try {
      await supabaseAdmin.from("personality_leads").upsert(
        {
          name:              studentName,
          email:             email ?? "",
          phone:             leadData?.phone          ?? "",
          city:              leadData?.city           ?? "",
          age:               leadData?.age ? Number(leadData.age) : null,
          education_level:   leadData?.educationLevel ?? "",
          program_interest:  leadData?.programInterest ?? "",
          current_class:     currentClass,
          target_country:    targetCountry,
          target_degree:     targetDegree,
          flow_type:         flowType,
          personality_type:  report.personalityType as string,
          overall_score:     report.overallScore     as number,
          top_career:        (report.careerMatches as CareerMatch[])?.[0]?.title,
          stream_recommendation: (report.streamRecommendation as { primary?: string })?.primary ?? null,
          full_report:       report,
          quiz_answers:      answers,
          consent:           leadData?.consent ?? false,
          created_at:        new Date().toISOString(),
        },
        { onConflict: "email" }
      );
    } catch (dbErr) {
      console.error("Supabase save error (non-fatal):", dbErr);
    }

    // ── Admin email notification ─────────────────────────────
    try {
      const cm   = report.careerMatches as CareerMatch[];
      const unis = (report.universities as Array<{name:string}> | undefined) ?? [];

      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject: `🧠 New Report — ${studentName} · Class ${currentClass}${targetCountry ? " · " + targetCountry : ""}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b1c3d;color:white;padding:32px;border-radius:16px;">
              <h2 style="color:#d4af37;margin-bottom:20px;">🧠 New OmniQuest Personality Report</h2>
              <table style="width:100%;border-collapse:collapse;">
                ${[
                  ["Student Name",    studentName],
                  ["Email",           email ?? "Not provided"],
                  ["Phone",           leadData?.phone ?? "—"],
                  ["City",            leadData?.city  ?? "—"],
                  ["Current Class",   currentClass],
                  ["Report Type",     isStreamMode ? "Stream Recommendation" : "University Recommendation"],
                  ...(isUniversityMode ? [
                    ["Target Country", targetCountry],
                    ["Target Degree",  targetDegree],
                    ["Top 3 Universities", unis.slice(0,3).map((u: {name:string}) => u.name).join(", ")],
                  ] : [
                    ["Recommended Stream", (report.streamRecommendation as {primary?:string})?.primary ?? "—"],
                  ]),
                  ["Personality Type", String(report.personalityType)],
                  ["Overall Score",   `${report.overallScore}/100`],
                  ["Top Career",      cm?.[0]?.title ?? "—"],
                  ["Generated At",    new Date().toLocaleString("en-IN")],
                ].map(([k,v]) => `
                  <tr>
                    <td style="padding:8px 0;color:rgba(255,255,255,.5);font-size:13px;width:180px;border-bottom:1px solid rgba(255,255,255,.06);">${k}</td>
                    <td style="padding:8px 0;font-weight:600;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">${v}</td>
                  </tr>`).join("")}
              </table>
              <div style="margin-top:20px;padding:14px;background:rgba(255,255,255,.05);border-radius:10px;font-size:12px;color:rgba(255,255,255,.4);">
                Careers: ${cm?.slice(0,4).map(c => `${c.icon} ${c.title} (${c.fit}%)`).join(" · ") ?? "—"}
              </div>
            </div>
          `,
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