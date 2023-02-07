const express = require("express")
const perfilRoute=require("./routes/PerfilRoute")
const notificacaoRoute=require("./routes/NotificacaoRoute")
const loginRoute = require('./routes/LoginRoute')



const api = express()
const db =require('mongoose')
const { default: mongoose } = require("mongoose")

db.connect('mongodb+srv://hightechpro:perfilprofissional1@cluster0.qyehqdn.mongodb.net/perfil-profissional?retryWrites=true&w=majority')

api.use(express.json())
api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)




// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao Perfil Profissional API')
})


module.exports = api