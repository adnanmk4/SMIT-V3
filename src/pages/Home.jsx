import React from 'react'
import HomeServices from '../component/Home/HomeServices'
import AppHero from '../component/Home/Hero'
import AppReview from '../component/Home/Review'
import Sponsors from '../component/Sponsers'
import WhatWeWorkOn from '../component/Home/skills'
import AppWork from '../component/Home/work'
import HomeTeam from '../component/Home/HomeTeam'
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