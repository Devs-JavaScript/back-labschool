const express = require('express')
const route = express.Router()
const cors = require('cors')

route.options("*", cors())

//route text

route.get('/text', (req, res)=> {
    res.send("Hello word seja bem vindo a minha API")
    
})


module.exports = route
