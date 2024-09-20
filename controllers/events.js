const { request, response } = require('express')
const { eventModel } = require('../models/Evento')

const getEvents = async (req = request, res = response) => {

    const eventos = await eventModel.find().populate('user', 'name')

    res.json({
        ok: true,
        eventos
    })

}

const createEvents = async (req = request, res = response) => {

    try {
        const body = req.body
        body.user = req.uid
        const evento = await eventModel.create(body)
        await evento.save()

        res.json({
            ok: true,
            evento
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrado'
        })
    }

    // console.log(req.body)
 
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