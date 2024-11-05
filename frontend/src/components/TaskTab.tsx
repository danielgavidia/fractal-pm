import { Task } from "@/types/types";
import { useState } from "react";
import { truncateText } from "@/utils/truncateText";

// Components
import TaskStatusBadge from "@/components/TaskStatusBadge";
import TaskModal from "@/components/TaskModal";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface TaskTabProps {
  task: Task;
}

const TaskTab = ({ task }: TaskTabProps) => {
  const { currentTheme } = themeStore();

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col border-[0.5px] rounded-none text-xs w-36 p-2 text-gray-700"
        style={{
          color: valueToColor(currentTheme.textSecondary),
          borderColor: valueToColor(currentTheme.textPrimary),
        }}
      >
        <div className="font-semibold h-10 text-left">{truncateText(task.title, 30)}</div>
        <div className="text-[10px] text-left h-14">{truncateText(task.description, 60)}</div>
        <TaskStatusBadge status={task.status} />
      </button>
      {isOpen && <TaskModal task={task} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default TaskTab;
