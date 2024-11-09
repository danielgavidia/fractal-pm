"use client";

import DatePicker from "@/components/general/DatePicker";
import TicketPriorityPicker from "@/components/tickets/TicketPriorityPicker";
import TicketStatusPicker from "@/components/tickets/TicketStatusPicker";
import { ticketStore } from "@/stores/ticketStore";
import { Ticket, TicketPriority, TicketStatus } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TicketUpdateProps {
  ticket: Ticket;
}

const TicketUpdate = ({ ticket }: TicketUpdateProps) => {
  const router = useRouter();

  const { updateTicket, deleteTicket } = ticketStore();

  // Local state
  const [ticketTitle, setTicketTitle] = useState<string>(ticket.title);
  const [ticketDescription, setTicketDescription] = useState<string>(
    ticket ? ticket.description : ""
  );
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>(
    ticket ? ticket.status : "notStarted"
  );
  const [ticketDueDate, setTicketDueDate] = useState<Date>(ticket ? ticket.dueDate : new Date());
  const [ticketPriority, setTicketPriority] = useState<TicketPriority>(
    ticket ? ticket.priority : "low"
  );

  if (!ticket) {
    return;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = {
      ...ticket,
      title: ticketTitle,
      description: ticketDescription,
      status: ticketStatus,
      dueDate: ticketDueDate,
      priority: ticketPriority,
    };
    if (ticketTitle !== "" && ticketDescription !== "") {
      updateTicket(ticket.id, newTicket);
      setTicketTitle("");
      setTicketDescription("");
      router.push(`/epics/${ticket.id}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <form className="flex flex-col space-y-2">
        {/* Epic title */}
        <p className="text-xs">Title</p>
        <input
          type="text"
          value={ticketTitle}
          onChange={(e) => setTicketTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black rounded"
        />

        {/* Epic description */}
        <p className="text-xs">Description</p>
        <textarea
          value={ticketDescription}
          onChange={(e) => setTicketDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black rounded"
        ></textarea>
      </form>

      {/* Due date */}
      <div className="flex flex-col space-y-2">
        <p className="text-xs">Due Date</p>
        <DatePicker onDateChange={(date: Date | undefined) => date && setTicketDueDate(date)} />
      </div>

      {/* Epic status */}
      <div>
        <p className="text-xs">Status</p>
        <TicketStatusPicker callback={setTicketStatus} defaultStatus={ticketStatus} />
      </div>

      {/* Priority */}
      <div>
        <p className="text-xs">Priority</p>
        <TicketPriorityPicker callback={setTicketPriority} defaultPriority={ticketPriority} />
      </div>

      {/* Update */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2 rounded">
        Update
      </button>

      {/* Delete */}
      <button
        onClick={() => deleteTicket(ticket.id)}
        className="w-full border-[1px] border-red-500 text-red-500 p-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TicketUpdate;
