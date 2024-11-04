import { Task } from "@/types/types";

export const dummyTasks: Task[] = [
  {
    id: "task-1",
    title: "Design User Interface",
    description: "Create wireframes and mockups for the new dashboard",
    state: "pending",
  },
  {
    id: "task-2",
    title: "Implement Authentication",
    description: "Set up user authentication using NextAuth.js",
    state: "inProgress",
  },
  {
    id: "task-3",
    title: "Write API Documentation",
    description: "Document all API endpoints and their usage",
    state: "completed",
  },
  {
    id: "task-4",
    title: "Fix Navigation Bug",
    description: "Debug and fix the navigation menu responsiveness issue",
    state: "archived",
  },
  {
    id: "task-5",
    title: "Database Schema Design",
    description: "Design and document the database schema for user management",
    state: "pending",
  },
];
