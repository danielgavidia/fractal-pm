"use client";

import { taskStore } from "@/stores/taskStore";
import { useState } from "react";

// Components
import Kanban from "@/components/Kanban";
import SectionHeader from "@/components/SectionHeader";
import TaskModal from "@/components/TaskModal";

const Page = () => {
  const { tasks } = taskStore();

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="px-4">
      <SectionHeader title="Kanban" callback={() => setIsOpen(true)} />
      <Kanban tickets={tasks} />
      {isOpen && <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Page;
