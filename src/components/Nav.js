import React from 'react'
import "../components/Nav.css";
import {FiMenu,FiX} from "react-icons/fi"
import logo from "../assets/logo-bookmark.svg"
import { useState } from 'react';

const Nav = ({navbarLinks}) => {

  const [menuButtonClicked,setMenuButtonClicked] = useState(false);

  const toggleMenuButtonClicked = () =>{
    setMenuButtonClicked(!menuButtonClicked)
  }

  return (
    <nav className='navbar'>
      <span className='logo'>
        <img src={logo} alt="logo" />
      </span>
      {menuButtonClicked ? (
        <FiX size={25} className="navbar-button" onClick={toggleMenuButtonClicked} />
        ):(
        <FiMenu size={25} className="navbar-button" onClick={toggleMenuButtonClicked} />
      )}
      <ul className={!menuButtonClicked ? 'navbar-list' : 'navbar-list navbar-list-active'}>
        {navbarLinks.map((item) =>{
          return (
            <li className='navbar-item' key={item.title}>
              <a href={item.url} className="navbar-link">{item.title}</a>
            </li>
          )
        }
        )}
        <li className='navbar-item'>
          <a href="#" className='special-link'>LOGIN</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav