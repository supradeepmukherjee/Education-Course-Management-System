import { User } from '../models/User.js'
import { Course } from '../models/Course.js'
import { Order } from '../models/Order.js'
import analytics from '../analytics.js'

export const users = async (req, res) => {
    try {
        const data = await analytics(User)
        res.status(200).json({ success: true, users: data })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const courses = async (req, res) => {
    try {
        const data = await analytics(Course)
        res.status(200).json({ success: true, courses: data })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const orders = async (req, res) => {
    try {
        const data = await analytics(Order)
        res.status(200).json({ success: true, orders: data })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}