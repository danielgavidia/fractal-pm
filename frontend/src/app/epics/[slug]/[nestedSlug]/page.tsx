"use client";

import TicketPage from "@/components/TicketPage";
import { taskStore } from "@/stores/taskStore";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { tasks } = taskStore();
  const params = useParams();

  const currentTask = tasks.find((task) => task.id === params.nestedSlug);

  return <div>{currentTask && <TicketPage ticket={currentTask} />}</div>;
};

export default Page;
