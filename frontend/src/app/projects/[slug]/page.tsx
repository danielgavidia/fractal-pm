"use client";

import { useParams } from "next/navigation";
import { ticketStore } from "@/stores/ticketStore";
import TicketPageFinal from "@/components/TicketPageFinal";

const Page = () => {
  // Get epic
  const params = useParams();
  // const { epics } = epicStore();
  const { tickets } = ticketStore();
  const ticket = tickets.find((ticket) => ticket.id === params.slug);

  if (!ticket) {
    return;
  }

  return (
    <div className="px-2">
      <TicketPageFinal ticket={ticket} />
    </div>
  );
};

export default Page;