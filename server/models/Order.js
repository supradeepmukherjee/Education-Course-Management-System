import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EdUser',
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }],
    payment: {
        
    }
},
    { timestamps: true }
)

export const Order = mongoose.model('CourseOrder', orderSchema)