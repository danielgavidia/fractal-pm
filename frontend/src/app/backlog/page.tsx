"use client";
import Backlog from "@/components/Backlog";
import SectionHeader from "@/components/SectionHeader";
import TaskModal from "@/components/TaskModal";

import { useState } from "react";

const Page = () => {
  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="px-4 flex flex-col space-y-2">
      <SectionHeader title="Backlog" />
      <Backlog />
      {isOpen && <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Page;
