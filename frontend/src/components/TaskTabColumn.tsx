import { Task, TaskStatus } from "@/types/types";

// Components
import TaskTab from "./TaskTab";
import { statusMapping } from "@/utils/statusMapping";

interface TaskTabColumnProps {
  status: TaskStatus;
  tasks: Task[];
}

const TaskTabColumn = ({ status, tasks }: TaskTabColumnProps) => {
  return (
    <div className="flex flex-col items-center h-full overflow-y-scroll p-1">
      <p className="text-sm p-2 text-left w-full font-bold">{statusMapping[status].label}</p>
      <div className="flex flex-col items-center space-y-2">
        {tasks.map((task, key) => (
          <TaskTab key={key} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskTabColumn;
