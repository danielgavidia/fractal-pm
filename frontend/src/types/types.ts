export type TaskStatus = "pending" | "in progress" | "completed" | "archived";

export enum TaskStatusEnums {
  PENDING = "pending",
  IN_PROGRESS = "in progress",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};
