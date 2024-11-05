import { TicketStatusEnums } from "@/types/types";

export const statusMapping = {
  [TicketStatusEnums.ARCHIVED]: {
    name: TicketStatusEnums.ARCHIVED,
    backgroundColor: "#f3f4f6",
    ballColor: "#6b7280",
    label: "Archived",
  },
  [TicketStatusEnums.COMPLETED]: {
    name: TicketStatusEnums.COMPLETED,
    backgroundColor: "#dcfce7",
    ballColor: "#22c55e",
    label: "Completed",
  },
  [TicketStatusEnums.IN_PROGRESS]: {
    name: TicketStatusEnums.IN_PROGRESS,
    backgroundColor: "#dbeafe",
    ballColor: "#3b82f6",
    label: "In Progress",
  },
  [TicketStatusEnums.NOT_STARTED]: {
    name: TicketStatusEnums.NOT_STARTED,
    backgroundColor: "#fef9c3",
    ballColor: "#eab308",
    label: "Not Started",
  },
};
