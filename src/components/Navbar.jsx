import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="fixed left-0 right-0 top-10 mx-auto flex max-w-screen w-fit rounded-full border border-gray-700 shadow-lg shadow-black bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-md z-10"
    >
      <Tab setPosition={setPosition} address={"/"}>Home</Tab>
      <Tab setPosition={setPosition} address={"edcnitd.co.in"}>EDC</Tab>
      <Tab setPosition={setPosition} address={"/quiz"}>Questions</Tab>
      <Tab setPosition={setPosition} address={"/results"}>Results</Tab>

      <Cursor position={position} />
    </ul>
  );
};

export default Navbar;

const Tab = ({ address, children, setPosition }) => {
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
      className="relative z-10 block cursor-pointer px-2 py-1.5 text-sm uppercase font-raleway text-white md:px-5 md:py-3 md:text-base"
    >
      <Link to={address}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-full rounded-full bg-gray-700 md:h-12"
    />
  );
};
