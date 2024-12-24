import React from 'react'
import LoadingPage from './LoadingPage'
import Hero from '../Components/Hero'
import DomainSlider from '../Components/DomainSlider'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <DomainSlider/>
      <Contact/>
    </div>
  )
}

export default LandingPage
