import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const ProfileAddress = () => {

  const {User_id} = useSelector(state => state.arshebdeatil);
  const [UserAdderss,SetUserAdderss] = useState([]);
  const [isloading,SetIsloading] = useState(true)


  const getprofiledata = async()=>{
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_Port}/profile`,{
            userid:User_id
        })
        const arr=data.user.address
        SetUserAdderss(arr)
        SetIsloading(false)
    } catch (error) {
        console.log(error)
    }
}


  useEffect(() => {
    getprofiledata()
   }, [])


  return (
    <>
    <div className='border-[2px] rounded-[1rem] border-gray-700  w-full bg-gray-200 '>
        <div className='p-[0.5rem] border-b-[2px] border-gray-700 text-[2rem] font-semibold '>
            <h1>Shipping Address</h1>
        </div>
        <div className='min-h-[20vh]'>
            {
                isloading ? 
                <h1 className='text-center pt-[3rem] text-[2.5rem] text-blue-600 font-semibold'>Loading...</h1>:
                <div className=' py-[1rem] items-center flex flex-col gap-[1rem] text-[2rem]'>
                  {
                    UserAdderss.map((i,index)=>{
                      return(
                        <div className='w-[90%] bg-gray-300 rounded-[5px]  p-[1rem] cursor-pointer ' key={index}>
                          <h2 className='text-blue-800 font-semibold' >Address-{index+1}</h2>
                          <p>
                            {i.value}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
            }
        </div>
    </div>
   </>
  )
}

export default ProfileAddress
