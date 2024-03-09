import app from './app.js';
import { createServer } from 'node:http'
import { connectDatabase } from './config/db.js'
import cloud from 'cloudinary'
import { Server } from 'socket.io'

const server = createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:3000" } })

cloud.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
})

connectDatabase()

io.on('connection', socket => {
    console.log('a user connected')
    socket.on('notification', data => { // listen notification from FE
        io.emit('new notification', data) // broadcast notification data to all connected clients(dashboard)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(process.env.PORT, () => console.log(process.env.PORT))