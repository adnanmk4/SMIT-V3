import React from 'react'
import AppCarear from '../component/CarearHero'
import CarearWork from '../component/CarearWork'
import CarearDescription from '../component/CarearDescription'
import CarearServices from '../component/CarearServices'
import CarearUsed from '../component/CarearUsed'
import CarearJoin from '../component/CarearJoin'
import CarearHelp from '../component/CarearHelp'


const Carear = () => {
  return (
    <div>
      <AppCarear />
      <CarearWork />
      <CarearDescription />
      <CarearServices />
      <CarearUsed />
      <CarearJoin />
      <CarearHelp />
    </div>
  )
}

export default Carear;