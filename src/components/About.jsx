import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row py-5'>
      <div className='bg-gray-900 w-full md:w-1/2 order-2 md:order-1'><Typewriter/></div>
      <div id='About' className='right-0 h-fit md:h-screen md:w-1/2 flex flex-col bg-gray-950 rounded-3xl text-gray-300 px-10 justify-start text-center order-1 md:order-2'>
        <div className='font-raleway font-bold top-0 text-6xl md:text-8xl py-10 text-center'>About Us</div>
        <div className='font-raleway text-xl mb-5 md:text-4xl'>We are a vibrant community of hardworking individuals who would like to see an increase in interest of entreprenurship 
          among the students of NIT Durgapur. We organise the second-largest entrepreneurship fest in eastern India and host events 
          like <span className='relative'>Bizcup<svg viewBox="0 0 300 85" fill="none" className='absolute -top-6 md:-top-5 translate-y-5 bottom-10 -left-4 -right-2'>
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{duration:1.25, ease: "easeInOut"}} d="M242 1C191.333 1.66667 87 19 64 24C38.3503 29.576 -30 52 19 72C58.2 88 197.333 83.3333 262 79C277.667 79 306.4 72.6 296 47C283 15 262 26 191 16C120 6 71 7 64 7" stroke="white" stroke-width="5"/>
        </svg></span> and <span className='relative'>HultPrize<svg viewBox="0 0 300 85" fill="none" className='absolute -top-5 md:-top-7 translate-y-3 bottom-10 -left-4 -right-2'>
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{duration:1.25, ease: 'easeInOut'}} d="M242 1C191.333 1.66667 87 19 64 24C38.3503 29.576 -30 52 19 72C58.2 88 197.333 83.3333 262 79C277.667 79 306.4 72.6 296 47C283 15 262 26 191 16C120 6 71 7 64 7" stroke="white" stroke-width="5"/>
        </svg></span> throughout the year</div>
      </div>
    
    </div>
  );
};


export default About

const Typewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = ['E-SUMMIT', 'E-Talks', 'Start-up Expo', 'Pitchfest', 'Internship Fair', 'Hult Prize', 'Bizcup'];

  useEffect(() => {
    const handleType = async () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause at full text
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <div className="h-fit mt-28 md:mt-5 md:h-screen flex items-center justify-center bg-gray-900 text-gray-500 font-poppins">
      <h1 className="text-4xl md:text-6xl font-bold">
        We conduct
        <br />
       <span className="text-blue-600 font-bold">{text}</span>
        <span className="text-blue-600 animate-blink">|</span>
      </h1>
    </div>
  );
};

/* Add the following Tailwind CSS classes for animations */
// In your tailwind.config.js file, extend the theme:
// module.exports = {
//   theme: {
//     extend: {
      // animation: {
      //   blink: 'blink 1s step-end infinite',
      //   wave: 'wave 2s infinite',
      // },
      // keyframes: {
      //   blink: {
      //     '0%, 50%': { opacity: 1 },
      //     '50.1%, 100%': { opacity: 0 },
      //   },
      //   wave: {
      //     '0%, 100%': { transform: 'rotate(0deg)' },
      //     '50%': { transform: 'rotate(15deg)' },
      //   },
//       },
//     },
//   },
//   plugins: [],
// }
