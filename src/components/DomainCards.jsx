import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Marquee from 'react-fast-marquee';



const DomainCards = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen justify-center items-center bg-gray-900 text-gray-300 text-9xl font-anton'>
      <div className='relative top-0'>Domains Offered</div>
      <div>
        <Marquee>
            <LottieCard url='https://lottie.host/2c5752eb-1858-49e2-8b10-4c67d4a17fc0/VBWqaypUCK.lottie' text='Web Development' description='lorem'/>
            <LottieCard url='https://lottie.host/0717c223-89b2-4b19-9148-c78298d75039/sWA3NktCm0.lottie' text='Content Writing' description='lorem'/>
            <LottieCard url='https://lottie.host/8e1ffa48-ac8b-4146-bb3e-b0abf1040572/e64kfcvF89.lottie' text='Video Editing' description='lorem'/>
            <LottieCard url='https://lottie.host/83d64f59-b9f8-4b66-98a6-8dc32e14b90a/Yy2wC9wZc8.lottie' text='Graphic Designing' description='lorem'/>
        </Marquee>
        {/* <LottieCard url='https://lottie.host/2c5752eb-1858-49e2-8b10-4c67d4a17fc0/VBWqaypUCK.lottie' text='Web Development'/> */}
      </div>
    </div>
  )
}

export default DomainCards;




const LottieCard = ({ url, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-72 h-48 overflow-hidden rounded-lg shadow-lg transition-transform transform ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lottie Animation */}
      <DotLottieReact
        src={url}
        autoplay
        loop
        className={`absolute inset-0 w-full h-full transition-filter ${
          isHovered ? "blur-lg" : ""
        }`}
      />

      {/* Overlay Text */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

// const LottieCard = ({ src, title, description }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-72 h-48 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${isHovered ? 'blur-sm' : ''}`}>
//         <DotLottieReact
//           src={src}
//           autoplay
//           loop
//           style={{ width: '100%', height: '100%' }}
//         />
//       </div>
//       <div
//         className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <h2 className="text-2xl font-bold mb-2">{title}</h2>
//         <p className="text-center">{description}</p>
//       </div>
//     </div>
//   );
// };

