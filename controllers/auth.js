const { response } = require('express')

const createUser = (req, res = response) => {
    // console.log(req.url)
    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginUser = (req, res = response) => {
    // console.log(req.url)
    res.json({
        ok: true,
        mgs: 'login'
    })
}

const revalidateToke = (req, res = response) => {
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