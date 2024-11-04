import { TaskStatusEnums } from "@/types/types";

export const statusMapping = {
  [TaskStatusEnums.ARCHIVED]: {
    name: TaskStatusEnums.ARCHIVED,
    backgroundColor: "#f3f4f6",
    ballColor: "#6b7280",
    label: "Archived",
  },
  [TaskStatusEnums.COMPLETED]: {
    name: TaskStatusEnums.COMPLETED,
    backgroundColor: "#dcfce7",
    ballColor: "#22c55e",
    label: "Completed",
  },
  [TaskStatusEnums.IN_PROGRESS]: {
    name: TaskStatusEnums.IN_PROGRESS,
    backgroundColor: "#dbeafe",
    ballColor: "#3b82f6",
    label: "In Progress",
  },
  [TaskStatusEnums.NOT_STARTED]: {
    name: TaskStatusEnums.NOT_STARTED,
    backgroundColor: "#fef9c3",
    ballColor: "#eab308",
    label: "Not Started",
  },
};
