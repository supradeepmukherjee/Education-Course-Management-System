import { Router } from 'express'
import { createCourse, singleCourse, updateCourse, allCourses, accessCourse, ask, review } from '../controllers/course.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/create').post(isAuthenticated, createCourse)
router.route('/edit/:id').put(isAuthenticated, updateCourse)
router.route('/:id').get(singleCourse)
router.route('/').get(allCourses)
router.route('/access/:id').get(isAuthenticated, accessCourse)
router.route('/ask/:id').post(isAuthenticated, ask)
router.route('/review/:id').post(isAuthenticated, review)

export default router