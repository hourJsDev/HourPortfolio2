import React from "react";
import {FiBarChart2} from 'react-icons/fi'
import '../Styles/Navlink.css'
import { useGlobalContext } from "../Context";
const Navlink = () => {
  const {showLink} = useGlobalContext()
  return (
    <ul className="navlink flex gap-8 items-center">
      <li className="text-xl  dark:text-white text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 hover:-translate-y-1">
        <a href="#">HOME</a>
      </li>
      <li className="text-xl dark:text-white text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 hover:-translate-y-1">
        <a href="#about">ABOUT</a>
      </li>
      <li className="text-xl dark:text-white text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 hover:-translate-y-1">
        <a href="#work">WORKS</a>
      </li>
      <li className="text-xl  dark:text-white text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 hover:-translate-y-1">
        <a href="#">CONTACT</a>
      </li>
      
      <li className="text-4xl  dark:text-white cursor-pointer rotate-90 text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 1">
        <span onClick={showLink}><FiBarChart2/></span>
      </li>
    </ul>
  );
};

export default Navlink;
