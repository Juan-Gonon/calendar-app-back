/**
 * Rutas de Usuario / Auth
 * host + /api/auth
 */
const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const { createUser, loginUser, revalidateToke } = require('../controllers/auth')

router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser 6 caracteres').isLength({ min: 6})
],loginUser )

router.post('/new', [
    // middlewares
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser 6 caracteres').isLength({min: 6})
] , createUser )

router.get('/renew', revalidateToke )

module.exports = router