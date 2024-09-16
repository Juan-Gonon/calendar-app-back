const express = require('express')

const app = express()
const port = 4000

// rutas

app.get('/', (req, res) => {
    console.log(req.url)
    res.json({
        ok: true
    })
})


// Escuchar peticiones

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})