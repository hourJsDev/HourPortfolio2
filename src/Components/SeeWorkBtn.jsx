import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const SeeWorkBtn = () => {
  return (
    <div className="flex items-center mt-20">
       <div className="w-16 h-16 rounded-full dark:bg-gray-800 absolute bg-gray-200">

       </div>
      <span className="flex  dark:text-white relative hover:gap-10 transition-all duration-200 ease-linear  ml-4  gap-4 items-center text-xl uppercase font-semibold">
        <a href="#work">See my work</a>{" "}
        <span className=" dark:text-white">
          <AiOutlineArrowRight />
        </span>
      </span>
    </div>
  );
};

export default SeeWorkBtn;
