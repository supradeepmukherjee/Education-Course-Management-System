import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'EdUser'
    },
    rating: {
        type: Number,
        default: 0
    },
    comment: String,
    reply: String,
},
    { timestamps: true }
)

export const Review = mongoose.model('CourseReview', reviewSchema)