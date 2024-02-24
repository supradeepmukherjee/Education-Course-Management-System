import { } from 'react'
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { chavi } = review
    return (
        <div className='reviewCard'>
            <div className="reviewCardContainer">
                <img src={chavi} alt="" />
                <div>
                    <div>
                        <h5>
                            
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard