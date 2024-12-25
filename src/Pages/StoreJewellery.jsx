import React from 'react'
import { demoapi } from '../Api/demo'
import StoreCard from '../Components/StoreCard'
const StoreJewellery = () => {
  return (
    <>
        <div className='py-[5rem] flex flex-wrap justify-around gap-y-[2rem] gap-x-[4rem] '>
            {
                demoapi.map((i,index)=>{
                    return(
                        <StoreCard key={index} img={i.img} desc={i.desc} title={i.title} price={i.price}  />
                    )
                })
            }
        </div>
    </>    
  )
}

export default StoreJewellery
