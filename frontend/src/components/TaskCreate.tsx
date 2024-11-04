import { taskStore } from "@/stores/taskStore";
import React, { useState } from "react";

const TaskCreate = () => {
  // Store
  const { createTask } = taskStore();

  // Local state
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle !== "" && taskDescription !== "") {
      createTask({
        title: taskTitle,
        description: taskDescription,
        state: "pending",
      });
      console.log("submit");
      setTaskTitle("");
      setTaskDescription("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="description"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TaskCreate;
