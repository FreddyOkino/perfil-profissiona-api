const notificacaoModel = require('./../models/Notificacao')

module.exports = {
buscarPorId: async(id) => {
  try{
    return await notificacaoModel.findOne({_id : id})
  }catch(error){
    throw{mensagem:error.message,status:500}
  }
},
    
buscarPorPerfilId: async (perfilId) => {
  try {
    return await notificacaoModel.find({$or:[{remetente : perfilId},{destinatario : perfilId}]})
  } catch (error) {
    throw{mensagem : error.message, status:500}
  }
},
    
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