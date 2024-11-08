import { navigationStore } from "@/stores/navigationStore";
import { themeStore } from "@/stores/themeStore";
import { NavigationItem } from "@/types/types";
import { valueToColor } from "@/utils/valueToColor";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

interface FileTabProps {
  navigationItem: NavigationItem;
}

const FileTab = ({ navigationItem }: FileTabProps) => {
  const router = useRouter();
  const { currentNavigationItem, navigationItems, setCurrentNavigationItem, deleteNavigationItem } =
    navigationStore();
  const border = currentNavigationItem === navigationItem ? "border-b-[0.5px]" : "";
  const handleClick = () => {
    router.push(navigationItem.route);
    setCurrentNavigationItem(navigationItem);
  };
  const handleClose = () => {
    deleteNavigationItem(navigationItem);
    const updatedItems = navigationItems.filter((item) => item !== navigationItem);
    if (updatedItems.length > 0) {
      const nextItem = updatedItems[updatedItems.length - 1];
      setCurrentNavigationItem(nextItem);
      router.push(nextItem.route);
    }
  };
  return (
    <div
      className={`opacity-75 flex-shrink-0 shadow-sm p-1 px-3 text-center flex space-x-1 items-center ${border}`}
    >
      <button onClick={handleClick} className="flex space-x-1">
        <div>
          <FontAwesomeIcon icon={navigationItem.iconDefinition} />
        </div>
        <p>{navigationItem.title}</p>
      </button>
      <button onClick={handleClose} className="flex items-center justify-center h-full">
        <FontAwesomeIcon icon={faXmark} className="w-2" />
      </button>
    </div>
  );
};

const FileBar = () => {
  const { navigationItems } = navigationStore();
  const { currentTheme } = themeStore();
  return (
    <div
      className="text-[10px] py-1 flex justify-start overflow-x-auto no-scrollbar"
      style={{
        backgroundColor: valueToColor(currentTheme.backgroundSecondary),
        color: valueToColor(currentTheme.textPrimary),
      }}
    >
      {navigationItems.map((navigationItem, key) => (
        <FileTab key={key} navigationItem={navigationItem} />
      ))}
    </div>
  );
};

export default FileBar;
