"use client";

import DatePicker from "@/components/DatePicker";
import SectionHeader from "@/components/SectionHeader";
import TicketPriorityPicker from "@/components/TicketPriorityPicker";
import { ticketStore } from "@/stores/ticketStore";
import { TicketFinal, TicketPriority, TicketStatusEnums } from "@/types/types";
// import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketNew = () => {
  // const { createTask } = taskStore();
  const { createTicket } = ticketStore();
  // const router = useRouter();
  // const params = useParams();
  // const { slug } = params;

  // Local state
  // const [taskTitle, setTaskTitle] = useState<string>("");
  // const [taskDescription, setTaskDescription] = useState<string>("");
  // const [taskDueDate, setTaskDueDate] = useState<Date>(new Date());
  // const [taskPriority, setTaskPriority] = useState<TicketPriority>("low");

  const [ticketTitle, setTicketTitle] = useState<string>("");
  const [ticketDescription, setTicketDescription] = useState<string>("");
  const [ticketDueDate, setTicketDueDate] = useState<Date>(new Date());
  const [ticketPriority, setTicketPriority] = useState<TicketPriority>("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket: TicketFinal = {
      id: Date.now().toString(),
      title: ticketTitle,
      description: ticketDescription,
      status: TicketStatusEnums.IN_PROGRESS,
      ticketType: "task",
      dueDate: ticketDueDate,
      priority: ticketPriority,
      // epicId: Array.isArray(slug) ? slug[0] : slug || "",
    };
    if (ticketTitle !== "" && ticketDescription !== "") {
      createTicket(newTicket);
      setTicketTitle("");
      setTicketDescription("");
      // router.push(`/epics/${newTask.epicId}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="New Task" />
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
