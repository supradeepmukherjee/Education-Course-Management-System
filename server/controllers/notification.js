import { User } from '../models/User.js'
import { Order } from '../models/Order.js'
import { Notification } from '../models/Notification.js'

export const notifications = async (req, res) => {
    try {
        const notifications = await Notification.find()
        res.status(200).json({ success: true, notifications })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}