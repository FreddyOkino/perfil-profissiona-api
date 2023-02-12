const express = require("express")
const perfilRoute=require("./routes/PerfilRoute")
const notificacaoRoute=require("./routes/NotificacaoRoute")
const loginRoute = require('./routes/LoginRoute')


require('dotenv').config()
const correntEnv= process.env
const api = express()
const db =require('mongoose')
const { default: mongoose } = require("mongoose")

db.connect(`${correntEnv.DB_PROTOCOL}://${correntEnv.DB_USER}:${correntEnv.DB_PASSWORD}@${correntEnv.DB_HOST}/${correntEnv.DB_NAME}?retryWrites=true&w=majority`)

api.use(express.json())
api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)




// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao Perfil Profissional API')
})


module.exports = api