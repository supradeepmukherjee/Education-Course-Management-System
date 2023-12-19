import { Router } from 'express'
import { createLayout, editLayout, getLayout } from '../controllers/course.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/').post(isAuthenticated, createLayout)
router.route('/').put(isAuthenticated, editLayout)
router.route('/').get(isAuthenticated, getLayout)

export default router