import React from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom"
//pages
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import Store from "./Pages/Store.jsx"
import StoreJewellery from "./Pages/StoreJewellery.jsx"
import Cart from "./Pages/Cart.jsx"
import Chekout from "./Pages/Chekout.jsx"
import Orderplaced from "./Pages/Orderplaced.jsx"
import Successignup from "./Pages/Successignup.jsx"
import Contact from "./Pages/Contact.jsx"
//style
import "./Style/index.css"
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/'   element={<Home/>} />
          <Route path='/login'   element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/product' element={<Store/>} >
            <Route path='/product/jewellery' element={<StoreJewellery/>} />
          </Route>
          <Route path='/cart'   element={<Cart/>} />
          <Route path='/chekout'   element={<Chekout/>} />
          <Route path='/orderplaced'   element={<Orderplaced/>} />
          <Route path='/successignup'   element={<Successignup/>} />
          <Route path='/contact'   element={<Contact/>} />
        </Routes> 
      </Router>
     
  )
}

export default App