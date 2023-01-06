import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../Components/CartPage/CartPage'
import Home from "./Home/Home"
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
import Checkout from '../Components/Checkout/Checkout'
import PrivateRoute from '../Components/PrivateRoute'

const Allroutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout_page" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default Allroutes