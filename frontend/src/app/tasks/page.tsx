"use client";
import { taskStore } from "@/stores/taskStore";

// Components
import TaskRow from "@/components/TaskRow";
import TaskCreate from "@/components/TaskCreate";

const page = () => {
  const { tasks } = taskStore();
  return (
    <div>
      <TaskCreate />
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default page;
