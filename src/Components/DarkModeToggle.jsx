import React, { useState } from "react";
import { BsMoonStars ,BsCloudSun } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark)
    const element = document.documentElement;
    element.classList.toggle("dark");
  };
  if (isDark) {
    return (
        <li className="text-4xl absolute left-[50%] dark:text-white cursor-pointer  text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 1">
        <span onClick={handleClick}>
          <BsMoonStars />
        </span>
      </li>
    );
  }
  return (
    
    <li className="text-4xl absolute left-[50%] dark:text-white cursor-pointer  text-gray-950 font-medium transition-all duration-200 ease-linear hover:text-black hover:scale-105 1">
    <span onClick={handleClick}>
      <BsCloudSun />
    </span>
  </li>
  );
};

export default DarkModeToggle;
