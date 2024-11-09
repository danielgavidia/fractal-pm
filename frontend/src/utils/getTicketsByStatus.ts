"use client";

import { Ticket, TicketStatus } from "@/types/types";
import { TicketStatusEnums } from "@/types/enums";

export const getTicketsByStatus = (tickets: Ticket[]) => {
  const tasksByStatus = Object.entries(
    tickets.reduce((acc, ticket) => {
      if (!acc[ticket.status]) {
        acc[ticket.status] = [];
      }
      acc[ticket.status].push(ticket);
      return acc;
    }, {} as Record<TicketStatus, Ticket[]>)
  )
    .sort(([statusA], [statusB]) => {
      const enumValues = Object.values(TicketStatusEnums);
      return (
        enumValues.indexOf(statusA as TicketStatusEnums) -
        enumValues.indexOf(statusB as TicketStatusEnums)
      );
    })
    .map(([status, tickets]) => ({
      status: status as TicketStatus,
      tickets: tickets,
    }));
  return tasksByStatus;
};
