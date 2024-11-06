// Components
import TicketTabRow from "@/components/TicketTabRow";

// Types
import { Ticket } from "@/types/types";
import { getTicketsByStatus } from "@/utils/getTicketsByStatus";

interface KanbanProps {
  tickets: Ticket[];
}

const Kanban = ({ tickets }: KanbanProps) => {
  const ticketsByStatus = getTicketsByStatus(tickets);
  return (
    <div className="flex flex-col justify-start overflow-x-auto max-w-96">
      {ticketsByStatus.map((tickets, key) => (
        <TicketTabRow key={key} status={tickets.status} tickets={tickets.tickets} />
      ))}
    </div>
  );
};

export default Kanban;
