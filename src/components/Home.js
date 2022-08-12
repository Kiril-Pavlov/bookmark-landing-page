import React from 'react'
import homeImg from "../assets/illustration-hero.svg"
import "../components/Home.css"

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1 className='home-title'>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className='home-buttons'>
          <button className='home-chrome-button'>Get it on Chrome</button>
          <button className='home-firefox-button'>Get it on Firefox</button>
        </div>
      </div>
      <div className='home-image'>
        <img src={homeImg} alt="Home Image" />
        {/* <div className='poligon'></div> */}
      </div>
    </div>
  )
}

export default Home