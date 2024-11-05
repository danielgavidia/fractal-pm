"use client";

import { epicStore } from "@/stores/epicStore";

// Components
import Kanban from "@/components/Kanban";
import SectionHeader from "@/components/SectionHeader";

const Page = () => {
  const { epics } = epicStore();

  return (
    <div className="px-4">
      <SectionHeader title="Epics" />
      <Kanban tickets={epics} />
    </div>
  );
};

export default Page;
