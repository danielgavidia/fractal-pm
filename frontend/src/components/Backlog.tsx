import { taskStore } from "@/stores/taskStore";
import ModalCreateTask from "./ModalCreateTask";
import TaskRow from "./TaskRow";

const Backlog = () => {
  const { tasks } = taskStore();

  return (
    <div className="p-4">
      <ModalCreateTask />
      {tasks.map((task, key) => (
        <TaskRow key={key} task={task} />
      ))}
    </div>
  );
};

export default Backlog;
