import { Router } from 'express'
import {  } from '../controllers/user.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/logout').post(isAuthenticated, )

export default router