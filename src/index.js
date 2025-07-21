import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './db/dbconnection.js'
import User from './models/user.model.js'
import userRouter from './routes/user.js'
import cors from 'cors'
// import connectDB from './db/dbconnection.js'
const app = express()
app.use(cors(
))


app.use(express.json())
dotenv.config({})
const PORT = process.env.PORT

const person ={
    name:"hello",
    username:"hello123"
}

app.get('/person',(req,res)=>{
    res.status(200).json({
        message:"ative",
        data:person,
        success:true,
    })
})

app.use("/api/user",userRouter)



app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT} `)
    connectDB()
})