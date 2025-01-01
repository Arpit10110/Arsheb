import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Signupbox from '../Components/Signupbox/Signupbox.jsx'
import TopBanner from '../Components/TopBanner/TopBanner'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Signup = () => {
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
    <TopBanner value={"Create Account"}  />
    <Signupbox/>
    <Footer/>
    </>
  )
}

export default Signup
