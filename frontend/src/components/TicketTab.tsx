import { Ticket } from "@/types/types";
import { useState } from "react";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";
import TaskModal from "@/components/TaskModal";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";
import { taskStore } from "@/stores/taskStore";

interface TicketTabProps {
  ticket: Ticket;
}

const TicketTab = ({ ticket }: TicketTabProps) => {
  const { currentTheme } = themeStore();
  const { tasks } = taskStore();
  const router = useRouter();
  const currentTask = tasks.find((task) => task.id === ticket.id);

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (ticket.ticketType === "epic") {
      router.push(`/epics/${ticket.id}`);
    } else {
      router.push(`/epics/${currentTask?.epicId}/${currentTask?.id}`);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col border-[0.5px] rounded text-xs w-36 p-2 text-gray-700"
        style={{
          color: valueToColor(currentTheme.textSecondary),
          borderColor: valueToColor(currentTheme.textPrimary),
        }}
      >
        <div className="font-semibold h-10 text-left">{truncateText(ticket.title, 30)}</div>
        <div className="text-[10px] text-left h-14">{truncateText(ticket.description, 60)}</div>
        <TicketStatusBadge status={ticket.status} />
      </button>
      {isOpen && (
        <TaskModal ticket={currentTask} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default TicketTab;
