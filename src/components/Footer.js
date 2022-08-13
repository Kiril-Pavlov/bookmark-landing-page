import React from 'react'
import { useState } from 'react';
import "../components/Footer.css"
import logoBookmark from "../assets/logo-bookmark.svg"
import { GrFacebook, GrTwitter } from "react-icons/gr"

const Footer = ({ navbarLinks }) => {
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  const toggleMenuButtonClicked = () => {
    setMenuButtonClicked(!menuButtonClicked)
  }

  return (
    <div className='footer-container'>
      <span className='bookmark-logo'>
        <img src={logoBookmark} alt=" Bookmark logo" />
      </span>
      <ul className={!menuButtonClicked ? 'footer-list' : 'footer-list footer-list-active'}>
        {navbarLinks.map((item) => {
          return (
            <li className='footer-item' key={item.title}>
              <a href={item.url} className="footer-link">{item.title}</a>
            </li>
          )}
        )}
      </ul>
      <div className='facebook-twitter-logo'>
        <a href='#'> <GrFacebook size={25}/> </a>
        <a href='#'> <GrTwitter size={25}/> </a>
      </div>
    </div>
  )
}

export default Footer;