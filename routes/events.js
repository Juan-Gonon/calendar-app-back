// Obtener eventos

/**
 * Event Routes
 *  /api/events
 */

const { Router  } = require('express')
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEvents, createEvents, updateEvents, deleteEvents } = require('../controllers/events')

const router = Router()
// otra forma de usar customMiddleware para todas estas rutas
router.use(validarJWT)

router.get('/' ,getEvents)
router.post('/' ,createEvents)
router.put('/:id' ,updateEvents)
router.delete('/:id' ,deleteEvents)


module.exports = router