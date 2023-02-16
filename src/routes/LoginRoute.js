const express = require("express");
const router = express.Router()
const loginService = require('./../services/LoginService')




// Rotas de Notificação

router.post('',async(req,res)=>{
    try {
        const resposta = await loginService.autenticar(req.body)
        res.json(resposta)
        
    } catch (error) {
        
        res.status(error.status).json({
            message: error.message
        })
    }

} )


module.exports = router