import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { format } from 'timeago.js'
import CoursePlayer from '../Admin/CoursePlayer/CoursePlayer'
import CourseContentList from './CourseContentList/CourseContentList.js'
import Close from '@mui/icons-material/CancelOutlined'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm/CheckoutForm.js'
import './Course.css'

const Course = () => {
    const [route, setRoute] = useState('Login')
    const [open, setOpen] = useState(false)
    const { id } = useParams()
    // for seo put title 'coursename - ECMS'; in tags, use the tags of the courses(so change it from array to string) and description of your choice(using ai) 
    const { price, discount, _id, name, rating, reviews, learners, benefits, prerequisites, desc } = course
    const finalPrice = price - discount
    const isPurchased = user.courses.find(c => c._id === _id)
    const buyHandler = async e => {
        setOpen(true)
    }
    return (
        <>
            <div className='course'>
                <div>
                    <div>
                        <h1>
                            {name}
                        </h1>
                        <div className='courseContainer'>
                            <div>
                                <Rating value={rating} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} readOnly />
                                <h5>
                                    {reviews.length} Reviews
                                </h5>
                            </div>
                            <h5>
                                {learners} Learners
                            </h5>
                        </div>
                        <br />
                        <h1>
                            What will you learn in this Course?
                        </h1>
                        {benefits.map((benefit, i) => {
                            return (
                                <div className='courseBenefits' key={i}>
                                    <div>
                                        <CheckCircle />
                                    </div>
                                    <p>
                                        {benefit}
                                    </p>
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        <h1>
                            {prerequisites ?
                                'What are the prerequisites for starting this Course?'
                                :
                                'No prerequisites for starting this course'}
                        </h1>
                        {prerequisites?.map((prerequisite, i) => {
                            return (
                                <div className='courseBenefits' key={i}>
                                    <div>
                                        <CheckCircle />
                                    </div>
                                    <p>
                                        {prerequisite}
                                    </p>
                                </div>
                            )
                        })}
                        <br />
                        <br />
                        <div>
                            <h1>
                                Course Overview
                            </h1>
                            <CourseContentList data={courseData} isDemo={true} />
                        </div>
                        <br />
                        <br />
                        <div style={{ width: '100% !important' }}>
                            <h1>
                                Course Details
                            </h1>
                            <p className='courseDetails'>
                                {desc}
                            </p>
                        </div>
                        <br />
                        <br />
                        <div style={{ width: '100% !important' }}>
                            <div className="courseRating">
                                <Rating value={rating} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} readOnly />
                                <div>
                                    <h5>
                                        {Number.isInteger(rating)
                                            ? rating
                                            : rating.toFixed(1)
                                        }
                                        Course Rating: {reviews.length} reviews
                                    </h5>
                                </div>
                                <br />
                                {[...reviews].reverse().map(review => {
                                    <div className="courseReview" key={review._id}>
                                        <div>
                                            <div>
                                                <img src="review.user.chavi.url" alt="" />
                                            </div>
                                            <div>
                                                <div>
                                                    <h5>
                                                        {review.user.name}
                                                    </h5>
                                                    <Rating value={rating} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} readOnly />
                                                </div>
                                                <p>
                                                    {review.comment}
                                                </p>
                                                <small>
                                                    {format(review.createdAt)}
                                                </small>
                                            </div>
                                            <div>
                                                <h5>
                                                    {review.user.name}
                                                </h5>
                                                <Rating value={rating} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} readOnly />
                                            </div>
                                        </div>
                                        {// only show this if any acknowledgement
                                            <div className="courseMediaReviewAck">
                                                <div>
                                                    <img src="adminRole" alt="" />
                                                    {/* also put a verified badge using flex */}
                                                </div>
                                                <div>
                                                    <h5>
                                                        {/* admin name */}
                                                    </h5>
                                                    <p>
                                                        {/* admin comment */}
                                                    </p>
                                                    <small>
                                                        {/* comment time */}
                                                    </small>
                                                </div>
                                            </div>}
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <CoursePlayer />
                            <div className="coursePriceContainer">
                                <h1>
                                    {finalPrice === 0 ? 'Free' : `Rs. ${finalPrice}`}
                                </h1>
                                <h5>
                                    Rs. {price}
                                </h5>
                                <h4>
                                    Rs. {discount} off
                                </h4>
                            </div>
                            {isPurchased ?
                                <Link className='submit courseBtn' to={`/access-course/${id}`}>
                                    Access Course
                                </Link>
                                :
                                <div className='submit courseBtn' onClick={buyHandler}>
                                    Buy Now
                                </div>
                            }
                        </div>
                        <br />
                        <p>
                            Source Code Included
                        </p>
                        <p>
                            Lifetime Access
                        </p>
                        <p>
                            Certificate of Completion
                        </p>
                        <p>
                            Premium Content
                        </p>
                    </div>
                </div>
            </div>
            {open &&
                <div className='courseBuy'>
                    <div>
                        <div>
                            <Close onClick={() => setOpen(false)} />
                        </div>
                        <div>
                            {stripePromise && clientSecret &&
                                <Elements stripe={stripePromise} options={clientSecret}>
                                    <CheckoutForm setOpen={setOpen} course={course} />
                                </Elements>
                            }
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Course