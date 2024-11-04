import { Task } from "@/types/types";
import { useState } from "react";
import ModalUpdateTask from "./ModalUpdateTask";

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
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <button onClick={() => setIsOpen(true)}>Edit</button>
      {isOpen && <ModalUpdateTask task={task} isOpen={isOpen} onClose={handleClose} />}
    </div>
  );
};

export default TaskTab;
