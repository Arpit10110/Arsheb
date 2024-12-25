import React from 'react'

const StoreCard = ({img,desc,title,price,}) => {
  return (
   <>
    <div className='flex flex-col w-[20%] border-black border-[1px] rounded-[5px] p-[1rem] gap-[1rem] bg-gray-200' >
        <div className='w-full h-[35vh] ' >
            <img src={img} alt="title" className='h-[35vh] object-cover w-full border-black border-y-[1px] '/>
        </div>
        <div className='flex flex-col gap-[1rem] w-full justify-center items-center '>
            <div className='flex justify-between text-[2rem] font-semibold  w-full items-center'>
                <h2>{title}</h2>
                <h2>₹{price}</h2>
            </div>
            <div className='flex justify-center w-full flex-col gap-[1rem]'>
                <button className='w-full py-[0.2rem] text-[2rem] bg-[#3ce100] text-white rounded-[5px]' >Add to Cart</button>
                <button className='w-full py-[0.2rem] text-[2rem] bg-[#ff4000] text-white rounded-[5px]' >View More</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default StoreCard
