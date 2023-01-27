const express = require("express")
const api = express()

api.use(express.json())

let geradorID = 8

//estrutura de dados
let perfis = [
  {
    usuario:{
      email:"jao@email.com",
      senha:"12346"
    },
    id : 1,
    nome: "Jao da Silva",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"maria@email.com",
      senha:"123456"
    },
    id:2,
    nome: "Maria da Silva",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"ze@email.com",
      senha:"12346"
    },
    id:3,
    nome: "Zé Araujo",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"leonardo@email.com",
      senha:"126"
    },
    id:4,
    nome: "Leonardo Fernandes",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"gabriela@email.com",
      senha:"146"
    },
    id:5,
    nome: "Gabriela Feitosa",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"beatriz@email.com",
      senha:"12346"
    },
    id:6,
    nome: "Beatriz de Almeida",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  },
  {
    usuario:{
      email:"felipe@email.com",
      senha:"12346"
    },
    id:7,
    nome: "Felipe Magalhães",
    dataNascimento: "2022-02-14",
    disponibilidadeMudanca:true,
    disponibilidadeHorario: "Integral",
    educacao:[{
      instituicao: "escola 1",
      ingresso:"2012-12-12",
      conclusao: "2012-12-12",
      nivelEscolaridade: "Ensino Médio"    
    }],
    certificacoes:[{
      instituicao:"High Tech Cursos",
      titulo: "Fábrica de programadores",
      cargaHoraria: 80
    }],
    conexoes:[]
  }
]

// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-vindo(a) ao Perfil Profissional API')
})
// Rotas de Perfil
api.get('/perfil', (req, res) => {
  res.json(perfis.length>5 ? perfis.slice(perfis.length - 5) : perfis)
})
api.get('/perfil/:id',(req, res) => {
  let perfilID = req.params.id

  let perfilEncontrado = perfis.find((perfil) => perfil.id == perfilID)
  if(perfilEncontrado) res.json(perfilEncontrado)
  else res.status(400).json({
    message: "Erro ao buscar perfil: perfil não encontrado"
  })
})

api.post('/perfil', (req, res) => {
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
})

api.put('/perfil/:id', (req, res) => {
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
})
api.post('/perfil/conexao', (req, res) => {
  let info = req.body

  if(info.remetente && info.destinatario){
    let remetenteID=info.remetente;
    let destinatarioID= info.destinatario
    let remetente =perfis.find((perfil)=>perfil.id==remetenteID)
    let destinatario=perfis.find((perfil)=>perfil.id==destinatarioID)
      if(remetente && destinatario){
        remetente.conexoes.push(destinatarioID)
        destinatario.conexoes.push(remetenteID)
        res.json({
          message:"Conexão estabelecida com sucesso"
        })
      }else{
        res.json({
          message:"Erro ao definir conexão: Perfil não encontrado"
        })
      }
  }else{
    res.status(400).json({
      message:"Erro ao conectar perfis: Dados incompletos"
    })
  }
})

module.exports = api