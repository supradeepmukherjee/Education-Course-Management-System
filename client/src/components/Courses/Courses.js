import { useEffect, useState } from 'react'
import CourseCard from './CourseCard/CourseCard.js'
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
        {courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
  )
}

export default Courses