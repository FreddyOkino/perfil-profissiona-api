const mongoose= require('mongoose')
require('dotenv').config()
const correntEnv= process.env

const URI=`${correntEnv.DB_PROTOCOL}://${correntEnv.DB_USER}:${correntEnv.DB_PASSWORD}@${correntEnv.DB_HOST}/${correntEnv.DB_NAME}?retryWrites=true&w=majority`
    
let db

module.exports={
    connect: async () => {
        db= await mongoose.connect(URI)
        console.log("Conexão com o banco de dados estabelecida com sucesso")
    },
    getDB: ()=>{
        return db
    }
}

