import "./App.scss";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Portfolio from "./containers/portfolio/Portfolio";
import Skills from "./containers/skills/Skills";
import Resume from "./containers/resume/Resume";
import Navbar from "./components/navbar/Navbar";
import particle from "./utils.js/particle";
import Contact from "./containers/contact/Contact";
function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  const location = useLocation();
  const renderparticle = location.pathname === "/";
  return (
    <div className="App">
      {renderparticle && (
        <Particles id="particles" options={particle} init={handleInit} />
      )}

      <Navbar />
      <div className="App__maincontent">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
