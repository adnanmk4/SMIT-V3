import React from 'react'
import HomeServices from '../component/HomeServices'
import AppHero from '../component/hero'
import AppReview from '../component/Review'
import Sponsors from '../component/Sponsers'
import WhatWeWorkOn from '../component/skills'
import AppWork from '../component/work'
import HomeTeam from '../component/HomeTeam'
import Footer from '../component/Footer';


const Home = () => {
  return (
    <>
      <div>
        <AppHero />
      </div>
      <div>
        <HomeServices />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <WhatWeWorkOn />
      </div>
      <div>
        <AppWork />
      </div>
      <div>
        <HomeTeam />
      </div>
      <div>
        <AppReview />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home;