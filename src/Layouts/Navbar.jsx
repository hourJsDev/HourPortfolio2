import React from "react";
import Navlink from "../Components/Navlink";
import "../Styles/Navbar.css";
import DarkModeToggle from "../Components/DarkModeToggle";
const Navbar = () => {
  
  return (
    <nav className="animationLeft navbar flex justify-between sticky items-center w-10/12 mx-auto my-10 ">
      <h1 className="text-4xl dark:text-white text-gray-950">HourJS</h1>
      <DarkModeToggle/>
      <Navlink />
    </nav>
  );
};

export default Navbar;
