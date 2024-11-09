"use client";

import { Ticket } from "@/types/types";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

// Components
import TicketStatusBadge from "@/components/tickets/TicketStatusBadge";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";
import TicketPriorityBadge from "@/components/tickets/TicketPriorityBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "@/utils/iconMapping";

interface TicketTabProps {
  ticket: Ticket;
}

const TicketTab = ({ ticket }: TicketTabProps) => {
  const { currentTheme } = themeStore();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${ticket.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col space-y-1 rounded text-xs min-w-56 max-w-48 p-3 text-gray-700"
      style={{
        color: valueToColor(currentTheme.backgroundPrimary),
        backgroundColor: valueToColor(currentTheme.textPrimary),
      }}
    >
      <div className="text-[10px] font-semibold text-left h-4">
        {truncateText(ticket.title, 24)}
      </div>
      <div className="text-[10px] text-left h-8">{truncateText(ticket.description, 60)}</div>
      <div className="text-[10px] opacity-50 h-4 flex justify-between w-full">
        <p>Due: {ticket.dueDate.toLocaleDateString()}</p>
        <div className="flex items-center space-x-2">
          <p>{ticket.ticketType}</p>
          <FontAwesomeIcon icon={iconMapping[ticket.ticketType]} />
        </div>
      </div>
      <div className="flex space-x-2 h-4">
        <TicketStatusBadge status={ticket.status} />
        <TicketPriorityBadge priority={ticket.priority} />
      </div>
    </button>
  );
};

export default TicketTab;
