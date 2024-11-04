import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatus } from "@/types/types";
import React, { useState } from "react";

interface TaskUpdateProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

const TaskUpdate = ({ task, isOpen, onClose }: TaskUpdateProps) => {
  // Store
  const { updateTask } = taskStore();

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [taskDescription, setTaskDescription] = useState<string>(task.description);
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(task.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "") {
      updateTask(task.id, {
        ...task,
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Update Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="title"
          />
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="description"
          />
          <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskUpdate;
