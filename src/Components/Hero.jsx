import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Hero = () => {
  return (
      <div id='Home' className='h-screen w-screen bg-gray-900 text-gray-300 flex md:flex-row px-5'>
        <div className='flex flex-col justify-center items-center text-center'>
          <div className='t text-gray-500 font-shadows -rotate-12'>*trumpets blowing*</div>
          <div className='text-9xl font-anton'>Welcome to <span className='bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent'>EDC Auditions</span> </div>
          <div className='font-raleway px-5'>Are you ready for auditioning for the most sought out club in NIT Durgapur? Before the auditions, answer a few questions for us to get to know you better</div>
          <DrawOutlineButton>Register</DrawOutlineButton>
        </div>
        <div className='w-[50%]'>
        <DotLottieReact
      src="https://lottie.host/6cdb90fa-b8fe-45eb-89ca-0a2935e0fe51/tmRN95D35Y.lottie"
      loop
      autoplay
    />
        </div>
      </div>  
  )
}

export default Hero



const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative rounded-xl px-4 py-2 font-medium text-gray-500 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>
      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};
