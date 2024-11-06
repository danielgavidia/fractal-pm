"use client";

import { epicStore } from "@/stores/epicStore";
import { useParams } from "next/navigation";
import TicketPage from "@/components/TicketPage";

const Page = () => {
  // Get epic
  const params = useParams();
  const { epics } = epicStore();
  const epic = epics.find((epic) => epic.id === params.slug);

  if (!epic) {
    return;
  }

  return (
    <div>
      <TicketPage ticket={epic} />
    </div>
  );
};

export default Page;
