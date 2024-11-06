import TicketRow from "@/components/TicketRow";
import { Ticket } from "@/types/types";

interface BacklogProps {
  tickets: Ticket[];
}

const Backlog = ({ tickets }: BacklogProps) => {
  return (
    <div className="w-full">
      {tickets.map((ticket, key) => (
        <TicketRow key={key} ticket={ticket} />
      ))}
    </div>
  );
};

export default Backlog;
