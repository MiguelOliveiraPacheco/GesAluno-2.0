const express = require('express')
const inserirutilizadorRoute = express.Router()
const connection = require('../dbconnection')

inserirutilizadorRoute.post('/', (request,response) => {
    /*connection.query('SELECT * FROM tipos', (err,result) => {
        if(err){
            console.log('Erro na base de dados...')
        }
        else {
            res.json(result)
        }
    }) */

    console.log(request.body.texto)
    console.log(request.body.data)
    response.json({response:'ok'})

}) 

module.exports = inserirutilizadorRoute