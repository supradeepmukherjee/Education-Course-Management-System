import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema({
    faq: {
        ques: String,
        ans: String
    }
},
    { timestamps: true }
)

export const Faq = mongoose.model('LayoutFaq', faqSchema)