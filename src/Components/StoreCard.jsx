import React from 'react'

const StoreCard = ({img,desc,title,price,}) => {
  return (
   <>
    <div className='flex flex-col w-[30%] border-black border-[1px] rounded-[5px] p-[1rem] gap-[1rem] bg-gray-200' >
        <div className='w-full h-[35vh] ' >
            <img src={img} alt="title" className='h-[35vh] object-cover w-full border-black border-y-[1px] '/>
        </div>
        <div className='flex w-full justify-center items-center '>
            <div className='flex justify-between text-[2.5rem]   w-[50%] items-center'>
                <h2>{title}</h2>
            </div>
            <div className='flex flex-col gap-[0.5rem] text-[2rem] w-[50%] items-end '>
                <h2 className='font-semibold  '>₹{price} INR</h2>
                <button className='w-fit pt-[0.4rem]  px-[1.5rem] text-[1.8rem] bg-[#FFDD55]  rounded-tr-[30px] rounded-bl-[30px] ' >Add to Cart</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default StoreCard
