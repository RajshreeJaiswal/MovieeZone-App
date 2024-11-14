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

};console.log('ThemeContext created');
console.log('useTheme hook initialized');
console.log('ThemeProvider initialized');
console.log('Dark mode:', darkMode);
console.log('Toggling dark mode');