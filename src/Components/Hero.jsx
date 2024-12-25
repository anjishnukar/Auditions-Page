import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// const Hero = () => {
//   return (
//       <div id='Home' className='h-screen w-screen bg-gray-900 text-gray-300 flex md:flex-row px-5'>
//         <div className='flex flex-col justify-center items-center text-center'>
//           <div className='t text-gray-500 font-shadows -rotate-12'>*trumpets blowing*</div>
//           <div className='text-9xl font-anton'>Welcome to <span className='bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent'>EDC Auditions</span> </div>
//           <div className='font-raleway px-5'>Are you ready for auditioning for the most sought out club in NIT Durgapur? Before the auditions, answer a few questions for us to get to know you better</div>
//           <DrawOutlineButton>Register</DrawOutlineButton>
//         </div>
//         <div className='w-[50%]'>
//         <DotLottieReact
//       src="https://lottie.host/6cdb90fa-b8fe-45eb-89ca-0a2935e0fe51/tmRN95D35Y.lottie"
//       loop
//       autoplay
//     />
//         </div>
//       </div>  
//   )
// }

// export default Hero


const Hero = () => {
  return (
    <div
      id="Home"
      className="h-screen w-screen bg-gray-900 text-gray-300 flex flex-col md:flex-row px-5"
    >
      <div className="flex flex-col justify-center items-center text-center w-full md:w-[50%] order-1">
        <div className="text-gray-500 font-shadows -rotate-12 mb-2">
          *trumpets blowing*
        </div>
        <div className="text-5xl md:text-9xl font-anton mb-5">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">
            EDC Auditions
          </span>
        </div>
        <div className="font-raleway px-5 mb-5">
          Are you ready for auditioning for the most sought-out club in NIT
          Durgapur? Before the auditions, answer a few questions for us to get
          to know you better.
        </div>
        <button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-gray-900 rounded-[6px] font-raleway font-bold relative group transition duration-200 text-white hover:bg-transparent">
        Register
      </div>
    </button>
      </div>

      <div className="w-full h-full md:w-[50%] order-2 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/6cdb90fa-b8fe-45eb-89ca-0a2935e0fe51/tmRN95D35Y.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;





