"use client";
import TaskTab from "@/components/TaskTab";
import TaskTabColumn from "@/components/TaskTabColumn";
import { taskStore } from "@/stores/taskStore";
import { TaskStatus } from "@/types/types";
import { getTasksByStatus } from "@/utils/getTasksByStatus";

// Components

const page = () => {
  const { tasks } = taskStore();
  const tasksByStatus = getTasksByStatus(tasks);

  return (
    <div className="flex">
      {tasksByStatus.map((tasks, key) => (
        <TaskTabColumn key={key} status={tasks.status} tasks={tasks.tasks} />
      ))}
    </div>
  );
};

export default page;
