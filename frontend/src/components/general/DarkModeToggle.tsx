import React, { useState } from "react";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

const DarkModeToggle = () => {
  const { themes, currentTheme, setCurrentTheme } = themeStore();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode) {
      setCurrentTheme(themes[1]);
      setIsDarkMode(false);
    } else {
      setCurrentTheme(themes[0]);
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="toggle-container border-[0.5px] flex items-center w-8 rounded-2xl"
      style={{
        backgroundColor: valueToColor(currentTheme.backgroundPrimary),
        borderColor: valueToColor(currentTheme.textPrimary),
      }}
    >
      <div
        style={{
          backgroundColor: valueToColor(currentTheme.textPrimary),
          transform: isDarkMode ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
        className="p-2 rounded-full"
      ></div>
    </button>
  );
};

export default DarkModeToggle;
