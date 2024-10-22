import React from 'react'
import "./section3.css"
import sec3Img1 from "../../assets/sec3Img1.png"
import sec3Img2 from "../../assets/sec3Img2.png"
import sec3Img3 from "../../assets/sec3Img3.png"
const Section3 = () => {
  return (
   <>
   <div className="sec3">
    <div className="sec3-head">
        <h1>New Arrivals</h1>
        <h2></h2>
    </div>
    <div className="sec3-imgdiv">
        <img src={sec3Img1} alt="sec3Img1" />
        <img src={sec3Img2} alt="sec3Img1" />
        <img src={sec3Img3} alt="sec3Img1" />
    </div>
   </div>
   </>
  )
}

export default Section3
