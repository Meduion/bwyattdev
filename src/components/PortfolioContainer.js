import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './NavBar';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home currentPage={currentPage} switchPage={switchPage}/>;
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
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer