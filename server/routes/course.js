import { Router } from 'express'
import { createCourse, singleCourse, updateCourse, allCourses } from '../controllers/course.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/create').post(isAuthenticated, createCourse)
router.route('/edit/:id').put(isAuthenticated, updateCourse)
router.route('/:id').get(singleCourse)
router.route('/').get(allCourses)

export default router