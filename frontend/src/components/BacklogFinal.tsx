"use client";

import { ticketStore } from "@/stores/ticketStore";
import { TicketFinal } from "@/types/types";
import { useRouter } from "next/navigation";
import TicketPriorityBadge from "./TicketPriorityBadge";
import TicketStatusBadge from "./TicketStatusBadge";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { iconMapping } from "@/utils/iconMapping";

interface TicketRowGroupProps {
  ticket: TicketFinal;
}

const TicketRowGroup = ({ ticket }: TicketRowGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const router = useRouter();
  const { tickets } = ticketStore();
  const childTickets = ticket.childrenIds ? tickets.filter((t) => t.parentId === ticket.id) : null;

  return (
    <div className="opacity-80 border-l-[0.5px] pl-4">
      {/* Parent */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center space-x-4"
      >
        <button className="flex w-full justify-between items-center">
          <div className="flex text-xs text-left space-x-2 items-center">
            {childTickets && (
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
              />
            )}
            <FontAwesomeIcon icon={iconMapping[ticket.ticketType]} />
            <p>{ticket.title}</p>
          </div>
          <div className="flex space-x-3 items-center">
            <p className="text-[8px] w-20 text-left">Due: {ticket.dueDate.toLocaleDateString()}</p>
            <TicketPriorityBadge priority={ticket.priority} />
            <TicketStatusBadge status={ticket.status} />
          </div>
        </button>
        <button onClick={() => router.push(`/projects/${ticket.id}`)}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>

      {/* Children */}
      <div>
        {childTickets && isOpen ? (
          <>
            {childTickets.map((child, key) => (
              <TicketRowGroup key={key} ticket={child} />
            ))}
          </>
        ) : (
          <></>
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
