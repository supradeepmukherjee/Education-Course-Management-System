import { useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero'
import Profile from './components/User/Profile/Profile'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import CreateCourse from './components/Admin/CreateCourse/CreateCourse'
import AllCourses from './components/Admin/AllCourses/AllCourses'
import People from './components/Admin/People/People.js'
import './App.css'

function App() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState(0)
  const [route, setRoute] = useState('Login')
  const [dashboard, setDashboard] = useState(false)
  return (
    <Router>
      {!dashboard && <Header open={open} setOpen={setOpen} active={active} setActive={setActive} setRoute={setRoute} route={route} />}
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/admin' element={<Dashboard />} />
        <Route exact path='/admin/course' element={<CreateCourse />} />
        <Route exact path='/admin/all-courses' element={<AllCourses />} />
        <Route exact path='/admin/users' element={<People />} />
        <Route exact path='/admin/team' element={<People team={true} />} />
      </Routes >
    </Router >
  );
}

export default App;