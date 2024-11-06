"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";
import { useResizable } from "@/hooks/useResizable";

const Sidebar = () => {
  const { currentTheme } = themeStore();
  const { resizableProps, resizerProps } = useResizable({
    minWidth: 200,
    defaultWidth: 200,
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

      {/* Links */}
      <Link href="/epics" className="text-sm">
        Epics
      </Link>
      <Link href="/themes" className="text-sm">
        Themes
      </Link>

      {/* Resizer handle */}
      <div {...resizerProps} />
    </nav>
  );
};

export default Sidebar;
