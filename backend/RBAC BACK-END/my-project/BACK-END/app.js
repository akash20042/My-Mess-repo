 const  express =  require("express")
 const app =express();
 const cors = require("cors")
 const dotenv = require('dotenv').config()
const connctToDB =require("./config/db.js")
 const authRouter = require("./routes/authRouter.js")
connctToDB()
 const cookieParcer = require("cookie-parser")
  const userRouter = require("./routes/userRoutes.js")
 

// middleware 
app.use(cors({
  origin:"http://localhost:4200",
  credentials:true
}))
app.use(express.json())
app.use(cookieParcer())
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)




// routes 


const PORT =process.env.PORT ||3000
app.listen(PORT ,()=>{
    console.log(` server is running at port ${PORT}`);
    
  })

