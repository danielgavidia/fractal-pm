"use client";

import { taskStore } from "@/stores/taskStore";
import { Epic } from "@/types/types";
import Kanban from "./Kanban";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

interface EpicDisplayProps {
  epic: Epic;
}

const EpicDisplay = ({ epic }: EpicDisplayProps) => {
  const { tasks } = taskStore();
  const currentTasks = tasks.filter((task) => task.epicId === epic.id);
  const tasksByStatus = getTicketsByStatus(currentTasks);

  return (
    <div className="p-4">
      <div>Title: {epic.title}</div>
      <div>Description: {epic.description}</div>
      <div>
        <Kanban ticketsByStatus={tasksByStatus} />
      </div>
    </div>
  );
};

export default EpicDisplay;
