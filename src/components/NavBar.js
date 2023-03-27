import './NavBarStyles.css';
import React from 'react'

const NavBar = ({ currentPage, switchPage }) => {
  return (
    <div className="header">
      <a href="#Home" onClick={() => switchPage('Home')} className={currentPage === 'Home'}>
        <h1>Portfolio</h1>
      </a>
      <ul className='nav-menu'>
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
    </div>
  )
}

export default NavBar