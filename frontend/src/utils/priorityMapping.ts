import { TicketPriorityEnums } from "@/types/enums";

export const priorityMapping = {
  [TicketPriorityEnums.LOW]: {
    name: TicketPriorityEnums.LOW,
    backgroundColor: "rgba(255, 0, 0, 0.10)",
    ballColor: "rgba(255, 0, 0, 0.10)",
    label: "Low",
  },
  [TicketPriorityEnums.MEDIUM]: {
    name: TicketPriorityEnums.MEDIUM,
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    ballColor: "rgba(255, 0, 0, 0.5)",
    label: "Medium",
  },
  [TicketPriorityEnums.HIGH]: {
    name: TicketPriorityEnums.HIGH,
    backgroundColor: "rgba(255, 0, 0, 1)",
    ballColor: "rgba(255, 0, 0, 1)",
    label: "High",
  },
};
