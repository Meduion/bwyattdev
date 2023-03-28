import './HeroImgStyles.css';

import React from 'react'

import IntroImg from '../assets/hero-main.jpg';

const HeroImg = ({ currentPage, switchPage }) => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='Open Computer with Code' />
      </div>
      <div className='content'>
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer.</h1>
        <div>
          <a href="#Projects" onClick={() => switchPage('Projects')} className={`btn ${currentPage === 'Projects'}`}>
            Projects
          </a>
          <a href="#Contact" onClick={() => switchPage('Contact')} className={`btn btn-light ${currentPage === 'Contact'}`}>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg