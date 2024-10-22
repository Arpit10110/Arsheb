import React from 'react'
import "./Section2.css"
import section2Img1 from  "../../assets/section2Img1.png"
import section2Img2 from  "../../assets/section2Img2.png"
import section2Img3 from  "../../assets/section2Img3.png"
import section2Img4 from  "../../assets/section2Img4.png"
const Section2 = () => {
  return (
    <>
    <div className="section2">
        <div className="sec2box">
            <img src={section2Img1} alt="section2Img1" />
            <h2>Men's Clothing</h2>
        </div>
        <div className="sec2box">
            <img src={section2Img2} alt="section2Img1" />
            <h2>Women’s Clothing</h2>
        </div>
        <div className="sec2box">
            <img src={section2Img3} alt="section2Img1" />
            <h2>Jewellery</h2>
        </div>
        <div className="sec2box">
            <img src={section2Img4} alt="section2Img1" />
            <h2>Hair Accessories</h2>
        </div>
    </div>
    </>
  )
}

export default Section2
