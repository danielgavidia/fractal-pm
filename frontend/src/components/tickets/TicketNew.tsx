"use client";

import DatePicker from "@/components/general/DatePicker";
import SectionHeader from "@/components/general/SectionHeader";
import TicketPriorityPicker from "@/components/tickets/TicketPriorityPicker";
import { ticketStore } from "@/stores/ticketStore";
import {
  Ticket,
  TicketPriority,
  TicketPriorityEnums,
  TicketStatusEnums,
  TicketType,
  TicketTypeEnums,
} from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketNew = () => {
  const { createTicket } = ticketStore();
  const router = useRouter();

  // Local state
  const [ticketTitle, setTicketTitle] = useState<string>("");
  const [ticketDescription, setTicketDescription] = useState<string>("");
  const [ticketDueDate, setTicketDueDate] = useState<Date>(new Date());
  const [ticketPriority, setTicketPriority] = useState<TicketPriority>(TicketPriorityEnums.LOW);
  const [ticketType, setTicketType] = useState<TicketType>(TicketTypeEnums.TASK);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = {
      id: Date.now().toString(),
      title: ticketTitle,
      description: ticketDescription,
      status: TicketStatusEnums.IN_PROGRESS,
      ticketType: ticketType,
      dueDate: ticketDueDate,
      priority: ticketPriority,
    };
    if (ticketTitle !== "" && ticketDescription !== "") {
      createTicket(newTicket);
      router.push(`/projects/${newTicket.id}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="New Ticket" />
      <form className="flex flex-col space-y-2">
        {/* Task title */}
        <p className="text-xs">Title</p>
        <input
          type="text"
          value={ticketTitle}
          onChange={(e) => setTicketTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black rounded"
        />

        {/* Task description */}
        <p className="text-xs">Description</p>
        <textarea
          value={ticketDescription}
          onChange={(e) => setTicketDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black rounded"
        ></textarea>
      </form>

      {/* Ticket Type */}
      <div>
        <p className="text-xs">Ticket Type</p>
        <div className="flex space-x-2">
          {Object.values(TicketTypeEnums).map((type, key) => (
            <button key={key} onClick={() => setTicketType(type)}>
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Due date */}
      <div className="flex flex-col space-y-2">
        <p className="text-xs">Due Date</p>
        <DatePicker onDateChange={(date: Date | undefined) => date && setTicketDueDate(date)} />
      </div>

      {/* Priority */}
      <div>
        <p className="text-xs">Priority</p>
        <TicketPriorityPicker callback={setTicketPriority} defaultPriority={ticketPriority} />
      </div>

      {/* Submit */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2 rounded">
        Create
      </button>
    </div>
  );
};

export default TicketNew;
