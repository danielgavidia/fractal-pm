import { TaskStatusEnums } from "@/types/types";

export const statusMapping = {
  [TaskStatusEnums.ARCHIVED]: {
    backgroundColor: "bg-gray-100",
    ballColor: "bg-gray-500",
    label: "Archived",
  },
  [TaskStatusEnums.COMPLETED]: {
    backgroundColor: "bg-green-100",
    ballColor: "bg-green-500",
    label: "Completed",
  },
  [TaskStatusEnums.IN_PROGRESS]: {
    backgroundColor: "bg-blue-100",
    ballColor: "bg-blue-500",
    label: "In Progress",
  },
  [TaskStatusEnums.NOT_STARTED]: {
    backgroundColor: "bg-yellow-100",
    ballColor: "bg-yellow-500",
    label: "Not Started",
  },
};
