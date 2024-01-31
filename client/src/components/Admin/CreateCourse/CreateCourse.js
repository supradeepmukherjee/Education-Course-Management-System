import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import CourseInfo from '../CourseInfo/CourseInfo'
import CourseOptions from '../CourseOptions/CourseOptions.js'
import './CreateCourse.css'

const CreateCourse = () => {
    const [active, setActive] = useState(0)
    const [info, setInfo] = useState({
        name: '',
        desc: '',
        price: 1,
        discount: '',
        tags: [],
        level: '',
        demoUrl: '',
        thumbnail: '',
        benefits: [],
        prerequisites: []
    })
    const [data, setData] = useState({
        title: '',
        desc: '',
        vidUrl: '',
        vidSection: '',
        links: [

        ],
        vidPlayer: '',
        suggestion: ''
    })
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
                                <CourseInfo info={info} setInfo={setInfo} active={active} setActive={setActive} />
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