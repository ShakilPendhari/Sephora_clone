import React,{ Children, createContext, useState } from "react";
import { Button, useColorMode } from "@chakra-ui/react"
export const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const [toggle, settoggle ] = useState("light")

    const ChangeTheme = ()=>{
       toggleColorMode();
       colorMode === 'light' ? settoggle('Dark') : settoggle('Light');
    }

    return <ThemeContext.Provider value={{ChangeTheme, toggle}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;