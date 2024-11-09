"use client";

import { TicketPriority } from "@/types/types";
import { priorityMapping } from "@/utils/priorityMapping";

interface TicketPriorityBadgeProps {
  priority: TicketPriority;
}

const TicketPriorityBadge = ({ priority }: TicketPriorityBadgeProps) => {
  const { backgroundColor, label } = priorityMapping[priority];
  return (
    <div
      className={"flex items-center justify-center rounded-xl p-[0.5px] min-w-24 text-gray-900"}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <p className="text-[10px]">{label}</p>
    </div>
  );
};

export default TicketPriorityBadge;
