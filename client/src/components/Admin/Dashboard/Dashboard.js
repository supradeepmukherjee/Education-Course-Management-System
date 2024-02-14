import Sidebar from '../Sidebar/Sidebar.js'
import Header from '../Header/Header.js'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboardSidebar">
        <Sidebar />
      </div>
      <div className="dashboardMain">
        <Header />
      </div>
    </div>
  )
}

export default Dashboard