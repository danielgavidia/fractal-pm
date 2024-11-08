import { navigationStore } from "@/stores/navigationStore";
import { NavigationItem } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";

interface FileTabProps {
  navigationItem: NavigationItem;
}

const FileTab = ({ navigationItem }: FileTabProps) => {
  const router = useRouter();
  return <button onClick={() => router.push(navigationItem.route)}>{navigationItem.title}</button>;
};

const FileBar = () => {
  const { navigationItems } = navigationStore();
  return (
    <div>
      {navigationItems.map((navigationItem, key) => (
        <FileTab key={key} navigationItem={navigationItem} />
      ))}
    </div>
  );
};

export default FileBar;
