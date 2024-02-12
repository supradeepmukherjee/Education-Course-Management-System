import CoursePlayer from '../CoursePlayer/CoursePlayer'
import Rating from '@mui/material/Rating'
import Done from '@mui/icons-material/DoneOutline'
import Info from '@mui/icons-material/Info'
import './CoursePreview.css'

const CoursePreview = ({ data, submitHandler, active, setActive, benefits, prerequisites }) => {
  const { vidUrl: url, title, price, discount, name, desc } = data
  const finalPrice = price - discount // make it fixed
  return (
    <div className='coursePreview'>
      <div className='coursePreviewOuter'>
        <div>
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
        <p>
          Source Code included
        </p>
        <p>
          Full lifetime Access
        </p>
        <p>
          Certificate of Completion
        </p>
        <p>
          Premium Support
        </p>
      </div>
      <div className='coursePreviewOuter2'>
        <div>
          <h1>
            {name}
          </h1>
          <div>
            <div>
              <Rating size={window.innerWidth > 600 ? 'large' : 'medium'} value={1} precision={0.5} readOnly />
              <h5>
                { } reviews
              </h5>
            </div>
            <h5>
              { } students
            </h5>
          </div>
          <br />
          <h1>
            What will you learn in this course?
          </h1>
        </div>
        {benefits.map((benefit, i) => {
          <div className="coursePreviewBenefits" key={i}>
            <div>
              <Done />
            </div>
            <p>
              {benefit}
            </p>
          </div>
        })}
        <h1>
          What are the prerequisites for starting this
        </h1>
        {prerequisites.map((prerequisite, i) => {
          <div className="coursePreviewBenefits" key={i}>
            <div>
              <Info />
            </div>
            <p>
              {prerequisite}
            </p>
          </div>
        })}
        <br /><br />
        <div style={{ width: '100%' }}>
          <h1>
            Course Details
          </h1>
          <p className='coursePreviewDesc'>
            {desc}
          </p>
        </div>
        <br></br>
      </div>
      <div className="coursePreviewBtns">
        <div className="courseDataBtn" onClick={() => setActive(active - 1)}>
          Previous
        </div>
        <div className="courseDataBtn" onClick={submitHandler}>
          Create
        </div>
      </div>
    </div>
  )
}

export default CoursePreview