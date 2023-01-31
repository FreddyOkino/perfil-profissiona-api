module.exports = {
    verificarToken: (request)=>{
        let token = request.headers["token"]
        if(!token){

            return{
                autirozado:false,
                message:"Erro ao acessar login: token não informado"
            }
        }else{
            if(token=="fabricadeprogramador"){

                return{
                    autirozado:true,
                    message:""
                } 
            }else{
                return{
                    autirozado:false,
                    message:"Token inválido"
                }
            }
        }
    }

}


