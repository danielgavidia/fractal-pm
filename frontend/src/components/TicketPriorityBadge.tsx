"use client";

import { TicketPriority } from "@/types/types";
import { priorityMapping } from "@/utils/priorityMapping";

interface TicketPriorityBadgeProps {
  priority: TicketPriority;
}

const TicketPriorityBadge = ({ priority }: TicketPriorityBadgeProps) => {
  const { backgroundColor, ballColor, label } = priorityMapping[priority];
  return (
    <div
      className={"flex items-center rounded-xl p-[0.5px] min-w-24 text-gray-900"}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className={"p-1 bg-black mx-2 rounded-full"}
        style={{ backgroundColor: ballColor }}
      ></div>
      <p className="text-[10px]">{label}</p>
    </div>
  );
};

export default TicketPriorityBadge;
