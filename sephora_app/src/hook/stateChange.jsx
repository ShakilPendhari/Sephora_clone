import { useContext, useState } from 'react';
import { authContext } from '../Context/AuthContext';


const UseStateChange = () => {
    const { setCount, count } = useContext(authContext);
    const [ v1, setState ] = useState(1);
   const  handleValue = (val, price)=> {
    setCount(count+val*price)
    setState(val);
   }
   return [v1, handleValue]
}

export default UseStateChange