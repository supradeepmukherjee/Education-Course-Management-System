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
        id: String,
        url: String
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
    rating: {
        type: Number,
        default: 0
    },
    learners: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EdUser'
    }
},
    { timestamps: true }
)

export const Course = mongoose.model('Course', courseSchema)