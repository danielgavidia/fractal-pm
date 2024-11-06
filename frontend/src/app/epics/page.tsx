"use client";

import { epicStore } from "@/stores/epicStore";

// Components
import Kanban from "@/components/Kanban";

const Page = () => {
  const { epics } = epicStore();

  return <Kanban tickets={epics} />;
};

export default Page;
