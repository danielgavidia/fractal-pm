import { Ticket } from "@/types/types";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";
import { useRouter } from "next/navigation";

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
        className="flex w-full justify-between items-center p-1 border-[0.5px] rounded"
      >
        <p className="text-xs min-w-28 text-left">{ticket.title}</p>
        <div className="flex space-x-2 items-center">
          <p className="text-[8px]">Due: {ticket.dueDate.toLocaleDateString()}</p>
          <TicketStatusBadge status={ticket.status} />
        </div>
      </button>
    );
  } else if (modality === "secondary") {
    return (
      <button
        onClick={() => router.push(`epics/${epicId}/${ticket.id}`)}
        className="flex w-full justify-between items-center p-1 pl-4"
      >
        <p className="text-xs min-w-28 text-left opacity-70">{ticket.title}</p>
        <div className="flex space-x-2 items-center">
          <p className="text-[8px] opacity-50">{ticket.dueDate.toLocaleDateString()}</p>
          <TicketStatusBadge status={ticket.status} />
        </div>
      </button>
    );
  }
};

export default TicketRow;
