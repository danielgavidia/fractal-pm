import { TicketFinal } from "@/types/types";
import SectionHeader from "./SectionHeader";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Kanban from "./Kanban";
import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriorityBadge from "./TicketPriorityBadge";
import { ticketStore } from "@/stores/ticketStore";
import { useState } from "react";
import TicketUpdate from "./TicketUpdate";

interface TicketPageProps {
  ticket: TicketFinal;
}

const TicketPageFinal = ({ ticket }: TicketPageProps) => {
  const { tickets } = ticketStore();
  const ticketChildren: TicketFinal[] | null = ticket.childrenIds
    ? tickets.filter((t) => t.parentId === ticket.id)
    : null;

  const [updateMode, setUpdateMode] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <SectionHeader
          title={""}
          callback={() => setUpdateMode(!updateMode)}
          iconDefinition={faPenToSquare}
          buttonLabel="Edit"
        />

        {updateMode ? (
          <TicketUpdate ticket={ticket} />
        ) : (
          <div>
            {/* Ticket Title */}
            <div>
              <div className="text-xs font-bold">Title</div>
              <div className="text-xs py-1">{ticket.title}</div>
            </div>

            {/* Ticket info (non-description) */}
            <div className="flex w-full space-x-6">
              {/* Due date */}
              <div>
                <div className="text-xs font-bold">Due Date</div>
                <div className="text-xs py-1">{ticket.dueDate.toLocaleDateString()}</div>
              </div>

              {/* Status */}
              <div>
                <div className="text-xs font-bold">Status</div>
                <div className="py-1">
                  <TicketStatusBadge status={ticket.status} />
                </div>
              </div>

              {/* Priority */}
              <div>
                <div className="text-xs font-bold">Priority</div>
                <div className="py-1">
                  <TicketPriorityBadge priority={ticket.priority} />
                </div>
              </div>

              {/* Id */}
              <div>
                <div className="text-xs font-bold">ID</div>
                <div className="italic text-xs py-1">{ticket.id}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="text-xs font-bold">Description</div>
              <div className="text-xs">{ticket.description}</div>
            </div>

            {/* Children */}
            <div>{ticketChildren && <Kanban tickets={ticketChildren} />}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketPageFinal;
