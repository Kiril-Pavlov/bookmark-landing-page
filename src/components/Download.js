import React from 'react'
import "../components/Download.css"
import chromeImg from "../assets/logo-chrome.svg"
import firefoxImg from "../assets/logo-firefox.svg"
import operaImg from "../assets/logo-opera.svg"
import dotsImg from "../assets/bg-dots.svg"

const Download = () => {
  return (
    <div className='download-container'>
      <h2 className="download-title">Download the extension</h2>
      <p className="download-paragraph">We’ve got more browsers in the pipeline.
        Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      <div className='cards-container'>
        <div className='chrome-container'>
          <img src={chromeImg} className="download-browser-img" alt="Chrome Img" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img src={dotsImg} className="dots-img" alt="Dots Img" />
          <button className='download-button'>Add & Install Extension</button>
        </div>

        <div className='firefox-container'>
          <img src={firefoxImg} className="download-browser-img" alt="Chrome Img" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <img src={dotsImg} className="dots-img" alt="Dots Img" />
          <button className='download-button'>Add & Install Extension</button>
        </div>

        <div className='opera-container'>
          <img src={operaImg} className="download-browser-img" alt="Chrome Img" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <img src={dotsImg} className="dots-img" alt="Dots Img" />
          <button className='download-button'>Add & Install Extension</button>
        </div>
      </div>

    </div>
  )
}

export default Download