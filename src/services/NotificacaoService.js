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
    buscarPorId:(req, res) => {
      let notificacaoId = req.params.id;
      let notificacaoEncontrada = notificacoes.find((notificacao)=>notificacao.id==notificacaoId)
      if(notificacaoEncontrada){
        res.json(notificacaoEncontrada)
      }else{
        res.json({
            message:"Erro ao buscar notificação : Objeto não econtrado"
        })
      }
    },
    
    buscarPorPerfilId: (req, res) => {
      let perfilID = req.params.id
    
      let notificaoEncontrado = notificacoes.filter((notificacao) => notificacao.remetente == perfilID || notificacao.destinatario == perfilID )
      if(notificaoEncontrado) res.json(notificaoEncontrado)
      else res.status(400).json({
        message: "Erro ao buscar perfil: notificação não encontrada"
      })
    },
    
    cadastrar: (req, res) => {
      let novoPerfil = req.body
    
      console.log(novoPerfil)
      if(novoPerfil){
    
        novoPerfil.id = geradorID
        perfis.push(novoPerfil)
        geradorID++
    
        res.json(novoPerfil)
      }else{
        res.status(400).json({
          message:"Erro ao cadastra um novo perfil: Dados incompletos"
        })
      }
    },
    marcarlida: (req, res) => {
      let perfilID=req.params.id
      let perfilEditado = req.body
    
      if(perfilEditado){
       
        let perfilIndex = perfis.findIndex((perfil)=>perfil.id==perfilID)
        
        if (perfilIndex!== -1){
          
          let perfilRetorno = perfis[perfilIndex];
          perfilEditado.id = perfilID
          perfis.splice(perfilIndex,1,perfilEditado)
          res.json(perfilEditado)
    
        }else{
          res.json({
            message:"Perfil não encontrado"
          })
        }
        }else{
          res.status(400).json({
            message:"Erro ao editar perfil: Dados incompletos"
          })
    
        }
    },
    
    
  }