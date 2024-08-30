import logo from './logo.svg';
import './App.css';
//import MetaMask from './Components/MetaMask';
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import { Home } from './Pages/home';
import { Mint } from './Pages/mint';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mint" element={<Mint />}/>
        </Routes>
      </Router>
  );
}

export default App;
