import CoursePlayer from '../CoursePlayer/CoursePlayer.js'
import './CoursePreview.css'

const CoursePreview = ({ data, submitHandler, active, setActive }) => {
  const { vidUrl: url, title, price, discount } = data
  const finalPrice = price - discount // make it fixed
  return (
    <div className='coursePreview'>
      <div className="">
        <div className="">
          <CoursePlayer url={url} title={title} />
        </div>
        <div className="coursePreviewContainer">
          <h1>
            {finalPrice === 0 ? 'Free' : `Rs. ${finalPrice}`}
          </h1>
          <h5>
            Rs. {price}
          </h5>
          <h4>
            {100 * discount / price}% Discount
          </h4>
        </div>
        <div className="coursePreviewContainer">
          <div className='submitBtn coursePreviewBtn'>
            Buy @ Rs. {finalPrice}
          </div>
        </div>
        <div className="coursePreviewContainer">
          <input type="text" className='input coursePreviewFinal' placeholder='Discount Code' />
          <div className="submitBtn coursePreviewApply">
            Apply
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview