import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Team from '../pages/Team'
import Navbar from '../component/Navbar'
import NotFound from '../pages/NotFound'
import Web from '../pages/Web'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='services' element={<Services />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='team' element={< Team/>}/>
        <Route path='web' element={<Web />} />
        <Route path='*' element={< NotFound/>}/>

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default AppRouter