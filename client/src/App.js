import { useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero.js';
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [route, setRoute] = useState('Login')
  return (
    <Router>
      <Header open={open} setOpen={setOpen} active={active} setActive={setActive} setRoute={setRoute} route={route} />
      <Routes>
        <Route exact path='/' element={<Hero />} />
      </Routes >
    </Router >
  );
}

export default App;