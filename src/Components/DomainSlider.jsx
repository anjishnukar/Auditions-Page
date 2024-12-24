import React from 'react'
import Marquee from 'react-fast-marquee'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const DomainSlider = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-gray-900 text-gray-300 text-9xl font-anton'>
      <div className='relative top-0'>Domains Offered</div>
      <div className='-rotate-12'>
        <Marquee className=' hover:animate-wiggle'>
          <div className=''><DotLottieReact src="https://lottie.host/2c5752eb-1858-49e2-8b10-4c67d4a17fc0/VBWqaypUCK.lottie" loop autoplay/></div>
          <div className='hover:'><DotLottieReact src="https://lottie.host/0717c223-89b2-4b19-9148-c78298d75039/sWA3NktCm0.lottie" loop autoplay/></div>
          <div><DotLottieReact src="https://lottie.host/8e1ffa48-ac8b-4146-bb3e-b0abf1040572/e64kfcvF89.lottie" loop autoplay/></div>
          <div><DotLottieReact src="https://lottie.host/83d64f59-b9f8-4b66-98a6-8dc32e14b90a/Yy2wC9wZc8.lottie" loop autoplay/></div>
        </Marquee>
      </div>
    </div>
  )
}

export default DomainSlider