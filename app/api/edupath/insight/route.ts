import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import type { StudentData } from "@/types/edupath";

export async function POST(req: NextRequest) {
  try {
    const { studentData, predictedFinal, satEst }: {
      studentData: StudentData;
      predictedFinal: number;
      satEst: number;
    } = await req.json();

    const { name, grade, score, stream, field, countries } = studentData;
    const firstName = name.split(" ")[0];

    const prompt = `You are a friendly university counselor AI. A student named ${firstName} is in Grade ${grade} in India with a current academic percentage of ${score}%. Their stream is ${stream}, interested in studying ${field}. They want to apply to universities in: ${countries.join(", ")}. Their predicted 12th percentage is ~${predictedFinal.toFixed(0)}%. ${countries.includes("USA") ? `Estimated SAT score: ${satEst}.` : ""}

Write 2 short, specific, encouraging sentences (total ~60 words) as a personalised AI insight — mention their actual grade, score, field of interest, and at least one specific country. Give one concrete action they should take now. Be direct and use simple language. Do NOT use bullet points or headings.`;

    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      max_tokens: 150,
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ insight: text });
  } catch (err) {
    console.error("AI insight error:", err);
    return NextResponse.json({ insight: "" }, { status: 500 });
  }
}