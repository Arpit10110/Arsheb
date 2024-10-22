import React from "react";
import section1Img from "../../assets/section1Img.png";
import {Link} from "react-router-dom"
import "./Section1.css"
const Section1 = () => {
  return (
    <>
    <div className="section1">
        <div className="sec1-cont">
            <h4>Trendy Collection's</h4>
            <h1>Building a better you </h1>
            <p>
            Anyone can beat you but no one can beat your outfit as long as you wear Arsheb outfits.
            </p>
            <Link to="/product" >Start Shopping</Link>
        </div>
        <div className="sec1-img">
            <img src={section1Img} alt="section1Img" />
        </div>
    </div>
  </>
  )
}

export default Section1



