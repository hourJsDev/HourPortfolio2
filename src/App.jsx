import { Navbar, Home, Works, Skill, Service } from "./Layouts";
import NavlinkDD from "./Components/NavlinkDD";
import { useGlobalContext } from "./Context";
import './Styles/Animation.css'
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToDown from "./Components/ScrollToDown";
const App = () => {
  const { show } = useGlobalContext();
  return (
    <section className="main">
      <ScrollToDown/>
      <Navbar />
      {show && <NavlinkDD />}
      <Home />
      <Works />
      <Skill />
      <Service/>
      <ScrollToTop/>
    </section>
  );
};

export default App;
