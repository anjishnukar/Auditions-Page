import React from 'react'
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const DURATION = 0.25;
const STAGGER = 0.025;

const Contact = () => {
  return (
    <div id='Contact' className='bg-black rounded-t-3xl z-10 text-gray-300 px-5 pb-2'>
      <div className='font-raleway font-bold text-7xl py-8'>Contact</div>
      <div className='flex flex-col md:flex-row md:items-end md:justify-between'>
        <div className='flex flex-col'>
          <FlipLink href="#">Instagram</FlipLink>
          <FlipLink href="#">Linkedin</FlipLink>
          <FlipLink href="#">Youtube</FlipLink>
          <FlipLink href="#">Facebook</FlipLink>
          <FlipLink href="#">Mail</FlipLink>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 md:hidden"></hr>
        <div className='font-raleway md:text-xl text-gray-500 md:text-right'>
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
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-raleway uppercase text-3xl text-gray-500 md:text-5xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
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
      <div className="absolute inset-0">
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