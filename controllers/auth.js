const { response, request } = require('express')
const { userModel } = require('../models/Usuario')

const createUser = async (req = request, res = response) => {
    // console.log(req.url)
    // const { name, email, password } = req.body
    try {
        const user = await userModel.create(req.body)
        await user.save()
        
        res.status(201).json({
            ok: true,
            msg: 'registro'
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