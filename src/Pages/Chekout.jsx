import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TopBanner from '../Components/TopBanner/TopBanner'
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
const Chekout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showsaved,SetShowsaved] = useState(true);
  const { Cart } = useSelector(state => state.arshebdeatil);
  const {TotalPrice} =  useSelector(state => state.arshebdeatil);
  const { Shipping } = useSelector(state => state.arshebdeatil);
  const {Total} = useSelector(state => state.arshebdeatil);
  const {User_id} = useSelector(state => state.arshebdeatil);
  const shippingFee = Cart.length === 0 ? 0 : Shipping;
// new address state
  const [SavedAddress,SetSavedAddress] = useState([]);
  const [Address,SetAddress] = useState("");
  const [Landmark,SetLandmark] = useState("");
  const [PostlaCode,SetPostalCode] = useState("");
  const [State,SetState] = useState("");
  const [City,SetCity] = useState("");
  const [open, setOpen] = useState(true);
  const [SelectedAddress,SetSelectedAddress] = useState(0);


  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const addaddress= async(e)=>{
    e.preventDefault();
    const address = `${Landmark},${Address},${City},${State},${PostlaCode}`
    SetAddress("")
    SetLandmark("")
    SetCity("")
    SetState("")
    SetPostalCode("")
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_Port}/addaddress`,{
        userid:User_id,
        address:address
      }) 
      handleOpen()
      usersavedaddress()
      SetShowsaved(true);

    } catch (error) {
      console.log(error);
    }
  }

  const usersavedaddress = async()=>{
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_Port}/savedaddress`,{
        userid:User_id,
      }) 
      SetSavedAddress(data.useraddress)
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  const calorderdate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' }); // Get short month name (e.g., "Oct")
    const year = currentDate.getFullYear().toString().slice(-2); // Get last two digits of the year (e.g., "22")
    return `${day} ${month}, ${year}`;
  };


  const cahondelivery = async()=>{
    handleOpen();
    const orderdate= calorderdate();
    const orderdata = {
      userid:User_id,
      cart:Cart,
      total:Total,
      totalprice:TotalPrice,
      shipping:shippingFee,
      address:SavedAddress[SelectedAddress].value,
      payment:"COD",
      orderdate:orderdate
    }
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_Port}/createorder`, orderdata);
      if(data.success== true){
        dispatch({
          type:"emptycart"
        })
        dispatch({
          type:"Calculate"
        })
        navigate("/orderplaced");
      }
    } catch (error) {
      console.log(error);
      handleClose();
    }
  }


  useEffect(() => {
    usersavedaddress()
  }, [])
  


  return (
   <>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <Navbar/>
    <TopBanner value={"Checkout"} />
    <div className='flex justify-between below-sm:flex-col below-sm:gap-[3rem] below-sm:pb-[5rem] min-h-[60vh] ' >
      <div className='flex w-[65%] gap-x-[1rem] pt-[2rem] justify-between below-sm:w-full below-sm:justify-around '>
        <div className='flex flex-col w-[20%]  item-center gap-y-[2rem]  text-[1.5rem]  below-sm:text-[1.2rem] '> 
        <button className=' font-semibold bg-yellow-500   px-[0.5rem] py-[0.5rem]' onClick={()=>SetShowsaved(true)} >Saved Address</button>
        <button  className='  font-semibold bg-[#07142F] text-white  px-[0.5rem] py-[0.5rem]'  onClick={()=>SetShowsaved(false)}>New Address</button>
        </div>
        {
          showsaved ? 
          <div className='w-[75%]'>
            {
              open ? <h1>Loading...</h1>:
              <div>
                {
                   SavedAddress.length <= 0 ? 
                   <h1>No Saved Address</h1>:
                   <div className='flex flex-col gap-[1.5rem]' >
                    {
                      SavedAddress.map((i,index)=>{
                        return(
                          <div  className={`text-[1.5rem] p-[1rem] rounded-[10px] w-[80%] text-center cursor-pointer ${
                            SelectedAddress === index ? "border-2 border-blue-500 bg-gray-300" : "bg-gray-300"
                          }`}
                          onClick={() => SetSelectedAddress(index)}   key={index} >
                            <h1>{i.value}</h1>
                          </div>
                          )
                      })
                    }
                   </div>
                }
              </div>
            }
          </div>:
          <form onSubmit={addaddress} className='w-[75%] text-[1.5rem] flex flex-col gap-y-[1.5rem] font-semibold below-sm:w-[70%] '>
            <div className='w-full'>
              <h1>Address</h1>
              <input type="text" className='w-full p-[0.5rem]' value={Address} onChange={(e)=>{
                SetAddress(e.target.value)
              }}  required/>
            </div>
            <div className='w-full flex justify-between'>
              <div className='w-[48%]'>
                <h1>Landmark</h1>
                <input type="text" className='w-full p-[0.5rem]' value={Landmark} onChange={(e)=>{
                SetLandmark(e.target.value)
              }}   required/>
              </div>
              <div className='w-[48%]'>
                <h1>Postal Code</h1>
                <input type="text" className='w-full p-[0.5rem]' value={PostlaCode} onChange={(e)=>{
                SetPostalCode(e.target.value)
              }}   required/>
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <div className='w-[48%]'>
                <h1>City</h1>
                <input type="text" className='w-full p-[0.5rem]' value={City} onChange={(e)=>{
                SetCity(e.target.value)
              }}  required />
              </div>
              <div className='w-[48%]'>
                <h1>State</h1>
                <input type="text" className='w-full p-[0.5rem]' value={State} onChange={(e)=>{
                SetState(e.target.value)
              }}  required/>
              </div>
            </div>
            <button type='submit' className='mt-[1rem] bg-black text-white py-[0.5rem] m-auto rounded-[5px] font-medium w-fit px-[3rem]' >Add New Address</button>
          </form>
        }
      </div>
      <div className='flex w-[25%]  pt-[2rem] below-sm:w-full below-sm:justify-center  '>
      <div className="cart-bill-main w-[80%] pt-[0rem] flex flex-col gap-[1rem]">
            <div className="price-summary-main gap-[0rem]">
           <Link to="/cart" className='text-[2rem] font-semibold text-red-600 text-center ' >Edit Cart</Link> 
                <div className="price-Summary gap-[1rem]">
                <div className="total-price-div">
                    <h2>Total Item Price</h2>
                    <h2>₹{TotalPrice}</h2>
                </div>
                <div className="total-price-div">
                    <h2>Shipping Fee</h2>
                    <h2>₹{shippingFee}</h2>
                </div>
                </div>
                <div className="price-div">
                <h1>Total</h1>
                <h1>₹{Total}</h1>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem]'>
              {/* <button onClick={cahondelivery}  className=' text-[1.5rem] font-semibold bg-yellow-500 rounded-[5px]  px-[0.5rem] py-[0.5rem]'>Cash on Delivery</button> */}
              <button onClick={cahondelivery}   className=' text-[1.5rem] font-semibold bg-[#07142F] text-white rounded-[5px]   px-[0.5rem] py-[0.5rem]'>Place the Order</button>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Chekout
