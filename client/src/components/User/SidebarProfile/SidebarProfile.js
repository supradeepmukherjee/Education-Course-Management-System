import { Lock, ExitToApp } from "@mui/icons-material"
import { Link } from "react-router-dom"
import './SidebarProfile.css'

const SidebarProfile = ({ active, setActive, user, chavi, handleLogout }) => {
    return (
        <div className='sidebarProfile'>
            <div className={`sidebarProfileTop ${active === 1 ? 'sidebarProfileActive' : 'sidebarProfileInactive'}`} onClick={() => setActive(1)}>
                <img src={chavi || user.chavi} alt="chavi" className='sidebarProfileChavi' />
                <h5 className='sidebarProfileHeading'>
                    My Account
                </h5>
            </div>
            <div className={`sidebarProfileMain ${active === 2 ? 'sidebarProfileActive' : 'sidebarProfileInactive'}`} onClick={() => setActive(2)}>
                <Lock />
                <h5 className="sidebarProfileHeading">
                    Change Password
                </h5>
            </div>
            <div className={`sidebarProfileMain ${active === 3 ? 'sidebarProfileActive' : 'sidebarProfileInactive'}`} onClick={() => setActive(3)}>
                {/* < /> */}
                <h5 className="sidebarProfileHeading">
                    Active Courses
                </h5>
            </div>
            {user.role === '' && // for admin only
                <Link to={'/admin'} className='sidebarProfileMain sidebarProfileInactive'>
                    {/* < /> */}
                    <h5 className="sidebarProfileHeading">
                        Dashboard
                    </h5>
                </Link>}
            <div className={`sidebarProfileMain ${active === 4 ? 'sidebarProfileActive' : 'sidebarProfileInactive'}`} onClick={handleLogout}>
                <ExitToApp />
                <h5 className="sidebarProfileHeading">
                    Logout
                </h5>
            </div>
        </div>
    )
}

export default SidebarProfile