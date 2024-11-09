"use client";

import { TicketStatus } from "@/types/types";
import { statusMapping } from "@/utils/statusMapping";

interface TicketStatusBadgeProps {
  status: TicketStatus;
}

const TicketStatusBadge = ({ status }: TicketStatusBadgeProps) => {
  const { backgroundColor, ballColor, label } = statusMapping[status];
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
      <p className="text-[10px] ">{label}</p>
    </div>
  );
};

export default TicketStatusBadge;
