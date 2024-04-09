import React, { createContext, useState } from 'react';
import lightColors from './lightMode';
import darkColors from './darkMode';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  // console.log("theeeee", themeMode)
  const handleChangeTheme = (theme) => {
    console.log("test1", theme)
    if (theme === "dark") {
      setThemeMode('dark');
    } 
    else {
      setThemeMode('light');
    }
  };
  let defaultColors
  if (themeMode === "dark") {
    defaultColors = darkColors;
  }
  else {
    defaultColors = lightColors;
  }
  return (
    <ThemeContext.Provider value={{ themeMode, handleChangeTheme, defaultColors }}>
      {children}
    </ThemeContext.Provider>
  );
};