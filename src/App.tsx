import './App.css';
import Home from './views/Home';
import {Routes, Route,} from 'react-router-dom'
import Navbar from './components/Navbar';
import Team from './views/Team';
import NotFound from './views/NotFound';
import Footer from './components/Footer'
import Therapieen from './views/Therapieen';
import Contact from './views/Contact'
import Praxis from './views/Praxis'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/team' element={<Team />} /> */}
          <Route path='therapien' element={<Therapieen />} />
          <Route path='/praxis' element={<Praxis />} />
          <Route path='/kontakt' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
