 const express = require("express")
  const router = express.Router()
   const  verifyToken = require("../middleware/authMiddleware.js")
 const authorizerole = require("../middleware/roleMiddleware.js")
//  only  admin can access  

router.get("/admin", verifyToken , authorizerole ("admin"),(req,res)=>{
    res.json({message :" welcome to the admin routes"})
})

// only admin and mamanger can access this routes 

router.get("/manager",  verifyToken ,authorizerole ("admin","manager") ,(req,res)=>{
    res.json({message :" welcome to the manager routes"})
})

// all can access this 

router.get("/user" , authorizerole ("admin","manager","user"),(req,res)=>{
    res.json({message :" welcome to the user routes"})
})


 module.exports =router ;