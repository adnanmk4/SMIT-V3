import React from 'react'
import AppCarear from '../component/Carear/CarearHero'
import CarearWork from '../component/Carear/CarearWork'
import CarearDescription from '../component/Carear/CarearDescription'
import CarearServices from '../component/Carear/CarearServices'
import CarearUsed from '../component/Carear/CarearUsed'
import CarearJoin from '../component/Carear/CarearJoin'
import CarearHelp from '../component/Carear/CarearHelp'


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