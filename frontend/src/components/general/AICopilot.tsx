"use client";

// Imports for task and epic handling
import { getTaskFromPrompt } from "@/lib/getTaskFromPrompt";
import { taskStore } from "@/stores/taskStore";
import { epicStore } from "@/stores/epicStore";
import { determineTicketType } from "@/lib/determineTicketType";
import { getEpicFromPrompt } from "@/lib/getEpicFromPrompt";

// Imports for types
import { Epic, Task, TicketType } from "@/types/types";

// Imports for theming
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

// React hooks
import { useState } from "react";
import { useResizable } from "@/hooks/useResizable";

// Component imports
import SectionHeader from "@/components/general/SectionHeader";

const AICopilot = () => {
  // Themes
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);
  const backgroundSecondary = valueToColor(currentTheme.backgroundSecondary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  // Tasks
  const { createTask, createTaskMultiple } = taskStore();

  // Epics
  const { createEpic } = epicStore();

  // Local state
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Add resizable functionality
  const { resizableProps, resizerProps } = useResizable({
    minWidth: 0,
    defaultWidth: 300,
    position: "right",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [...prev, currentMessage]);
    setCurrentMessage("");
    setLoading(true);

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

    setLoading(false);
  };

  return (
    <div
      {...resizableProps}
      className="p-4 sticky top-0 h-screen flex flex-col relative border-l-[0.5px]"
      style={{
        ...resizableProps.style,
        backgroundColor: backgroundPrimary,
        borderColor: valueToColor(currentTheme.textPrimary),
        color: textPrimary,
      }}
    >
      <div {...resizerProps} className="absolute left-0 top-0 w-1 h-full cursor-ew-resize" />
      <SectionHeader title="Chat" />
      <div className="h-full flex flex-col space-y-2 overflow-y-scroll no-scrollbar">
        {messages.map((message, key) => (
          <div key={key}>
            <div className="flex justify-end">
              <div className="rounded p-2 text-xs" style={{ backgroundColor: backgroundSecondary }}>
                {message}
              </div>
            </div>
            {loading && key === messages.length - 1 && (
              <div className="flex justify-start py-2">
                <div
                  className="rounded p-2 text-xs"
                  style={{ backgroundColor: backgroundSecondary }}
                >
                  Loading...
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="w-full py-4">
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="w-full h-full text-black outline-none rounded text-xs p-4 shadow-md"
          style={{
            backgroundColor: backgroundSecondary,
            color: textPrimary,
          }}
          placeholder="Start chat"
          disabled={loading}
        ></input>
      </form>
    </div>
  );
};

export default AICopilot;
