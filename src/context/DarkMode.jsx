import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode)
    }, [darkMode])

    return(
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}