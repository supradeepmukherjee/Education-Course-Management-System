import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    vidUrl: {
        type: String,
        required: true
    },
    vidPlayer: {
        type: String,
        required: true
    },
    vidSection: {
        type: String,
        required: true
    },
    vidDuration: {
        type: Number,
        default: 0
    },
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseLink',
    }],
    suggestion: String,
    ques: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseComment'
    }]
},
    { timestamps: true }
)

export const CourseData = mongoose.model('CourseData', dataSchema)