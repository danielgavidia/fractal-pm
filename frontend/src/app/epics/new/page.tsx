"use client";

import DatePicker from "@/components/DatePicker";
import SectionHeader from "@/components/SectionHeader";
import { epicStore } from "@/stores/epicStore";
import { Epic } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { createEpic } = epicStore();
  const router = useRouter();

  // Local state
  const [epicTitle, setEpicTitle] = useState<string>("");
  const [epicDescription, setEpicDescription] = useState<string>("");
  const [epicDueDate, setEpicDueDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEpic: Epic = {
      id: Date.now().toString(),
      title: epicTitle,
      description: epicDescription,
      status: "inProgress",
      ticketType: "epic",
      dueDate: epicDueDate,
      priority: "low",
      taskIds: [],
    };
    if (epicTitle !== "" && epicDescription !== "") {
      createEpic(newEpic);
      setEpicTitle("");
      setEpicDescription("");
      router.push(`/epics/${newEpic.id}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="New Epic" />
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

      {/* Submit */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2 rounded">
        Create
      </button>
    </div>
  );
};

export default Page;
