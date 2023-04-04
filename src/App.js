import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Particle from './components/Particle/Particle';
import Portfolio from './components/Portfolio/Portfolio';
import ErrorPage from './pages/ErrorPage';
import HomeWrapper from './pages/HomeWrapper';


function App() {
  
  return (
    <div className="App">
      <Particle />
      <Routes>
        <Route path='/' element={<HomeWrapper/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
