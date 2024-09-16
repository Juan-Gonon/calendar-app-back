/**
 * Rutas de Usuario / Auth
 * host + /api/auth
 */
const { Router } = require('express')
const router = Router()
const { createUser, loginUser, revalidateToke } = require('../controllers/auth')

router.post('/', loginUser )

router.post('/new', createUser )

router.get('/renew', revalidateToke )

module.exports = router