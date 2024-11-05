"use client";
import Kanban from "@/components/Kanban";

import { taskStore } from "@/stores/taskStore";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

const Page = () => {
  const { tasks } = taskStore();
  const tasksByStatus = getTicketsByStatus(tasks);
  return (
    <>
      <Kanban ticketsByStatus={tasksByStatus} />
    </>
  );
};

export default Page;
