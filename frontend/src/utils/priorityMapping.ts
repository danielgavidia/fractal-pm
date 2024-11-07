import { TicketPriorityEnums } from "@/types/types";

export const priorityMapping = {
  [TicketPriorityEnums.LOW]: {
    name: TicketPriorityEnums.LOW,
    backgroundColor: "#f3f4f6",
    ballColor: "#6b7280",
    label: "Low",
  },
  [TicketPriorityEnums.MEDIUM]: {
    name: TicketPriorityEnums.MEDIUM,
    backgroundColor: "#fef9c3",
    ballColor: "#eab308",
    label: "Medium",
  },
  [TicketPriorityEnums.HIGH]: {
    name: TicketPriorityEnums.HIGH,
    backgroundColor: "#fee2e2",
    ballColor: "#ef4444",
    label: "High",
  },
};
