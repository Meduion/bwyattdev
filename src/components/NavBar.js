import './NavBarStyles.css';
import React from 'react'

const NavBar = ({ currentPage, switchPage }) => {
  return (
    <div className="header">
      <a href="#Home" onClick={() => switchPage('Home')} className={currentPage === 'Home'}>
        <h1>Portfolio</h1>
      </a>
      <ul>
        <li>
          <a href="#Projects" onClick={() => switchPage('Projects')} className={currentPage === 'Projects'}>
            <h1>Projects</h1>
          </a>
        </li>
        <li>
          <a href="#About" onClick={() => switchPage('About')} className={currentPage === 'About'}>
            <h1>About Me</h1>
          </a>
        </li>
        <li>
          <a href="#Resume" onClick={() => switchPage('Resume')} className={currentPage === 'Resume'}>
            <h1>Resume</h1>
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={() => switchPage('Contact')} className={currentPage === 'Contact'}>
            <h1>Contact</h1>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar