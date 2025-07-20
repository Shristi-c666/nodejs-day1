import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './db/dbconnection.js'
// import connectDB from './db/dbconnection.js'
const app = express()
dotenv.config({})
const PORT = process.env.PORT
connectDB()
const person ={
    name:"hello",
    username:"hello123"
}

app.get('/hello',(req,res)=>{
    res.status(200).json({
        message:person.name,
        success:true
    })
})


app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT} `)
    
})