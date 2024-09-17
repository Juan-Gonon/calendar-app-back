const mongoose = require('mongoose')
require('dotenv/config')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.MONGO_DB_NAME
        })

        console.log('DB Online')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en conexión al inicializar BD')
        
    }
}


module.exports = {
    dbConnection
}