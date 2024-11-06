import { cleanResponseString } from "@/utils/cleanResponseString";
import { openaiChatCompletions } from "./openaiChatCompletions";
import { TicketType } from "@/types/types";

export const determineTicketType = async (prompt: string): Promise<TicketType> => {
  const model = "gpt-4o-mini";
  const systemContent = `
    You are a helpful assistant tasked with determining if a given prompt describes work that should be an epic (large, complex, multiple subtasks needed) or a task (small, single unit of work).
    Return only one of these two values: "epic" or "task"
    
    Guidelines:
    - Epic: Complex work requiring multiple steps/subtasks, typically takes days/weeks, involves multiple people or systems
    - Task: Single unit of work, can be completed in hours/days, typically handled by one person
    
    Examples:
    - "Build a new authentication system" -> "epic"
    - "Update the login button color" -> "task"
    - "Create a new database schema" -> "epic"
    - "Fix typo in header" -> "task"
    `;

  const userContent = `Determine if this work should be an epic or task: ${prompt}`;
  const res = await openaiChatCompletions(model, systemContent, userContent);

  // Clean string and parse
  const resCleaned = cleanResponseString(res);
  console.log(resCleaned);
  return resCleaned.toLowerCase().trim() as TicketType;
};
