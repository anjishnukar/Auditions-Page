import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className='min-h-screen flex flex-row'>
      <div classname='flex w-[50%] h-screen bg-black'>

      </div>
      <div id='About' className='min-h-screen w-[50%] flex flex-col bg-gray-900 text-gray-300 px-10 items-end justify-end text-end'>
        <div className='font-anton text-9xl py-10'>About Us</div>
        <div className='font-agudisplay text-5xl'>We are a vibrant community of hardworking individuals who would like to see an increase in interest of entreprenurship 
          among the students of NIT Durgapur. We organise the second-largest entrepreneurship fest in eastern India and host events 
          like <span className='relative'>Bizcup<svg viewBox="0 0 300 85" fill="none" className='absolute -top-2 translate-y-5 bottom-10 -left-4 -right-2'>
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{duration:1.25, ease: "easeInOut"}} d="M242 1C191.333 1.66667 87 19 64 24C38.3503 29.576 -30 52 19 72C58.2 88 197.333 83.3333 262 79C277.667 79 306.4 72.6 296 47C283 15 262 26 191 16C120 6 71 7 64 7" stroke="white" stroke-width="5"/>
        </svg></span> and <span className='relative'>HultPrize<svg viewBox="0 0 300 85" fill="none" className='absolute -top-3 translate-y-3 bottom-10 -left-4 -right-2'>
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{duration:1.25, ease: 'easeInOut'}} d="M242 1C191.333 1.66667 87 19 64 24C38.3503 29.576 -30 52 19 72C58.2 88 197.333 83.3333 262 79C277.667 79 306.4 72.6 296 47C283 15 262 26 191 16C120 6 71 7 64 7" stroke="white" stroke-width="5"/>
        </svg></span> throughout the year</div>
        <div className='relative left-[50%] py-10 text-gray-500 font-shadows rotate-12'>*trumpets fade out*</div>
      </div>
    
    </div>
  )
}

export default About
