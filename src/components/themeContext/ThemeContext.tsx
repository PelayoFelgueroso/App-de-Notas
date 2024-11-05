import React, { createContext, useContext, useState } from "react";
import { ThemeContextType } from "./theme.types";


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isBrightMode, setIsBrightMode] = useState<boolean>(() => {
        const themeFromStorage = window.localStorage.getItem("themeMode")
        return themeFromStorage ? JSON.parse(themeFromStorage) : true;
    });

    const toggleTheme = () => {
        setIsBrightMode(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isBrightMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext debe usarse dentro de un ThemeProvider")
    }
    return context;
}