import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseMedia from '../CourseMedia/CourseMedia.js'
import './AccessCourse.css'

const AccessCourse = () => {
    const { id } = useParams()
    // check if user has purchased this or not, if not redirect to home page from here directly itself by writing the redirection code in this file only
    const [activeVid, setActiveVid] = useState(0)
    useEffect(() => {

    }, [])
    return (
        <div>
            <div>
                <CourseMedia data={data} id={id} activeVid={activeVid} setActiveVid={setActiveVid} />
            </div>
        </div>
    )
}

export default AccessCourse