"use client";
import { epicStore } from "@/stores/epicStore";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

// Components
import Kanban from "@/components/Kanban";

const page = () => {
  const { epics } = epicStore();
  const epicsByStatus = getTicketsByStatus(epics);
  return (
    <>
      <Kanban ticketsByStatus={epicsByStatus} />
    </>
  );
};

export default page;
