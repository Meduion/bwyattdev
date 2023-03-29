import React from 'react'
import AboutContent from '../AboutComponents/AboutContent';
import Footer from '../Footer/Footer'
import HeroImg2 from '../HeroComponents/HeroImg2';

const About = () => {
  return (
    <div>
      <HeroImg2 heading="About Me" text="Full Stack Web Developer looking to break in to the tech industry in Canada" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About