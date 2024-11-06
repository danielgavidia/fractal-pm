import { Ticket } from "@/types/types";
import React, { useState } from "react";
import TicketRow from "./TicketRow";
import { epicStore } from "@/stores/epicStore";

interface TicketRowGroupProps {
  primaryTicket: Ticket;
  secondaryTickets: Ticket[];
}

const TicketRowGroup = ({ primaryTicket, secondaryTickets }: TicketRowGroupProps) => {
  const epic = epicStore().epics.find((epic) => epic.id === primaryTicket.id);

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
            <TicketRow key={index} ticket={ticket} modality="secondary" epicId={epic && epic.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketRowGroup;
