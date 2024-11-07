import { Epic } from "@/types/types";

export const dummyEpics: Epic[] = [
  {
    id: "epic-1",
    title: "User Authentication & Management",
    description: "Implement core user authentication and management features",
    status: "inProgress",
    ticketType: "epic",
    priority: "high",
    dueDate: new Date("2024-06-30"),
    taskIds: [
      "task-2",
      "task-9",
      "task-10",
      "task-13",
      "task-14",
      "task-16",
      "task-17",
      "task-18",
      "task-28",
      "task-31",
      "task-33",
      "task-36",
      "task-40",
    ],
  },
  {
    id: "epic-2",
    title: "UI/UX Improvements",
    description: "Enhance user interface and overall user experience",
    status: "inProgress",
    ticketType: "epic",
    priority: "medium",
    dueDate: new Date("2024-08-15"),
    taskIds: [
      "task-1",
      "task-4",
      "task-6",
      "task-12",
      "task-21",
      "task-22",
      "task-27",
      "task-32",
      "task-39",
    ],
  },
  {
    id: "epic-3",
    title: "Documentation & Testing",
    description: "Comprehensive documentation and testing implementation",
    status: "inProgress",
    ticketType: "epic",
    priority: "medium",
    dueDate: new Date("2024-09-30"),
    taskIds: [
      "task-3",
      "task-7",
      "task-15",
      "task-19",
      "task-24",
      "task-26",
      "task-30",
      "task-34",
      "task-38",
    ],
  },
  {
    id: "epic-5",
    title: "Infrastructure & DevOps",
    description: "Setup and maintain development and deployment infrastructure",
    status: "inProgress",
    ticketType: "epic",
    priority: "high",
    dueDate: new Date("2024-11-15"),
    taskIds: [
      "task-5",
      "task-8",
      "task-11",
      "task-20",
      "task-23",
      "task-25",
      "task-29",
      "task-35",
      "task-37",
    ],
  },
];
