import './NavBarStyles.css';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ currentPage, switchPage }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="#Home" onClick={() => switchPage('Home')} className={currentPage === 'Home'}>
        <h1>BRIAN WYATT</h1>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#Projects" onClick={() => switchPage('Projects')} className={currentPage === 'Projects'}>
            Projects
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => switchPage('About')} className={currentPage === 'About'}>
            About Me
          </a>
        </li>
        <li>
          <a href="#Resume" onClick={() => switchPage('Resume')} className={currentPage === 'Resume'}>
            Resume
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={() => switchPage('Contact')} className={currentPage === 'Contact'}>
            Contact
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{ color: "#fff" }}/>
        ) : (
        <FaBars size={20} style={{ color: "#fff" }}/>
        )}
      </div>
    </div>
  )
}

export default NavBar