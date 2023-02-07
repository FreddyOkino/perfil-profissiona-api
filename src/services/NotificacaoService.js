const notificacaoModel = require('./../models/Notificacao')
let geradorID = 4 
let notificacoes = [
    {
        id:1,
        tipo: "Contato",
        titulo: "Notificacao1",
        descrição: "Esta é a mensagem de número 1",
        lida: false,
        remetente: 2,
        destinatario:3
    },
    {
        id: 2,
        tipo: "Solicitação de amizade",
        titulo: "Notificacao2",
        descrição: "Esta é a mensagem de número 2",
        lida: false,
        remetente: 3,
        destinatario:4
    },
    {
        id:3,
        tipo: "Contato",
        titulo: "Notificacao3",
        descrição: "Esta é a mensagem de número 3",
        lida: false,
        remetente: 4,
        destinatario:5
    }
]
module.exports = {
//buscarPorId:(req, res) => {
//  let notificacaoId = req.params.id;
//  let notificacaoEncontrada = notificacoes.find((notificacao)=>notificacao.id==notificacaoId)
//  if(notificacaoEncontrada){
//    res.json(notificacaoEncontrada)
//  }else{
//    res.json({
//    message:"Erro ao buscar notificação : Objeto não econtrado"
//    })
//  }
//},
    
//buscarPorPerfilId: (req, res) => {
//  let perfilID= req.params.id
//  let notificaoEncontrado = notificacoes.filter((notificacao) => notificacao.remetente == perfilID || notificacao.destinatario == perfilID )
//    if(notificaoEncontrado) res.json(notificaoEncontrado)
//    else{
//      res.json({
//      message :'Erro ao buscar notificação: Objeto nã encontrado'
//    })
//    }
//    
//      
//    },
    
cadastrar:async (notificacao) => {
      try {
        return await notificacaoModel.create(notificacao)
      } catch (error) {
        throw{message : error.message, status:500}
      }
    },

//marcarlida: (req, res) => {
//      let notificacaoID = req.params.id
//         
//      let notificacaoEncontrada = notificacoes.find((notificacao)=>notificacao.id==notificacaoID)
//        if(notificacaoEncontrada){
//          notificacaoEncontrada.lida=true
//          res.json({
//            message:"mensagem marcada como lida"
//          })
//        }else{
//          res.json({
//            message:"Erros ao marcar notificação como lida"
//          })
//        }
//        
//    },
//    
    
  }