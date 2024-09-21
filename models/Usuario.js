const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = model('Usuario', usuarioSchema)

module.exports = {
    userModel
}