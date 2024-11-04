"use client";
import { taskStore } from "@/stores/taskStore";

// Components
import TaskRow from "@/components/TaskRow";
import CreateTaskModal from "@/components/CreateTaskModal";

const page = () => {
  const { tasks } = taskStore();

  return (
    <div>
      <CreateTaskModal />
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default page;
