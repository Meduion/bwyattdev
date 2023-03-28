import './ProjectCardStyles.css';
import pro1 from '../assets/snowbirdexchange.jpeg';
import pro2 from '../assets/whatscookingprofile.jpg';

import React from 'react'

const ProjectCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={pro1} alt='The Snowbird Exchange'></img>
          <h2 className='project-title'>Project title</h2>
          <div className='pro-details'>
            <p>This is text</p>
            <div className='pro-btns'>
              <a href='https://meduion.github.io/the-snowbird-exchange/' className='btn'>View</a>
              <a href='https://github.com/Meduion/the-snowbird-exchange' className='btn'>Source</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard