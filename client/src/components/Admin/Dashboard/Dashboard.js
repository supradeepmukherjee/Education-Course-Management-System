import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.js'
import Header from '../Header/Header.js'
import UserAnalytics from '../Analytics/User.js'
import OrderAnalytics from '../Analytics/Order.js'
import BorderLeft from '@mui/icons-material/BorderLeft'
import Users from '@mui/icons-material/Group'
import CircularProgress from './CircularProgressComponent'
import Invoices from './Invoices.js'
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
            <div className='dashboardContainerGrid1'>
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
                      <CircularProgress progress val={100} open={open} />
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
                      <CircularProgress progress val={100} open={open} />
                      <h5>
                        +180%
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardContainerGrid2">
              <div>
                <OrderAnalytics isDashboard={true} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                Recent Transactions
              </div>
              <Invoices isDashboard={true} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard