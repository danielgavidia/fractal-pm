import { Ticket, TicketStatus } from "@/types/types";

// Components
import TicketTab from "@/components/TicketTab";
import { statusMapping } from "@/utils/statusMapping";

interface TicketTabColumnProps {
  status: TicketStatus;
  tickets: Ticket[];
}

const TicketTabColumn = ({ status, tickets }: TicketTabColumnProps) => {
  return (
    <div className="flex flex-col items-center h-full overflow-y-scroll p-1">
      <p className="text-sm p-2 text-center w-full font-bold">{statusMapping[status].label}</p>
      <div className="flex flex-col items-center space-y-2">
        {tickets.map((ticket, key) => (
          <TicketTab key={key} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketTabColumn;
