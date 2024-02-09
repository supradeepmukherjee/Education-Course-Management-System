import CoursePlayer from '../CoursePlayer/CoursePlayer.js'
import './CoursePreview.css'

const CoursePreview = ({ data, submitHandler, active, setActive }) => {
  const { vidUrl: url, title } = data
  return (
    <div className='coursePreview'>
      <div className="">
        <div className="">
          <CoursePlayer url={url} title={title} />
        </div>
      </div>
    </div>
  )
}

export default CoursePreview