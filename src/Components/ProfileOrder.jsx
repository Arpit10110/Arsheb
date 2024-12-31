import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState } from 'react';
const ProfileOrder = () => {
  const {User_id} = useSelector(state => state.arshebdeatil);
  const [isloading,SetIsloading] = useState(true)
  const [orderdata,SetOrderdata] = useState([])
    const getorderdata = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/getorder`,{
                userid:User_id
            })
            SetOrderdata(data.data);
            SetIsloading(false);
        } catch (error) {
            SetIsloading(false);
            console.log(error)
        }
    }

    useEffect(() => {
     getorderdata()
    }, [])
    

  return (
   <>
    <div className='border-[2px] rounded-[1rem] border-gray-700  w-full bg-gray-200 '>
        <div className='p-[0.5rem] border-b-[2px] border-gray-700 text-[2rem] font-semibold '>
            <h1>Order History</h1>
        </div>
        <div className='h-[50vh]'>
            {
                isloading ? 
                <h1 className='text-center pt-[3rem] text-[2.5rem] text-blue-600 font-semibold'>Loading...</h1>:
                <>
                <div className='flex w-full pt-[1rem] text-[2rem] font-semibold '>
                    <h1 className='w-[15%] text-center  ' >Order</h1>
                    <h1 className='w-[30%] text-center  ' >Date</h1>
                    <h1 className='w-[30%] text-center  ' >Payment Status</h1>
                    <h1 className='w-[25%] text-center  ' >Total</h1>
                </div>
                <div className='flex  flex-col gap-[1rem] mt-[1rem]'>
                {
                    orderdata.map((i,index)=>{
                        return(
                            <div key={index} className='flex w-full py-[0.5rem] text-[2rem] font-semibold bg-gray-300 cursor-pointer   '>
                            <h1 className='w-[15%] text-center text-red-700  ' >#{index+1}</h1>
                            <h1 className='w-[30%] text-center ' >{i.orderdate}</h1>
                            <h1 className='w-[30%] text-center text-[#44CF09]  ' >{i.payment}</h1>
                            <h1 className='w-[25%] text-center  ' >₹{i.totalprice}</h1>
                        </div>
                        )
                    })
                }
                </div>
                </>
            }
        </div>
    </div>
   </>
  )
}

export default ProfileOrder
