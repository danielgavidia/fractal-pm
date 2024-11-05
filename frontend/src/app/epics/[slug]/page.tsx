"use client";

import Kanban from "@/components/Kanban";
import SectionHeader from "@/components/SectionHeader";
import TaskModal from "@/components/TaskModal";
import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <SectionHeader
        title={`Epic: ${epic.title}`}
        callback={() => router.push(`/epics/edit/${epic.id}`)}
        iconDefinition={faPenToSquare}
        buttonLabel="Edit"
      />
      <div className="italic text-xs text-right">id: {epic.id}</div>
      <div className="text-sm">{epic.description}</div>
      <div>
        <SectionHeader
          title="Tasks"
          callback={() => setIsOpen(true)}
          iconDefinition={faPlus}
          buttonLabel="New"
        />
        <Kanban tickets={currentTasks} />
      </div>
      {isOpen && <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Page;
