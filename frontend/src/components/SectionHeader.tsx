"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Components
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface SectionHeaderProps {
  title: string;
  callback?: (...args: any[]) => any;
}

const SectionHeader = ({ title, callback }: SectionHeaderProps) => {
  const { currentTheme } = themeStore();
  const backgroundColor = valueToColor(currentTheme.backgroundPrimary);

  return (
    <>
      <div
        className="w-full border-b-[0.5px] py-4 font-bold sticky top-0 flex"
        style={{ backgroundColor: backgroundColor }}
      >
        <p className="flex-1">{title}</p>
        {callback && (
          <button onClick={() => callback()}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
