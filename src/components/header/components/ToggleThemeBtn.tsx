import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../themeContext/ThemeContext";

export const ToggleThemeBtn: React.FC = () => {
    const {isBrightMode, toggleTheme} = useThemeContext();

    useEffect(() => {
        window.localStorage.setItem("themeMode", JSON.stringify(isBrightMode))
    }, [isBrightMode])
    
    return (
        <div className="toggleContainer">
            <label className={`toggleLabel ${isBrightMode ? "" : "darkMode"}`}>
                <input className="toggleCheckbox" id="toggleTheme" name="toggleTheme" type="checkbox" checked={isBrightMode} onChange={toggleTheme} />
                <div className={`toggleCircle ${isBrightMode ? "" : "darkMode"}`} style={{transform: isBrightMode ? "translateX(0px)" : "translateX(19px)"}}></div>
            </label>
        </div>
    )
}
