"use client";

import { epicStore } from "@/stores/epicStore";
import Backlog from "@/components/Backlog";

const Page = () => {
  const { epics } = epicStore();
  return (
    <div className="py-2">
      <Backlog tickets={epics} />
    </div>
  );
};

export default Page;
