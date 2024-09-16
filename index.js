const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// dir public
app.use(express.static('public'))

// rutas

// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos


// Escuchar peticiones

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})