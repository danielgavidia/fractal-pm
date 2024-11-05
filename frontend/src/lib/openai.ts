import { Task } from "@/types/types";
import { cleanResponseString } from "@/utils/cleanResponseString";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY });

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

export const getTaskFromPrompt = async (prompt: string): Promise<Task> => {
  const model = "gpt-4o-mini";
  const systemContent = `
    You are a helpful assistant tasked with generating task tickets.
    Return only JSON objects with this structure:
    {
      id: number; // Must be a timestamp in milliseconds (return the actual number)
      title: string;
      description: string;
      status: "notStarted" | "inProgress" | "completed" | "archived";
    }
    Always use the current timestamp in milliseconds for the id.
    `;

  const userContent = `Generate a task based on this user prompt: ${prompt}`;
  const res = await openaiChatCompletions(model, systemContent, userContent);

  // Clean string
  const resCleaned = cleanResponseString(res);
  console.log(resCleaned);

  // Parse
  const task: Task = JSON.parse(resCleaned);
  return task;
};

const res = await getTaskFromPrompt("Hi. Bake a cake.");
console.log(res);
