import React, { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
import skill from "./data/skill";
export const useGlobalContext = () => useContext(GlobalContext);
const Context = ({ children }) => {
  const [show, setShow] = useState(false);
  const [mySkill, setMySkill] = useState(skill);
  const [selectedSkill,setSelectedSkill] = useState(mySkill[0])
  const showLink = () => {
    setShow(!show);
  };
  return (
    <GlobalContext.Provider value={{ show, showLink,mySkill,selectedSkill,setSelectedSkill }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
