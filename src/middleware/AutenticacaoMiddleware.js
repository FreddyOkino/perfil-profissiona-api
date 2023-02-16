const tokenUtil =require('./../utils/TokenUtil')
module.exports = {
    verificar: (req,res,next)=>{
       const token = req.headers.token
       if(!token){
        res.status(401).json({
            message:"Autenticação necessária"
        })
       }else next
    }
}