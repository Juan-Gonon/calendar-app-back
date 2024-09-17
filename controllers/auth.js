const { response, request } = require('express')
const { userModel } = require('../models/Usuario')

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
        await user.save()
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        })
    }
}

const loginUser = (req = request, res = response) => {
    const { email, password } = req.body

    res.json({
        ok: true,
        mgs: 'login',
        email,
        password
    })
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