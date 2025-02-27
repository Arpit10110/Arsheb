import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TopBanner from '../Components/TopBanner/TopBanner'
import ProfileOrder from '../Components/ProfileOrder.jsx'
import ProfileDetails from '../Components/ProfileDetails.jsx'
import ProfileAddress from '../Components/ProfileAddress.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
  const navigate = useNavigate();
  const {User_id} = useSelector(state => state.arshebdeatil);
  useEffect(() => {
   if(User_id == ""){
    navigate("/login")
   }
  }, [])
  return (
   <>
    <Navbar/>
    <TopBanner value={"Account"} />
    <div className='my-[8rem] flex justify-around below-sm:flex-col-reverse below-sm:gap-[4rem] below-sm:items-center'>
        <div className='w-[45%] flex  below-sm:w-[95%] '>
         <ProfileOrder />
        </div>
        <div className='w-[45%] flex flex-col flex-wrap gap-[5rem] below-sm:w-[95%]'>
            <ProfileDetails />
            <ProfileAddress />
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Profile
