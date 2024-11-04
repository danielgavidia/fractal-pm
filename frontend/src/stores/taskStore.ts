import { Task } from "@/types/types";
import { create } from "zustand";
import { dummyTasks } from "@/api/dummyData";

interface TaskStoreState {
  tasks: Task[];
  createTask: (task: Task) => void;
}

export const taskStore = create<TaskStoreState>((set) => ({
  tasks: dummyTasks,
  createTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
