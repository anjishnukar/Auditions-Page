import React from 'react'
import LoadingPage from './LoadingPage'
import Hero from '../Components/Hero'
import DomainSlider from '../Components/DomainSlider'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import DomainAccordion from '../Components/DomainAccordion'
import DomainCards from '../Components/DomainCards'
import Domain from '../Components/Domain'

const LandingPage = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar/>
      <Hero/>
      <About/>
      <DomainSlider/>
      <DomainAccordion/>
      <Contact/>
    </div>
  )
}

export default LandingPage
