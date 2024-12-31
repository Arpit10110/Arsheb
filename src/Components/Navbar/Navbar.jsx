import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
//img
import logo from "../../assets/logoblack.png"
import { useSelector } from 'react-redux'
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const { User_id } = useSelector((state) => state.arshebdeatil);
  const [open, setOpen] = useState(false);
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


        <div className="mobile-links">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon className="MenuIcon !text-[4rem] " />
          </button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="all-links">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/product/jewellery"
              >
                Product
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/cart"
              >
                Cart
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/contact"
              >
                Contact
              </Link>
              {User_id == "" ? (
                <Link to="/login">Login</Link>
              ) : (
                <div className="Profile-link">
                  <Link to="/profile">
                Profile
                  </Link>
                </div>
              )}
            </div>
          </Drawer>
        </div>

    </nav>
   </>
  )
}

export default Navbar