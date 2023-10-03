import React from "react";
import {RxCross1} from 'react-icons/rx'
import '../Styles/NavlinkDD.css'
import { useGlobalContext } from "../Context";
const NavlinkDD = () => {
  const {showLink} = useGlobalContext()
  return (
    <ul className="navlinkDD w-full flex flex-col gap-10 h-full justify-center fixed z-50 top-0 bg-gray-950 items-center">
      <li className="text-8xl font-medium  text-white font-medium transition-all duration-200 ease-linear hover:text-gray-100 hover:scale-105">
        <a onClick={showLink} href="#">home</a>
      </li>
      <li className="text-8xl font-medium  text-white font-medium transition-all duration-200 ease-linear hover:text-gray-100 hover:scale-105">
        <a onClick={showLink} href="#about">about</a>
      </li>
      <li className="text-8xl font-medium  text-white font-medium transition-all duration-200 ease-linear hover:text-gray-100 hover:scale-105">
        <a onClick={showLink} href="#work">works</a>
      </li>
      <li className="text-8xl font-medium  text-white font-medium transition-all duration-200 ease-linear hover:text-gray-100 hover:scale-105">
        <a onClick={showLink} href="#">contact</a>
      </li>
      <li className="text-4xl absolute top-11 right-16 cursor-pointer rotate-90 text-white font-medium transition-all duration-200 ease-linear hover:text-gray-100 hover:scale-105 ">
        <span onClick={showLink}>
          <RxCross1/>
        </span>
      </li>
    </ul>
  );
};

export default NavlinkDD;
