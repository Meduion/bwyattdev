import React from 'react'
import ContactForm from '../ContactComponents/ContactForm';
import Footer from '../Footer/Footer'
import HeroImg2 from '../HeroComponents/HeroImg2';

const Contact = () => {
  return (
    <div>
      <HeroImg2 heading="CONTACT" text="Let's have a conversation" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact