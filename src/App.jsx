import { Navbar, Home, Works, Skill } from "./Layouts";
import NavlinkDD from "./Components/NavlinkDD";
import { useGlobalContext } from "./Context";
import './Styles/Animation.css'
const App = () => {
  const { show } = useGlobalContext();
  return (
    <section className="main">
      <Navbar />
      {show && <NavlinkDD />}
      <Home />
      <Works />
      <Skill />
    </section>
  );
};

export default App;
