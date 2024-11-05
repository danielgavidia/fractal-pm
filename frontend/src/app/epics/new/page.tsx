"use client";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEpic: Epic = {
      id: Date.now().toString(),
      title: epicTitle,
      description: epicDescription,
      status: "inProgress",
      ticketType: "epic",
    };
    if (epicTitle !== "" && epicDescription !== "") {
      createEpic(newEpic);
      setEpicTitle("");
      setEpicDescription("");
      router.push(`/epics/${newEpic.id}`);
    }
  };

  return (
    <div className="px-4 flex flex-col space-y-4">
      <SectionHeader title="New Epic" />
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
        Create
      </button>
    </div>
  );
};

export default Page;
