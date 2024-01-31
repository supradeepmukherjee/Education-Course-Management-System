import { useState } from 'react'
import './CourseInfo.css'

const CourseInfo = ({ info, setInfo, active, setActive }) => {
  const [drag, setDrag] = useState(false)
  const submitHandler = async e => {
    e.preventDefault()
    setActive(active + 1)
  }
  return (
    <div className='courseInfo'>
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          Course Name
        </label>
        <input type="text" />
      </form>
    </div>
  )
}

export default CourseInfo