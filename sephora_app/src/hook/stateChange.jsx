import React, { useState } from 'react'

const UseStateChange = () => {
    const [ value, setState ] = useState(1);
   const  handleValue = (val)=> {
    setState(val);
   }
   return [value, handleValue]
}

export default UseStateChange