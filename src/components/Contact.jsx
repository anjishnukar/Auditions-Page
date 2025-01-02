import React from 'react'
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const Contact = () => {
  return (
    <div id='Contact' className='flex flex-col bg-gray-700 h-96 text-gray-300 px-5'>
      <div className='font-anton text-7xl p-6'>Contact</div>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <FlipLink href="#">Twitter</FlipLink>
          <FlipLink href="#">Linkedin</FlipLink>
          <FlipLink href="#">Facebook</FlipLink>
          <FlipLink href="#">Instagram</FlipLink>
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
      className="relative block overflow-hidden whitespace-nowrap font-raleway uppercase text-5xl md:text-7xl"
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