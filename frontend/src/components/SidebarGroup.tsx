"use client";

import { SidebarItem } from "@/types/types";
import { useRouter } from "next/navigation";

interface SidebarGroupProps {
  sidebarItem: SidebarItem;
}

const SidebarGroup = ({ sidebarItem }: SidebarGroupProps) => {
  const router = useRouter();
  const { link, title, children } = sidebarItem;
  return (
    <div>
      <button onClick={() => router.push(link)}>{title}</button>
      {children && (
        <div>
          {children.map((child) => (
            <SidebarGroup sidebarItem={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarGroup;
