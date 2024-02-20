import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.js'
import Header from '../Header/Header.js'
import './Dashboard.css'
import UserAnalytics from '../Analytics/User.js'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='dashboard'>
      <div className="dashboardSidebar">
        <Sidebar />
      </div>
      <div className="dashboardMain">
        <Header open={open} setOpen={setOpen} />
        {isDashboard &&
          <div className="dashboardContainer">
            <div>
              <div>
                <UserAnalytics isDashboard={true} />
              </div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard