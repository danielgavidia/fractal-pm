import { useState } from "react";
import { Task as Ticket, TicketStatus } from "@/types/types";

// Store
import { taskStore } from "@/stores/taskStore";
import { themeStore } from "@/stores/themeStore";
import { epicStore } from "@/stores/epicStore";

// Components
import Dropdown from "@/components/Dropdown";
import TicketStatusPicker from "@/components/TicketStatusPicker";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Utils
import { valueToColor } from "@/utils/valueToColor";
import { getTaskFromPrompt } from "@/lib/openai";

interface TaskModalProps {
  ticket?: Ticket; // Optional task for update mode
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal = ({ ticket, isOpen, onClose }: TaskModalProps) => {
  // Store
  const { createTask, deleteTask, updateTask } = taskStore();
  const { epics } = epicStore();
  const { currentTheme } = themeStore();

  // Colors
  const backgroundSecondary = valueToColor(currentTheme.backgroundSecondary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>(ticket?.title || "");
  const [taskDescription, setTaskDescription] = useState<string>(ticket?.description || "");
  const [taskStatus, setTaskStatus] = useState<TicketStatus>(ticket?.status || "notStarted");
  const [epicId, setEpicId] = useState<string>(ticket?.epicId || epics[0].id);

  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  // Handle submit new/updated task
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "") {
      if (ticket) {
        // Update mode
        updateTask(ticket.id, {
          ...ticket,
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
          epicId: epicId,
        });
      } else {
        // Create mode
        createTask({
          id: Date.now().toString(),
          title: taskTitle,
          description: taskDescription,
          status: taskStatus,
          ticketType: "task",
          epicId: epicId,
        });
      }
      onClose();
    }
  };

  // Handle submit message
  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage !== "") {
      try {
        setMessages((prior) => [...prior, currentMessage]);
        setCurrentMessage("");
        const taskFromPrompt = await getTaskFromPrompt(currentMessage);
        if (taskFromPrompt) {
          setTaskTitle(taskFromPrompt.title || "");
          setTaskDescription(taskFromPrompt.description || "");
          setTaskStatus(taskFromPrompt.status || "notStarted");
        }
      } catch (error) {
        console.error("Error getting task from prompt:", error);
        // Optionally handle the error in the UI
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div
        className="p-6 shadow-lg w-3/4 h-3/4 flex flex-col justify-between"
        style={{
          backgroundColor: backgroundSecondary,
          color: textPrimary,
        }}
      >
        {/* Modal header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-bold">{ticket ? "Update Task" : "Create Task"}</div>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="flex flex-col h-full mb-2 w-full space-y-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2 h-full">
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

          {/* Epic drowdown */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-xs text-left w-full p">Epic: </p>
            <Dropdown dropdownItems={epics.map((epic) => epic.title)} callback={setEpicId} />
          </div>

          {/* AI Chat */}
          {!ticket && (
            <div className="flex flex-col h-full space-y-2 border-t-[0.5px] py-2">
              <div className="text-sm text-center">AI Chat</div>
              <textarea
                className="flex-1 p-2 text-xs outline-none text-black text-right border-[0.5px]"
                style={{
                  backgroundColor: backgroundSecondary,
                  borderColor: textPrimary,
                  color: textPrimary,
                }}
                value={messages.join("\n")}
                readOnly
              />
              <form onSubmit={handleSubmitMessage} className="w-full">
                <input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  className="w-full h-full text-black outline-none text-xs p-2 border-[0.5px]"
                  style={{
                    backgroundColor: backgroundSecondary,
                    borderColor: textPrimary,
                    color: textPrimary,
                  }}
                  placeholder="Start chat"
                ></input>
              </form>
            </div>
          )}
        </div>

        {/* Status changes */}
        {ticket && <TicketStatusPicker callback={setTaskStatus} defaultStatus={taskStatus} />}

        {/* Cancel, update and create buttons */}
        <div className={`flex items-center ${ticket ? "justify-between" : "justify-end"}`}>
          {ticket && (
            <button
              onClick={() => {
                deleteTask(ticket.id);
                onClose();
              }}
              className="text-red-500 p-2 border-[1px] border-red-500 rounded flex items-center space-x-2 text-sm"
            >
              <p>Delete</p>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
          <div className="flex gap-2">
            <button type="button" onClick={onClose} className="p-2 border rounded text-sm">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="p-2 hover:bg-blue-500 bg-black text-white rounded text-sm"
            >
              {ticket ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
