import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../Components/CartPage/CartPage'
import Home from "./Home/Home"
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

const Allroutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signout" element={<SignUp/>}/>
          <Route path="/cart/:id" element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes