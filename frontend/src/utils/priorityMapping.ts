import { TicketPriorityEnums } from "@/types/types";

export const priorityMapping = {
  [TicketPriorityEnums.LOW]: {
    name: TicketPriorityEnums.LOW,
    backgroundColor: "#ffe6e6",
    ballColor: "#ffb3b3",
    label: "Low",
  },
  [TicketPriorityEnums.MEDIUM]: {
    name: TicketPriorityEnums.MEDIUM,
    backgroundColor: "#ffcccc",
    ballColor: "#ff4d4d",
    label: "Medium",
  },
  [TicketPriorityEnums.HIGH]: {
    name: TicketPriorityEnums.HIGH,
    backgroundColor: "#ffb3b3",
    ballColor: "#ff0000",
    label: "High",
  },
};
