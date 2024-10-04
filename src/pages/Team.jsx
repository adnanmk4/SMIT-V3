import React from 'react'
import TeamHero from '../component/Team/TeamHero'
import TeamMembers from '../component/Team/TeamMembers'
import TeamSkills from '../component/Team/TeamSkills'
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
