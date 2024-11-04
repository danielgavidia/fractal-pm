import { TaskStatus } from "@/types/types";
import { TaskStatusEnums } from "@/types/types";

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

const statusMapping = {
  [TaskStatusEnums.ARCHIVED]: {
    backgroundColor: "bg-gray-100",
    ballColor: "bg-gray-500",
    label: "Archived",
  },
  [TaskStatusEnums.COMPLETED]: {
    backgroundColor: "bg-green-100",
    ballColor: "bg-green-500",
    label: "Completed",
  },
  [TaskStatusEnums.IN_PROGRESS]: {
    backgroundColor: "bg-blue-100",
    ballColor: "bg-blue-500",
    label: "In Progress",
  },
  [TaskStatusEnums.PENDING]: {
    backgroundColor: "bg-yellow-100",
    ballColor: "bg-yellow-500",
    label: "Not Started",
  },
};

const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
  const { backgroundColor, ballColor, label } = statusMapping[status];
  return (
    <div className={"flex items-center rounded-xl p-[0.5px] min-w-24 " + backgroundColor}>
      <div className={"p-1 bg-black mx-2 rounded-full " + ballColor}></div>
      <p className="text-[10px] ">{label}</p>
    </div>
  );
};

export default TaskStatusBadge;
