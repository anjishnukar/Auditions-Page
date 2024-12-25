import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed left-0 right-0 top-10 mx-auto flex w-fit rounded-full border-2 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 z-10"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>EDC</Tab>
      <Tab setPosition={setPosition}>Profile</Tab>
      <Tab setPosition={setPosition}>Questions</Tab>
      <Tab setPosition={setPosition}>Results</Tab>

      <Cursor position={position} />
    </ul>
  );
};

export default Navbar;

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white font-bold font-raleway mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-blue-600 md:h-12a"
    />
  );
};
