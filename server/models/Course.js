import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    thumbnail: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    demoUrl: String,
    price: {
        type: Number,
        default: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    benefits: [{
        type: String,
        required: true,
    }],
    prerequisites: [String],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseReview'
    }],
    data: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseData'
    }],
    rating: Number,
    learners: Number
},
    { timestamps: true }
)

export const Course = mongoose.model('Course', courseSchema)