import React from 'react';
import Footer from '../Footer/Footer';
import HeroImg2 from '../HeroComponents/HeroImg2';
import Work from '../ProjectComponents/Work';

const Projects = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS" text="Some of my recent work" />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects