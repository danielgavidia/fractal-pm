"use client";
import TaskTab from "@/components/TaskTab";
import { taskStore } from "@/stores/taskStore";

// Components

const page = () => {
  const { tasks } = taskStore();
  return (
    <div>
      {tasks.map((task, key) => (
        <TaskTab key={key} task={task} />
      ))}
    </div>
  );
};

export default page;
