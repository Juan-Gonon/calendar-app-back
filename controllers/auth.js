const { response, request } = require('express')
const { userModel } = require('../models/Usuario')

const createUser = async (req = request, res = response) => {
    // console.log(req.url)
    // const { name, email, password } = req.body

    const user = await userModel.create(req.body)
    await user.save()
    console.log(user);
    
    res.status(201).json({
        ok: true,
        msg: 'registro'
    })
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