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
buscarPorId: async(id) => {
  try{
    return await notificacaoModel.findOne({_id : id})
  }catch(error){
    throw{mensagem:error.message,status:500}
  }
},
    
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
        throw{mensagem : error.message, status:500}
      }
    },

marcarlida: async(id) => {
  try {
    let notificacaoLida = await notificacaoModel.findOne({_id : id})
    notificacaoLida.lida=true
    return  await notificacaoModel.updateOne({_id : id}, notificacaoLida)
    
    
  } catch (error) {
    throw{mensagem : error.message, status:500}
  }
    
    
  }
}