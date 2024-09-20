const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, // sera referencia
        ref: 'Usuario',
        required: true
    }
})

const eventModel = model('Evento', eventSchema)

module.exports = {
    eventModel
}