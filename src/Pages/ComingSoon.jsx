import Navbar from '@/components/Navbar'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const ComingSoon = ({ text = "Results will be out soon!"}) => {
    return (
        <div className='justify-center items-center font-raleway flex flex-col md:flex-row text-center h-screen w-screen bg-gray-900 text-white text-4xl'>
            <Navbar/>
            <div className='m-10'>{ text }</div>
            <DotLottieReact
                src="https://lottie.host/d763507b-0e5b-457b-a796-23e970f22f11/1oAwLslLnM.lottie"
                loop
                autoplay
                className='w-1/4'
            />
        </div>
    )
}

export default ComingSoon