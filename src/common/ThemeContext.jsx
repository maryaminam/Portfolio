import React,{createContext,useContext,useEffect,useState} from "react";

const ThemeContext= createContext();

export const useTheme = () => useContext(ThemeContext);
//checks if any theme is originally set if not then sets to light
export const ThemeProvider=({children}) => {
    const [theme, setTheme]=useState (
        () => localStorage.getItem('theme') ||'light'
    );
    useEffect(() => {
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme =() =>{
        //console.log("theme switched");
        setTheme ((prevTheme)=>(prevTheme === 'light'?'dark':'light'));
    };
    //encaspulate our whole app in this theme
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
          {children}
        </ThemeContext.Provider>
    );
};

