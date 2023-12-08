import { Course } from '../models/Course.js'
import { CourseData } from '../models/CourseData.js'
import { User } from '../models/User.js'
import { Order } from '../models/Order.js'
import { Notification } from '../models/Notification.js'

export const createOrder = async (req, res) => {
    try {
        const { course, payment } = req.body
        let user = await User.findById(req.user._id)
        const courseDetails = await Course.findById(course)
        const order = await Order.create({
            user: req.user._id,
            course
        })
        course.learners += 1
        await course.save()
        user.courses.unshift(course)
        await user.save()
        await Notification.create({
            title: 'New Order',
            msg: `A person purchased: ${courseDetails.name}`,
            user: user._id
        })
        res.status(200).json({ success: true, order, user })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}