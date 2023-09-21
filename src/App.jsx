import React, { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home";
import NavlinkDD from "./Components/NavlinkDD";
import { useGlobalContext } from "./Context";
const App = () => {
  const { show } = useGlobalContext();
  return (
    <section className="main">
      {!show && <Navbar />}
      {show && <NavlinkDD />}
      {!show && <Home />}
    </section>
  );
};

export default App;
