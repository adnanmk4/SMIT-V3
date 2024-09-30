import React from 'react'
import TeamHero from '../component/TeamHero'
import TeamMembers from '../component/TeamMembers'
import TeamSkills from '../component/TeamSkills'
import Sponsors from '../component/Sponsers'
import Footer from '../component/Footer';

const Team = () => {
  return (
    <div>
      <TeamHero />
      <TeamMembers />
      <TeamSkills />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Team
