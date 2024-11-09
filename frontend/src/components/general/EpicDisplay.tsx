"use client";

import { taskStore } from "@/stores/taskStore";
import { Epic } from "@/types/types";
import Kanban from "@/components/tickets/Kanban";

interface EpicDisplayProps {
  epic: Epic;
}

const EpicDisplay = ({ epic }: EpicDisplayProps) => {
  const { tasks } = taskStore();
  const currentTasks = tasks.filter((task) => task.epicId === epic.id);

  return (
    <div className="p-4">
      <div>Title: {epic.title}</div>
      <div>Description: {epic.description}</div>
      <div>
        <Kanban tickets={currentTasks} />
      </div>
    </div>
  );
};

export default EpicDisplay;
