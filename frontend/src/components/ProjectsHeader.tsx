import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Components
import TaskModal from "./TaskModal";

const ProjectsHeader = () => {
  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full border-b-[0.5px] py-4 font-bold sticky top-0 bg-white flex">
        <p className="flex-1">Projects</p>
        <button onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {isOpen && <TaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ProjectsHeader;
