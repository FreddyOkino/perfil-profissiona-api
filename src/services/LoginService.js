const bcrypt = require('bcrypt')
const perfilModel = require('./../models/Perfil')
const tokenUtil = require('./../utils/TokenUtil')
module.exports={
    autenticar :async (usuario)=>{
        try {
            if(usuario.email){
                let perfilEncontrado = await perfilModel.findOne({
                    "usuario.email":usuario.email
                }).select("+usuario.senha").exec()
                
                    console.log(perfilEncontrado)
                     if(perfilEncontrado){
                       const match = await bcrypt.compare(usuario.senha, perfilEncontrado.usuario.senha)
                       if(match){
                        //devolver o token + o id do perfil + email
                        const token =tokenUtil.gerarToken(JSON.stringify(perfilEncontrado.usuario))
                        return{
                            token: token,
                            email: perfilEncontrado.usuario.email,
                            perfil: perfilEncontrado._id,
                            nome: perfilEncontrado.nome,
                            
                        }
                       }else{
                        
                        throw{
                            status:400,
                            message:'Erro ao efetuar login: Credenciais inválidas'
                        }
                       }
                    }else{
                        throw{
                            status:400,
                            message:'Erro ao efetuar login: Credenciais inválidas'
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