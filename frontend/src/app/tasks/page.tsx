"use client";

import TaskRow from "@/components/TaskRow";
import { taskStore } from "@/stores/taskStore";
import React from "react";

const page = () => {
  const { tasks } = taskStore();
  return (
    <div>
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default page;
