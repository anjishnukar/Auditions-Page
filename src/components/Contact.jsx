import React from 'react'
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const DURATION = 0.25;
const STAGGER = 0.025;

const Contact = () => {
  return (
    <div id='Contact' className='bg-black rounded-t-3xl z-10 text-gray-300 px-5 pb-2'>
      <div className='font-raleway font-bold text-4xl py-8 text-white md:hidden'>Contact</div>
      <div className='flex flex-col md:flex-row-reverse md:items-end md:justify-between'>
        <div className='flex flex-col'>
          <FlipLink href="https://www.instagram.com/edc.nitd/">Instagram</FlipLink>
          <FlipLink href="https://in.linkedin.com/company/edcnitd">Linkedin</FlipLink>
          <FlipLink href="https://www.youtube.com/@edcnitd">Youtube</FlipLink>
          <FlipLink href="https://www.facebook.com/edc.nitd/">Facebook</FlipLink>
          <FlipLink href="mailto: edc@nitdgp.ac.in">Mail</FlipLink>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 md:hidden"></hr>
        <div className='font-raleway md:text-xl text-gray-500'>
          <div className='font-raleway font-bold text-4xl py-8 text-white hidden md:block'>Contact</div>
          <div className=''>Entrepreneurship Development Cell</div>
          <div className=''>NIT Durgapur</div>
          <div className=''><FaPhone className='mr-1 inline' />: +91 70076 47720 (Sanvie Singhal)</div>
          <div className=''>Made with❤️by Web-Team </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-raleway uppercase text-3xl text-gray-500 md:text-5xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className='w-fit md:float-right'>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute md:right-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};