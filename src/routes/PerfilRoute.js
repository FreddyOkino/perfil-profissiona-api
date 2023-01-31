const express = require("express");
const router = express.Router()
const {verificar} = require('./../middleware/AutenticacaoMiddleware')
const perfilService = require('./../services/perfilService')



// Rotas de Perfil
//router.get ('', perfilService.buscarUltimos)
//router.get('/:id',perfilService.buscarPorId)
router.post('',async(req,res)=> {
    const resposta = await perfilService.cadastrar(req.body)
    res.json(resposta)
}
)
    
//router.put('/:id',verificar, perfilService.editar)
//router.post('/conexao', verificar, perfilService.conectar)

module.exports = router