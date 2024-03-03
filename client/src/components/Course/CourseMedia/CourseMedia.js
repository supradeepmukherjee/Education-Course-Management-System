import { useState } from 'react'
import Left from '@mui/icons-material/ChevronLeft'
import Right from '@mui/icons-material/ChevronRight'
import Star from '@mui/icons-material/Star'
import StarOutline from '@mui/icons-material/StarOutline'
import './CourseMedia.css'

const CourseMedia = ({ data, id, activeVid, setActiveVid }) => {
    const [activeBar, setActiveBar] = useState(0)
    const [ques, setQues] = useState('')
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const reviewed = course.reviews.find(review => review.user._id === user._id)
    const qnaHandler = async e => {

    }
    return (
        <div className='courseMedia'>
            {/* play the video here */}
            <div className='courseMediaContainer1'>
                <div
                    className={`submit ${activeVid === 0 && 'courseMediaActive'}`}
                    onClick={() => setActiveVid(activeVid === 0 ? 0 : activeVid - 1)}
                >
                    <Left /> Previous Topic
                </div>
                <div
                    className={`submit ${activeVid === data.length - 1 && 'courseMediaActive'}`}
                    onClick={() => setActiveVid(
                        activeVid === data.length - 1 ? activeVid : activeVid + 1
                    )}
                >
                    Next Topic <Right />
                </div>
            </div>
            <h1>
                {data[activeVid].title}
            </h1>
            <br />
            <div className="courseMediaContainer2">
                {['Overview', 'Resources', 'Q&A', 'Reviews'].map((text, i) => {
                    <h5 key={i} className={activeBar === index ? 'courseMediah5Active' : ''} onClick={() => setActiveBar(i)}>
                        {text}
                    </h5>
                })}
            </div>
            <br />
            {activeBar === 0 &&
                <p>
                    {data[activeVid].desc}
                </p>}
            {activeBar === 1 &&
                data[activeVid].links.map((link, i) => {
                    <div className='courseMediaLinks' key={i}>
                        <h2>
                            {link.title}:
                        </h2>
                        <a href={link.url}>
                            {link.url}
                        </a>
                    </div>
                })}
            {activeBar === 2 &&
                <>
                    <div className="courseMediaQna">
                        <img src={'user.chavi'} alt="" />
                        <textarea value={ques} onChange={e => setQues(e.target.value)} cols="30" rows="10" placeholder='Write your Question'></textarea>
                    </div>
                    <div className='courseMediaQna2'>
                        <div className="submit" onClick={qnaHandler}>
                            Submit
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='br'></div>
                    <div className="">

                    </div>
                </>}
            {activeBar === 3 &&
                <div className="courseMediaReviews">
                    {!reviewed &&
                        <>
                            <div className='courseMediaReviewsContainer'>
                                <img src={"user.chavi"} alt="" />
                                <div>
                                    <h5>
                                        Rate Us <span ></span>
                                    </h5>
                                    <div className="courseMediaReviewsRating">
                                        {[1, 2, 3, 4, 5].map(n => {
                                            rating >= i ?
                                                <Star key={i} onClick={() => setRating(i)} /> // change the color to gold & also customise the size
                                                :
                                                <StarOutline key={i} onClick={() => setRating(i)} /> // change the color to gold & also customise the size
                                        })}
                                    </div>
                                    <textarea cols="30" rows="10" value={review} onChange={e => setReview(e.target.value)} placeholder='Write your Review here'></textarea>
                                </div>
                            </div>
                            <div className="courseMediaReviewsSubmit">
                                <div className="submit">
                                    Submit
                                </div>
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    )
}

export default CourseMedia