import { cleanResponseString } from "@/utils/cleanResponseString";
import { openaiChatCompletions } from "./openaiChatCompletions";
import { Task } from "@/types/types";

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

  // Parse
  const task: Task = JSON.parse(resCleaned);
  return task;
};
