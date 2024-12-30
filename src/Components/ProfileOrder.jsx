import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const ProfileOrder = () => {
  const {User_id} = useSelector(state => state.arshebdeatil);
  const [isloading,SetIsloading] = useState(true)
    const getorderdata = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/getorder`,{
                userid:User_id
            })
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    //  getorderdata()
    }, [])
    

  return (
   <>
    <div className='border-[2px] rounded-[1rem] border-gray-700  w-full '>
        <div className='p-[0.5rem] border-b-[2px] border-gray-700 text-[2rem] font-semibold '>
            <h1>Order History</h1>
        </div>
        <div className='h-[50vh]'>
            {
                isloading ? 
                <h1 className='text-center pt-[3rem] text-[2.5rem] text-blue-600 font-semibold'>Loading...</h1>:
                <div></div>
            }
        </div>
    </div>
   </>
  )
}

export default ProfileOrder
