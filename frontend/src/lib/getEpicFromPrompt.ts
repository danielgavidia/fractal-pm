import { cleanResponseString } from "@/utils/cleanResponseString";
import { openaiChatCompletions } from "./openaiChatCompletions";
import { Epic, Task } from "@/types/types";

export const getEpicFromPrompt = async (prompt: string): Promise<{ epic: Epic; tasks: Task[] }> => {
  const model = "gpt-4o-mini";
  const systemContent = `
    You are a helpful assistant tasked with generating epic tickets and their related tasks.
    Return only JSON objects with this structure:
    {
      epic: {
        id: string;
        title: string;
        description: string;
        status: "notStarted" | "inProgress" | "completed" | "archived";
        ticketType: "epic";
        taskIds: string[];
      },
      tasks: [
        {
          id: string;
          title: string;
          description: string;
          status: "notStarted" | "inProgress" | "completed" | "archived";
          ticketType: "task";
          epicId: string;
        }
      ]
    }
    Always use a UUID string for all IDs. The epic's taskIds should match the IDs of the generated tasks, and each task's epicId should match the epic's ID.
    Generate 3-5 related tasks for the epic.
    `;

  const userContent = `Generate an epic and its related tasks based on this user prompt: ${prompt}`;
  const res = await openaiChatCompletions(model, systemContent, userContent);

  // Clean string and parse
  const resCleaned = cleanResponseString(res);
  return JSON.parse(resCleaned);
};

const res = await getEpicFromPrompt("Create an epic around building a bridge");
console.log(res);
