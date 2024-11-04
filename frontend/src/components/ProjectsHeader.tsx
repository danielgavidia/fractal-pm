"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Components
import TaskModal from "./TaskModal";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

const ProjectsHeader = () => {
  const { currentTheme } = themeStore();

  // Local state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="w-full border-b-[0.5px] py-4 font-bold sticky top-0 flex"
        style={{ backgroundColor: valueToColor(currentTheme.backgroundPrimary) }}
      >
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
