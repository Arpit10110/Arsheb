import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
//img
import logo from "../../assets/logoblack.png"
const Navbar = () => {
  return (
   <>
    <nav>
        <div className="logo">
            <img src={logo} alt="Arsheb" />
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
   </>
  )
}

export default Navbar