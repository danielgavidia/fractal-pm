import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatusEnums } from "@/types/types";

// Components
import ModalUpdateTask from "./ModalUpdateTask";
import { useState } from "react";
import TaskStatusBadge from "./TaskStatusBadge";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const { updateTaskStatus } = taskStore();

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
      {isOpen && <ModalUpdateTask task={task} isOpen={isOpen} onClose={handleClose} />}
    </>
  );
};

export default TaskRow;
