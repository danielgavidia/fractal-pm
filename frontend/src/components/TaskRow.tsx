import { taskStore } from "@/stores/taskStore";
import { Task } from "@/types/types";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const { deleteTask } = taskStore();
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.state}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskRow;
