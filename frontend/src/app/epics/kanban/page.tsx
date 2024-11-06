"use client";

import Kanban from "@/components/Kanban";
import { epicStore } from "@/stores/epicStore";

const Page = () => {
  const { epics } = epicStore();

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <Kanban tickets={epics} />
    </div>
  );
};

export default Page;
