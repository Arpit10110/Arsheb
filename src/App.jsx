import React from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom"
//pages
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import Store from "./Pages/Store.jsx"
import StoreJewellery from "./Pages/StoreJewellery.jsx"
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
        </Routes> 
      </Router>
     
  )
}

export default App