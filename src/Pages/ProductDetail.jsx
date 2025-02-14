import React,{useEffect,useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetail = () => {
    const naviagte = useNavigate();
    const dispatch = useDispatch(); 
    const cuurentlocation = useParams();
    const [Isloading,SetIsloading] = useState(true);
    const [Productdetail,SetProductdetail] = useState();
    const [Qty,SetQty] = useState(1);

    const getproductdetails = async(ProductId)=>{
        try {
            const {data} = await  axios.post(`${import.meta.env.VITE_Port}/productdetail`,{
                id: ProductId,
            })
            console.log(data);
            SetProductdetail(data.data)
            SetIsloading(false)
        } catch (error) {
            SetIsloading(false)
            console.error(error)
        }
    }

    
    const addtocart = ()=>{
        const item = {
            id:Productdetail._id,
            img:Productdetail.productimage[0].imageurl,
            title:Productdetail.producttitle,
            price:Productdetail.productprice,
            qty:Qty,
        }
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


    const buynow = ()=>{
        const item = {
            id:Productdetail._id,
            img:Productdetail.productimage[0].imageurl,
            title:Productdetail.producttitle,
            price:Productdetail.productprice,
            qty:1,
        }
        dispatch({
            type:"addtocart",
            payload: item
        })
        dispatch({
            type: 'Calculate'
          });
          naviagte("/cart")
    }


    
    useEffect(() => {
    getproductdetails(cuurentlocation.id);
    }, [])
    
  return (
    <>
        <Navbar/>
        {
        Isloading?<Loading/>:
        <div className='w-full min-h-[80vh] flex justify-center  mt-[10rem] below-sm:min-h-[100vh] below-sm:mb-[5rem]   ' >
            <div className='w-[50%] bg-gray-300 rounded-[1rem] h-fit p-[1rem] flex justify-between below-sm:flex-col below-sm:w-[95%] below-sm:items-center below-sm:gap-[3rem]  ' >
                <div className='w-[45%] rounded-[10px] h-[50vh] bg-white below-sm:w-[90%]  ' >
                    <img className='w-full rounded-[10px]  h-[50vh] object-contain  '  src={Productdetail.productimage[0].imageurl} alt="pimg" />
                </div>
                <div className='w-[50%] flex justify-center flex-col gap-[1rem] below-sm:w-[90%] ' >
                    <h1 className='text-[3rem]' >{Productdetail.producttitle}</h1>
                    <h4 className='text-[2rem]' >{Productdetail.productdesc}</h4>
                    <h6 className='h-[2px] bg-black ' ></h6>
                    <div>
                        <h2 className='text-[2.5rem] font-bold text-green-700 '>₹{Productdetail.productprice}</h2>
                        <h5 className='text-[1.2rem]' >MRP incl. of all taxes...</h5>
                    </div>
                    <div className='flex gap-[1rem] text-[3rem] cursor-default' >
                       <h2>Quantity</h2>
                       <div className='bg-gray-400 flex gap-[1rem] text-black rounded-[1rem] items-center justify-center'  >
                       <h3 className='cursor-pointer  px-[1rem] text-center ' onClick={()=>{
                        Qty>2?SetQty(Qty-1):SetQty(1)
                       }} >-</h3>
                       <h2>{Qty>1?Qty:"1"}</h2>
                       <h3 className='cursor-pointer px-[1rem] text-center ' onClick={()=>{
                        SetQty(Qty+1);
                       }} >+</h3>
                       </div>
                    </div>

                    <div className='flex justify-around mt-[2rem]' >
                        <button onClick={addtocart} className='px-[1rem] py-[0.5rem] bg-[#FFBF00]  font-semibold text-black text-[2.5rem] rounded-[1rem] ' >Add To Cart</button>
                        <button onClick={buynow}  className='px-[1rem] py-[0.5rem] text-white bg-black  text-[2.5rem] rounded-[1rem] ' >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        }
        <Footer/>
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

export default ProductDetail