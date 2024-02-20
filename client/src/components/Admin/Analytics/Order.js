import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Line, LineChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts"
import './Order.css'

const Order = ({ isDashboard }) => {
  const data = [
    { name: 'Page A', count: 5000 },
    { name: 'Page B', count: 3000 },
    { name: 'Page C', count: 600 },
    { name: 'Page D', count: 400 },
    { name: 'Page E', count: 7000 },
    { name: 'Page F', count: 8000 },
  ]
  // orders.last12Months.forEach(item => data.push({ name: item.name, count: item.count }))
  return (
    <div className={isDashboard ? 'orderAnalytics_db' : 'orderAnalytics'}>
      <div className={isDashboard ? 'orderAnalyticsContainer_db' : 'orderAnalyticsContainer'}>
        <h1 className={`heading orderAnalyticsh1 ${isDashboard && 'orderAnalyticsh1_db'}`}>
          Orders Analytics
        </h1>
        {!isDashboard &&
          <p>
            Last 12 months analytics data
          </p>
        }
      </div>
      <div className={`orderAnalyticsContainer2 ${isDashboard ? 'orderAnalyticsContainer2_db' : 'orderAnalyticsContainer2_ndb'}`}>
        <ResponsiveContainer width={isDashboard ? '100%' : '90%'} height={isDashboard ? '100%' : '50%'}>
          <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
            <CartesianGrid strokeDasharray='3  3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            {!isDashboard && <Legend />}
            <Line type='monotone' dataKey='count' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Order