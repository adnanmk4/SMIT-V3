import React from 'react'
import ContactUs from '../component/Contact/ContactUs'
import ContactMain from '../component/Contact/ContactMain'
import ContactUsed from '../component/Contact/ContactUsed';
import Footer from '../component/Footer';


const Contact = () => {
  return (
    <div>
      <ContactMain />
      <ContactUs />
      <ContactUsed />
      <Footer />
    </div>
  )
}

export default Contact