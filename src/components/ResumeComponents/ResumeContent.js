import './ResumeContentStyles.css';
import resume from '../../assets/webDevResume.pdf'

import React from 'react'

const ResumeContent = () => {
  return (
    <div className='resume'>
      <div className='left'>
        <h2>Front-End Proficiencies</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Responsive Web Design</p>
        <p>React</p>
        <p>Bootstrap & other CSS Libraries</p>
      </div>
      <div className='right'>
        <h2>Back-End Proficiencies</h2>
        <p>APIs</p>
        <p>Node</p>
        <p>Express</p>
        <p>MySQL / Sequelize</p>
        <p>MongoDB / Mongoose</p>
        <p>GraphQL</p>
      </div>
      <div>
        <h2 className='under'><a href={resume} download='webDevResume.pdf'>Please click here for a full downloadable resume.</a></h2>
      </div>
    </div>
  )
}

export default ResumeContent