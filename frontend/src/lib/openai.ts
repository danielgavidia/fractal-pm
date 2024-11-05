import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export const openaiChatCompletions = async (
  model: string,
  systemContent: string,
  userContent: string
): Promise<string> => {
  const res = await openai.chat.completions.create({
    model: model,
    messages: [
      {
        role: "system",
        content: systemContent,
      },
      {
        role: "user",
        content: userContent,
      },
    ],
  });

  const data = res.choices[0].message.content;
  if (data) {
    return data;
  } else {
    throw new Error();
  }
};

export const getTaskFromPrompt = async (description: string): Promise<string> => {
  const model = "gpt-4o-mini";
  const systemContent = `
    You are a helpful assistant tasked with extracting dates from strings.
    Return ONLY a date string in ISO 8601 format (YYYY-MM-DDTHH:mm:ss).
    Example: 2023-10-24T19:30:00
    Do not include any other text in your response.
    When looking for the date, focus on the first few words in the string.

    Current date: ${new Date().toISOString()}
    
    Rules for determining the year:
    1. If the month in the text is later than the current month, use current year
    2. If the month in the text is earlier than the current month, use next year
    3. If the month is the same as current month, compare the day:
       - If the day is later than or equal to today, use current year
       - If the day is earlier than today, use next year`;

  const userContent = `Extract the date and time from this event description: ${description}`;
  const res = await openaiChatCompletions(model, systemContent, userContent);
  return new Date(res).toISOString();
};
