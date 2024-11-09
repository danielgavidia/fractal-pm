"use client";

import { TicketFinal } from "@/types/types";
import TicketRowGroup from "@/components/tickets/TicketRowGroup";

interface BacklogProps {
  tickets: TicketFinal[];
}

const Backlog = ({ tickets }: BacklogProps) => {
  return (
    <div className="w-full flex flex-col space-y-2 overflow-x-auto no-scrollbar">
      {tickets.map((ticket, key) => (
        <TicketRowGroup key={key} ticket={ticket} />
      ))}
    </div>
  );
};

export default Backlog;
