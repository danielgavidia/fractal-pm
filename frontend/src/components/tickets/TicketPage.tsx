// Imports
import { Ticket } from "@/types/types";
import SectionHeader from "@/components/general/SectionHeader";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Kanban from "@/components/tickets/Kanban";
import TicketStatusBadge from "@/components/tickets/TicketStatusBadge";
import TicketPriorityBadge from "@/components/tickets/TicketPriorityBadge";
import { ticketStore } from "@/stores/ticketStore";
import { useState } from "react";
import TicketUpdate from "@/components/tickets/TicketUpdate";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMapping } from "@/utils/iconMapping";

interface TicketPageProps {
  ticket: Ticket;
}

const TicketPage = ({ ticket }: TicketPageProps) => {
  const { tickets } = ticketStore();
  const router = useRouter();
  const ticketChildren: Ticket[] | null = ticket.childrenIds
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
          <div className="space-y-2">
            {/* Ticket Title */}
            <div className="flex w-full space-x-6">
              <div>
                <div className="text-xs font-bold">Title</div>
                <div className="text-xs py-1">{ticket.title}</div>
              </div>
              {/* Id */}
              <div>
                <div className="text-xs font-bold">ID</div>
                <div className="italic text-xs py-1">{ticket.id}</div>
              </div>
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

              {/* Type */}
              <div>
                <div className="text-xs font-bold">Type</div>
                <div className="py-1 flex space-x-2 text-xs items-center">
                  <FontAwesomeIcon icon={iconMapping[ticket.ticketType]} />
                  <p>{ticket.ticketType}</p>
                </div>
              </div>

              {/* Parent */}
              {ticket.parentId && (
                <div>
                  <div className="text-xs font-bold">Parent</div>
                  <button
                    onClick={() => router.push(`/projects/${ticket.parentId}`)}
                    className="text-xs py-1 hover:underline"
                  >
                    {tickets.find((t) => t.id === ticket.parentId)?.title}
                  </button>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <div className="text-xs font-bold">Description</div>
              <div className="text-xs py-1">{ticket.description}</div>
            </div>

            {/* Children */}
            <div>
              {ticketChildren && (
                <div>
                  <div className="text-xs font-bold">Children</div>
                  <Kanban tickets={ticketChildren} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketPage;
