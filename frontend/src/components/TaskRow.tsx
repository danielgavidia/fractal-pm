import { useState } from "react";
import { Task } from "@/types/types";

// Components
import TaskStatusBadge from "@/components/TaskStatusBadge";
import TaskModal from "@/components/TaskModal";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex border-[0.5px] w-full justify-between items-center p-1"
      >
        <p className="text-xs min-w-28 text-left">{task.title}</p>
        <TaskStatusBadge status={task.status} />
      </button>
      {isOpen && <TaskModal task={task} isOpen={isOpen} onClose={handleClose} />}
    </>
  );
};

export default TaskRow;
