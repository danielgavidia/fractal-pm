"use client";

import { navigationStore } from "@/stores/navigationStore";
import { NavigationItem } from "@/types/types";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarGroupProps {
  sidebarItem: NavigationItem;
}

const SidebarGroup = ({ sidebarItem }: SidebarGroupProps) => {
  const router = useRouter();
  const { route, title, children, iconDefinition } = sidebarItem;
  const { setCurrentNavigationItem, addNavigationItem } = navigationStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push(route);
    setCurrentNavigationItem(sidebarItem);
    addNavigationItem(sidebarItem);
    if (children) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flex flex-col justify-start text-[10px] w-full text-left opacity-75 space-y-1">
      <button onClick={handleClick} className="flex space-x-1 items-center">
        {children && (
          <div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            />
          </div>
        )}
        <div>
          <FontAwesomeIcon icon={iconDefinition} />
        </div>
        <div className="text-left hover:underline">{title}</div>
      </button>

      {isOpen && children && (
        <div className="flex flex-col pl-4 border-l-[0.5px] space-y-1">
          {children.map((child, key) => (
            <SidebarGroup key={key} sidebarItem={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarGroup;
