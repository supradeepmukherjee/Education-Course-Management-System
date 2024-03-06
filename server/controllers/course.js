import cloudinary from 'cloudinary'
import { Course } from '../models/Course.js'
import { Comment } from '../models/Comment.js'
import { CourseData } from '../models/CourseData.js'
import { Review } from '../models/Review.js'
import { Notification } from '../models/Notification'

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
        const courses = await Course.find({})
        res.status(200).json({ success: true, courses })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const accessCourse = async (req, res) => {
    try {
        const id = req.params.id
        const bought = req.user.courses.find(course => course._id === id)
        if (!bought) return res.status(402).json({ success: false, msg: 'Course not accessible' })
        const course = await Course.findById(id).populate('data')
        res.status(200).json({ success: true, course })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const ask = async (req, res) => { // make reply controller (as per requirement)
    // also send notification to admin whenever ques is asked along with video name
    try {
        req.body.user = req.user._id
        const ques = await Comment.create(req.body).populate('user')
        let courseData = await CourseData.findById(req.params.id)
        courseData.ques.unshift({ _id: ques._id })
        if (req.user._id === ques.user._id) {

        } else {
            // send mail telling that their question has been answered
        }
        await courseData.save()
        res.status(200).json({ success: true, courseData, ques })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const review = async (req, res) => {
    try {
        const id = req.params.id
        const bought = req.user.courses.find(course => course._id === id)
        if (!bought) return res.status(400).json({ success: false, msg: 'Buy Course First' })
        req.body._id = req.user._id
        const review = await Review.create(req.body)
        const course = await Course.findById(id)
        course.reviews.unshift({ _id: review._id })
        const reviews = await Review.find()
        let courseReviews = []
        for (let i = 0; i < reviews.length; i++) {
            for (let j = 0; j < course.reviews.length; j++) {
                if (course.reviews[j] === reviews[i]) courseReviews.push(reviews[i])
            }
        }
        let total
        courseReviews.forEach(review => total += review.rating)
        course.rating = total / courseReviews.length
        await course.save()
        await Notification.create({
            title: 'New Review',
            msg: `${req.user.name} has reviewed ${req.body.name}`,
            user: req.user._id
        })
        res.status(200).json({ success: true, review })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const replyReview = async (req, res) => {//
    try {
        const course = await Course.findById(req.params.id)

    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const myCourses = async (req, res) => {//
    try {
        const courses = await Course.find({})
        res.status(200).json({ success: true, courses })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

