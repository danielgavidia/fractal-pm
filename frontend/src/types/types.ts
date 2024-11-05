// Tickets
export type TicketStatus = "notStarted" | "inProgress" | "completed" | "archived";

export enum TicketStatusEnums {
  NOT_STARTED = "notStarted",
  IN_PROGRESS = "inProgress",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export type Ticket = Task | Epic;

// Tasks
export type Task = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  epicId: string;
};

// Epics
export type Epic = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  taskIds: string[];
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
