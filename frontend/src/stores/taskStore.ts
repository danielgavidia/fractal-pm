import { Task, TaskStatus } from "@/types/types";
import { create } from "zustand";
import { dummyTasks } from "@/api/dummyTasks";

interface TaskStoreState {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (taskId: string, newTask: Task) => void;
  updateTaskStatus: (taskId: string, newTaskStatus: TaskStatus) => void;
}

export const taskStore = create<TaskStoreState>((set) => ({
  tasks: dummyTasks,
  createTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (taskId: string) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
  updateTask: (taskId: string, newTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === taskId ? newTask : task)),
    })),
  updateTaskStatus: (taskId: string, newTaskStatus: TaskStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newTaskStatus } : task
      ),
    })),
}));
