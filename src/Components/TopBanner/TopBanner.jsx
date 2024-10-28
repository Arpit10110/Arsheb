import React from 'react'
import "./TopBanner.css"
import TopBannerImg from "../../assets/TopBannerImg.png"
const TopBanner = ({value}) => {
  return (
    <>
        <div className="top-banner">
            <h1>{value}</h1>
            <div className='top-bannerImg' >
                <img src={TopBannerImg} alt="TopBannerImg" />
            </div>
        </div>
    </>
  )
}

export default TopBanner
