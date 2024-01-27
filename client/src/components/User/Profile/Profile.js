import { useState } from 'react'
import SidebarProfile from '../SidebarProfile/SidebarProfile'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import UpdatePassword from '../UpdatePassword/UpdatePassword.js'
import './Profile.css'

const Profile = ({ user }) => {
  const [scroll, setScroll] = useState(false)
  const [chavi, setChavi] = useState(null)
  const [active, setActive] = useState(1)
  const handleLogout = async e => {

  }
  return (
    <div className='profile'>
      <div className={`profileContainer ${scroll ? 'scroll' : ''}`}>
        <SidebarProfile chavi={chavi} user={user} active={active} setActive={setActive} handleLogout={handleLogout} />
      </div>
      {active === 1 &&
        <div className="profileContainer2">
          <ProfileInfo user={user} chavi={chavi} />
        </div>
      }
      {active === 2 &&
        <div className="profileContainer2">
          <UpdatePassword user={user} chavi={chavi} />
        </div>
      }
    </div>
  )
}

export default Profile