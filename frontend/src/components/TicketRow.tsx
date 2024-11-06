// import { useState } from "react";
import { Ticket } from "@/types/types";

// Components
import TicketStatusBadge from "@/components/TicketStatusBadge";
// import TaskModal from "@/components/TaskModal";

interface TaskRowProps {
  ticket: Ticket;
}

const TicketRow = ({ ticket: task }: TaskRowProps) => {
  // Local state
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <button
        // onClick={() => setIsOpen(true)}
        className="flex border-[0.5px] w-full justify-between items-center p-1"
      >
        <p className="text-xs min-w-28 text-left">{task.title}</p>
        <TicketStatusBadge status={task.status} />
      </button>
      {/* {isOpen && <TaskModal ticket={task} isOpen={isOpen} onClose={handleClose} />} */}
    </>
  );
};

export default TicketRow;
