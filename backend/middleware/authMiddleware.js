//  const jwt = require("jsonwebtoken")

//   const verifyToken =(req ,res,next )=>{
//   let token ;
//    let authHeader =  req.headers.Authorization || req.headers.authorization

//   if(authHeader && authHeader.startsWith("Bearer")){

//     token =authHeader.split(" ")[1];
//     if(!token){
//         return res.status(401).json({
//            message :"NO token Authorizations denied "
//         })
//     }

//   try {
//      const decode =jwt.verify(token ,process.env. JWT_SCRETE)
//      req.user = decode
//        console.log(" decode user is : " , req.user);
//        next()
       
//   } catch (error) {
//      res.status(400).json({
//         message :"token is not valid" 
//      })
//   }

//   }
//    else{
//      res.status(400).json({
//         message :"token is not valid" 
//      })

//    }
//   }

//    module.exports =verifyToken


const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{

   const token = req.cookies.token

   if(!token){
      return res.status(401).json({
         message:"No token provided"
      })
   }

   try{

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = decoded

      next()

   }catch(err){

      res.status(401).json({
         message:"Invalid token"
      })

   }
}

module.exports = verifyToken