 const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
       username:{
        type:String ,
        required: true,
        unique: true
       } ,

       email:{
        type:String ,
        required: true,
        unique :true
       } ,

       password:{
        type:String ,
        required: true
       } ,

       role :{
        type:String ,
        required:true,
         enum:["admin","manager" ,"user"] ,
       }
  },
  
  {
    timestamps:true
  }
)

   const userModel = mongoose.model("usermodels",userSchema)
    module.exports = userModel ;