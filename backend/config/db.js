 const mongoose = require("mongoose")

   connctToDB = async ()=>{
     try {
      const connect = await  mongoose.connect(process.env.MONGO_URI) ;
       console.log(" server is connected to the db ");
       

     } catch (error) {
         console.log(error);
         process.exit(1)
         
     }

   }
module.exports =connctToDB