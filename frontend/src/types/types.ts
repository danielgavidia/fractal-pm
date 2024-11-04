export type TaskStatus = "notStarted" | "inProgress" | "completed" | "archived";

export enum TaskStatusEnums {
  NOT_STARTED = "notStarted",
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
