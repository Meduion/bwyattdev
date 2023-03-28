import React from 'react'
import HeroImg from './HeroImg';
import Footer from './Footer';

const Home = ({ currentPage, switchPage }) => {

  return (
    <div>
      <HeroImg currentPage={currentPage} switchPage={switchPage} />
      <Footer />
    </div>
  )
}

export default Home