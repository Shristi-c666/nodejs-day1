import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './db/dbconnection.js'
import User from './models/user.model.js'
import userRouter from './routes/user.js'
// import connectDB from './db/dbconnection.js'
const app = express()
app.use(express.json())
dotenv.config({})
const PORT = process.env.PORT
connectDB()
// const person ={
//     name:"hello",
//     username:"hello123"
// }

app.get('/health',(req,res)=>{
    res.status(200).json({
        message:"ative"
    })
})

app.use("/api/v1",userRouter)


app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT} `)
    
})