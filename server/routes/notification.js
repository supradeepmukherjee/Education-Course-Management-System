import { Router } from 'express'
import {  } from '../controllers/notification.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/').post(isAuthenticated, )

export default router