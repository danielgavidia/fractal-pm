// Components
import TicketTabColumn from "@/components/TicketTabColumn";
import ProjectsHeader from "@/components/ProjectsHeader";

// Types
import { Ticket, TicketStatus } from "@/types/types";

interface KanbanProps {
  ticketsByStatus: { status: TicketStatus; tickets: Ticket[] }[];
}

const Kanban = ({ ticketsByStatus }: KanbanProps) => {
  return (
    <div className="px-4 w-full">
      <ProjectsHeader />
      <div className="flex justify-center">
        {ticketsByStatus.map((tickets, key) => (
          <TicketTabColumn key={key} status={tickets.status} tickets={tickets.tickets} />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
