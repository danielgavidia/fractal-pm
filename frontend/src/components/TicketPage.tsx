import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { Ticket } from "@/types/types";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/navigation";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import Kanban from "./Kanban";
import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriorityBadge from "./TicketPriorityBadge";

interface TicketPageProps {
  ticket: Ticket;
}

const TicketPage = ({ ticket }: TicketPageProps) => {
  // Router
  const router = useRouter();

  // Stores
  const { tasks } = taskStore();
  const { epics } = epicStore();

  const currentTask = tasks.find((task) => task.id === ticket.id);
  const currentEpic = epics.find((epic) => epic.id === ticket.id);

  // Current tasks
  const currentTasks = currentEpic
    ? tasks.filter((task) => currentEpic.taskIds.includes(task.id))
    : [];

  // Conditionals
  if (ticket.ticketType === "epic" && !currentEpic) {
    return;
  } else if (ticket.ticketType === "task" && !currentTask) {
    return;
  }

  // Routes
  const getRoute = (): string => {
    if (ticket.ticketType === "epic" && currentEpic) {
      return `/epics/update/${currentEpic.id}`;
    } else if (ticket.ticketType === "task" && currentTask) {
      return `/epics/update/${currentTask.epicId}/${currentTask.id}`;
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <SectionHeader
          title={`${ticket.ticketType.charAt(0).toUpperCase() + ticket.ticketType.slice(1)}: ${
            ticket.title
          }`}
          callback={() => router.push(getRoute())}
          iconDefinition={faPenToSquare}
          buttonLabel="Edit"
        />

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

          {/* Tasks (for epics) */}
          {currentTask && (
            <div>
              <div className="text-xs font-bold">Epic</div>
              <div
                onClick={() => router.push(`/epics/${currentTask.epicId}`)}
                className="italic text-xs cursor-pointer py-1 hover:underline"
              >
                {epics.find((epic) => epic.id === currentTask.epicId)?.title}
              </div>
            </div>
          )}

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
      </div>
      <div>
        {ticket.ticketType === "epic" && currentEpic ? (
          <>
            <SectionHeader
              title="Tasks"
              callback={() => router.push(`/epics/new/${currentEpic.id}`)}
              iconDefinition={faPlus}
              buttonLabel="New"
            />
            <Kanban tickets={currentTasks} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TicketPage;
