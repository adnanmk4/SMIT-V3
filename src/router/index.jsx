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
import Graphics from '../pages/Graphics'
import Flutter from '../pages/Flutter'
import Application from '../pages/Application'
import Ecommerce from '../pages/Ecommerce'
import Logo from '../pages/Logo'
import Branding from '../pages/Branding'
import Illustration from '../pages/Illustration'
import Seo from '../pages/Seo'
import SocialMedia from '../pages/SocialMedia'
import GoogleAds from '../pages/GoogleAds'
import Carear from '../pages/Carear'
import JobLetter from '../pages/JobLetter'
import UIdesigner from '../pages/UIdesigner'
import Cto from '../pages/Cto'
import Founder from '../pages/Founder'
import Devops from '../pages/Devops'
import Softwareengineer from '../pages/Softwareengineer'
import QaaEngineer from '../pages/Qaaengineer'

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
        <Route path='graphics' element={<Graphics />} />
        <Route path='App' element={<Application />} />
        <Route path='ecommerce' element={<Ecommerce />} />
        <Route path='logo' element={<Logo />} />
        <Route path='branding' element={<Branding />} />
        <Route path='illustration' element={<Illustration />} />
        <Route path='seo' element={<Seo />} />
        <Route path='socialmedia' element={<SocialMedia />} />
        <Route path='googleAds' element={<GoogleAds />} />
        <Route path='carear' element={<Carear/>} />
        <Route path='jobletter' element={<JobLetter/>} />

        <Route path='uidesigner' element={<UIdesigner/>} />
        <Route path='cto' element={<Cto/>} />
        <Route path='founder' element={<Founder/>} />
        <Route path='devops' element={<Devops/>} />
        <Route path='softwareengineer' element={<Softwareengineer/>} />
        <Route path='qaengineer' element={<QaaEngineer/>} />





       







        <Route path='*' element={< NotFound/>}/>

        </Routes>

        </BrowserRouter>

    </div>
  )
}

export default AppRouter