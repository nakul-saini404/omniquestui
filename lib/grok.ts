import OpenAI from "openai";

// XAI (Grok) uses OpenAI-compatible API
export const grok = new OpenAI({
  apiKey: process.env.XAI_API_KEY!,
  baseURL: "https://api.x.ai/v1",
});

// Model to use
export const GROK_MODEL = "grok-3-mini";