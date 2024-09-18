const { response, request } = require('express')
const bcrypt = require('bcryptjs')
const { userModel } = require('../models/Usuario')
const { generarJWT } = require('../helpers/jwt')

const createUser = async (req = request, res = response) => {
    // console.log(req.url)
    const { name, email, password } = req.body
    try {
        let usuario = await userModel.findOne({
            email
        })

        // console.log(usuario);
        if( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese email'
            })
        }
        
        const user = await userModel.create(req.body)
         //Encriptar contraseña
         const salt = bcrypt.genSaltSync()
         user.password = bcrypt.hashSync(password, salt)

         // Saved BD
        await user.save()

        // Generar JWT
        const token = await generarJWT(user.id, user.name)
        // console.log(token);
        
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }
}

const loginUser = async (req = request, res = response) => {
    const { email, password } = req.body

    try {

        let usuario = await userModel.findOne({
            email
        })

        // console.log(usuario);
        if( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        // Confirmar los passwords

        const validPassword = bcrypt.compareSync(password, usuario.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar nuestro JWT
        const token = await generarJWT(usuario.id, usuario.name)

        // res
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message
        })
    }

   
}

const revalidateToke = (req = request, res = response) => {
    // console.log(req.url)
    res.json({
        ok: true,
        msg: 'token'
    })
}


module.exports = {
    createUser,
    loginUser,
    revalidateToke
}