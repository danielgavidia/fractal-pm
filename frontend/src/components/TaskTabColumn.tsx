import { Task, TaskStatus } from "@/types/types";

// Components
import TaskTab from "./TaskTab";

interface TaskTabColumnProps {
  status: TaskStatus;
  tasks: Task[];
}

const TaskTabColumn = ({ status, tasks }: TaskTabColumnProps) => {
  return (
    <div>
      <p>{status}</p>
      <div>
        {tasks.map((task, key) => (
          <TaskTab key={key} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskTabColumn;
