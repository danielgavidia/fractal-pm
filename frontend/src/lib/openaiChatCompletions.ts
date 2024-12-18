"use server";

import { getOpenaiClient } from "./openaiClient";

export const openaiChatCompletions = async (
  model: string,
  systemContent: string,
  userContent: string
): Promise<string> => {
  const client = await getOpenaiClient();
  const res = await client.chat.completions.create({
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
