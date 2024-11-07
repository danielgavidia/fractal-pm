import { Ticket } from "@/types/types";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";
import { useRouter } from "next/navigation";
import TicketPriorityBadge from "./TicketPriorityBadge";

interface TaskRowProps {
  ticket: Ticket;
  modality: "primary" | "secondary";
  handleOpen?: () => void;
  epicId?: string;
}

const TicketRow = ({ ticket, modality, handleOpen, epicId }: TaskRowProps) => {
  const router = useRouter();
  if (modality === "primary") {
    return (
      <button
        onClick={handleOpen}
        className="flex w-full justify-between items-center p-1 border-[0.5px] rounded min-w-[700px]"
      >
        <p className="text-xs min-w-28 text-left">{ticket.title}</p>
        <div className="flex space-x-3 items-center">
          <TicketPriorityBadge priority={ticket.priority} />
          <p className="text-[8px] w-20 text-left">Due: {ticket.dueDate.toLocaleDateString()}</p>
          <TicketStatusBadge status={ticket.status} />
        </div>
      </button>
    );
  } else if (modality === "secondary") {
    return (
      <button
        onClick={() => router.push(`epics/${epicId}/${ticket.id}`)}
        className="flex w-full justify-between items-center p-1 pl-4 min-w-[700px]"
      >
        <p className="text-xs min-w-28 text-left opacity-70">{ticket.title}</p>
        <div className="flex space-x-3 items-center">
          <TicketPriorityBadge priority={ticket.priority} />
          <p className="text-[8px] w-20 opacity-50 text-left">
            Due: {ticket.dueDate.toLocaleDateString()}
          </p>
          <TicketStatusBadge status={ticket.status} />
        </div>
      </button>
    );
  }
};

export default TicketRow;
