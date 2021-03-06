import React from "react";
import "./DarkMode.css";

export default function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={(toggled) == "true" ? "toggle night" : "toggle"}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
}