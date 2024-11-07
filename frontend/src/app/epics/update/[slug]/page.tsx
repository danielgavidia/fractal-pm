"use client";

import DatePicker from "@/components/DatePicker";
import SectionHeader from "@/components/SectionHeader";
import TicketPriorityPicker from "@/components/TicketPriorityPicker";
import TicketStatusPicker from "@/components/TicketStatusPicker";
import { epicStore } from "@/stores/epicStore";
import { Epic, TicketPriority, TicketStatus } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { updateEpic, deleteEpic } = epicStore();
  const router = useRouter();

  // Get epic
  const params = useParams();
  const { epics } = epicStore();
  const epic = epics.find((epic) => epic.id === params.slug);

  if (!epic) {
    return;
  }

  // Local state
  const [epicTitle, setEpicTitle] = useState<string>(epic.title);
  const [epicDescription, setEpicDescription] = useState<string>(epic.description);
  const [epicStatus, setEpicStatus] = useState<TicketStatus>(epic.status);
  const [epicDueDate, setEpicDueDate] = useState<Date>(epic.dueDate);
  const [epicPriority, setEpicPriority] = useState<TicketPriority>(epic.priority);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEpic: Epic = {
      ...epic,
      title: epicTitle,
      description: epicDescription,
      status: epicStatus,
      dueDate: epicDueDate,
      priority: epicPriority,
    };
    if (epicTitle !== "" && epicDescription !== "") {
      updateEpic(epic.id, newEpic);
      setEpicTitle("");
      setEpicDescription("");
      router.push(`/epics/${epic.id}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="Update Epic" />
      <form className="flex flex-col space-y-2">
        {/* Epic title */}
        <p className="text-xs">Title</p>
        <input
          type="text"
          value={epicTitle}
          onChange={(e) => setEpicTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black rounded"
        />

        {/* Epic description */}
        <p className="text-xs">Description</p>
        <textarea
          value={epicDescription}
          onChange={(e) => setEpicDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black rounded"
        ></textarea>
      </form>

      {/* Due date */}
      <div className="flex flex-col space-y-2">
        <p className="text-xs">Due Date</p>
        <DatePicker onDateChange={(date: Date | undefined) => date && setEpicDueDate(date)} />
      </div>

      {/* Epic status */}
      <div>
        <p className="text-xs">Status</p>
        <TicketStatusPicker callback={setEpicStatus} defaultStatus={epicStatus} />
      </div>

      {/* Priority */}
      <div>
        <p className="text-xs">Priority</p>
        <TicketPriorityPicker callback={setEpicPriority} defaultPriority={epicPriority} />
      </div>

      {/* Update */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2 rounded">
        Update
      </button>

      {/* Delete */}
      <button
        onClick={() => deleteEpic(epic.id)}
        className="w-full border-[1px] border-red-500 text-red-500 p-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Page;
