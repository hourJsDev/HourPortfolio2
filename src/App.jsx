import React, { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home";
import NavlinkDD from "./Components/NavlinkDD";
import { useGlobalContext } from "./Context";
import Works from "./Layouts/Works";
const App = () => {
  const { show } = useGlobalContext();
  return (
    <section className="main">
      <Navbar/>
      {show && <NavlinkDD />}
      <Home/>
      <Works/>
    </section>
  );
};

export default App;
