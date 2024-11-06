"use client";

import SectionHeader from "@/components/SectionHeader";
import { NavigationItem } from "@/types/types";
import { faPlus, faTable, faTimeline } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigationItems: NavigationItem[] = [
    {
      title: "New",
      iconDefinition: faPlus,
      route: "/epics/new",
    },
    {
      title: "Backlog",
      iconDefinition: faTable,
      route: "/epics",
    },
    {
      title: "Kanban",
      iconDefinition: faTimeline,
      route: "/epics/kanban",
    },
  ];
  return (
    <div className="px-4">
      <SectionHeader title="Projects" navigationItems={navigationItems} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
