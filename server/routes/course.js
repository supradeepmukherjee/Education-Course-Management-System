import { Router } from 'express'
import { createCourse } from '../controllers/course.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/create').post(isAuthenticated, createCourse)

export default router