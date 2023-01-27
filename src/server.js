const express = require("express")
const perfilRoute=require("./routes/PerfilRoute")
const notificacaoRoute=require("./routes/NotificacaoRoute")

const api = express()

api.use(express.json())
api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)


// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao Perfil Profissional API')
})


module.exports = api