import React from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom"
//pages
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
//style
import "./Style/Style.css"
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/'   element={<Home/>} />
          <Route path='/login'   element={<Login/>} />
        </Routes>
      </Router>
  )
}

export default App