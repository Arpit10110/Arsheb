import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
//img
import logo from "../../assets/logoblack.png"
import { useSelector } from 'react-redux'
const Navbar = () => {
  const { User_id } = useSelector((state) => state.arshebdeatil);

  return (
   <>
    <nav>
        <div className="logo">
            <img src={logo} alt="Arsheb" />
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/product/jewellery">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
            {
                User_id == ""?
                <Link to="/login">Login</Link>:
                <Link to="/profile">Profile</Link>
            }
        </div>
    </nav>
   </>
  )
}

export default Navbar