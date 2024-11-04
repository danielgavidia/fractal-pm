import { TaskStatus } from "@/types/types";
import { statusMapping } from "@/utils/statusMapping";

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
  const { backgroundColor, ballColor, label } = statusMapping[status];
  return (
    <div
      className={"flex items-center rounded-xl p-[0.5px] min-w-24"}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={"p-1 bg-black mx-2 rounded-full"}
        style={{ backgroundColor: ballColor }}
      ></div>
      <p className="text-[10px] ">{label}</p>
    </div>
  );
};

export default TaskStatusBadge;
