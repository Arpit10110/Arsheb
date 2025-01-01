import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import TopBanner  from '../Components/TopBanner/TopBanner.jsx'
import Loginbox from '../Components/Loginbox/Loginbox.jsx'
import {  useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Login = () => {

  const navigate = useNavigate();
  const {User_id} = useSelector(state => state.arshebdeatil);


  useEffect(() => {
   if(User_id != ""){
    navigate("/")
   }
  }, [])
  

  return (
   <>
    <Navbar/>
    <TopBanner value={"Login"} />
    <Loginbox/>
    <Footer/>
   </>
  )
}

export default Login
 