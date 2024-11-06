import { openaiClient } from "./openaiClient";

export const openaiChatCompletions = async (
  model: string,
  systemContent: string,
  userContent: string
): Promise<string> => {
  const res = await openaiClient.chat.completions.create({
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
