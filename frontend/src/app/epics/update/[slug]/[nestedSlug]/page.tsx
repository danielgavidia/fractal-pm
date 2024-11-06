"use client";

import DatePicker from "@/components/DatePicker";
import Dropdown from "@/components/Dropdown";
import SectionHeader from "@/components/SectionHeader";
import TicketStatusPicker from "@/components/TicketStatusPicker";
import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { Task, TicketStatus } from "@/types/types";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const { tasks, updateTask, deleteTask } = taskStore();
  const { epics } = epicStore();
  const router = useRouter();

  // Get task
  const params = useParams();
  const task = tasks.find((task) => task.id === params.nestedSlug);

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState<string>(task ? task.description : "");
  const [taskStatus, setTaskStatus] = useState<TicketStatus>(task ? task.status : "notStarted");
  const [taskEpicId, setTaskEpicId] = useState<string>(task ? task.epicId : "");
  const [taskDueDate, setTaskDueDate] = useState<Date>(task ? task.dueDate : new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "" && task) {
      const newTask: Task = {
        ...task,
        id: task.id || "",
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
        dueDate: taskDueDate,
        epicId: taskEpicId,
      };
      updateTask(task.id, newTask);
      setTaskTitle("");
      setTaskDescription("");
      router.push(`/epics/${task.epicId}/${task.id}`);
    }
  };

  if (!task) {
    return <div>Task not found</div>; // Render a fallback UI instead of returning early
  }

  return (
    <div className="flex flex-col space-y-4">
      <SectionHeader title="Update Task" />
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
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

      {/* Epic dropdown */}
      <div className="flex flex-col items-center space-y-2 rounded">
        <p className="text-xs text-left w-full">Epic: </p>
        <Dropdown dropdownItems={epics.map((epic) => epic.title)} callback={setTaskEpicId} />
      </div>

      {/* Task status */}
      <div>
        <p className="text-xs">Status</p>
        <TicketStatusPicker callback={setTaskStatus} defaultStatus={taskStatus} />
      </div>

      {/* Update */}
      <button type="submit" className="w-full border-[1px] p-2 rounded">
        Update
      </button>

      {/* Delete */}
      <button
        onClick={() => {
          deleteTask(task.id);
          router.push(`/epics/${task.epicId}`);
        }}
        className="w-full border-[1px] border-red-500 text-red-500 p-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Page;
