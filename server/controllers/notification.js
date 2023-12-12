import { User } from '../models/User.js'
import { Order } from '../models/Order.js'
import { Notification } from '../models/Notification.js'
import cron from 'node-cron'

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
        await notification.save()
        const notifications = await Notification.find().sort({ createdAt: -1 })
        res.status(200).json({ success: true, notifications })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const delNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id)
        notification.status = 1
        await notification.save()
        const notifications = await Notification.find().sort({ createdAt: -1 })
        res.status(200).json({ success: true, notifications })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

cron.schedule('0 0 0 * *', async () => {
    const tda = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    await Notification.deleteMany({ status: 1, createdAt: { $lt: tda } })
})