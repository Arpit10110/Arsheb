import React from 'react'
import "./Section5.css"
import Sec5Img1 from "../../assets/Sec5Img1.png"
import Sec5Img2 from "../../assets/Sec5Img2.png"
import Sec5Img3 from "../../assets/Sec5Img3.png"
import Sec5Img4 from "../../assets/Sec5Img4.png"
import Sec5Img5 from "../../assets/Sec5Img5.png"
const Section5 = () => {
  return (
  <>
  <div className="sec5">
  <div className="sec3-head">
        <h1>Our Products</h1>
        <h2></h2>
    </div>
    <div className="sec5-allprods">
        <div className="sec5-card">
            <img src={Sec5Img1} alt="" />
            <h2>T shirts</h2>
        </div>
        <div className="sec5-card">
            <img src={Sec5Img2} alt="" />
            <h2>Tops</h2>
        </div>
        <div className="sec5-card">
            <img src={Sec5Img3} alt="" />
            <h2>Ear Rings</h2>
        </div>
        <div className="sec5-card">
            <img src={Sec5Img4} alt="" />
            <h2>Necklace</h2>
        </div>
        <div className="sec5-card">
            <img src={Sec5Img5} alt="" />
            <h2>Trousers</h2>
        </div>
    </div>
  </div>
  </>
  )
}

export default Section5
