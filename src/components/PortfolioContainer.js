import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import NavBar from './NavBar';
import HeroImg from './HeroImg';
import Footer from './Footer';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    return <About />;
  };

  const switchPage = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} switchPage={switchPage} />
      <HeroImg currentPage={currentPage} switchPage={switchPage} />
      <Footer />
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer