const express = require("express");
const router = express.Router()
const {verificar}=require('./../middleware/AutenticacaoMiddleware')
const notificacaoService = require('./../services/NotificacaoService')



// Rotas de Notificação
//router.get ('/:id', verificar, notificacaoService.buscarPorId)
//router.get('/perfil/:id', verificar, notificacaoService.buscarPorPerfilId)
router.post('', verificar, async(req,res)=>{
    const resposta = await notificacaoService.cadastrar(req.body)
    res.json(resposta)
} )
//router.put('/lida/:id',verificar, notificacaoService.marcarlida)


module.exports = router