import React from 'react'
import ServicesMain from '../component/ServicesMain';
import ServicesBar from '../component/ServicesBar';
import ServicesUsed from '../component/ServicesUsed';
import ServicesCard from '../component/ServicesCard';
import Sponsors from '../component/Sponsers'
import Footer from '../component/Footer';

const Services = () => {
  return (
    <div>
      <ServicesMain />
      <ServicesBar />
      <ServicesUsed />
      <ServicesCard />
      <Sponsors /><br />
      <Footer />
      
    </div>
  )
}

export default Services;