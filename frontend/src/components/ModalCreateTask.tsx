import { taskStore } from "@/stores/taskStore";
import React, { useState } from "react";

interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreateTask: React.FC<ModalCreateTaskProps> = ({ isOpen, onClose }) => {
  // Store
  const { createTask } = taskStore();

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "") {
      createTask({
        id: Date.now().toString(),
        title: taskTitle,
        description: taskDescription,
        status: "notStarted",
      });
      setTaskTitle("");
      setTaskDescription("");
      onClose(); // Close modal after submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateTask;
