"use client";
import TaskTabColumn from "@/components/TaskTabColumn";
import { taskStore } from "@/stores/taskStore";
import { getTasksByStatus } from "@/utils/getTasksByStatus";

// Components

const page = () => {
  const { tasks } = taskStore();
  const tasksByStatus = getTasksByStatus(tasks);

  return (
    <div className="px-4 w-full">
      <div className="w-full border-b-[0.5px] py-4 font-bold sticky top-0 bg-white">Projects</div>
      <div className="flex justify-center">
        {tasksByStatus.map((tasks, key) => (
          <TaskTabColumn key={key} status={tasks.status} tasks={tasks.tasks} />
        ))}
      </div>
    </div>
  );
};

export default page;
