import { TicketPriorityEnums } from "@/types/types";

export const priorityMapping = {
  [TicketPriorityEnums.HIGH]: {
    name: TicketPriorityEnums.HIGH,
    backgroundColor: "#fee2e2",
    ballColor: "#ef4444",
    label: "High",
  },
  [TicketPriorityEnums.MEDIUM]: {
    name: TicketPriorityEnums.MEDIUM,
    backgroundColor: "#fef9c3",
    ballColor: "#eab308",
    label: "Medium",
  },
  [TicketPriorityEnums.LOW]: {
    name: TicketPriorityEnums.LOW,
    backgroundColor: "#dbeafe",
    ballColor: "#3b82f6",
    label: "Low",
  },
};
