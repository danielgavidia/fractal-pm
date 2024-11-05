"use client";

import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";
import { useState } from "react";

const AICopilot = () => {
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  // Local state
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [...prev, currentMessage]);
    setCurrentMessage("");
  };

  return (
    <div
      className="min-w-80 px-4 border-l-2 sticky top-0 h-screen flex flex-col space-y-2"
      style={{ backgroundColor: backgroundPrimary, color: textPrimary }}
    >
      <p className="font-bold border-b-[0.5px] py-4 mb-4">GavidiaAI</p>
      <textarea
        className="flex-1 p-4 text-xs outline-none text-right border-[0.5px]"
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
