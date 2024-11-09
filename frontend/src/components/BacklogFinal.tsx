"use client";

import { ticketStore } from "@/stores/ticketStore";
import { TicketFinal } from "@/types/types";
// import TicketRowGroup from "./TicketRowGroup";

interface TicketRowGroupProps {
  ticket: TicketFinal;
}

const TicketRowGroup = ({ ticket }: TicketRowGroupProps) => {
  const { tickets } = ticketStore();
  const childTickets = ticket.childrenIds ? tickets.filter((t) => t.parentId === ticket.id) : null;

  return (
    <div>
      {ticket.title}
      <div>
        {childTickets && (
          <>
            {childTickets.map((child, key) => (
              <TicketRowGroup key={key} ticket={child} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

interface BacklogProps {
  tickets: TicketFinal[];
}

const BacklogFinal = ({ tickets }: BacklogProps) => {
  return (
    <div className="w-full flex flex-col space-y-2 overflow-x-auto no-scrollbar">
      {tickets.map((ticket, key) => (
        <TicketRowGroup key={key} ticket={ticket} />
      ))}
    </div>
  );
};

export default BacklogFinal;
