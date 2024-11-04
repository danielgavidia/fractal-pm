import { Task, TaskStatus } from "@/types/types";

export const getTasksByStatus = (tasks: Task[]) => {
  const tasksByStatus = Object.entries(
    tasks.reduce((acc, task) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    }, {} as Record<TaskStatus, typeof tasks>)
  ).map(([status, tasks]) => ({
    status: status as TaskStatus,
    tasks,
  }));
  return tasksByStatus;
};
