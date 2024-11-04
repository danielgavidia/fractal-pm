import { taskStore } from "@/stores/taskStore";

// Components
import ProjectsHeader from "./ProjectsHeader";
import TaskRow from "./TaskRow";

const Backlog = () => {
  const { tasks } = taskStore();

  return (
    <div className="px-4 w-full">
      <ProjectsHeader />
      <div className="py-2">
        {tasks.map((task, key) => (
          <TaskRow key={key} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Backlog;
