import { taskStore } from "@/stores/taskStore";
import { getTasksByStatus } from "@/utils/getTasksByStatus";

// Components
import TaskTabColumn from "@/components/TaskTabColumn";
import ProjectsHeader from "@/components/ProjectsHeader";

const Kanban = () => {
  const { tasks } = taskStore();
  const tasksByStatus = getTasksByStatus(tasks);

  return (
    <div className="px-4 w-full">
      <ProjectsHeader />
      <div className="flex justify-center">
        {tasksByStatus.map((tasks, key) => (
          <TaskTabColumn key={key} status={tasks.status} tasks={tasks.tasks} />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
