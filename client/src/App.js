import { useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero'
import Profile from './components/User/Profile/Profile'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import CreateCourse from './components/Admin/CreateCourse/CreateCourse'
import AllCourses from './components/Admin/AllCourses/AllCourses'
import People from './components/Admin/People/People'
import EditCourse from './components/Admin/EditCourse/EditCourse'
import EditHero from './components/Admin/EditHero/EditHero'
import EditFaq from './components/Admin/EditFaq/EditFaq'
import EditCategories from './components/Admin/EditCategories/EditCategories'
import CourseAnalytics from './components/Admin/Analytics/Course'
import OrderAnalytics from './components/Admin/Analytics/Order'
import UserAnalytics from './components/Admin/Analytics/User.js'
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
        <Route exact path='/admin/edit' element={<EditCourse />} />
        <Route exact path='/admin/customise/hero' element={<EditHero />} />
        <Route exact path='/admin/customise/faq' element={<EditFaq />} />
        <Route exact path='/admin/customise/categories' element={<EditCategories />} />
        <Route exact path='/admin/analytics-courses' element={<CourseAnalytics />} />
        <Route exact path='/admin/analytics-orders' element={<OrderAnalytics />} />
        <Route exact path='/admin/analytics-users' element={<UserAnalytics />} />
      </Routes >
    </Router >
  );
}

export default App;