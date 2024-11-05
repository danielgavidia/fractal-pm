"use client";

import SectionHeader from "@/components/SectionHeader";
import { epicStore } from "@/stores/epicStore";
import { Epic, TicketStatus } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { updateEpic } = epicStore();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEpic: Epic = {
      ...epic,
      title: epicTitle,
      description: epicDescription,
      status: epicStatus,
    };
    if (epicTitle !== "" && epicDescription !== "") {
      updateEpic(epic.id, newEpic);
      setEpicTitle("");
      setEpicDescription("");
      router.push(`/epics/${epic.id}`);
    }
  };

  return (
    <div className="px-4 flex flex-col space-y-4">
      <SectionHeader title="Update Epic" />
      <form className="flex flex-col space-y-2">
        {/* Epic title */}
        <p className="text-xs">Title</p>
        <input
          type="text"
          value={epicTitle}
          onChange={(e) => setEpicTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black"
        />

        {/* Epic description */}
        <p className="text-xs">Description</p>
        <textarea
          value={epicDescription}
          onChange={(e) => setEpicDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black"
        ></textarea>
      </form>

      {/* Submit */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2">
        Update
      </button>
    </div>
  );
};

export default Page;
