import React from 'react'
import Footer from '../Footer/Footer'
import HeroImg2 from '../HeroComponents/HeroImg2';
import ResumeContent from '../ResumeComponents/ResumeContent';

const Resume = () => {
  return (
    <div>
      <HeroImg2 heading="RESUME"/>
      <ResumeContent />
      <Footer />
    </div>
  )
}

export default Resume