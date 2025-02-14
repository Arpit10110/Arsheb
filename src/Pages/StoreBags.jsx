import React,{useEffect} from 'react'
import StoreCard from '../Components/StoreCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Loading from '../Components/Loading';
import axios from "axios"
const StoreBags = () => {
    const dispatch = useDispatch(); 
    const [Isloading,SetIsloadiing]= useState(true)
    const [StoreData,SetStoreData] = useState([]);


    const getProduct = async()=>{
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_Port}/product/bags`)
            SetStoreData(data.data);
            SetIsloadiing(false);
        } catch (error) {
            console.error(error)
            SetIsloadiing(false);
        }
    }

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

    useEffect(() => {

        getProduct()

     
    }, [])


  return (
    <>
    <div>
        {
            Isloading?<Loading/>:
        <div className='py-[5rem] flex flex-wrap gap-[5rem] w-[80%] min-h-[80vh] items-baseline m-auto below-sm:w-[100%] below-sm:justify-center '>
            {
                StoreData.map((i,index)=>{
                    return(
                        <StoreCard id={i._id} key={index} img={i.productimage[0].imageurl} desc={i.productdesc} title={i.producttitle} price={i.productprice} addtocart={addtocart} />
                    )
                })
            }
        </div>
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

export default StoreBags
