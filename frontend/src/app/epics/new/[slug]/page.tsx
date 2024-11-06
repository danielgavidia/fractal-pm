"use client";

import DatePicker from "@/components/DatePicker";
import SectionHeader from "@/components/SectionHeader";
import { taskStore } from "@/stores/taskStore";
import { Task } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { createTask } = taskStore();
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskDueDate, setTaskDueDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      status: "inProgress",
      ticketType: "task",
      dueDate: taskDueDate,
      epicId: Array.isArray(slug) ? slug[0] : slug || "",
    };
    if (taskTitle !== "" && taskDescription !== "") {
      createTask(newTask);
      setTaskTitle("");
      setTaskDescription("");
      router.push(`/epics/${newTask.epicId}`);
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
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black rounded"
        />

        {/* Task description */}
        <p className="text-xs">Description</p>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black rounded"
        ></textarea>
      </form>

      {/* Due date */}
      <div className="flex flex-col space-y-2">
        <p className="text-xs">Due Date</p>
        <DatePicker onDateChange={(date: Date | undefined) => date && setTaskDueDate(date)} />
      </div>

      {/* Submit */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2 rounded">
        Create
      </button>
    </div>
  );
};

export default Page;
