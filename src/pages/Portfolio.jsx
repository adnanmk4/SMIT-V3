import React from 'react'
import Sponsors from '../component/Sponsers'
import Footer from '../component/Footer';
import FolioHero from '../component/FolioHero';
import ContactUsed from '../component/ContactUsed';
import AppPortfolio from '../component/Folio';
import AppWork from '../component/work';


const Portfolio = () => {
  return (
    <>
      <div>
        <FolioHero />
        <div>

        <AppPortfolio />
        </div>

        <Sponsors />

        <AppWork />
        
        <ContactUsed />
        <Footer />

      </div>
    </>
  )
}

export default Portfolio;