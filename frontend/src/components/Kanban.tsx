// Components
import TicketTabGroup from "@/components/TicketTabGroup";

// Types
import { Ticket } from "@/types/types";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

interface KanbanProps {
  tickets: Ticket[];
}

const Kanban = ({ tickets }: KanbanProps) => {
  const ticketsByStatus = getTicketsByStatus(tickets);
  return (
    <div className="w-full flex justify-start">
      <div className="flex flex-col justify-center overflow-x-auto no-scrollbar">
        {ticketsByStatus.map((tickets, key) => (
          <TicketTabGroup key={key} status={tickets.status} tickets={tickets.tickets} />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
