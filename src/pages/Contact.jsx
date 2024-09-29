import React from 'react'
import ContactUs from '../component/ContactUs'
import ContactMain from '../component/ContactMain'
import ContactUsed from '../component/ContactUsed';
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