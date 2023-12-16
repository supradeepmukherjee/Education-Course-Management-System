import mongoose from 'mongoose'

const bannerSchema = new mongoose.Schema({
    banner: {
        publicId: String,
        url: String,
        title: String,
        subTitle: String
    }
},
    { timestamps: true }
)

export const Banner = mongoose.model('LayoutBanner', bannerSchema)