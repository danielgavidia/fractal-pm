// Components
import TicketTabColumn from "@/components/TicketTabColumn";

// Types
import { Ticket } from "@/types/types";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

interface KanbanProps {
  tickets: Ticket[];
}

const Kanban = ({ tickets }: KanbanProps) => {
  const ticketsByStatus = getTicketsByStatus(tickets);
  return (
    <div className="flex justify-center">
      {ticketsByStatus.map((tickets, key) => (
        <TicketTabColumn key={key} status={tickets.status} tickets={tickets.tickets} />
      ))}
    </div>
  );
};

export default Kanban;
