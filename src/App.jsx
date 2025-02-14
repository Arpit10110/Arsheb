import React from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom"
//pages
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import Store from "./Pages/Store.jsx"
import StoreJewellery from "./Pages/StoreJewellery.jsx"
import StoreMens from "./Pages/StoreMens.jsx"
import StoreWomens from "./Pages/StoreWomens.jsx"
import StoreHairAcces from "./Pages/StoreHairAcces.jsx"
import StoreFootwear from "./Pages/StoreFootwear.jsx"
import StoreBags from "./Pages/StoreBags.jsx"
import Cart from "./Pages/Cart.jsx"
import Chekout from "./Pages/Chekout.jsx"
import Orderplaced from "./Pages/Orderplaced.jsx"
import Successignup from "./Pages/Successignup.jsx"
import Contact from "./Pages/Contact.jsx"
import Profile from "./Pages/Profile.jsx"
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
            <Route path='/product/mens' element={<StoreMens/>} />
            <Route path='/product/womens' element={<StoreWomens/>} />
            <Route path='/product/hairaccessories' element={<StoreHairAcces/>} />
            <Route path='/product/footwears' element={<StoreFootwear/>} />
            <Route path='/product/bags' element={<StoreBags/>} />
          </Route>
          <Route path='/cart'   element={<Cart/>} />
          <Route path='/chekout'   element={<Chekout/>} />
          <Route path='/orderplaced'   element={<Orderplaced/>} />
          <Route path='/successignup'   element={<Successignup/>} />
          <Route path='/contact'   element={<Contact/>} />
          <Route path='/profile'   element={<Profile/>} />
        </Routes> 
      </Router>
     
  )
}

export default App