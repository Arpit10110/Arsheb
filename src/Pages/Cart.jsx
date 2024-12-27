import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TopBanner from "../Components/TopBanner/TopBanner";
import CartItem from "../Components/CartItem/CartItem.jsx";
import "../Style/Cart.css"
import { useSelector,useDispatch } from "react-redux";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
    const navigate = useNavigate();
  const dispatch= useDispatch()
  const { Cart } = useSelector(state => state.arshebdeatil);
  const {TotalPrice} =  useSelector(state => state.arshebdeatil);
  const { Shipping } = useSelector(state => state.arshebdeatil);
  const {Total} = useSelector(state => state.arshebdeatil);
  const {User_id} = useSelector(state => state.arshebdeatil);

  const shippingFee = Cart.length === 0 ? 0 : Shipping;

  const increseQty = (id) => {
    dispatch({
      type: 'Increment',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };
  
  const decreaseQty = (id) => {
    dispatch({
      type: 'decrement',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: 'deleteitem',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };

  
  const chekout = ()=>{
    if (Cart.length<=0){
        toast.info("Please add item", {
            position: "top-right",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }else{
        navigate("/chekout");
    }
  }

  return (
    <>
      <Navbar />
      <TopBanner value={"Cart"} />
      <div className="cart-main">

        {/* Cart Items Section */}
        <div className="cart-items-main">
        <div className="cart-section1">
            <h1>Cart -<span> {Cart.length} items</span></h1>
        </div>
        
        {Cart.length === 0 ? (
            // If no items in cart, show "No items in cart" message
            <div className="empty-cart-message">
            <h2 className="text-[2rem]">!!!No items in your cart!!!</h2>
            </div>
        ) : (
            // If cart is not empty, show the items
            <div id='cartsection2' className="cart-section2">
                <CartItem Cart={Cart} increseQty={increseQty} decreaseQty={decreaseQty} deleteItem={deleteItem}/>
            </div>
        )}

        </div>
        {/* Price Summary Section - Always Visible */}
        <div className="cart-bill-main">
            <div className="price-summary-main">
                <div className="price-Summary">
                <h1>Price Summary</h1>
                <h4>Includes GST and All other Taxes</h4>
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
                {
                User_id== "" ? <Link to="/login">Proceed</Link>: <button onClick={chekout}>Proceed to Checkout</button>
                }
            </div>
        </div>

        </div>
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
  );
};

export default Cart;
