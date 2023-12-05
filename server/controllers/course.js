import cloudinary from 'cloudinary'
import { Course } from '../models/Course.js'

export const createCourse = async (req, res) => {
    try {
        const data = req.body
        // const cloud = await cloudinary.v2.uploader.upload(data.thumbnail, { folder: 'ECMS' })
        // data.thumbnail = cloud.secure_url
        const course = await Course.create(data)
        res.status(200).json({ success: true, course })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const updateCourse = async (req, res) => {
    try {
        const data = req.body
        const { thumbnail } = data
        if (thumbnail) {
            await cloudinary.v2.uploader.destroy(thumbnail.id)
            const cloud = await cloudinary.v2.uploader.upload(data.thumbnail, { folder: 'ECMS' })
            data.thumbnail = {
                id: cloud.public_id,
                url: cloud.secure_url
            }
        }
        const course = await Course.findByIdAndUpdate(req.params.id, { $set: data }, { new: true })
        res.status(200).json({ success: true, course })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const singleCourse = async (req, res) => {
    try {
        
        const course = await Course.findById(req.params.id)
        res.status(200).json({ success: true, course })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const allCourses = async (req, res) => {
    try {
        
        const courses = await Course.find()
        res.status(200).json({ success: true, courses })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}