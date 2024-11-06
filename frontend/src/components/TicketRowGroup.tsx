import { Ticket } from "@/types/types";
import React, { useState } from "react";
import TicketRow from "./TicketRow";

interface TicketRowGroupProps {
  primaryTicket: Ticket;
  secondaryTickets: Ticket[];
}

const TicketRowGroup = ({ primaryTicket, secondaryTickets }: TicketRowGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <TicketRow ticket={primaryTicket} modality="primary" handleOpen={handleOpen} />
      {isOpen && (
        <div>
          {secondaryTickets.map((ticket, index) => (
            <TicketRow key={index} ticket={ticket} modality="secondary" />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketRowGroup;
