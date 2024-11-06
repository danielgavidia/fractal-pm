"use client";

import { getTaskFromPrompt } from "@/lib/getTaskFromPrompt";
import { taskStore } from "@/stores/taskStore";
import { themeStore } from "@/stores/themeStore";
import { Epic, Task, TicketType } from "@/types/types";
import { valueToColor } from "@/utils/valueToColor";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { epicStore } from "@/stores/epicStore";
import { determineTicketType } from "@/lib/determineTicketType";
import { getEpicFromPrompt } from "@/lib/getEpicFromPrompt";
import { useResizable } from "@/hooks/useResizable";

const AICopilot = () => {
  // Themes
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  // Tasks
  const { createTask, createTaskMultiple } = taskStore();

  // Epics
  const { createEpic } = epicStore();

  // Local state
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  // Add resizable functionality
  const { resizableProps, resizerProps } = useResizable({
    minWidth: 300,
    defaultWidth: 300,
    position: "right",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [...prev, currentMessage]);
    setCurrentMessage("");

    // Determine ticket type
    const ticketType: TicketType = await determineTicketType(currentMessage);

    if (ticketType === "epic") {
      const epicFromPrompt: { epic: Epic; tasks: Task[] } = await getEpicFromPrompt(currentMessage);
      createEpic(epicFromPrompt.epic);
      createTaskMultiple(epicFromPrompt.tasks);
    } else {
      // AI
      const taskFromPrompt: Task = await getTaskFromPrompt(currentMessage);
      createTask(taskFromPrompt);
    }
  };

  return (
    <div
      {...resizableProps}
      className="px-4 border-l-2 sticky top-0 h-screen flex flex-col relative"
      style={{
        ...resizableProps.style,
        backgroundColor: backgroundPrimary,
        color: textPrimary,
      }}
    >
      <div {...resizerProps} className="absolute left-0 top-0 w-1 h-full cursor-ew-resize" />
      <SectionHeader title="GavidiaAI" />
      <textarea
        className="flex-1 py-4 text-xs outline-none text-right border-[0.5px]"
        style={{
          backgroundColor: backgroundPrimary,
          borderColor: textPrimary,
          color: textPrimary,
        }}
        value={messages.join("\n")}
        readOnly
      />
      <form onSubmit={handleSubmit} className="w-full py-4">
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="w-full h-full text-black outline-none text-xs p-4 border-[0.5px]"
          style={{
            backgroundColor: backgroundPrimary,
            borderColor: textPrimary,
            color: textPrimary,
          }}
          placeholder="Start chat"
        ></input>
      </form>
    </div>
  );
};

export default AICopilot;
