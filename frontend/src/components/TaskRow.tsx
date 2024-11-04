import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatusEnums } from "@/types/types";

// Components
import UpdateTaskModal from "./UpdateTaskModal";
import { useState } from "react";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const { deleteTask, updateTaskStatus } = taskStore();
  const statusOptions = Object.values(TaskStatusEnums);

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <div>
        {statusOptions.map((status, key) => (
          <button key={key} onClick={() => updateTaskStatus(task.id, status)}>
            {status}
          </button>
        ))}
      </div>
      <p>Status: {task.status}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => setIsOpen(true)}>Edit</button>
      {isOpen && <UpdateTaskModal task={task} isOpen={isOpen} onClose={handleClose} />}
    </div>
  );
};

export default TaskRow;
