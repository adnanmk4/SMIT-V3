import React from 'react'
import AppFolio from '../component/Folio'
import Sponsors from '../component/Sponsers'
import Footer from '../component/Footer';


const Portfolio = () => {
  return (
    <>
      <div>
        <AppFolio />
      </div>
      <div>
        <Sponsors />
      </div> <br />
      <Footer />
    </>
  )
}

export default Portfolio;