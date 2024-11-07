import React from "react";
import { priorityMapping } from "@/utils/priorityMapping";
import TicketPriorityBadge from "./TicketPriorityBadge";
import { TicketPriority } from "@/types/types";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface TicketPriorityPickerProps {
  callback: (value: any) => void;
  defaultPriority: TicketPriority;
}

const TicketPriorityPicker = ({ callback, defaultPriority }: TicketPriorityPickerProps) => {
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  return (
    <div className="grid grid-cols-2 py-2">
      {Object.values(priorityMapping).map((priority, key) => {
        if (priority.name === defaultPriority) {
          return (
            <button
              key={key}
              onClick={() => callback(priority.name)}
              className="p-1 border-[0.5px] rounded-xl"
              style={{ borderColor: textPrimary }}
            >
              <TicketPriorityBadge priority={priority.name} />
            </button>
          );
        } else {
          return (
            <button
              key={key}
              onClick={() => callback(priority.name)}
              className="p-1 border-[0.5px] rounded-xl"
              style={{ borderColor: backgroundPrimary }}
            >
              <TicketPriorityBadge priority={priority.name} />
            </button>
          );
        }
      })}
    </div>
  );
};

export default TicketPriorityPicker;
