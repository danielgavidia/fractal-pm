import { Epic } from "@/types/types";

export const dummyEpics: Epic[] = [
  {
    id: "epic-1",
    title: "User Authentication & Management",
    description: "Implement core user authentication and management features",
    status: "inProgress",
    taskIds: ["task-2", "task-9", "task-10", "task-13", "task-14", "task-16", "task-17", "task-18"],
  },
  {
    id: "epic-2",
    title: "UI/UX Improvements",
    description: "Enhance user interface and overall user experience",
    status: "inProgress",
    taskIds: ["task-1", "task-4", "task-6", "task-12"],
  },
  {
    id: "epic-3",
    title: "Documentation & Testing",
    description: "Comprehensive documentation and testing implementation",
    status: "inProgress",
    taskIds: ["task-3", "task-7", "task-15", "task-19"],
  },
  {
    id: "epic-5",
    title: "Infrastructure & DevOps",
    description: "Setup and maintain development and deployment infrastructure",
    status: "inProgress",
    taskIds: ["task-5", "task-8", "task-11", "task-20"],
  },
];
