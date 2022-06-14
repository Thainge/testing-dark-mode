import "./DarkMode.css";
import React, { ChangeEventHandler } from "react";
import Toggle from "./Toggle";

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
      setToggled((s) => !s);
  };

  return (
    <div>
      <Toggle toggled={toggled} onClick={handleClick}/>
        <input 
        type="checkbox"
          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
    </div>
  );
};

export default DarkMode;