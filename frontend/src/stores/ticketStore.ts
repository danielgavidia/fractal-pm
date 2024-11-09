import { TicketFinal } from "@/types/types";
import { create } from "zustand";
import { dummyTickets } from "@/api/dummyTickets";

interface TicketStoreState {
  tickets: TicketFinal[];
  createTicket: (ticket: TicketFinal) => void;
  // createTaskMultiple: (tasks: Task[]) => void;
  // deleteTask: (taskId: string) => void;
  // updateTask: (taskId: string, newTask: Task) => void;
  // updateTaskStatus: (taskId: string, newTaskStatus: TicketStatus) => void;
}

export const ticketStore = create<TicketStoreState>((set) => ({
  tickets: dummyTickets,
  createTicket: (ticket: TicketFinal) => set((state) => ({ tickets: [...state.tickets, ticket] })),
  // createTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  // createTaskMultiple: (tasks: Task[]) => set((state) => ({ tasks: [...state.tasks, ...tasks] })),
  // deleteTask: (taskId: string) =>
  //   set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
  // updateTask: (taskId: string, newTask: Task) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) => (task.id === taskId ? newTask : task)),
  //   })),
  // updateTaskStatus: (taskId: string, newTaskStatus: TicketStatus) =>
  //   set((state) => ({
  //     tasks: state.tasks.map((task) =>
  //       task.id === taskId ? { ...task, status: newTaskStatus } : task
  //     ),
  //   })),
}));
