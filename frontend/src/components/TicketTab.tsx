import { Ticket } from "@/types/types";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";
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

  const handleClick = () => {
    if (ticket.ticketType === "epic") {
      router.push(`/epics/${ticket.id}`);
    } else {
      router.push(`/epics/${currentTask?.epicId}/${currentTask?.id}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col space-y-1 border-[0.5px] rounded text-xs min-w-48 max-w-48 p-2 text-gray-700"
      style={{
        color: valueToColor(currentTheme.textSecondary),
        borderColor: valueToColor(currentTheme.textPrimary),
      }}
    >
      <div className="text-[10px] font-semibold text-left h-4">
        {truncateText(ticket.title, 24)}
      </div>
      <div className="text-[10px] text-left h-8">{truncateText(ticket.description, 60)}</div>
      <TicketStatusBadge status={ticket.status} />
    </button>
  );
};

export default TicketTab;
