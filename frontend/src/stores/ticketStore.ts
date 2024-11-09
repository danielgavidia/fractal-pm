import { TicketFinal } from "@/types/types";
import { create } from "zustand";
import { dummyTickets } from "@/api/dummyTickets";

interface TicketStoreState {
  tickets: TicketFinal[];
  createTicket: (ticket: TicketFinal) => void;
  deleteTicket: (ticketId: string) => void;
  updateTicket: (ticketId: string, newTicket: TicketFinal) => void;
  // updateTaskStatus: (taskId: string, newTaskStatus: TicketStatus) => void;
}

export const ticketStore = create<TicketStoreState>((set) => ({
  tickets: dummyTickets,
  createTicket: (ticket: TicketFinal) => set((state) => ({ tickets: [...state.tickets, ticket] })),
  deleteTicket: (ticketId: string) =>
    set((state) => ({ tickets: state.tickets.filter((ticket) => ticket.id !== ticketId) })),
  updateTicket: (ticketId: string, newTicket: TicketFinal) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) => (ticket.id === ticketId ? newTicket : ticket)),
    })),
  // updateTaskStatus: (taskId: string, newTaskStatus: TicketStatus) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) =>
  //       task.id === taskId ? { ...task, status: newTaskStatus } : task
  //     ),
  //   })),
}));
