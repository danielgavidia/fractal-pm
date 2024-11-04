// Tasks
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

// Themes
export type Color = {
  hue: number;
  saturation: number;
  lightness: number;
};

export type Theme = {
  backgroundPrimary: Color;
  backgroundSecondary: Color;
  textPrimary: Color;
  textSecondary: Color;
};
