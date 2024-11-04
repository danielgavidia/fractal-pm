export type TaskStatus = "pending" | "inProgress" | "completed" | "archived";

export enum TaskStatusEnums {
  PENDING = "pending",
  IN_PROGRESS = "inProgress",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};
