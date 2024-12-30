import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ProfileDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {User_id} = useSelector(state => state.arshebdeatil);
  const [Userdata,SetUserdata] = useState();
  const [isloading,SetIsloading] = useState(true)
    const getprofiledata = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/profile`,{
                userid:User_id
            })
            SetUserdata(data.user)
            SetIsloading(false)
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const logout = ()=>{
      dispatch({
        type: 'logout',
      })
      navigate("/")
    }

    useEffect(() => {
       getprofiledata()
      }, [])


  return (
    <>
    <div className='border-[2px] rounded-[1rem] border-gray-700  w-full '>
        <div className='p-[0.5rem] border-b-[2px] border-gray-700 text-[2rem] font-semibold '>
            <h1>Personal Information</h1>
        </div>
        <div className='min-h-[20vh]'>
            {
                isloading ? 
                <h1 className='text-center pt-[3rem] text-[2.5rem] text-blue-600 font-semibold'>Loading...</h1>:
                <div className=' py-[1rem] flex flex-col gap-[1rem] text-[2rem]'>
                  <div className='w-full flex justify-around flex-wrap '>
                    <div className='w-[45%]'>
                      <h1 className='font-semibold'>Name</h1>
                      <h1>{Userdata.name}</h1>
                    </div>
                    <div className='w-[45%]'>
                      <h1 className='font-semibold'>Email</h1>
                      <h1>{Userdata.email}</h1>
                    </div>
                  </div>
                  <div className='w-full flex justify-around flex-wrap '>
                    <div className='w-[45%]'>
                      <h1 className='font-semibold'>Phone Number</h1>
                      <h1>{Userdata.phone}</h1>
                    </div>
                    <div className='w-[45%] flex justify-center items-center'>
                     <button onClick={logout} className='bg-blue-700 text-white w-full py-[0.5rem] rounded-[1rem] ' >LogOut</button>
                    </div>
                  </div>
                </div>
            }
        </div>
    </div>
   </>
  )
}

export default ProfileDetails
