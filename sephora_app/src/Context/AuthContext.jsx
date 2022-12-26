import React,{ Children, createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children})=>{
    const [display, setDisplay] = useState(false)
    const [ authState, setAuthState ] = React.useState({isAuth:false})
    
    const loginUser = ()=>{
         setAuthState({isAuth:true})
    }
    const logOutUser = ()=>{
        setAuthState({isAuth:false})
    }

    return <authContext.Provider value={{authState, loginUser, logOutUser}}>
        {children}
    </authContext.Provider>
}

export default AuthContextProvider;