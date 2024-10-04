import React from 'react'
import Sponsors from '../component/Sponsers'
import Footer from '../component/Footer';
import FolioHero from '../component/Portfolio/FolioHero';
import ContactUsed from '../component/Contact/ContactUsed';
import AppPortfolio from '../component/Portfolio/Folio';
import AppWork from '../component/Home/work';


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