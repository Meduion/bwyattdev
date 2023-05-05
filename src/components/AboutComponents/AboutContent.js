import './AboutContentStyles.css';
import photo from '../../assets/mini-headshot.png';

import React from 'react'

const AboutContent = () => {
  
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I'm a full stack developer currently living in Saint John, NB. A graduate of the first edX/UNB Full Stack Coding bootcamp, I've entered the tech industry seeking new professional challenges and creative opportunities.</p>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img'>
            <img src={photo} className='img' alt='Headshot of Brian' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent