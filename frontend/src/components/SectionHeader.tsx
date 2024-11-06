"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "@/types/types";
import NavigationBar from "./NavigationBar";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface SectionHeaderProps {
  title: string;
  callback?: (...args: any[]) => any;
  iconDefinition?: IconDefinition;
  buttonLabel?: string;
  navigationItems?: NavigationItem[];
}

const SectionHeader = ({
  title,
  callback,
  iconDefinition,
  buttonLabel,
  navigationItems,
}: SectionHeaderProps) => {
  const { currentTheme } = themeStore();
  const backgroundSecondary = valueToColor(currentTheme.backgroundSecondary);
  return (
    <div
      className="w-full border-b-[0.5px] pt-4 pb-2 mb-2 flex flex-col space-y-1"
      style={{ backgroundColor: backgroundSecondary }}
    >
      <div className="flex">
        <p className="flex-1">{title}</p>
        {callback && (
          <button onClick={() => callback()} className="flex items-center space-x-2">
            {buttonLabel && <p className="text-xs font-light">{buttonLabel}</p>}
            {iconDefinition && <FontAwesomeIcon icon={iconDefinition} />}
          </button>
        )}
      </div>
      <div>{navigationItems && <NavigationBar navigationItems={navigationItems} />}</div>
    </div>
  );
};

export default SectionHeader;
