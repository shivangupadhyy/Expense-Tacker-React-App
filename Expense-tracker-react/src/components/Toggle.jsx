import React, { useState, useEffect } from "react";
import '../DarkModeToggle.css'; 

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider round"></span>
      </label>
      <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default DarkModeToggle;
