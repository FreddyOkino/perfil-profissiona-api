const express = require("express");
const router = express.Router()
const loginService = require('./../services/LoginService')




// Rotas de Notificação

router.put('', loginService.autenticar)


module.exports = router