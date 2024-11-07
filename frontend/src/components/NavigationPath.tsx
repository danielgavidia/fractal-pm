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
  const router = useRouter();
  return (
    <div onClick={() => router.push(route)} className="flex text-xs p-2 space-x-1 items-center">
      <FontAwesomeIcon icon={iconDefinition} />
      <div>{title}</div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const NavigationPath = () => {
  const { currentNavigationItemArray } = navigationStore();
  const { currentTheme } = themeStore();
  return (
    <div
      className="px-2 shadow-md border-b-[0.5px]"
      style={{
        color: valueToColor(currentTheme.textPrimary),
        backgroundColor: valueToColor(currentTheme.backgroundSecondary),
        borderColor: valueToColor(currentTheme.backgroundPrimary),
      }}
    >
      {currentNavigationItemArray.map((navigationItem, key) => (
        <NavigationPathItem key={key} navigationItem={navigationItem} />
      ))}
    </div>
  );
};

export default NavigationPath;
