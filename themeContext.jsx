import {  createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider =({children}) =>{
    const [darkMode, setDarkMode] =useState(false);

    const toggleDarkMode =()=>{
        setDarkMode(prevMode=>!prevMode);
    };

    return(
        <ThemeContext.Provider value={{darkMode,toggleDarkMode}}>
            <div className={darkMode? 'dark' : ''}>
                {children}
            </div>

        </ThemeContext.Provider>
    );

};import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};