import { Ticket } from "@/types/types";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";

interface TaskRowProps {
  ticket: Ticket;
}

const TicketRow = ({ ticket: task }: TaskRowProps) => {
  return (
    <button className="flex border-[0.5px] w-full justify-between items-center p-1">
      <p className="text-xs min-w-28 text-left">{task.title}</p>
      <TicketStatusBadge status={task.status} />
    </button>
  );
};

export default TicketRow;
