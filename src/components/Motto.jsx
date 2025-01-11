import React from 'react'
import Marquee from 'react-fast-marquee'

const Motto = () => {
  return (
    <div className='flex flex-col mt-0 md:mt-2 md:flex-row justify-center items-center bg-gradient-to-r from-indigo-900 to-gray-900 text-gray-300 text-4xl font-raleway py-10'>
        <Marquee>
            <div className='px-6'>Ideate.</div>
            <div className='px-6'>Innovate.</div>
            <div className='px-6'>Inspire.</div>
            <div className='px-6'>Ideate.</div>
            <div className='px-6'>Innovate.</div>
            <div className='px-6'>Inspire.</div>
            <div className='px-6'>Ideate.</div>
            <div className='px-6'>Innovate.</div>
            <div className='px-6'>Inspire.</div>
        </Marquee>
    </div>
  )
}

export default Motto
