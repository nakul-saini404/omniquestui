import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabase";
import { computeReport } from "@/lib/personality";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { answers, studentName } = body;

    // ── Validate input ──────────────────────────────────────────────────────
    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Missing or invalid answers" }, { status: 400 });
    }
    if (!studentName || typeof studentName !== "string") {
      return NextResponse.json({ error: "Missing studentName" }, { status: 400 });
    }

    // ── Build prompt ────────────────────────────────────────────────────────
    const prompt = `You are Dr. Alex, a world-class educational psychologist and career strategist. 
Analyze the following personality quiz answers for a student and generate a rich, insightful personality intelligence report.

Student Name: ${studentName}
Quiz Answers (question_id → score, where 1=lowest, 4=highest): ${JSON.stringify(answers)}

The quiz measures 6 categories (2 questions each, max score 8 per category):
- analytical: logical thinking, data orientation
- creative: idea generation, innovative thinking  
- leadership: team direction, conflict resolution
- empathy: emotional intelligence, listening
- ambition: goal orientation, risk appetite
- resilience: bouncing back, performing under pressure

Calculate scores by summing the two answers per category.
Overall score = weighted average of all 6 category percentages.

IMPORTANT: Return ONLY a valid JSON object. No markdown, no explanation, no code fences.

{
  "personalityType": "A distinctive 3-5 word title like 'The Strategic Innovator' or 'The Empathetic Trailblazer'",
  "tagline": "A compelling 12-18 word tagline capturing their essence and potential",
  "overallScore": <integer 0-100>,
  "categories": [
    {
      "name": "Analytical",
      "score": <sum of q1+q2 answers for analytical, integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Exceptional",
      "description": "2-3 warm, specific sentences about their analytical strengths or development areas based on the score.",
      "color": "#5b8aff"
    },
    {
      "name": "Creative",
      "score": <integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Strong",
      "description": "2-3 sentences about their creative expression and how it shows up.",
      "color": "#a78bfa"
    },
    {
      "name": "Leadership",
      "score": <integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Developing",
      "description": "2-3 sentences about their leadership style and potential.",
      "color": "#00C9B1"
    },
    {
      "name": "Empathy",
      "score": <integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Exceptional",
      "description": "2-3 sentences about their emotional intelligence and how they connect with others.",
      "color": "#f472b6"
    },
    {
      "name": "Ambition",
      "score": <integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Strong",
      "description": "2-3 sentences about their drive, goals, and relationship with risk.",
      "color": "#fb923c"
    },
    {
      "name": "Resilience",
      "score": <integer>,
      "maxScore": 8,
      "percentage": <integer 0-100>,
      "label": "Emerging",
      "description": "2-3 sentences about how they handle pressure, failure, and recovery.",
      "color": "#34d399"
    }
  ],
  "strengths": [
    "A concrete, specific strength in 15-25 words (mention the category it comes from)",
    "A second distinct strength in 15-25 words",
    "A third strength that highlights their unique combination of traits in 15-25 words"
  ],
  "growthAreas": [
    "Growth area 1 with a specific, actionable suggestion in 15-25 words",
    "Growth area 2 with a practical next step in 15-25 words"
  ],
  "careerMatches": [
    { "title": "Best fit career title", "fit": <integer 80-98>, "icon": "relevant emoji" },
    { "title": "Second fit career", "fit": <integer 72-85>, "icon": "emoji" },
    { "title": "Third fit career", "fit": <integer 65-78>, "icon": "emoji" },
    { "title": "Fourth fit career", "fit": <integer 58-72>, "icon": "emoji" },
    { "title": "Fifth fit career", "fit": <integer 50-65>, "icon": "emoji" }
  ],
  "programRecommendation": "A specific, relevant OmniQuest program recommendation (e.g. 'MBA Admissions Accelerator + GMAT Coaching Bundle' or 'Study Abroad — USA/UK Undergraduate Program')",
  "aiInsight": "A warm, personal 3-4 sentence paragraph written directly to ${studentName}. Acknowledge 2-3 of their specific trait combinations, what makes them genuinely stand out, one honest growth challenge, and how OmniQuest can help them reach their global ambitions. Make it feel like it was written specifically for them."
}

Use these label values exactly based on percentage: 80-100 = Exceptional, 60-79 = Strong, 40-59 = Developing, 0-39 = Emerging`;

    // ── Call OpenAI ─────────────────────────────────────────────────────────
    let report;

    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a world-class educational psychologist. Always respond with valid JSON only. No markdown, no preamble, no code fences.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.75,
        max_tokens: 2500,
        response_format: { type: "json_object" }, // Guarantees valid JSON output
      });

      const raw = completion.choices[0].message.content || "{}";
      report = JSON.parse(raw);
    } catch (aiErr) {
      console.error("OpenAI API failed, using local fallback:", aiErr);
      // Fallback to deterministic local computation so users always get a result
      report = computeReport(answers, studentName);
    }

    // Always ensure studentName is set
    report.studentName = studentName;

    // ── Optionally save raw report to Supabase for analytics ───────────────
    // (Lead + full save happens in /api/submit-lead after user fills the form)
    // You can uncomment this if you want to save before the lead form:
    /*
    await supabaseAdmin.from("personality_results").insert({
      answers,
      report,
      personality_type: report.personalityType,
      overall_score: report.overallScore,
      created_at: new Date().toISOString(),
    });
    */

    return NextResponse.json({ report });
  } catch (e) {
    console.error("Personality test route error:", e);
    return NextResponse.json(
      { error: "Failed to generate report. Please try again." },
      { status: 500 }
    );
  }
}