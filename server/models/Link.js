import mongoose from 'mongoose'

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)

export const Link = mongoose.model('CourseLink', linkSchema)