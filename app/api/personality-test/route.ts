import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabase";
import { computeReport } from "@/lib/personality";

export async function POST(req: NextRequest) {
  try {
    const { answers, studentName, email } = await req.json();
    if (!answers || !studentName)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const prompt = `You are Dr. Alex, a world-class educational psychologist and career strategist based in India.
Analyze the following personality quiz answers for a student and generate a COMPREHENSIVE career intelligence report.

Student Name: ${studentName}
Quiz Answers (question_id → score, 1=lowest 4=highest): ${JSON.stringify(answers)}

Categories measured (3 questions each, max 12 per category):
- analytical, creative, leadership, empathy, ambition, resilience

Return ONLY valid JSON. No markdown. No explanation.

{
  "personalityType": "3-5 word distinctive title",
  "tagline": "12-18 word compelling tagline",
  "overallScore": <integer 0-100>,

  "categories": [
    { "name": "Analytical", "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 warm specific sentences about this dimension.", "color": "#5b8aff" },
    { "name": "Creative",   "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 sentences.", "color": "#a78bfa" },
    { "name": "Leadership", "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 sentences.", "color": "#00C9B1" },
    { "name": "Empathy",    "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 sentences.", "color": "#f472b6" },
    { "name": "Ambition",   "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 sentences.", "color": "#fb923c" },
    { "name": "Resilience", "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2-3 sentences.", "color": "#34d399" }
  ],

  "strengths": ["Strength 1 in 15-25 words", "Strength 2", "Strength 3"],
  "growthAreas": ["Growth area 1 with actionable tip in 15-25 words", "Growth area 2"],

  "careerMatches": [
    { "title": "Primary career 1", "fit": <80-98>, "icon": "emoji", "description": "What this professional does in 1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Primary career 2", "fit": <75-90>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Primary career 3", "fit": <70-85>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Primary career 4", "fit": <65-80>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" }
  ],

  "secondaryCareerMatches": [
    { "title": "Secondary career 1", "fit": <55-70>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary career 2", "fit": <50-65>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary career 3", "fit": <45-60>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" }
  ],

  "universities": [
    { "name": "University name", "country": "Country", "flag": "🇺🇸", "program": "Relevant program", "ranking": "#X World", "website": "https://..." },
    { "name": "...", "country": "...", "flag": "🇬🇧", "program": "...", "ranking": "...", "website": "https://..." },
    { "name": "...", "country": "...", "flag": "🇸🇬", "program": "...", "ranking": "...", "website": "https://..." },
    { "name": "...", "country": "...", "flag": "🇨🇦", "program": "...", "ranking": "...", "website": "https://..." },
    { "name": "...", "country": "...", "flag": "🇦🇺", "program": "...", "ranking": "...", "website": "https://..." },
    { "name": "...", "country": "...", "flag": "🇮🇳", "program": "...", "ranking": "Top India", "website": "https://..." }
  ],

  "futuristicCareers": [
    { "title": "Future career 1", "icon": "emoji", "description": "What this role does in 1 sentence.", "blend": "Field A + Field B + Field C", "growthOutlook": "Very High | High | Emerging — reason" },
    { "title": "Future career 2", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 3", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 4", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 5", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." }
  ],

  "aptitudeEnhancement": {
    "books": [
      { "title": "Book title", "author": "Author name" },
      { "title": "Book title", "author": "Author name" },
      { "title": "Book title", "author": "Author name" }
    ],
    "apps": ["App 1","App 2","App 3","App 4","App 5","App 6","App 7","App 8"],
    "techniques": [
      "Technique 1 — specific actionable advice",
      "Technique 2",
      "Technique 3",
      "Technique 4",
      "Technique 5"
    ],
    "quote": "An inspiring quote about aptitude or potential"
  },

  "skillAttributes": [
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence about this skill dimension.", "icon": "emoji" },
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Skill name", "level": <integer 40-95>, "description": "1 sentence.", "icon": "emoji" }
  ],

  "profileBuilding": {
    "degrees": [
      { "type": "degree", "title": "Degree name", "description": "Why this degree fits the student's profile in 1 sentence.", "priority": "High|Medium|Essential", "link": "https://..." },
      { "type": "degree", "title": "...", "description": "...", "priority": "...", "link": "https://..." },
      { "type": "degree", "title": "...", "description": "...", "priority": "...", "link": "https://..." }
    ],
    "exams": [
      { "type": "exam", "title": "SAT", "description": "Opens 50+ universities in India and global admission to USA/UK.", "priority": "Essential", "link": "https://collegereadiness.collegeboard.org/sat" },
      { "type": "exam", "title": "GMAT", "description": "Required for MBA at M7 and top global business schools.", "priority": "High", "link": "https://www.mba.com/exams/gmat" },
      { "type": "exam", "title": "GRE",  "description": "Needed for graduate programmes in sciences and humanities.", "priority": "High", "link": "https://www.ets.org/gre" },
      { "type": "exam", "title": "IELTS / TOEFL", "description": "English proficiency test required by all major global universities.", "priority": "Essential", "link": "https://www.ielts.org" }
    ],
    "activities": [
      "Extracurricular activity 1 tailored to the student's profile",
      "Activity 2",
      "Activity 3",
      "Activity 4",
      "Activity 5"
    ],
    "importantTip": "Take SAT and you can apply to 50+ leading universities in India and avoid multiple entrance tests. Visit eduquest.org.in for more. To navigate SAT preparation, reach out to EduQuest.",
    "quote": "An inspiring quote about going the extra mile"
  },

  "scholarships": [
    { "name": "Scholarship name", "country": "Country + flag emoji", "amount": "Amount or Full funding", "eligibility": "Who qualifies in 1 sentence", "deadline": "Month annually", "link": "https://..." },
    { "name": "...", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "...", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "...", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "...", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." }
  ],

  "bestColleges": [
    { "name": "College name", "country": "Country + flag", "flag": "emoji", "program": "Relevant program", "acceptanceRate": "X%", "avgPackage": "₹X LPA or $XK" },
    { "name": "...", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "..." },
    { "name": "...", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "..." },
    { "name": "...", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "..." },
    { "name": "...", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "..." },
    { "name": "...", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "..." }
  ],

  "streamRecommendation": {
    "primary": "Science (PCM) | Science (PCB) | Commerce | Arts / Humanities | Vocational / Design",
    "alternates": ["Second stream", "Third stream"],
    "reasoning": "2-3 sentences about why this stream fits based on their actual scores.",
    "subjects": ["Subject 1","Subject 2","Subject 3","Subject 4"],
    "careerPathsFromStream": ["Path 1","Path 2","Path 3","Path 4"],
    "confidence": <integer 60-98>
  },

  "programRecommendation": "Specific OmniQuest program recommendation",
  "aiInsight": "Warm, personal 4-5 sentence paragraph written directly to ${studentName}. Reference their specific trait scores, personality type, top career match and how OmniQuest will help them get there."
}

Label rules: 80-100=Exceptional, 60-79=Strong, 40-59=Developing, 0-39=Emerging
Salary in Indian context (LPA). Be specific and personalised.`;

    let report: Record<string, unknown>;
    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role:"system", content:"You are a world-class educational psychologist. Always respond with valid JSON only. No markdown." },
          { role:"user", content: prompt },
        ],
        temperature: 0.72,
        max_tokens: 5000,
        response_format: { type:"json_object" },
      });
      report = JSON.parse(completion.choices[0].message.content ?? "{}");
    } catch (aiErr) {
      console.error("OpenAI failed, using fallback:", aiErr);
      report = computeReport(answers, studentName) as unknown as Record<string, unknown>;
    }

    report.studentName = studentName;
    report.generatedAt = new Date().toISOString();
    report.adminContact = {
      email: process.env.ADMIN_EMAIL ?? "admissions@eduquest.org.in",
      phone: process.env.ADMIN_PHONE ?? "+91 98765 43210",
      name:  "EduQuest Admissions Team",
    };

    /* ── Save to Supabase ── */
    try {
      await supabaseAdmin.from("personality_leads").insert({
        name: studentName, email: email ?? "",
        personality_type: report.personalityType,
        overall_score: report.overallScore,
        top_career: (report.careerMatches as CareerMatch[])?.[0]?.title,
        stream: (report.streamRecommendation as { primary: string })?.primary,
        full_report: report,
        created_at: new Date().toISOString(),
      });
    } catch (dbErr) {
      console.error("Supabase error (non-fatal):", dbErr);
    }

    /* ── Admin email ── */
    try {
      const cm = report.careerMatches as CareerMatch[];
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject:`🧠 New Personality Report — ${studentName} · ${report.personalityType}`,
          html:`
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b1c3d;color:white;padding:32px;border-radius:16px;">
              <h2 style="color:#d4af37;margin-bottom:20px;">🧠 New Personality Report Submitted</h2>
              <table style="width:100%;border-collapse:collapse;">
                ${[
                  ["Student Name", studentName],
                  ["Email", email ?? "Not provided"],
                  ["Personality Type", String(report.personalityType)],
                  ["Overall Score", `${report.overallScore}/100`],
                  ["Top Career Match", cm?.[0]?.title ?? "—"],
                  ["Stream Recommendation", (report.streamRecommendation as {primary:string})?.primary ?? "—"],
                  ["Generated At", new Date().toLocaleString("en-IN")],
                ].map(([k,v])=>`
                  <tr>
                    <td style="padding:8px 12px;font-size:13px;color:rgba(255,255,255,.5);width:160px;border-bottom:1px solid rgba(255,255,255,.07);">${k}</td>
                    <td style="padding:8px 12px;font-size:13px;color:white;font-weight:600;border-bottom:1px solid rgba(255,255,255,.07);">${v}</td>
                  </tr>
                `).join("")}
              </table>
              <div style="margin-top:20px;padding:14px 16px;background:rgba(255,255,255,.05);border-radius:10px;">
                <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">Top 4 Career Matches: ${cm?.slice(0,4).map(c=>`${c.icon} ${c.title} (${c.fit}%)`).join(" · ") ?? "—"}</p>
              </div>
            </div>
          `,
        }),
      });
    } catch (emailErr) {
      console.error("Admin email error:", emailErr);
    }

    return NextResponse.json({ report });
  } catch (e) {
    console.error("Route error:", e);
    return NextResponse.json({ error:"Failed to generate report" }, { status:500 });
  }
}

/* local type for email build */
interface CareerMatch { title:string; fit:number; icon:string }