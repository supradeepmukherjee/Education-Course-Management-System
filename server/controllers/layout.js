import { Faq } from '../models/Layout/Faq.js'
import { Banner } from '../models/Layout/Banner.js'
import { Category } from '../models/Layout/Category.js'
import cloudinary from 'cloudinary'

export const createLayout = async (req, res) => {
    try {
        const { type, title, subTitle, img, ques, ans, categories } = req.body
        if (type === 'banner') {
            const cloud = await cloudinary.v2.uploader.upload(img, { folder: 'ECMS' })
            await Banner.create({
                banner: {
                    title,
                    subTitle,
                    publicId: cloud.public_id,
                    url: cloud.secure_url
                }
            })
        }
        if (type === 'faq') await Faq.create({ faq: { ques, ans } })
        if (type === 'categories') await Category.create(categories)
        res.status(200).json({ success: true, notifications })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}
