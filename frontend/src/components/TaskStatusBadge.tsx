"use client";

import { themeStore } from "@/stores/themeStore";
import { TaskStatus } from "@/types/types";
import { statusMapping } from "@/utils/statusMapping";
import { valueToColor } from "@/utils/valueToColor";

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
  const { backgroundColor, ballColor, label } = statusMapping[status];
  const { currentTheme } = themeStore();
  return (
    <div
      className={"flex items-center rounded-xl p-[0.5px] min-w-24"}
      style={{
        backgroundColor: backgroundColor,
        color: valueToColor(currentTheme.backgroundSecondary),
      }}
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
