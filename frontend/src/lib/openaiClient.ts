import OpenAI from "openai";

export const openaiClient = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // Change
});
