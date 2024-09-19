const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./DB/config')

const app = express()
const port = process.env.PORT

dbConnection()

// CORS
app.use(cors())

// dir public
app.use(express.static('public'))

// Lectura y parse del body
app.use(express.json())

// rutas

// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos


// Escuchar peticiones

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})