"use client";

import SectionHeader from "@/components/SectionHeader";
import TicketStatusPicker from "@/components/TicketStatusPicker";
import { taskStore } from "@/stores/taskStore";
import { Task, TicketStatus } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { tasks, updateTask, deleteTask } = taskStore();
  const router = useRouter();

  // Get task
  const params = useParams();
  const task = tasks.find((task) => task.id === params.nestedSlug);

  if (!task) {
    return;
  }

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [taskDescription, setTaskDescription] = useState<string>(task.description);
  const [taskStatus, setTaskStatus] = useState<TicketStatus>(task.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      ...task,
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
    if (taskTitle !== "" && taskDescription !== "") {
      updateTask(task.id, newTask);
      setTaskTitle("");
      setTaskDescription("");
      router.push(`/epics/${task.epicId}/${task.id}`);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="Update Task" />
      <form className="flex flex-col space-y-2">
        {/* Task title */}
        <p className="text-xs">Title</p>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Title"
          className="p-2 text-xs outline-none text-black"
        />

        {/* Task description */}
        <p className="text-xs">Description</p>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Description"
          className="p-2 text-xs outline-none text-black"
        ></textarea>
      </form>

      {/* Task status */}
      <div>
        <p className="text-xs">Status</p>
        <TicketStatusPicker callback={setTaskStatus} defaultStatus={taskStatus} />
      </div>

      {/* Update */}
      <button onClick={handleSubmit} className="w-full border-[1px] p-2">
        Update
      </button>

      {/* Delete */}
      <button
        onClick={() => deleteTask(task.id)}
        className="w-full border-[1px] border-red-500 text-red-500 p-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Page;
