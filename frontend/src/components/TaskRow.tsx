import { taskStore } from "@/stores/taskStore";
import { Task, TaskStatusEnums } from "@/types/types";
import { TaskStatus } from "@/types/types";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const { deleteTask, updateTaskStatus } = taskStore();

  const statusOptions = Object.values(TaskStatusEnums);

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
    </div>
  );
};

export default TaskRow;
