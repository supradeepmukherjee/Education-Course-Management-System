import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.js'
import Header from '../Header/Header.js'
import UserAnalytics from '../Analytics/User.js'
import BorderLeft from '@mui/icons-material/BorderLeft'
import Users from '@mui/icons-material/Group';
import CircularProgress from './CircularProgressComponent.js'
import './Dashboard.css'

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
                  <div>
                    <div>
                      <BorderLeft />
                      <h5>
                        150
                      </h5>
                      <h5>
                        Sales Complete
                      </h5>
                    </div>
                    <div>
                      <CircularProgress progress val={100} open={open}/>
                      <h5>
                        +150%
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <Users />
                      <h5>
                        420
                      </h5>
                      <h5>
                        New Users
                      </h5>
                    </div>
                    <div>
                      <CircularProgress progress val={100} open={open}/>
                      <h5>
                        +180%
                      </h5>
                    </div>
                  </div>
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