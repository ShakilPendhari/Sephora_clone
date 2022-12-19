import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home"
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

const Allroutes = () => {
  return (
    <div>
      {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signout" element={<SignUp/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes> */}
    </div>
  )
}

export default Allroutes