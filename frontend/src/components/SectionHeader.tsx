"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Components
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface SectionHeaderProps {
  title: string;
  callback?: (...args: any[]) => any;
  iconDefinition?: IconDefinition;
  buttonLabel?: string;
}

const SectionHeader = ({ title, callback, iconDefinition, buttonLabel }: SectionHeaderProps) => {
  const { currentTheme } = themeStore();
  const backgroundColor = valueToColor(currentTheme.backgroundPrimary);

  return (
    <>
      <div
        className="w-full border-b-[0.5px] py-4 mb-2 font-bold sticky top-0 flex"
        style={{ backgroundColor: backgroundColor }}
      >
        <p className="flex-1">{title}</p>
        {callback && (
          <button onClick={() => callback()} className="flex items-center space-x-2">
            {buttonLabel && <p className="text-xs font-light">{buttonLabel}</p>}
            {iconDefinition && <FontAwesomeIcon icon={iconDefinition} />}
          </button>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
