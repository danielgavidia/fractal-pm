import { Task } from "@/types/types";

export const dummyTasks: Task[] = [
  {
    title: "Design User Interface",
    description: "Create wireframes and mockups for the new dashboard",
    state: "pending",
  },
  {
    title: "Implement Authentication",
    description: "Set up user authentication using NextAuth.js",
    state: "inProgress",
  },
  {
    title: "Write API Documentation",
    description: "Document all API endpoints and their usage",
    state: "completed",
  },
  {
    title: "Fix Navigation Bug",
    description: "Debug and fix the navigation menu responsiveness issue",
    state: "archived",
  },
  {
    title: "Database Schema Design",
    description: "Design and document the database schema for user management",
    state: "pending",
  },
];
