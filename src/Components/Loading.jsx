import React from 'react'
import LoadingGif from "../assets/loading.gif"
const Loading = () => {
  return (
   <>
    <div className='w-full h-[50vh]  flex mt-[15rem] justify-center '>
        <div className='w-[10%]' >
           <img src={LoadingGif} alt="Loading" className='w-full' />
        </div>
    </div>
   </>
  )
}

export default Loading
