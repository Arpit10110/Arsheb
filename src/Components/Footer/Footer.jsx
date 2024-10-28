import React from "react";
import logo from "../../assets/logowhite.png";
import { Link } from "react-router-dom"; 
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//style
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="arsheb" />
          </div>
          <div className="footer-social">
              <FacebookIcon className="footer-icons" />
              <InstagramIcon className="footer-icons" />
              <XIcon className="footer-icons" />
              <LinkedInIcon className="footer-icons" />
          </div>

        </div>
        <div className="footer-right">
          <div className="footer-cont">
            <h1>Customer Service</h1>
            <Link>Contact Us</Link>
            <Link>Track Order</Link>
            <Link>Return Order</Link>
            <Link>Cancel Order</Link>
          </div>
          <div className="footer-cont">
            <h1>Company</h1>
            <Link>About Us</Link>
            <Link>Terms & Conditions</Link>
            <Link>Blog</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;





