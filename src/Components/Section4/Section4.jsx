import React from 'react'
import "./Section4.css"
import sec4Img1 from "../../assets/sec4Img1.png"
import sec4Img2 from "../../assets/sec4Img2.png"
import sec4Img3 from "../../assets/sec4Img3.png"
const Section4 = () => {
  return (
   <>
   <div className="Section4">
    <h1>Wearing What Makes you Comfortable is a Statement</h1>
    <div className="section4-items">
        <div className="sec4-card">
            <img src={sec4Img1} alt="sec4Img1" />
            <h2>Ear Rings</h2>
            <button>Price @100</button>
            <button>View More</button>
        </div>
        <div className="sec4-card">
            <img src={sec4Img2} alt="sec4Img1" />
            <h2>Ear Rings</h2>
            <button>Price @200</button>
            <button>View More</button>
        </div>
        <div className="sec4-card">
            <img src={sec4Img3} alt="sec4Img1" />
            <h2>Ear Rings</h2>
            <button>Price @300</button>
            <button>View More</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Section4
