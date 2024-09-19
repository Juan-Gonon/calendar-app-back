const { request, response } = require('express')
const getEvents = (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'Obtener Eventos'
    })

}

const createEvents = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear eventos'
    })
}

const updateEvents = (req = request, res = response) => {
    const id = req.params.id
    
    res.json({
        ok: true,
        msg: 'update Events',
        id
    })
}

const deleteEvents = (req = request, res = response) => {
    const id = req.params.id
    
    res.json({
        ok: true,
        msg: 'delete Events',
        id
    })
}



module.exports = {
    getEvents, 
    createEvents,
    updateEvents,
    deleteEvents
}