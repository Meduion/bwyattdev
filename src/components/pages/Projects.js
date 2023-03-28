import React from 'react';
import Footer from '../Footer';
import HeroImg2 from '../HeroImg2';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS" text="Some of my recent work" />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Projects