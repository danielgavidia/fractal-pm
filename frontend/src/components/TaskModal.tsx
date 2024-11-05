import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatus } from "@/types/types";
import { statusMapping } from "@/utils/statusMapping";
import { useState } from "react";

//Components
import TaskStatusBadge from "./TaskStatusBadge";
import { valueToColor } from "@/utils/valueToColor";
import { themeStore } from "@/stores/themeStore";

interface TaskModalProps {
  task?: Task; // Optional task for update mode
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal = ({ task, isOpen, onClose }: TaskModalProps) => {
  // Store
  const { createTask, updateTask } = taskStore();
  const { currentTheme } = themeStore();

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(task?.title || "");
  const [taskDescription, setTaskDescription] = useState<string>(task?.description || "");
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(task?.status || "notStarted");

  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  // Handle submit new/updated task
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

  // Handle submit message
  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage !== "") {
      setMessages((prior) => [...prior, currentMessage]);
      setCurrentMessage("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div
        className="p-6 rounded-lg shadow-lg w-3/4 h-1/2 flex flex-col justify-between"
        style={{
          backgroundColor: valueToColor(currentTheme.backgroundSecondary),
          color: valueToColor(currentTheme.textPrimary),
        }}
      >
        {/* Modal header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-bold">{task ? "Update Task" : "Create Task"}</div>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="flex h-full mb-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col space-y-2 h-full ${task ? "w-full" : "w-1/2"}`}
          >
            <div className="text-sm text-center">Task</div>
            {/* Task title */}
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Title"
              className="border-[0.5px] p-2 mb-2 text-xs outline-none text-black"
            />

            {/* Task descriptions */}
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Description"
              className="border-[0.5px] p-2 resize-none h-full text-xs outline-none text-black mb-2"
            />
          </form>

          {/* AI Chat */}
          {!task && (
            <div className="w-1/2 flex flex-col h-full ml-2 space-y-2">
              <div className="text-sm text-center">AI Chat</div>
              <textarea
                className="flex-1 p-2 text-xs outline-none text-black text-right"
                value={messages.join("\n")}
                readOnly
              />
              <form onSubmit={handleSubmitMessage} className="w-full">
                <input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="w-full h-full text-black outline-none text-xs p-2"
                ></input>
              </form>
            </div>
          )}
        </div>

        {/* Status changes */}
        {task && (
          <div className="grid grid-cols-2 py-2">
            {Object.values(statusMapping).map((status, key) => {
              if (status.name === taskStatus) {
                return (
                  <button
                    key={key}
                    onClick={() => setTaskStatus(status.name)}
                    className="p-1 border-[0.5px] rounded-xl"
                  >
                    <TaskStatusBadge status={status.name} />
                  </button>
                );
              } else {
                return (
                  <button
                    key={key}
                    onClick={() => setTaskStatus(status.name)}
                    className="p-1 border-[0.5px]"
                    style={{
                      borderColor: valueToColor(currentTheme.backgroundSecondary),
                    }}
                  >
                    <TaskStatusBadge status={status.name} />
                  </button>
                );
              }
            })}
          </div>
        )}

        {/* Cancel, update and create buttons */}
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded text-sm">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 hover:bg-blue-500 bg-black text-white rounded text-sm"
          >
            {task ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
