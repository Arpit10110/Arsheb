import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signbox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signupbox = () => {
  const navigate = useNavigate();
  const [Fname, setFname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');


  const submithandel = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/signup`, {
        Fname,
        Email,
        Phone,
        Password,
      });
      console.log(data);
      if (data.success === false) {
        toast.error(data.message, { 
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        navigate("/successignup");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginbox-main">
        <form onSubmit={submithandel} className="loginbox">
          <div className="login-div-input">
            <h3>Full Name</h3>
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Phone no.</h3>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Email</h3>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Create Password</h3>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signup-div-btn">
            <button type="submit">Create Account</button>
            <Link to="/login">Login</Link>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
};

export default Signupbox;
