import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import TopBanner  from '../Components/TopBanner/TopBanner.jsx'
import Loginbox from '../Components/Loginbox/Loginbox.jsx'
const Login = () => {
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
 