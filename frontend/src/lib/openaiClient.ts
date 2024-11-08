"use server";

import OpenAI from "openai";

export const getOpenaiClient = async (): Promise<OpenAI> => {
  const openaiClient = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  });
  return openaiClient;
};
