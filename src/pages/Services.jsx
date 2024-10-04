import React from 'react'
import ServicesMain from '../component/Services/ServicesMain';
import ServicesBar from '../component/Services/ServicesBar';
import ServicesUsed from '../component/Services/ServicesUsed';
import ServicesCard from '../component/Services/ServicesCard';
import Sponsors from '../component/Sponsers'
import ServicesHelp from '../component/Services/ServicesHelp';
import Footer from '../component/Footer';

const Services = () => {
  return (
    <div>
      <ServicesMain />
      <ServicesBar />
      <ServicesUsed />
      <ServicesCard />
      <Sponsors /><br />
      <ServicesHelp />
      <Footer />
      
    </div>
  )
}

export default Services;