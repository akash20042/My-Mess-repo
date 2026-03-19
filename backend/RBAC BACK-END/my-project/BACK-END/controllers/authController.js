  const userModel =require("../models/userModel.js")
  const bcrypt =require("bcryptjs");
  const jwt =require("jsonwebtoken")


 const register = async (req ,res)=>{

    try {
 const { username ,email ,password,role } = req.body
 console.log(req.body);
 
  const userExist = await userModel.findOne({
    username:username
  })
if(userExist){
              return res.json({
              success:false ,
              message:"user is already register "
                             })
 }
const hashedPassword = await bcrypt.hash(password ,10)
const newUser =  new userModel({
             username ,
             email,
             password:hashedPassword ,
             role
           })                                

       await newUser.save()

       res.status(200).json({
        success:true ,
        message:" user is registered successfullly" ,
        data:newUser
       })

         } catch (error) {
            console.log(error);
            res.status(500).json({
                success:false,
                message:" internal server error"
            })     
        
    }


 }




 const login = async (req ,res)=>{
 try {
 const{ username ,password} = req.body;

if(!username|| !password){
   res.status(404).json({
    success:false,
    message:" wrong credentials"
   })
}
  const User = await userModel.findOne({
       username :username
  })
    if(!User){
        return  res.status(400).json({
            success:false,
            message: "Invalid Credemtials"
         })
    }
     isMatch =  await bcrypt.compare(password ,User.password)
     if(!isMatch){
        return  res.status(400).json({
            success:false,
            message:"InValid Credentials"
         })
     }

    const token = jwt.sign({
        id:User._id,
        role:User.role
    }, process.env.JWT_SCRETE  ,
  {
    expiresIn:"1h"
  })  

     res.cookie('token', token)

     res.status(200).json({
        success:true,
        message:' User is login successfully' ,
        data:User,
        token
     })

    
 } catch (error) {
     console.log(error);
            res.status(500).json({
                success:false,
                message:" internal server error"
         })
    
 }
  }




  


module.exports ={
    register ,
    login
}