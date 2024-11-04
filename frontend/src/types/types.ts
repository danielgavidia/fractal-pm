export type TaskState = "pending" | "inProgress" | "completed" | "archived";

export type Task = {
  title: string;
  description: string;
  state: TaskState;
};
