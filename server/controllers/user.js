import { User } from '../models/User.js'
import cloudinary from 'cloudinary'

export const register = async (req, res) => {
    try {
        const { name, email, password, chavi } = req.body.user
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ success: false, msg: 'User already exists' })
        const myCloud = await cloudinary.v2.uploader.upload(chavi, {
            folder: 'EdChavi',
            width: 150,
            crop: 'scale'
        })
        user = await User.create({
            name,
            email,
            password,
            chavi: myCloud.secure_url
        })
        const token = await user.generateToken()
        res.status(201).cookie('token', token, { expires: new Date(Date.now() + (90 * 24 * 60 * 60000)) }).json({ success: true, user, token })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email }).select('+password')
        if (!user) return res.status(400).json({ success: false, msg: 'User or Password is incorrect' })
        const isMatch = await user.matchPassword(password)
        if (!isMatch) return res.status(400).json({ success: false, msg: 'User or Password is incorrect' })
        const token = await user.generateToken()
        res.status(200).cookie('token', token, { expires: new Date(Date.now() + (90 * 24 * 60 * 60000)) }).json({ success: true, user, token })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).cookie('token', null, { expires: new Date(Date.now()), httpOnly: true }).json({ success: true, msg: 'Logged Out' })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const changeRole = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.role = req.body.role
        await user.save()
        res.status(200).json({ success: true, user })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}

export const delUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        await user
        res.status(200).json({ success: true, user })
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, msg: err.msg })
    }
}