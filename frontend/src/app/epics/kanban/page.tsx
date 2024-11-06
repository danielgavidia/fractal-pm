"use client";

import Kanban from "@/components/Kanban";
import { epicStore } from "@/stores/epicStore";

const Page = () => {
  const { epics } = epicStore();

  return <Kanban tickets={epics} />;
};

export default Page;
