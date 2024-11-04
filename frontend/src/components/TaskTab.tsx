import { Task } from "@/types/types";
import { useState } from "react";
import ModalUpdateTask from "./ModalUpdateTask";
import { truncateText } from "@/utils/truncateText";

interface TaskTabProps {
  task: Task;
}

const TaskTab = ({ task }: TaskTabProps) => {
  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col border-[0.5px] border-gray-500 shadow-md rounded-lg text-xs w-32 h-28 p-2"
      >
        <div className="font-semibold h-10 text-left">{truncateText(task.title, 30)}</div>
        <div className="text-[10px] text-left">{truncateText(task.description, 60)}</div>
      </button>
      {isOpen && <ModalUpdateTask task={task} isOpen={isOpen} onClose={handleClose} />}
    </>
  );
};

export default TaskTab;
