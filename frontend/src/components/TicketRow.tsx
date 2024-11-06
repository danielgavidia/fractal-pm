import { Ticket } from "@/types/types";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";

interface TaskRowProps {
  ticket: Ticket;
  modality: "primary" | "secondary";
  handleOpen?: () => void;
}

const TicketRow = ({ ticket, modality, handleOpen }: TaskRowProps) => {
  if (modality === "primary") {
    return (
      <button
        onClick={handleOpen}
        className="flex w-full justify-between items-center p-1 border-[0.5px]"
      >
        <p className="text-xs min-w-28 text-left">{ticket.title}</p>
        <TicketStatusBadge status={ticket.status} />
      </button>
    );
  } else if (modality === "secondary") {
    return (
      <button className="flex w-full justify-between items-center p-1 pl-4">
        <p className="text-xs min-w-28 text-left">{ticket.title}</p>
        <TicketStatusBadge status={ticket.status} />
      </button>
    );
  }
};

export default TicketRow;
