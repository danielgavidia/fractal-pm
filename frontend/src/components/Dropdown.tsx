import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";
import React, { useState } from "react";

interface DropdownProps {
  dropdownItems: string[];
  callback?: (value: string) => any;
}

const Dropdown = ({ dropdownItems, callback }: DropdownProps) => {
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dropdownItems[0] || "");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (callback) callback(item);
  };

  return (
    <div className="relative w-full text-xs text-left" style={{ color: backgroundPrimary }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 bg-white border text-left shadow-sm hover:bg-gray-50"
      >
        {selectedItem}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 z-10 mt-1 bg-white border shadow-lg">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
