import { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.js'
import Header from '../Header/Header.js'
import UserAnalytics from '../Analytics/User.js'
import OrderAnalytics from '../Analytics/Order.js'
import BorderLeft from '@mui/icons-material/BorderLeft'
import Users from '@mui/icons-material/Group'
import CircularProgress from './CircularProgressComponent'
import Invoices from './Invoices.js'
import './Dashboard.css'

const Dashboard = ({ isDashboard }) => {
  const [open, setOpen] = useState(false)
  const [usersChange, setUsersChange] = useState({})
  const [ordersChange, setOrdersChange] = useState({})
  useEffect(() => {
    const usersLast2Months = usersData.last12Months.slice(-2)
    const ordersLast2Months = ordersData.last12Months.slice(-2)
    const usersCurrentMonth = usersLast2Months[1].count
    const ordersCurrentMonth = ordersLast2Months[1].count
    const usersPrevMonth = usersLast2Months[0].count
    const ordersPrevMonth = ordersLast2Months[0].count
    const usersPercentChange = usersPrevMonth !== 0 ? ((usersCurrentMonth - usersPrevMonth) / usersPrevMonth) * 100 : 100
    const ordersPercentChange = ordersPrevMonth !== 0 ? ((ordersCurrentMonth - ordersPrevMonth) / ordersPrevMonth) * 100 : 100
    setUsersChange({
      currentMonth: usersCurrentMonth,
      prevMonth: usersPrevMonth,
      percentChange: usersPercentChange
    })
    setOrdersChange({
      currentMonth: ordersCurrentMonth,
      prevMonth: ordersPrevMonth,
      percentChange: ordersPercentChange
    })
  }, [usersData.last12Months, ordersData.last12Months])
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
                        {ordersChange.currentMonth}
                      </h5>
                      <h5>
                        Sales Complete
                      </h5>
                    </div>
                    <div>
                      <CircularProgress progress val={ordersChange.percentChange > 0 ? 100 : 0} open={open} />
                      <h5>
                        {ordersChange.percentChange > 0 && '+'}{ordersChange.percentChange}%
                      </h5>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <Users />
                      <h5>
                        {usersChange.currentMonth}
                      </h5>
                      <h5>
                        New Users
                      </h5>
                    </div>
                    <div>
                      <CircularProgress progress val={usersChange.percentChange > 0 ? 100 : 0} open={open} />
                      <h5>
                        {usersChange.percentChange > 0 && '+'}{usersChange.percentChange}%
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