import { useEffect, useState } from 'react'
import SidebarProfile from '../SidebarProfile/SidebarProfile'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import UpdatePassword from '../UpdatePassword/UpdatePassword.js'
import './Profile.css'
import CourseCard from '../../Course/CourseCard/CourseCard'

const Profile = () => {
  const [scroll, setScroll] = useState(false)
  const [chavi, setChavi] = useState(null)
  const [active, setActive] = useState(1)
  const [courses, setCourses] = useState([])
  const handleLogout = async e => {

  }
  useEffect(() => {
    const filtered = user.courses.map(c => coursesData._id === c._id).filter(c => c !== undefined)
    setCourses(filtered)
  }, [coursesData._id, user, courses])
  return (
    <div className='profile'>
      <div className={`profileContainer ${scroll ? 'scroll' : ''}`}>
        <SidebarProfile chavi={chavi} user={user} active={active} setActive={setActive} handleLogout={handleLogout} />
      </div>
      {active === 1 &&
        <div className="profileContainer2">
          <ProfileInfo user={user} chavi={chavi} />
        </div>}
      {active === 2 &&
        <div className="profileContainer2">
          <UpdatePassword user={user} chavi={chavi} />
        </div>}
      {active === 3 &&
        <div className="profileContainer3">
          <div>
            {courses.map(course => <CourseCard course={course} key={course._id} isProfile={true} />)}
          </div>
          {courses.length === 0 &&
            <h1>
              Buy a Course to excel in your career
            </h1>}
        </div>}
    </div>
  )
}

export default Profile