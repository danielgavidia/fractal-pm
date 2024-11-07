import { Ticket, TicketStatus } from "@/types/types";

// Components
import TicketTab from "@/components/TicketTab";
import { statusMapping } from "@/utils/statusMapping";

interface TicketTabGroupProps {
  status: TicketStatus;
  tickets: Ticket[];
}

const TicketTabGroup = ({ status, tickets }: TicketTabGroupProps) => {
  console.log(status);
  return (
    <div className="flex flex-col items-center p-1 min-w-48">
      <p className="text-[10px] py-1 text-left w-full font-bold">{statusMapping[status].label}</p>
      <div className="flex space-x-2 w-full">
        {tickets.map((ticket, key) => (
          <TicketTab key={key} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketTabGroup;
