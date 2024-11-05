// Tickets
export type TicketStatus = "notStarted" | "inProgress" | "completed" | "archived";

export type TicketType = "epic" | "task";

export enum TicketStatusEnums {
  NOT_STARTED = "notStarted",
  IN_PROGRESS = "inProgress",
  COMPLETED = "completed",
  ARCHIVED = "archived",
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  ticketType: TicketType;
}

// Tasks
export interface Task extends Ticket {
  epicId: string;
}

// Epics
export interface Epic extends Ticket {
  taskIds: string[];
}

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
