import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import List from '@mui/icons-material/List'
import './CourseCard.css'

const CourseCard = ({ course, isProfile }) => {
    const { _id, thumbnail, name, rating, learners, price, discount, data } = course
    const finalPrice = price - discount
    return (
        <Link to={isProfile ? `/access-course/${_id}` : `/course/${_id}`}>
            <div className="courseCard">
                <img src={thumbnail.url} alt="" />
                <br />
                <h1>
                    {name}
                </h1>
                <div>
                    <Rating value={rating} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} />
                    <h5 style={{ display: isProfile ? 'none' : 'inline' }}>
                        {learners} Learners
                    </h5>
                </div>
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3>
                            {finalPrice === 0 ? 'Free' : `Rs. ${finalPrice}`}
                        </h3>
                        <h5 className='courseCardPrice'>
                            Rs. {price}
                        </h5>
                    </div>
                    <div className="courseCardLectures">
                        <List />
                        <h5>
                            {data.length} Lectures
                        </h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard