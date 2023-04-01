import './App.scss';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Portfolio from './containers/portfolio/Portfolio';
import Skills from './containers/skills/Skills';
import Resume from './containers/resume/Resume';
import Navbar from './components/navbar/Navbar';
import particle from './utils.js/particle';
function App() {
  const handleInit = async(main)=>{
    await loadFull(main)
  }
  const location = useLocation();
  const renderparticle = location.pathname ==="/"
  return (
    <div className="App">
        {
          renderparticle && (<Particles id='particles' options={particle} init={handleInit}/>)
        }

      <Navbar/>
      <div className="App__maincontent">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/portfolio' element={<Portfolio/>}/>
        <Route index path='/skills' element={<Skills/>}/>
        <Route index path='/resume' element={<Resume/>}/>

      </Routes>
      </div>
    </div>

  );
}

export default App;
