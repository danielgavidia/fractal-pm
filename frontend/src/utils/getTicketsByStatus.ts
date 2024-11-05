import { Ticket, TicketStatus } from "@/types/types";

export const getTicketsByStatus = (tickets: Ticket[]) => {
  const tasksByStatus = Object.entries(
    tickets.reduce((acc, ticket) => {
      if (!acc[ticket.status]) {
        acc[ticket.status] = [];
      }
      acc[ticket.status].push(ticket);
      return acc;
    }, {} as Record<TicketStatus, Ticket[]>)
  ).map(([status, tickets]) => ({
    status: status as TicketStatus,
    tickets: tickets,
  }));
  return tasksByStatus;
};
