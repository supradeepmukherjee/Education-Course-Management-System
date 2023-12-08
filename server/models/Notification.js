import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EdUser',
        // required: true
    },
},
    { timestamps: true }
)

export const Notification = mongoose.model('Notification', notificationSchema)