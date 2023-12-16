import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    categories: [{
        type: String,
        required: true
    }]
},
    { timestamps: true }
)

export const Category = mongoose.model('LayoutCategory', categorySchema)