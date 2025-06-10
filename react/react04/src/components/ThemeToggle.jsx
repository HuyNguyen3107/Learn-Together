import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
    >
      {isDark ? "☀️" : "🌙"}
      <span className="toggle-text">
        {isDark ? "Chế độ sáng" : "Chế độ tối"}
      </span>
    </button>
  );
};

export default ThemeToggle;
