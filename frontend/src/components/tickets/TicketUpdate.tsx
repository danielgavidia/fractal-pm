"use client";

import DatePicker from "@/components/general/DatePicker";
import TicketPriorityPicker from "@/components/tickets/TicketPriorityPicker";
import TicketStatusPicker from "@/components/tickets/TicketStatusPicker";
import { ticketStore } from "@/stores/ticketStore";
import { Ticket, TicketPriority, TicketStatus } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Dropdown from "../general/Dropdown";

interface TicketUpdateProps {
  ticket: Ticket;
}

const TicketUpdate = ({ ticket }: TicketUpdateProps) => {
  const router = useRouter();

  const { tickets, updateTicket, deleteTicket } = ticketStore();

  // Local state
  const [ticketTitle, setTicketTitle] = useState<string>(ticket.title);
  const [ticketDescription, setTicketDescription] = useState<string>(ticket.description);
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>(ticket.status);
  const [ticketDueDate, setTicketDueDate] = useState<Date>(ticket.dueDate);
  const [ticketPriority, setTicketPriority] = useState<TicketPriority>(ticket.priority);
  const [ticketParentId, setTicketParentId] = useState<string | undefined>(ticket.parentId);

  const parentOptions = (parentId: string): string[] | undefined => {
    const parent = tickets.find((t) => t.id === parentId);
    const parentType = parent?.ticketType;
    if (parentType) {
      const parentOptions = tickets.filter((t) => t.ticketType === parentType);
      return parentOptions.map((p) => p.title);
    }
  };

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
    if (ticket.parentId) {
      newTicket.parentId = ticketParentId;
    }
    if (ticketTitle !== "" && ticketDescription !== "") {
      updateTicket(ticket.id, newTicket);
      router.push(`/projects`);
    }
  };

  const handleSetParentId = (parentTitle: string): void => {
    const parentId = tickets.find((t) => t.title === parentTitle)?.id;
    setTicketParentId(parentId);
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

      {/* Parent */}
      {ticket.parentId && parentOptions(ticket.parentId) ? (
        <div className="flex flex-col space-y-2">
          <p className="text-xs">Parent</p>
          <Dropdown
            dropdownItems={parentOptions(ticket.parentId) || []}
            callback={handleSetParentId}
          />
        </div>
      ) : null}

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
