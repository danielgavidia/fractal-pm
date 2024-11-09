"use client";

import { navigationStore } from "@/stores/navigationStore";
import { themeStore } from "@/stores/themeStore";
import { NavigationItem } from "@/types/types";
import { valueToColor } from "@/utils/valueToColor";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

interface NavigationPathItem {
  navigationItem: NavigationItem;
}

const NavigationPathItem = ({ navigationItem }: NavigationPathItem) => {
  const { title, iconDefinition, route } = navigationItem;
  const { setCurrentNavigationItem } = navigationStore();
  const router = useRouter();
  const handleClick = () => {
    router.push(route);
    setCurrentNavigationItem(navigationItem);
  };
  return (
    <button onClick={handleClick} className="flex py-1 space-x-1 items-center opacity-50">
      <FontAwesomeIcon icon={iconDefinition} />
      <div className="hover:underline">{title}</div>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

interface NavigationPathProps {
  navigationItem: NavigationItem;
}

const NavigationPath = ({ navigationItem }: NavigationPathProps) => {
  const { currentTheme } = themeStore();
  return (
    <div
      className="pr-2 flex justify-start text-[9px]"
      style={{
        color: valueToColor(currentTheme.textPrimary),
        backgroundColor: valueToColor(currentTheme.backgroundSecondary),
        borderColor: valueToColor(currentTheme.backgroundPrimary),
      }}
    >
      {navigationItem.parent && <NavigationPath navigationItem={navigationItem.parent} />}
      <NavigationPathItem navigationItem={navigationItem} />
    </div>
  );
};

export default NavigationPath;
