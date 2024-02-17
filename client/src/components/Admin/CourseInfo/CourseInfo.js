import { useState } from 'react'
import Add from '@mui/icons-material/AddCircle';
import './CourseInfo.css'

const CourseInfo = ({ info, setInfo, active, setActive, benefits, setBenefits, prerequisites, setPrerequisites }) => {
  const [uploaded, setUploaded] = useState(false)
  const changeHandler = async e => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }
  const imgHandler = async e => {

  }
  const benefitsHandler = (i, val) => {
    const updatedBenefits = [...benefits]
    updatedBenefits[i] = val
    setBenefits(updatedBenefits)
  }
  const prerequisitesHandler = (i, val) => {
    const updatedPrerequisites = [...prerequisites]
    updatedPrerequisites[i] = val
    setPrerequisites(updatedPrerequisites)
  }
  const submitHandler = async e => {
    e.preventDefault()
    setActive(active + 1)
  }
  return (
    <div className='courseInfo'>
      <form onSubmit={submitHandler}>
        <div className="">
          <label>
            Course Name
          </label>
          <input type="text" name='name' value={info.name} onChange={changeHandler} id='name' placeholder='Complete Web Development Course' className='input' required />
        </div>
        <br />
        <div className="">
          <label>
            Course of Description
          </label>
          <textarea name="desc" value={info.desc} onChange={changeHandler} cols="30" rows="10" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita quo voluptate dicta libero obcaecati pariatur amet neque velit, minus doloremque vel magnam corrupti voluptates reprehenderit incidunt non sed accusantium?' className='input courseDesc'></textarea>
        </div>
        <br />
        <div className="">
          <div className="">
            <label>
              Course Price
            </label>
            <input type="number" name='price' value={info.price} onChange={changeHandler} placeholder='1' className='input' required />
          </div>
          <div className="">
            <label>
              Discount
            </label>
            <input type="number" name='discount' value={info.discount} onChange={changeHandler} placeholder='0' className='input' required />
          </div>
        </div>
        <br />
        <div className="">
          <div className="">
            <label>
              Tags
            </label>
            {/* do like the one in grp or can separate according to commas & then add to array */}
          </div>
          <div className="">
            <label>
              Categories
            </label>
            {/* do like the one in grp or can separate according to commas & then add to array */}
          </div>
        </div>
        <br />
        <div className="">
          <div className="">
            <label>
              Course Level
            </label>
            <input type="number" name='level' value={info.level} onChange={changeHandler} placeholder='beginner' className='input' required />
          </div>
          <div className="">
            <label>
              Demo URL
            </label>
            <input type="number" name='demoUrl' value={info.demoUrl} onChange={changeHandler} placeholder='https://demoexample.xyz' className='input' required />
          </div>
        </div>
        <br />
        <div className="courseInfoImgContainer">
          <input type="file" accept='image/*' onChange={imgHandler} />
          <label htmlFor="file" className='courseInfoImg' style={{ backgroundColor: !uploaded ? '#3b82f6' : 'transparent' }}>
            {
              info.thumbnail
                ?
                <img src={info.thumbnail} className='courseInfoThumbnail' alt="" />
                :
                (
                  <span>
                    Click to Upload Thumbnail
                  </span>
                )
            }
          </label>
        </div>
        <div className="courseInfoBenefits">
          <div className="">
            <label>
              How will you benefit after completing this course?
            </label>
            <br />
            {benefits.map((benefit, i) => <input type='text' key={i} name='Benefit' placeholder='You will be able to develop and deploy Full Stack Web Apps' className='input' value={benefit} style={{ margin: '.5rem 0' }} onChange={() => benefitsHandler(i, e.target.value)} />)}
            <Add sx={{ margin: '10px 0', cursor: 'pointer', width: '30px' }} onClick={() => setBenefits([...benefits, ''])} />
          </div>
        </div>
        <div className="courseInfoBenefits">
          <div className="">
            <label>
              What are the prerequisites before starting this course?
            </label>
            <br />
            {prerequisites.map((prerequisite, i) => <input type='text' key={i} name='Placeholder' placeholder='Basic knowledge of computer' className='input' value={prerequisite} style={{ margin: '.5rem 0' }} onChange={() => prerequisitesHandler(i, e.target.value)} />)}
            <Add sx={{ margin: '10px 0', cursor: 'pointer', width: '30px' }} onClick={() => setPrerequisites([...prerequisites, ''])} />
          </div>
        </div>
        <br />
        51600
        <div className="courseInfoSubmitContainer">
          <input type="submit" value='Next' />
        </div>
        <br />
        <br />
      </form>
    </div>
  )
}

export default CourseInfo