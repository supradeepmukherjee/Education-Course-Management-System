import { useEffect, useState } from 'react'
import CourseCard from '../CourseCard/CourseCard.js'
import './ViewCourses.css'

const ViewCourses = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    //   setCourses()
  }, [])
  return (
    <div className='viewCourses'>
      <h1>
        Grow your career Opportunities
        <br />
        Excel with our courses
      </h1>
      <br />
      <br />
      <div className="viewCoursesGrid">
        {courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
  )
}

export default ViewCourses