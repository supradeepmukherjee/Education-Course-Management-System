import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EdUser',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    commentReplies: [String] // create an object which has user and comment value
},
    { timestamps: true }
)

export const Comment = mongoose.model('CourseComment', commentSchema)