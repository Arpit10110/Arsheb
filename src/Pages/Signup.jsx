import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Signupbox from '../Components/Signupbox/Signupbox.jsx'
import TopBanner from '../Components/TopBanner/TopBanner'
const Signup = () => {
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
