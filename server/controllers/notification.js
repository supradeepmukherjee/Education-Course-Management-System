import { User } from '../models/User.js'
import { Order } from '../models/Order.js'
import { Notification } from '../models/Notification.js'

export const notifications = async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 })
        res.status(200).json({ success: true, notifications })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const updateNotificationStatus = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id)
        notification.status = 1
        await user.save()
        res.status(200).json({ success: true, notification })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}