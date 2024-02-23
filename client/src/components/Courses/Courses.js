import { useEffect, useState } from 'react'
import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    //   setCourses(9min)
  }, [])
  return (
    <div className='courses'>
      <h1>
        Grow your career Opportunities
        <br />
        Excel with our courses
      </h1>
      <br />
      <br />
      <div className="coursesGrid">
        
      </div>
    </div>
  )
}

export default Courses