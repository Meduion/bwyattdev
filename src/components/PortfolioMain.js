import React, { useState } from 'react';

function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  };

  const switchPage = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} switchPage={switchPage} />
      {renderPage()}
    </div>
  );
}

export default PortfolioMain