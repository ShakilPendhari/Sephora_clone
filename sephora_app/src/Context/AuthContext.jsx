import React,{ createContext, useState } from "react";

export const authContext = createContext();

export let intialValue = {
    f_name:"",
    l_name:"",
    email:"",
    password:"",
    phone_No:"",
    month:"",
    day:"",
    flag:false,
    zip:"",
    }

let a = JSON.parse(localStorage.getItem("key")) || {}

const AuthContextProvider = ({children})=>{
    // const [display, setDisplay] = useState(false)
    const [ formstate, setFormState] = useState(intialValue);
    const [ formState1, setFormstate1 ] = useState({f_name:"",l_name:"",phone:"",zip:""});
    const [ place, setPlace ] = useState(false);
    const [ count, setCount ] = useState(0);
    const [ cart, setCart ] = useState(0);
    const [ checkout, setCheckout ] = useState(true);
    const [ loading, setLoading ] = useState(false);
    const [ authState, setAuthState ] = React.useState(false);
    const [ countcart, setCountcart ] = useState(0);
    const [ localstorage, setlocalStorage] = useState( a?.f_name);
    
    const loginUser = ()=>{
         setAuthState({isAuth:true})
    }
    const logOutUser = ()=>{
        setAuthState({isAuth:false})
    }
  

    return <authContext.Provider value={{authState, loginUser, logOutUser, setCount, count, loading, setLoading, cart, setCart, countcart, setCountcart, localstorage, setlocalStorage, formstate, setFormState,checkout, setCheckout, formState1, setFormstate1, place, setPlace }}>
        {children}
    </authContext.Provider>
}

export default AuthContextProvider;