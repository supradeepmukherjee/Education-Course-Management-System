import { Router } from 'express'
import { apiKey, processPayment } from '../controllers/payment.js'
import isAuthenticated from '../middlewares/auth.js'

const router = Router()

router.route('/key').get(apiKey)
router.route('/processpayment').post(isAuthenticated, processPayment)

export default router