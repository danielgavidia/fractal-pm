"use client";

import BacklogFinal from "@/components/BacklogFinal";
import { ticketStore } from "@/stores/ticketStore";
import React from "react";

const Page = () => {
  const { tickets } = ticketStore();
  const projects = tickets.filter((ticket) => ticket.ticketType === "project");
  console.log(projects);
  return (
    <div className="p-4">
      <BacklogFinal tickets={projects} />
    </div>
  );
};

export default Page;
