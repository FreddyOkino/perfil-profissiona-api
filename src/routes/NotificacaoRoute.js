const express = require("express");
const router = express.Router()
const {verificar}=require('./../middleware/AutenticacaoMiddleware')
const notificacaoService = require('./../services/NotificacaoService')



// Rotas de Notificação
router.get ('/:id', verificar, notificacaoService.buscarPorId)
router.get('/perfil/:id', verificar, notificacaoService.buscarPorPerfilId)
router.post('', verificar, notificacaoService.cadastrar)
router.put('/lida/:id',verificar, notificacaoService.marcarlida)


module.exports = router