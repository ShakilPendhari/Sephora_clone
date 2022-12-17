import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const { authState } = useContext(authContext)
    if(!authState.isAuth)
    {
        return <Navigate to="/signup"/>
    }
  return (
    <>{children}</>
  )
}

export default PrivateRoute