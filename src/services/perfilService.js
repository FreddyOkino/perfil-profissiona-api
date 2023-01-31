const perfilModel = require('./../models/Perfil')

module.exports={
   
  
 // buscarUltimos:(req, res) => {
  //  res.json(dado.perfis.length>5 ? dado.perfis.slice(dado.perfis.length - 5) : dado.perfis)
 // },
 // buscarPorId: (req, res) => {
   // let perfilID = req.params.id
  
  //  let perfilEncontrado = dado.perfis.find((perfil) => perfil.id == perfilID)
  //  if(perfilEncontrado) res.json(perfilEncontrado)
  //  else res.status(400).json({
  //    message: "Erro ao buscar perfil: perfil não encontrado"
  //  })
  //},
  cadastrar: async (perfil) => {
    try{
      let novoPerfil= await perfilModel.create(perfil)
      novoPerfil.usuario.senha = undefined
      return novoPerfil

    }catch(error){
      throw {message: error.message, status: 500}
    }

  },
//  editar: (req, res) => {
  //  let perfilID=req.params.id
   // let perfilEditado = req.body
  
  //  if(perfilEditado){
     
    //  let perfilIndex = dado.perfis.findIndex((perfil)=>perfil.id==perfilID)
      
    //  if (perfilIndex!== -1){
        
    //    let perfilRetorno = dado.perfis[perfilIndex];
    //    perfilEditado.id = perfilID
    //    dado.perfis.splice(perfilIndex,1,perfilEditado)
    //    res.json(perfilEditado)
  
     // }else{
     //   res.json({
      //    message:"Perfil não encontrado"
      //  })
      //}
     // }else{
      //  res.status(400).json({
       //   message:"Erro ao editar perfil: Dados incompletos"
       // })
  
     // }
 // },
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