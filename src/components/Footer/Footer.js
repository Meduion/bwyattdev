import './FooterStyles.css';

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            <div>
              <p>Saint John,</p>
              <p>New Brunswick</p>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            506-886-1017
            </h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            <a href='mailto:bwyatt.dev@gmail.com'>bwyatt.dev@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Brian Wyatt - Web Developer</h4>
          <p>Check out my LinkedIn or GitHub below.</p>
          <div className='social'>
            <a href='https://www.linkedin.com/in/bwyattdev/' target='_blank' rel='noreferrer'>
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </a>
            <a href='https://github.com/Meduion' target='_blank' rel='noreferrer'>
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer