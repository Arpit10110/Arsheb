import React from 'react'
import { demoapi } from '../Api/demo'
import StoreCard from '../Components/StoreCard'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
const StoreJewellery = () => {
    const dispatch = useDispatch(); 



    const addtocart = (item)=>{
        dispatch({
            type:"addtocart",
            payload: item
        })
        dispatch({
            type: 'Calculate'
          });
        toast.success("Added to Cart", {
            position: "top-right",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
  return (
    <>
        <div className='py-[5rem] flex flex-wrap justify-between gap-[4rem] w-[80%] m-auto'>
            {
                demoapi.map((i,index)=>{
                    return(
                        <StoreCard id={i.id} key={index} img={i.img} desc={i.desc} title={i.title} price={i.price} addtocart={addtocart} />
                    )
                })
            }
        </div>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>    
  )
}

export default StoreJewellery
