import React, { useState } from "react";

interface DropdownProps {
  dropdownItems: string[];
  callback?: (...args: any[]) => any;
}

const Dropdown = ({ dropdownItems, callback }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dropdownItems[0] || "");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (callback) callback(item);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
      >
        {selectedItem}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
