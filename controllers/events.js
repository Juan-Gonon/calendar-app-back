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

const updateEvents = async (req = request, res = response) => {
    const id = req.params.id
    const uid = req.uid

    try {
        const evento = await eventModel.findById(id)

        // console.log(evento);
        // console.log(uid)
        if( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if( evento.user.toString() !== uid){
            return res.status(401).json({ // no autorizado código 401
                ok: false,
                msg: 'No tiene privilegios de editar este evento'
            })
        }
        
        const newEvent = {
            ...req.body,
            user: uid
        }
        
        const eventUpdated = await eventModel.findByIdAndUpdate(id, newEvent, { new: true })

        res.json({
            ok: true,
            evento: eventUpdated
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador!!'
        })
    }
}

const deleteEvents = async (req = request, res = response) => {
    const id = req.params.id
    const uid = req.uid

    try {
        const evento = await eventModel.findById(id)

        // console.log(evento);
        // console.log(uid)
        if( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if( evento.user.toString() !== uid){
            return res.status(401).json({ // no autorizado código 401
                ok: false,
                msg: 'No tiene privilegios de editar este evento'
            })
        }
        
       
        
        await eventModel.findByIdAndDelete(id)

        res.json({
            ok: true
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador!!'
        })
    }
}



module.exports = {
    getEvents, 
    createEvents,
    updateEvents,
    deleteEvents
}