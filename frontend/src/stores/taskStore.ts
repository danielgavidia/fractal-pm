import { Task, TaskStatus } from "@/types/types";
import { create } from "zustand";
import { dummyTasks } from "@/api/dummyData";

interface TaskStoreState {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string, newTaskStatus: TaskStatus) => void;
}

export const taskStore = create<TaskStoreState>((set) => ({
  tasks: dummyTasks,
  createTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (taskId: string) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
  updateTaskStatus: (taskId: string, newTaskStatus: TaskStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        } else {
          return {
            ...task,
            status: newTaskStatus,
          };
        }
      }),
    })),
}));
