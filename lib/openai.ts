import OpenAI from "openai";
 
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
// Use gpt-4o-mini for cost efficiency, or swap to "gpt-4o" for best quality
export const OPENAI_MODEL = "gpt-4o-mini";