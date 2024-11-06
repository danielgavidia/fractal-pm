import { Ticket } from "@/types/types";
import React from "react";
import TicketRow from "./TicketRow";

interface TicketRowGroupProps {
  primaryTicket: Ticket;
  secondaryTickets: Ticket[];
}

const TicketRowGroup = ({ primaryTicket, secondaryTickets }: TicketRowGroupProps) => {
  return (
    <div>
      <TicketRow ticket={primaryTicket} />
      <div>
        {secondaryTickets.map((ticket, key) => (
          <TicketRow key={key} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketRowGroup;
