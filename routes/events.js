// Obtener eventos

/**
 * Event Routes
 *  /api/events
 */

const { Router  } = require('express')
const { check } = require('express-validator')
const { validarJWT } = require('../middlewares/validar-jwt')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate')
const { getEvents, createEvents, updateEvents, deleteEvents } = require('../controllers/events')

const router = Router()
// otra forma de usar customMiddleware para todas estas rutas
router.use(validarJWT)

router.get('/' ,getEvents)
router.post('/', [
    check('title', 'El titulo es obligatorio').notEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos

] ,createEvents)
router.put('/:id' ,updateEvents)
router.delete('/:id' ,deleteEvents)


module.exports = router