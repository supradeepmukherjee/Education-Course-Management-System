import cloudinary from 'cloudinary'

export const createCourse = (req, res) => {
    try {
        const data = req.body
        const cloud = await cloudinary.v2.uploader.upload(data.thumbnail, { folder: 'ECMS' })
        data.thumbnail = cloud.secure_url
        
        res.status(200).json({ success: true, msg: 'Course Created' })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}