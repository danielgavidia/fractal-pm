import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  dueDate: Date;
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
  id: string;
  name: string;
  backgroundPrimary: Color;
  backgroundSecondary: Color;
  textPrimary: Color;
  textSecondary: Color;
};

// Navigation
export interface NavigationItem {
  title: string;
  iconDefinition: IconDefinition;
  route: string;
}
