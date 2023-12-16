import { Router } from 'express'
import { createLayout } from '../controllers/course.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/').post(isAuthenticated, createLayout)

export default router