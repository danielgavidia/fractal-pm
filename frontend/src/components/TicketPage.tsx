import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { Ticket } from "@/types/types";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/navigation";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import Kanban from "./Kanban";

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
        <div>
          <div className="text-xs font-bold">ID</div>
          <div className="italic text-xs">{ticket.id}</div>
        </div>
        {currentTask && (
          <div>
            <div className="text-xs font-bold">Epic ID</div>
            <button
              onClick={() => router.push(`/epics/${currentTask.epicId}`)}
              className="italic text-xs"
            >
              {currentTask.epicId}
            </button>
          </div>
        )}
        <div>
          <div className="text-xs font-bold">Description</div>
          <div className="text-xs">{ticket.description}</div>
        </div>
        <div>
          <div className="text-xs font-bold">Due Date</div>
          <div className="text-xs">{ticket.dueDate.toLocaleDateString()}</div>
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
