import { useEffect, useState } from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Courses from './components/Course/Courses/Courses'
import Header from './components/Layout/Header/Header'
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
import UserAnalytics from './components/Admin/Analytics/User'
import ViewCourses from './components/Course/ViewCourses/ViewCourses'
import Course from './components/Course/Course'
import AccessCourse from './components/Course/AccessCourse/AccessCourse.js'
import Faq from './components/Faq/Faq'
import Footer from './components/Layout/Footer/Footer'
import io from 'socket.io-client'
import './App.css'
const socket = io('/')

function App() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState(0)
  const [route, setRoute] = useState('Login')
  const [dashboard, setDashboard] = useState(false)
  useEffect(() => {
    socket.on('connected', () => { })
  }, [])
  return (
    <Router>
      {!dashboard && <Header open={open} setOpen={setOpen} active={active} setActive={setActive} setRoute={setRoute} route={route} />}
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/view-courses' element={<ViewCourses />} />
        <Route exact path='/course/:id' element={<Course setOpen={setOpen} setRoute={setRoute} />} />
        <Route exact path='/access-course/:id' element={<AccessCourse />} />
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
      <Footer />
    </Router >
  );
}

export default App;