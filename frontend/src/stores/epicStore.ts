import { Epic } from "@/types/types";
import { create } from "zustand";
import { dummyEpics } from "@/api/dummyEpics";

interface EpicStoreState {
  epics: Epic[];
  createEpic: (epic: Epic) => void;
  updateEpic: (epicId: string, epic: Epic) => void;
  // createTask: (task: Task) => void;
  // deleteTask: (taskId: string) => void;
  // updateTask: (taskId: string, newTask: Task) => void;
  // updateTaskStatus: (taskId: string, newTaskStatus: TicketStatus) => void;
}

export const epicStore = create<EpicStoreState>((set) => ({
  epics: dummyEpics,
  createEpic: (epic: Epic) => set((state) => ({ epics: [...state.epics, epic] })),
  updateEpic: (epicId: string, newEpic: Epic) =>
    set((state) => ({
      epics: state.epics.map((epic) => (epic.id === epicId ? newEpic : epic)),
    })),
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
  // })),
}));
