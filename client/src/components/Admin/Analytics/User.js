import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import './User.css'

const User = ({ isDashboard }) => {
  const data = [
    { name: 'Aug 2023', count: 353 },
    { name: 'Sep 2023', count: 413 },
    { name: 'Oct 2023', count: 321 },
    { name: 'Nov 2023', count: 921 },
    { name: 'Dec 2023', count: 7212 },
    { name: 'Jan 2024', count: 6777 },
  ]
  // users.last12Months.forEach(item => data.push({ name: item.month, count: item.count }))
  return (
    <div className={`${isDashboard && 'userAnalytics_db'} userAnalytics`}>
      <div className={`${isDashboard ? 'userAnalyticsContainer' : ''}`}>
        <h1 className={`heading userAnalyticsh1 ${isDashboard && 'userAnalyticsh1_db'}`}>
          Users Analytics
        </h1>
        {!isDashboard &&
          <p className=''>
            Last 12 months analytics data
          </p>
        }
      </div>
      <div className={`userAnalyticsContainer2 ${isDashboard ? 'userAnalyticsContainer2_db' : 'userAnalyticsContainer2_ndb'}`}>
        <ResponsiveContainer width={isDashboard ? '100%' : '90%'} height={isDashboard ? '100%' : '50%'}>
          <AreaChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area type='monotone' dataKey='count' stroke="#4d6d29" fill="#4d6d29" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default User