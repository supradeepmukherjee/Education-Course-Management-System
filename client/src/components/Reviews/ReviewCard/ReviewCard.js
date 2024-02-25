import { } from 'react'
import Rating from '@mui/material/Rating'
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { chavi, name, profession, comment } = review
    return (
        <div className='reviewCard'>
            <div className="reviewCardContainer">
                <img src={chavi} alt="" />
                <div>
                    <div>
                        <h5>
                            {name}
                        </h5>
                        <h6>
                            {profession}
                        </h6>
                    </div>
                    <Rating value={4.5} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} />
                </div>
                <div className="reviewCardMobile">
                    <div>
                        <h5>
                            {name}
                        </h5>
                        <h6>
                            {profession}
                        </h6>
                    </div>
                    <Rating value={4.5} size={window.innerWidth > 600 ? 'large' : 'medium'} precision={.5} />
                </div>
            </div>
            <p>
                {comment}
            </p>
        </div>
    )
}

export default ReviewCard