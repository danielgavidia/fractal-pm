import { Task } from "@/types/types";

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.state}</p>
    </div>
  );
};

export default TaskRow;
