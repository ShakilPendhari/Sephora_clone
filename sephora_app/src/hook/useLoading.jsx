import React, { useState } from 'react'

const UseLoading = () => {
    const [ loading, setLoading ] = useState(false);
    const changeLoading=(val)=>{
        setLoading(val);
    }
    return {
        loading, changeLoading
    }
  
}

export default UseLoading