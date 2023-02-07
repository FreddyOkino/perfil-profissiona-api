const perfilModel = require('./../models/Perfil')

module.exports={
   
  
  buscarUltimos:async() => {
    try{
      return await perfilModel.find().sort({_id:-1}).limit(5)
    }catch(error){
      throw{message:error.message, status:500}
    }
  },

 buscarPorId: async(id) => {
   try {
   return await perfilModel.findOne({_id: id})
   }catch (error){
    throw {message: error.message, status:500}
   }
  },
  cadastrar: async (perfil) => {
    try{
      let novoPerfil= await perfilModel.create(perfil)
      novoPerfil.usuario.senha = undefined
      return novoPerfil

    }catch(error){
      throw {message: error.message, status: 500}
    }

  },
  
  editar: async(id, perfil) => {
     try{
      return await perfilModel.updateOne({_id : id}, perfil)
     }catch(error){
      throw{message:error.message,status:500}
     }
  },
 // conectar: (req, res) => {
  //  let info = req.body
  
    //if(info.remetente && info.destinatario){
     // let remetenteID=info.remetente;
      //let destinatarioID= info.destinatario
      //let remetente =dado.perfis.find((perfil)=>perfil.id==remetenteID)
      //let destinatario=dado.perfis.find((perfil)=>perfil.id==destinatarioID)
       // if(remetente && destinatario){
         // remetente.conexoes.push(destinatarioID)
         // destinatario.conexoes.push(remetenteID)
         // res.json({
         //   message:"Conexão estabelecida com sucesso"
        //  })
       // }else{
        //  res.json({
        //    message:"Erro ao definir conexão: Perfil não encontrado"
        //  })
       // }
   // }else{
    //  res.status(400).json({
     //   message:"Erro ao conectar perfis: Dados incompletos"
    //  })
    //}
  ///}
}