import { useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  return (
    <Router>
      <Header open={open} setOpen={setOpen} active={active} setActive={setActive} />
      {/* title,desc,keywords  */}
      <Routes>
        {/* <Route exact path='/' element={</>}/> */}
      </Routes >
    </Router >
  );
}

export default App;