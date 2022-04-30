import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {Routes, Route,} from 'react-router-dom'
import Navbar from './components/Navbar';
import Team from './views/Team';
import NotFound from './views/NotFound';
import Footer from './components/Footer'
import Therapieen from './views/Therapieen';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='therapien' element={<Therapieen />} />
          <Route path='/praxis' element={<div>Praxis</div>} />
          <Route path='/kontakt' element={<div>Kontakt</div>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
