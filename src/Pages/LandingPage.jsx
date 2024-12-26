import React from 'react'
import Hero from '../Components/Hero'
import DomainSlider from '../Components/DomainSlider'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
import Motto from '../Components/Motto'

const LandingPage = () => {
  return (
    <div className='bg-gray-900'>
      <div class="fixed top-24 left-48 w-72 h-72 bg-purple-300 rounded-full filter blur-xl opacity-30 animate-blob"></div>
      <div class="fixed top-96 right-96 w-72 h-72 bg-indigo-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="fixed top-72 left-72 w-72 h-72 bg-pink-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <Navbar/>
      <Hero/>
      <Motto/>
      <About/>
      <DomainSlider/>
      <Contact/>
    </div>
  )
}

export default LandingPage
