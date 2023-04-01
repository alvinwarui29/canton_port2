import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Portfolio from './containers/portfolio/Portfolio';
import Skills from './containers/skills/Skills';
import Resume from './containers/resume/Resume';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/portfolio' element={<Portfolio/>}/>
        <Route index path='/skills' element={<Skills/>}/>
        <Route index path='/resume' element={<Resume/>}/>

      </Routes>
    </div>
  );
}

export default App;
