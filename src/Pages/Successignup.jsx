import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
const Successignup = () => {
  return (
   <>
    <Navbar/>
            <div className='h-[80vh] flex pt-[15rem] items-center flex-col gap-[3rem]'>
                <h1 className='text-[5rem]'>Profile Created Successfully</h1>
                <div className='flex gap-[3rem]'>
                <Link className='py-[0.5rem] px-[1rem] rounded-[5px] bg-yellow-500 text-[2rem] '  to="/">Go To HomePage</Link>
                <Link  className='py-[0.5rem] px-[2rem] rounded-[5px] bg-[#001c5a] text-white text-[2rem] ' to="/login" >LogIn Now</Link>
                </div>
            </div>
    <Footer/>
   </>
  )
}

export default Successignup
