import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TopBanner from '../Components/TopBanner/TopBanner'
import ProfileOrder from '../Components/ProfileOrder.jsx'
import ProfileDetails from '../Components/ProfileDetails.jsx'
import ProfileAddress from '../Components/ProfileAddress.jsx'

const Profile = () => {
  return (
   <>
    <Navbar/>
    <TopBanner value={"Account"} />
    <div className='my-[8rem] flex justify-around'>
        <div className='w-[45%]'>
         <ProfileOrder />
        </div>
        <div className='w-[45%]'>
            <ProfileDetails />
            <ProfileAddress />
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Profile
