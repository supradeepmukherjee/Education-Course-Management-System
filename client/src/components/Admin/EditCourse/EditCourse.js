import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './EditCourse.css'

const EditCourse = () => {
    const { id } = useParams()
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

export default EditCourse