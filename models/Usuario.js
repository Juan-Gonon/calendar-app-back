const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const userModel = model('Usuario', usuarioSchema)

module.exports = {
    userModel
}