"use client";

import TicketRow from "@/components/TicketRow";
import { taskStore } from "@/stores/taskStore";
import { Ticket } from "@/types/types";
import TicketRowGroup from "./TicketRowGroup";

interface BacklogProps {
  tickets: Ticket[];
}

const Backlog = ({ tickets }: BacklogProps) => {
  const { tasks } = taskStore();
  return (
    <div className="w-full">
      {tickets.map((ticket, key) => {
        if (ticket.ticketType === "task") {
          return <TicketRow key={key} ticket={ticket} />;
        } else if (ticket.ticketType === "epic") {
          const tasksForEpic = tasks.filter((task) => task.epicId === ticket.id);
          return (
            <TicketRowGroup key={key} primaryTicket={ticket} secondaryTickets={tasksForEpic} />
          );
        }
      })}
    </div>
  );
};

export default Backlog;
