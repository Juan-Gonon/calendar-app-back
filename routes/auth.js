/**
 * Rutas de Usuario / Auth
 * host + /api/auth
 */
const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const router = Router()
const { createUser, loginUser, revalidateToke } = require('../controllers/auth')

router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser 6 caracteres').isLength({ min: 6}),
    validarCampos
],loginUser )

router.post('/new', [
    // middlewares
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser 6 caracteres').isLength({min: 6}),
    validarCampos
] , createUser )

router.get('/renew', revalidateToke )

module.exports = router