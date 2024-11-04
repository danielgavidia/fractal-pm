"use client";
import { taskStore } from "@/stores/taskStore";

// Components
import TaskRow from "@/components/TaskRow";
import ModalCreateTask from "@/components/ModalCreateTask";

const page = () => {
  const { tasks } = taskStore();

  return (
    <div>
      <ModalCreateTask />
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default page;
