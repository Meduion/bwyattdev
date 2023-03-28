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
            bwyatt.dev@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>This is Brian Wyatt. I enjoy discussing new projects and design challenges.</p>
          <div className='social'>
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer