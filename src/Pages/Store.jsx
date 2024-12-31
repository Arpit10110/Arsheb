import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
const Store = () => {
  return (
    <>
    <Navbar/>
        <div className='flex text-[2rem]  py-[1rem] border-[1px] border-black items-center justify-center  '>
          <div className='w-[80%] flex justify-between below-sm:w-[95%] below-sm:flex-wrap below-sm:gap-[2rem] below-sm:justify-between  '>
              <Link to="/product/jewellery" className='hover:text-blue-600' >Jewellery</Link>
              <Link to="/product/mens"  className='hover:text-blue-600' >Men's</Link>
              <Link to="/product/womens" className='hover:text-blue-600'  >Women's</Link>
              <Link to="/product/hairaccessories"  className='hover:text-blue-600' >Hair Accessories</Link>
              <Link to="/product/footwears"  className='hover:text-blue-600' >Foot Wear's</Link>
              <Link to="/product/bags"  className='hover:text-blue-600' >Bag's</Link>
          </div>
        </div>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Store
