import { User } from '../models/User.js'

export const users = async (req, res) => {
    try {

        res.status(200).json({ success: true, })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}