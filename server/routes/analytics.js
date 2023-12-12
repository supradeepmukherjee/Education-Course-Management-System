import { Router } from 'express'
import { courses, orders, users } from '../controllers/analytics.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/users').get(isAuthenticated, users)
router.route('/courses').get(isAuthenticated, courses)
router.route('/orders').get(isAuthenticated, orders)

export default router