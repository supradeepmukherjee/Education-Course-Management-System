import express, { json, urlencoded, static as expressStatic } from 'express'
// import { join, resolve } from 'path'
// import { getGlobals } from 'common-es'
// const { __dirname } = getGlobals(import.meta.url)
import cors from 'cors'
import cp from 'cookie-parser'
import dotenv from 'dotenv'
import user from './routes/user.js'
import course from './routes/course.js'
import order from './routes/order.js'
import notification from './routes/notification.js'
import analytics from './routes/analytics.js'
import layout from './routes/layout.js'
const app = express()

if (process.env.NODE_ENV !== 'production') dotenv.config({ path: './config/.env' })

app.use(cors())

app.use(json({ limit: '50mb' }))
app.use(urlencoded({ limit: '50mb', extended: true }))
app.use(cp())

app.use('/api/user', user)
app.use('/api/course', course)
app.use('/api/order', order)
app.use('/api/notification', notification)
app.use('/api/analytics', analytics)
app.use('/api/analytics', analytics)
app.use('/api/layout', layout)

// if (process.env.NODE_ENV === 'production') {
//     app.use(expressStatic(join(__dirname, '../client/build')))
//     app.get('*', (req, res) => res.sendFile(resolve(__dirname, "../client/build/index.html")))
// }

export default app