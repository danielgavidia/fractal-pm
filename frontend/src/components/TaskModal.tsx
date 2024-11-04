import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatus } from "@/types/types";
import React, { useState } from "react";

interface TaskModalProps {
  task?: Task; // Optional task for update mode
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal = ({ task, isOpen, onClose }: TaskModalProps) => {
  // Store
  const { createTask, updateTask } = taskStore();

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(task?.title || "");
  const [taskDescription, setTaskDescription] = useState<string>(task?.description || "");
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(task?.status || "notStarted");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "") {
      if (task) {
        // Update mode
        updateTask(task.id, {
          ...task,
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
        });
      } else {
        // Create mode
        createTask({
          id: Date.now().toString(),
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
        });
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-bold">{task ? "Update Task" : "Create Task"}</div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="title"
            className="w-full border-[0.5px] p-2 mb-2 text-sm outline-none"
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="description"
            className="w-full border-[0.5px] p-2 resize-none h-40 text-xs outline-none"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-sm">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 hover:bg-blue-500 bg-black text-white rounded text-sm"
            >
              {task ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
