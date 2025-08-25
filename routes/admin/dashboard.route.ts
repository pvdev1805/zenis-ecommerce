import { Router } from 'express'
import * as dashboardController from '../../controllers/admin/dashboard.controller'

const router = Router()

router.get('/', dashboardController.dashboard)

export default router
