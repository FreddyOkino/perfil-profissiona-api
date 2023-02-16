const bcrypt = require('bcrypt')
const perfilModel = require('./../models/Perfil')
module.exports={
    autenticar :async (usuario)=>{
        try {
            if(usuario.email){
                let perfilEncontrado = await perfilModel.findOne({
                    "usuario.email":usuario.email
                }).select("+usuario.senha").exec()
                // console.log(JSON.stringify("PERFIL_ENCONTRADO:" +perfilEncontrado))

                     if(perfilEncontrado){
                       const match = await bcrypt.compare(usuario.senha, perfilEncontrado.usuario.senha)
                       if(match){
                        //devolver o token + o id do perfil + email
                        return{
                            token:"fabricadeprogramadores",
                            email: perfilEncontrado.usuario.email,
                            perfil: perfilEncontrado._id
                        }
                       }else{
                        
                        throw{
                            status:200,
                            message:'Erro ao efetuar logim: Credenciais inválidas'
                        }
                       }
                    }else{
                        throw{
                            status:200,
                            message:'Erro ao efetuar logim: Credenciais inválidas'
                        }
                    }
    
            }else{
                throw({
                    status:400,
                    message:"Erro ao efetuar login: faltando credenciais"
                })
        
        } 
            
        } catch (error) {
            console.log(`ERRO: ${error.message}`);
           throw error
        }
        
}}