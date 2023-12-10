import { Router } from 'express'
import { notifications, updateNotificationStatus } from '../controllers/notification.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/').get(isAuthenticated, notifications)
router.route('/:id').put(isAuthenticated, updateNotificationStatus)

export default router