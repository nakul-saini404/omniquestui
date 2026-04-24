import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabase";
import { computeReport } from "@/lib/personality";

export async function POST(req: NextRequest) {
  try {
    const { answers, studentName, email } = await req.json();
    if (!answers || !studentName)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const prompt = `You are Dr. Alex, a world-class educational psychologist and career strategist based in India specialising in helping Class 9–12 students chart their path to top global universities.

Analyse the following personality quiz answers for a student and generate a COMPREHENSIVE, DEEPLY PERSONALISED career intelligence report.

Student Name: ${studentName}
Quiz Answers (question_id → score, 1=lowest 4=highest): ${JSON.stringify(answers)}

Categories measured (3 questions each, max 12 per category):
- analytical, creative, leadership, empathy, ambition, resilience

CRITICAL RULES:
1. ALL exam recommendations must be specific to Class 9–12 Indian students preparing for INTERNATIONAL universities.
2. Universities must ONLY be from USA, Canada, Australia, or Europe (UK, Germany, Netherlands, France, Switzerland, Sweden, Ireland etc). NO Indian universities.
3. profileBuildingBenefits must be detailed, actionable, and inspiring — explaining WHY building a profile matters with class-wise timelines.
4. Every section must be genuinely personalised to this student's actual scores — not generic.
5. Return ONLY valid JSON. No markdown. No explanation. No code blocks.

{
  "personalityType": "3–5 word distinctive title e.g. Visionary Systems Thinker",
  "tagline": "12–18 word compelling tagline personalised to their traits",
  "overallScore": <integer 45-95 based on answer quality>,

  "categories": [
    { "name": "Analytical", "score": <integer sum of Q1+Q2+Q3 answers>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 warm specific sentences referencing their actual analytical responses.", "color": "#5b8aff" },
    { "name": "Creative",   "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences specific to their creative answers.", "color": "#a78bfa" },
    { "name": "Leadership", "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences specific to leadership answers.", "color": "#00C9B1" },
    { "name": "Empathy",    "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences.", "color": "#f472b6" },
    { "name": "Ambition",   "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences.", "color": "#fb923c" },
    { "name": "Resilience", "score": <integer>, "maxScore": 12, "percentage": <integer 0-100>, "label": "Exceptional|Strong|Developing|Emerging", "description": "2–3 sentences.", "color": "#34d399" }
  ],

  "strengths": [
    "Strength 1 — specific to their top scoring category in 15–25 words",
    "Strength 2 — specific to second top category",
    "Strength 3 — a cross-category strength or personality insight"
  ],
  "growthAreas": [
    "Growth area 1 with concrete actionable tip in 15–25 words, based on lowest scoring category",
    "Growth area 2 with actionable tip"
  ],

  "careerMatches": [
    { "title": "Best matched career", "fit": <85-98>, "icon": "emoji", "description": "What this professional does in 1 sentence — make it exciting.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Second career", "fit": <75-88>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Third career", "fit": <68-80>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" },
    { "title": "Fourth career", "fit": <60-75>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "primary" }
  ],

  "secondaryCareerMatches": [
    { "title": "Secondary career 1", "fit": <50-65>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary career 2", "fit": <45-60>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" },
    { "title": "Secondary career 3", "fit": <40-55>, "icon": "emoji", "description": "1 sentence.", "primarySkills": ["Skill 1","Skill 2","Skill 3"], "salaryRange": "₹X–Y LPA", "priority": "secondary" }
  ],

  "universities": [
    {
      "name": "University name — MUST be USA/Canada/Australia/Europe only",
      "country": "Full country name",
      "flag": "country flag emoji",
      "program": "Relevant program aligned to career matches",
      "ranking": "#X World or regional rank",
      "website": "https://official-university-website.edu",
      "region": "USA",
      "tuitionRange": "$45,000–65,000/yr",
      "whyForYou": "1 sentence on why this university suits this student's profile and career goals"
    },
    { "name": "Canadian university", "country": "Canada", "flag": "🇨🇦", "program": "...", "ranking": "...", "website": "https://...", "region": "Canada", "tuitionRange": "CAD $30,000–45,000/yr", "whyForYou": "..." },
    { "name": "Australian university", "country": "Australia", "flag": "🇦🇺", "program": "...", "ranking": "...", "website": "https://...", "region": "Australia", "tuitionRange": "AUD $35,000–50,000/yr", "whyForYou": "..." },
    { "name": "UK university", "country": "United Kingdom", "flag": "🇬🇧", "program": "...", "ranking": "...", "website": "https://...", "region": "Europe", "tuitionRange": "£20,000–35,000/yr", "whyForYou": "..." },
    { "name": "European university (Germany/Netherlands/France/Switzerland/Sweden etc)", "country": "Country", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "Europe", "tuitionRange": "€15,000–30,000/yr or tuition-free", "whyForYou": "..." },
    { "name": "Second USA or European university", "country": "Country", "flag": "emoji", "program": "...", "ranking": "...", "website": "https://...", "region": "USA or Europe", "tuitionRange": "...", "whyForYou": "..." }
  ],

  "futuristicCareers": [
    { "title": "Future career 1 — personalised to student's trait combination", "icon": "emoji", "description": "What this role does in 1 sentence.", "blend": "Field A + Field B + Field C matching their top traits", "growthOutlook": "Very High | High | Emerging — specific reason" },
    { "title": "Future career 2", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 3", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 4", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." },
    { "title": "Future career 5", "icon": "emoji", "description": "1 sentence.", "blend": "...", "growthOutlook": "..." }
  ],

  "aptitudeEnhancement": {
    "books": [
      { "title": "Book title relevant to top career match", "author": "Author name" },
      { "title": "Book about reasoning or personality strength", "author": "Author name" },
      { "title": "Inspirational book for ambition level", "author": "Author name" }
    ],
    "apps": ["App 1 relevant to career","App 2","App 3","App 4","App 5","App 6","App 7","App 8"],
    "techniques": [
      "Technique 1 — specific actionable study/skill technique for this student's profile",
      "Technique 2 — targeted at their weakest category",
      "Technique 3 — leverages their strongest trait",
      "Technique 4 — memory or focus technique",
      "Technique 5 — leadership or creativity development"
    ],
    "quote": "An inspiring quote about aptitude or potential that fits this student's personality type"
  },

  "skillAttributes": [
    { "skill": "Top skill aligned to career matches", "level": <70-95>, "description": "1 sentence about this skill for this student.", "icon": "emoji" },
    { "skill": "Second skill", "level": <60-88>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Third skill", "level": <55-85>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fourth skill", "level": <50-80>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Fifth skill", "level": <45-78>, "description": "1 sentence.", "icon": "emoji" },
    { "skill": "Sixth skill — their growth area skill", "level": <40-70>, "description": "1 sentence.", "icon": "emoji" }
  ],

  "profileBuilding": {
    "degrees": [
      {
        "type": "degree",
        "title": "Best degree for this student's top career match",
        "description": "Why this degree fits their profile in 1 sentence.",
        "priority": "Essential",
        "link": "https://eduquest.org.in/",
        "benefit": "Specific benefit for this student — how it opens doors aligned to their goals",
        "importance": "Long-term career impact — salary trajectory or role opportunities",
        "classLevel": "Post Class 12"
      },
      {
        "type": "degree", "title": "Second degree option",
        "description": "...", "priority": "High",
        "link": "https://eduquest.org.in/",
        "benefit": "...", "importance": "...", "classLevel": "Post Class 12"
      },
      {
        "type": "degree", "title": "Third interdisciplinary degree option",
        "description": "...", "priority": "Medium",
        "link": "https://eduquest.org.in/",
        "benefit": "...", "importance": "...", "classLevel": "Post Class 12"
      }
    ],

    "exams": [
      {
        "title": "SAT",
        "fullForm": "Scholastic Assessment Test",
        "classLevel": "Class 11–12",
        "description": "The SAT is accepted by 4,000+ universities in USA, Canada and beyond. In India, 50+ top universities accept SAT scores for direct admission — saving you from multiple entrance exams.",
        "whyForYou": "Personalised reason based on this student's analytical and verbal abilities and their top career match — why SAT is specifically important for them",
        "priority": "Essential",
        "preparationTime": "6–12 months",
        "link": "https://collegereadiness.collegeboard.org/sat"
      },
      {
        "title": "IELTS / TOEFL",
        "fullForm": "International English Language Testing System / Test of English as a Foreign Language",
        "classLevel": "Class 11–12",
        "description": "Mandatory English proficiency test for all UK, USA, Canada, Australia and European university applications. Score requirements: 6.5–7.5 band IELTS or 90–105 TOEFL.",
        "whyForYou": "A non-negotiable gateway exam — all 6 universities recommended for this student require either IELTS or TOEFL as part of the application.",
        "priority": "Essential",
        "preparationTime": "2–4 months",
        "link": "https://www.ielts.org"
      },
      {
        "title": "AP Exams",
        "fullForm": "Advanced Placement Examinations",
        "classLevel": "Class 11–12",
        "description": "College Board's AP exams allow you to take college-level courses in Class 11–12. Scoring 4–5 earns you college credit at 4,000+ US and Canadian universities — reducing your degree cost by 1 semester.",
        "whyForYou": "Personalised reason — which AP subjects align to this student's top career and how it strengthens their application",
        "priority": "High",
        "preparationTime": "Academic year (Sept–May)",
        "link": "https://apstudents.collegeboard.org"
      },
      {
        "title": "personalised exam 4 relevant to career (e.g. GRE / GMAT / A-Levels / IB / DELF-DALF if European focus)",
        "fullForm": "Full form of exam",
        "classLevel": "Class 12 or Post Class 12",
        "description": "Why this exam is relevant for their specific career path and target universities.",
        "whyForYou": "Specific personalised reason tied to their career goal and the universities recommended for them",
        "priority": "High or Medium",
        "preparationTime": "3–6 months",
        "link": "https://relevant-exam-website.org"
      }
    ],

    "activities": [
      "Activity 1 — highly specific to this student's top trait (e.g. if leadership is high: 'Lead a school club or student council campaign')",
      "Activity 2 — aligned to top career match",
      "Activity 3 — community impact or social entrepreneurship",
      "Activity 4 — skill-building activity for weakest category",
      "Activity 5 — builds portfolio evidence for university applications"
    ],

    "importantTip": "Personalised strategic tip for this student — include mention of SAT + EduQuest (eduquest.org.in) naturally. Focus on what this specific student should prioritise given their profile.",

    "quote": "An inspiring quote about excellence and going the extra mile — suited to this student's personality type"
  },

  "profileBuildingBenefits": {
    "overview": "2–3 sentence compelling overview of WHY building a profile from Class 9–12 is critical for this student's specific career goals and target universities — personalised to their ambition score and career matches.",

    "keyBenefits": [
      {
        "icon": "🏆",
        "title": "Competitive University Admission Advantage",
        "description": "1–2 sentences explaining how a strong profile dramatically improves chances at the recommended USA/Canada/Australia/European universities — be specific about admit rates and what these universities look for beyond grades."
      },
      {
        "icon": "💰",
        "title": "Scholarship & Financial Aid Access",
        "description": "1–2 sentences about how a strong profile unlocks merit scholarships. Reference specific scholarships from the scholarships section that this student could target."
      },
      {
        "icon": "🌍",
        "title": "Global Career Positioning",
        "description": "1–2 sentences on how an international degree + strong profile opens specific global markets relevant to this student's top career matches."
      },
      {
        "icon": "🧠",
        "title": "Self-Discovery & Career Clarity",
        "description": "1–2 sentences about how the profile-building journey helps students like this one discover their true strengths and make confident career decisions."
      },
      {
        "icon": "⚡",
        "title": "Compounding Early Advantage",
        "description": "1–2 sentences explaining the compounding nature of early profile-building — students who start in Class 9 arrive at Class 12 with a story no last-minute effort can replicate."
      }
    ],

    "whyItMatters": "3–4 sentence passionate, personalised closing paragraph addressed to ${studentName} explaining why investing in their profile now is the single best decision they can make — connect their personality strengths to the opportunities that await them.",

    "timelineByClass": [
      {
        "classLevel": "Class 9–10",
        "actions": [
          "Action 1 — specific to this student's profile (e.g. if analytical: 'Enrol in Math/Science Olympiads to build competitive problem-solving skills')",
          "Action 2 — explore interests aligned to career matches",
          "Action 3 — begin foundational reading in their top career area",
          "Action 4 — join 1–2 extracurricular clubs that build their weakest trait"
        ]
      },
      {
        "classLevel": "Class 11",
        "actions": [
          "Action 1 — start SAT preparation with EduQuest",
          "Action 2 — begin AP courses in subjects aligned to career goal",
          "Action 3 — take on a school leadership or community role",
          "Action 4 — build a project or portfolio piece in top career area"
        ]
      },
      {
        "classLevel": "Class 12",
        "actions": [
          "Action 1 — appear for SAT, IELTS/TOEFL and AP exams",
          "Action 2 — write compelling university application essays using profile built over 3 years",
          "Action 3 — apply for target scholarships (deadlines Oct–Jan)",
          "Action 4 — finalise university shortlist with EduQuest counsellor"
        ]
      }
    ]
  },

  "scholarships": [
    { "name": "Scholarship 1 — relevant to career and target countries", "country": "Country + flag emoji", "amount": "Amount or Full funding", "eligibility": "Who qualifies in 1 sentence", "deadline": "Month annually", "link": "https://..." },
    { "name": "Scholarship 2", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "Scholarship 3", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "Scholarship 4", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." },
    { "name": "Scholarship 5", "country": "...", "amount": "...", "eligibility": "...", "deadline": "...", "link": "https://..." }
  ],

  "bestColleges": [
    { "name": "College 1 — USA/Canada/Australia/Europe ONLY", "country": "Country + flag", "flag": "emoji", "program": "Program aligned to career matches", "acceptanceRate": "X%", "avgPackage": "$XK or local currency", "region": "USA" },
    { "name": "College 2", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "Canada" },
    { "name": "College 3", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "Australia" },
    { "name": "College 4", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "Europe" },
    { "name": "College 5", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "USA" },
    { "name": "College 6", "country": "...", "flag": "emoji", "program": "...", "acceptanceRate": "...", "avgPackage": "...", "region": "Europe" }
  ],

  "streamRecommendation": {
    "primary": "Science (PCM) | Science (PCB) | Commerce | Arts / Humanities | Vocational / Design",
    "alternates": ["Second best stream", "Third option"],
    "reasoning": "2–3 sentences personalised to their actual score pattern explaining why this stream aligns with their dominant traits and career goals.",
    "subjects": ["Core subject 1","Core subject 2","Core subject 3","Core subject 4"],
    "careerPathsFromStream": ["Career path 1","Career path 2","Career path 3","Career path 4"],
    "confidence": <integer 65-98 based on how strongly their scores indicate this stream>
  },

  "programRecommendation": "Specific OmniQuest / EduQuest program recommendation relevant to this student's goals",

  "aiInsight": "Warm, deeply personal 4–5 sentence paragraph written DIRECTLY to ${studentName}. Must: (1) reference their specific top 2–3 dimension scores by name and percentage, (2) name their #1 career match and explain why it fits them personally, (3) mention their recommended stream and at least 2 universities by name, (4) end with an inspiring call-to-action referencing OmniQuest/EduQuest guidance."
}

Label rules: 80–100 = Exceptional, 60–79 = Strong, 40–59 = Developing, 0–39 = Emerging
ALL salary figures in Indian context (LPA). Be specific, accurate and deeply personalised throughout.`;

    let report: Record<string, unknown>;
    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: "You are a world-class educational psychologist and global university admissions expert. Always respond with valid JSON only. No markdown, no code blocks, no explanation outside the JSON.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.72,
        max_tokens: 6000,
        response_format: { type: "json_object" },
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
      name: "EduQuest Admissions Team",
    };

    /* ── Save to Supabase ── */
    try {
      await supabaseAdmin.from("personality_leads").insert({
        name: studentName,
        email: email ?? "",
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject: `🧠 New Personality Report — ${studentName} · ${report.personalityType}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b1c3d;color:white;padding:32px;border-radius:16px;">
              <h2 style="color:#d4af37;margin-bottom:20px;">🧠 New Personality Report Submitted</h2>
              <table style="width:100%;border-collapse:collapse;">
                ${[
                  ["Student Name", studentName],
                  ["Email", email ?? "Not provided"],
                  ["Personality Type", String(report.personalityType)],
                  ["Overall Score", `${report.overallScore}/100`],
                  ["Top Career Match", cm?.[0]?.title ?? "—"],
                  ["Stream Recommendation", (report.streamRecommendation as { primary: string })?.primary ?? "—"],
                  ["Generated At", new Date().toLocaleString("en-IN")],
                ]
                  .map(
                    ([k, v]) => `
                  <tr>
                    <td style="padding:8px 12px;font-size:13px;color:rgba(255,255,255,.5);width:160px;border-bottom:1px solid rgba(255,255,255,.07);">${k}</td>
                    <td style="padding:8px 12px;font-size:13px;color:white;font-weight:600;border-bottom:1px solid rgba(255,255,255,.07);">${v}</td>
                  </tr>`
                  )
                  .join("")}
              </table>
              <div style="margin-top:20px;padding:14px 16px;background:rgba(255,255,255,.05);border-radius:10px;">
                <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">Top 4 Career Matches: ${cm?.slice(0, 4).map((c) => `${c.icon} ${c.title} (${c.fit}%)`).join(" · ") ?? "—"}</p>
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
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 });
  }
}

/* local type for email build */
interface CareerMatch {
  title: string;
  fit: number;
  icon: string;
}