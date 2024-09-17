const { response, request } = require('express')
const { validationResult} = require('express-validator')

const createUser = (req = request, res = response) => {
    // console.log(req.url)
    const { name, email, password } = req.body

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
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