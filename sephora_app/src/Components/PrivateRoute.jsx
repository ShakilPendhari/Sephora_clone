import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const { setCheckout, checkout, authState } = useContext(authContext);
    
    if(authState )
    {
        return <Navigate to="/Register"/>
    }
    setCheckout(!checkout)
  return (
    <>{children}</>
  )
}

export default PrivateRoute