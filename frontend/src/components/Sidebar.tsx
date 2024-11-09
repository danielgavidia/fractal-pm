"use client";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons";

// Components
import SidebarGroup from "@/components/SidebarGroup";

// Stores
import { themeStore } from "@/stores/themeStore";

// Types
import { NavigationItem } from "@/types/types";

// Hooks
import { useResizable } from "@/hooks/useResizable";

// Utilities
import { valueToColor } from "@/utils/valueToColor";
import DarkModeToggle from "./DarkModeToggle";
import { getSidebarTicket } from "@/utils/getSidebarTicket";
import { ticketStore } from "@/stores/ticketStore";

const Sidebar = () => {
  // Stores
  const { currentTheme } = themeStore();
  const { tickets } = ticketStore();
  const projectTickets = tickets.filter((t) => t.ticketType === "project");

  // Sidebar items
  const sidebarProjects: NavigationItem = {
    title: "Projects",
    route: "/projects",
    iconDefinition: faAtom,
    children: projectTickets.map((t) => getSidebarTicket(t, true)),
  };

  const sidebarThemes: NavigationItem = {
    title: "Themes",
    route: "/themes",
    iconDefinition: faPaintBrush,
  };

  // Resizing hook
  const { resizableProps, resizerProps } = useResizable({
    minWidth: 200,
    defaultWidth: 300,
    position: "left",
  });

  return (
    <nav
      {...resizableProps}
      className={`flex flex-col border-r-[0.5px] p-4 space-y-2 h-screen sticky top-0 left-0 ${resizableProps.className}`}
      style={{
        ...resizableProps.style,
        backgroundColor: valueToColor(currentTheme.backgroundPrimary),
        borderColor: valueToColor(currentTheme.textPrimary),
        color: valueToColor(currentTheme.textPrimary),
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="flex-1 flex">
          <div className="w-10 h-10 pr-2 flex">
            <FontAwesomeIcon icon={faJira} className="w-full h-full" />
          </div>
          <div>
            <div className="text-sm font-bold">Gavidia</div>
            <div className="text-xs">Enterprise</div>
          </div>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>

      {/* Sidebar groups */}
      <SidebarGroup sidebarItem={sidebarProjects} />
      <SidebarGroup sidebarItem={sidebarThemes} />

      {/* Resizer handle */}
      <div {...resizerProps} />
    </nav>
  );
};

export default Sidebar;
