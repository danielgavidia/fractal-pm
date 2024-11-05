"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

const Sidebar = () => {
  const { currentTheme } = themeStore();

  return (
    <nav
      className="flex flex-col p-4 min-w-36 bg-gray-100 space-y-2 h-screen sticky top-0"
      style={{
        backgroundColor: valueToColor(currentTheme.backgroundSecondary),
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

      {/* Links */}
      <div className="text-xs" style={{ color: valueToColor(currentTheme.textSecondary) }}>
        Platform
      </div>
      <Link href="/backlog" className="text-sm">
        Backlog
      </Link>
      <Link href="/kanban" className="text-sm">
        Kanban
      </Link>
      <Link href="/epics" className="text-sm">
        Epics
      </Link>
      <Link href="/themes" className="text-sm">
        Themes
      </Link>
    </nav>
  );
};

export default Sidebar;
