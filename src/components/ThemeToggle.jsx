import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="cursor-pointer flex items-center space-x-2 px-2">
      <input
        type="checkbox"
        className="toggle toggle-neutral-content"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span className="text-sm">{theme === "light" ? "☀️" : "🌙"}</span>
    </label>
  );
};

export default ThemeToggle;