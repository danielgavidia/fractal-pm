import { Ticket, TicketStatus } from "@/types/types";

// Components
import TicketTab from "@/components/TicketTab";
import { statusMapping } from "@/utils/statusMapping";

interface TicketTabRowProps {
  status: TicketStatus;
  tickets: Ticket[];
}

const TicketTabRow = ({ status, tickets }: TicketTabRowProps) => {
  return (
    <div className="flex flex-col items-center h-full overflow-y-scroll p-1">
      <p className="text-xs py-2 text-left w-full font-bold">{statusMapping[status].label}</p>
      <div className="flex flex-row justify-start space-x-2 w-full">
        {tickets.map((ticket, key) => (
          <TicketTab key={key} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketTabRow;
