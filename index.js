const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// dir public
app.use(express.static('public'))

// rutas

// app.get('/', (req, res) => {
//     // console.log(req.url)
//     res.json({
//         ok: true
//     })
// })


// Escuchar peticiones

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})