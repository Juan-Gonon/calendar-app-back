const { response, request } = require('express')

const createUser = (req = request, res = response) => {
    // console.log(req.url)
    const { name, email, password } = req.body

    if( name.length < 5){
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser de 5 letras'
        })
    }
    res.json({
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