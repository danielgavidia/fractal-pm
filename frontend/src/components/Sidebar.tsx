"use client";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPaintBrush, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons";

// Components
import SidebarGroup from "@/components/SidebarGroup";

// Stores
import { epicStore } from "@/stores/epicStore";
import { taskStore } from "@/stores/taskStore";
import { themeStore } from "@/stores/themeStore";

// Types
import { SidebarItem } from "@/types/types";

// Hooks
import { useResizable } from "@/hooks/useResizable";

// Utilities
import { valueToColor } from "@/utils/valueToColor";

const Sidebar = () => {
  // Stores
  const { currentTheme } = themeStore();
  const { epics } = epicStore();
  const { tasks } = taskStore();

  // Sidebar items
  const sidebarEpics: SidebarItem = {
    title: "Epics",
    link: "/epics",
    iconDefinition: faTrophy,
    children: epics.map((epic) => ({
      title: epic.title,
      link: `/epics/${epic.id}`,
      iconDefinition: faTrophy,
      children: tasks
        .filter((task) => task.epicId === epic.id)
        .map((task) => ({
          title: task.title,
          link: `/epics/${epic.id}/${task.id}`,
          iconDefinition: faCircleCheck,
        })),
    })),
  };

  const sidebarThemes: SidebarItem = {
    title: "Themes",
    link: "/themes",
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
      className={`flex flex-col p-4 bg-gray-100 space-y-2 h-screen sticky top-0 left-0 ${resizableProps.className}`}
      style={{
        ...resizableProps.style,
        backgroundColor: valueToColor(currentTheme.backgroundPrimary),
        color: valueToColor(currentTheme.textPrimary),
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 pr-2 flex">
          <FontAwesomeIcon icon={faJira} className="w-full h-full" />
        </div>
        <div>
          <div className="text-sm font-bold">Gavidia</div>
          <div className="text-xs">Enterprise</div>
        </div>
      </div>

      {/* Sidebar groups */}
      <SidebarGroup sidebarItem={sidebarEpics} />
      <SidebarGroup sidebarItem={sidebarThemes} />

      {/* Resizer handle */}
      <div {...resizerProps} />
    </nav>
  );
};

export default Sidebar;
