import { taskStore } from "@/stores/taskStore";

// Components
import TaskRow from "@/components/TaskRow";

const Backlog = () => {
  const { tasks } = taskStore();

  return (
    <div className="px-4 w-full">
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default Backlog;
