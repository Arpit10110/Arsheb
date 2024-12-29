import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TopBanner from '../Components/TopBanner/TopBanner'
import "../Style/Contact.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
    const [state, handleSubmit] = useForm("xrbbkrzk");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    } 
  return (
   <>
    <Navbar/>
    <TopBanner value={"Contact Us"} />
    <div className='py-[10rem] pb-[20rem] w-full flex items-center  '>
      <form onSubmit={handleSubmit} id='myForm'    className="contactbox m-auto">
                <div className="row1">
                    <div className="Input">
                        <h3>First name</h3>
                        <input  name='FirstName' type="text" />
                    </div>
                    <div className="Input">
                        <h3>Last name </h3>
                        <input  name='LastName' type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Input">
                        <h3>Email address</h3>
                        <input  name='Email' type="text" />
                    </div>
                    <div className="Input">
                        <h3>Phone number</h3>
                        <input  name='Phone' type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Message">
                        <h3>Message</h3>
                        <textarea  name='Message' type="text" />
                    </div>
                </div>
                <div className="contactbtn">
                    <button >Send Message</button>
                </div>
      </form>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    <Footer/>
   </>
  )
}

export default Contact
