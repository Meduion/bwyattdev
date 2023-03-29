import React from 'react'
import HeroImg from '../HeroComponents/HeroImg';
import Footer from '../Footer/Footer';

const Home = ({ currentPage, switchPage }) => {

  return (
    <div>
      <HeroImg currentPage={currentPage} switchPage={switchPage} />
      <Footer />
    </div>
  )
}

export default Home