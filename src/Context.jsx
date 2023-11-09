import React, { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
import services from "./data/Service";
import skill from "./data/skill";
export const useGlobalContext = () => useContext(GlobalContext);
const Context = ({ children }) => {
  const [show, setShow] = useState(false);
  const [mySkill, setMySkill] = useState(skill);
  const [selectedSkill,setSelectedSkill] = useState(mySkill[3])
  const showLink = () => {
    setShow(!show);
  };
  return (
    <GlobalContext.Provider value={{ show, showLink,mySkill,services,selectedSkill,setSelectedSkill }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
