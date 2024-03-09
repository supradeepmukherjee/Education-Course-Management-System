import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseCard from '../CourseCard/CourseCard'
import './Courses.css'

const Courses = () => {
    const { name } = useParams()
    const [route, setRoute] = useState('Login')
    const [open, setOpen] = useState(false)
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState('All')
    useEffect(() => {
        if (category === 'All') setCourses(data.courses)
        if (category !== 'All') setCourses(data.courses.filter(course => course.category === category))
        if (name) setCourses(data.courses.filter(course => course.name.toLowerCase().includes(name.toLowerCase())))
    }, [category, name, data])
    const { categories } = categoriesData
    return (
        <div className='courses'>
            <div>
                <div style={{ backgroundColor: category === 'All' ? 'crimson' : '#5050cb' }} onClick={() => setCategory('All')}>
                    All
                </div>
                {categories.map((c, i) => {
                    <div key={i} style={{ backgroundColor: category === c ? 'crimson' : '#5050cb' }} onClick={() => setCategory(c)}>
                        {c}
                    </div>
                })}
            </div>
            {courses.length === 0 &&
                <p>
                    No Courses Found{name && ' in this Category. Please try another one.'}
                </p>}
            <br />
            <br />
            <div className="viewCoursesGrid">
                {courses.map(course => <CourseCard key={course._id} course={course} />)}
            </div>
        </div>
    )
}

export default Courses