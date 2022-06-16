import "./DarkMode.css";
import React,{useState,useEffect} from "react";
import Toggle from "./Toggle";

// 1
const setDark = () => {
  localStorage.setItem("theme", "dark");
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
const toggleTheme = (value) => {
  if (value == "false") {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () => {
  const [toggled, setToggled] = useState();
  useEffect(()=>{
    localStorage.setItem("icon", 'true');
    setToggled(localStorage.getItem("icon"))
  },[])

  const onClickEvent = () => {
    localStorage.setItem("icon", toggled);
    setToggled((s) => s == 'true'?'false':'true');
    toggleTheme(toggled);
  }

  return (
    <div>
      <Toggle toggled={toggled} onClick={onClickEvent} />
    </div>
  );
};

export default DarkMode;