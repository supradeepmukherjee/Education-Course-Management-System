import ReviewCard from './ReviewCard/ReviewCard.js'
import './Reviews.css'

const Reviews = () => {
    // will have to put this under hero,courses in the same order ;-)
    const reviews = [
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
        {
            name: 'Human Being',
            chavi: '',
            profession: 'Student | College',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius perferendis facilis assumenda, est amet, molestias adipisci eligendi numquam similique sequi ullam tempore, nisi quae vel laudantium veritatis sapiente labore.'
        },
    ]
    return (
        <div className='reviews'>
            <div className="reviewsContainer">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h3 className='heading'>
                        Our Learners are Our Strength
                        <br />
                        See what they say about Us
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, sint sit asperiores esse quidem dolores natus, iusto atque ullam repudiandae distinctio praesentium dolor adipisci nostrum eaque non voluptatem, nesciunt quaerat?
                    </p>
                </div>
                <br />
                <br />
            </div>
            <div className="reviewsGrid">
                {reviews.map(review => <ReviewCard review={review} key={review._id} />)}
            </div>
        </div>
    )
}

export default Reviews