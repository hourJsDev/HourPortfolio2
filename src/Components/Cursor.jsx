import React, { useEffect, useRef } from "react";

const Cursor = () => {
    const ref = useRef(null)
    useEffect(()=>{
        window.addEventListener('mousemove',e=>{
            const x = e.clientX
            const y = e.clientY
            ref.current.style.top = y + 'px'
            ref.current.style.left = x + 'px'

        })
    },[])
  return <div ref={ref} className="cursor bg-black
  absolute rounded-full z-[1000]
  dark:bg-white w-[2rem] h-[2rem]"></div>;
};

export default Cursor;
