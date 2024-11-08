import React, { useState } from "react";
import "../styles/DarkModeToggle.css";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="toggle-container"
      style={{ background: isDarkMode ? "#333" : "#FFF", color: isDarkMode ? "#FFF" : "#000" }}
    >
      <button className={`toggle-button ${isDarkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
        <div className="p-4"></div>
      </button>
    </div>
  );
};

export default DarkModeToggle;
