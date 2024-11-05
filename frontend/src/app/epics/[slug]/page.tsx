"use client";

import Kanban from "@/components/Kanban";
import SectionHeader from "@/components/SectionHeader";
import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { useParams } from "next/navigation";

const Page = () => {
  // Get epic
  const params = useParams();
  const { epics } = epicStore();
  const epic = epics.find((epic) => epic.id === params.slug);

  if (!epic) {
    return;
  }

  // Get tasks
  const { tasks } = taskStore();
  const currentTasks = tasks.filter((task) => task.epicId === epic.id);

  return (
    <div className="px-4">
      <SectionHeader title={`Epic: ${epic.title}`} />
      <div className="italic text-xs text-right">id: {epic.id}</div>
      <div className="text-sm">{epic.description}</div>
      <div>
        <SectionHeader title="Tasks" />
        <Kanban tickets={currentTasks} />
      </div>
    </div>
  );
};

export default Page;
