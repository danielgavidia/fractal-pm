import { Task } from "@/types/types";
import { create } from "zustand";
import { dummyTasks } from "@/api/dummyData";

interface TaskStoreState {
  tasks: Task[];
}

export const taskStore = create<TaskStoreState>((set) => ({
  tasks: dummyTasks,
}));
