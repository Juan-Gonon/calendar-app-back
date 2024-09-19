const { Schema, model } = require('mongoose')

const eventSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectIdb, // sera referencia
        ref: 'Usuario'
    }
})

const userModel = model('Evento', eventSchema)

module.exports = {
    userModel
}