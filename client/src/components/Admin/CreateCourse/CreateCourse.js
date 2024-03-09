import { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import CourseInfo from '../CourseInfo/CourseInfo'
import CourseOptions from '../CourseOptions/CourseOptions'
import CourseData from '../CourseData/CourseData'
import CoursePreview from '../CoursePreview/CoursePreview.js'
import './CreateCourse.css'

const CreateCourse = () => {
    const [active, setActive] = useState(0)
    const [info, setInfo] = useState({
        name: '',
        desc: '',
        price: 1,
        discount: 0,
        tags: [],
        category: '',
        level: '',
        demoUrl: '',
        thumbnail: '',
    })
    const [data, setData] = useState({
        title: '',
        desc: '',
        vidUrl: '',
        vidSection: '',
        vidDuration: 0,
        links: [

        ],
        vidPlayer: '',
        suggestion: ''
    })
    const [benefits, setBenefits] = useState([])
    const [prerequisites, setPrerequisites] = useState([])
    const readyData = {

    }
    const submitHandler = async e => {

    }
    return (
        <div className='create'>
            <div className="createSidebar">
                <Sidebar />
            </div>
            <div className="createMain">
                <Header />
                <div className="createMainContainer">
                    <div className="">
                        {
                            active === 0 && (
                                <CourseInfo info={info} setInfo={setInfo} active={active} setActive={setActive} benefits={benefits} setBenefits={setBenefits} prerequisites={prerequisites} setPrerequisites={setPrerequisites} />
                            )
                        }
                        {
                            active === 1 && (
                                <CourseData data={data} setData={setData} active={active} setActive={setActive} />
                            )
                        }
                        {
                            active === 2 && (
                                <CoursePreview benefits={benefits} prerequisites={prerequisites} readyData={readyData} submitHandler={submitHandler} active={active} setActive={setActive} />
                            )
                        }
                    </div>
                    <div className="">
                        <CourseOptions active={active} setActive={setActive} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse