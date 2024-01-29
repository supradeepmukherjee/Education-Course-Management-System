import Sidebar from '../Sidebar/Sidebar.js'
import Main from '../Main/Main.js'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboardSidebar">
        <Sidebar />
      </div>
      <div className="dashboardMain">
        <Main />
      </div>
    </div>
  )
}

export default Dashboard